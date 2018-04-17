<?php

namespace App\Cryosoft;

use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\ProductElmt;
use App\Models\InitialTemperature;

class ProductElementsService
{
    /**
     * @var Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    protected $app;

    protected $value;

    /**
     * @var App\Cryosoft\ProductService
     */
    protected $products;

    /**
     * @var App\Cryosoft\UnitsService
     */
    protected $units;

    public function __construct(\Laravel\Lumen\Application $app)
    {
        $this->app = $app;
        $this->auth = app('Illuminate\\Contracts\\Auth\\Factory');
        $this->value = app('App\\Cryosoft\\ValueListService');
        $this->units = app('App\\Cryosoft\\UnitsConverterService');
        $this->products = app('App\\Cryosoft\\ProductService');
    }

    /**
     * @return array // double
     */
    public function searchTempMeshPoint(ProductElmt &$productElmt, $pointMeshOrder2 = null)
    {
        // ArrayList < Double > listtemp = new ArrayList < Double > ();
        $listtemp = [];
        $meshPositions = [];
        try {
            //search the mesh2 order point
            if ($pointMeshOrder2 == null) {
                $res = $this->products->searchNbPtforElmt($productElmt, 2);
                $pointMeshOrder2 = $res['points'];
                $meshPositions = $res['positions'];
            }
            if (count ($pointMeshOrder2) == 0) {
                return null;
            }
            // put the array in String
            // StringBuffer sb = new StringBuffer();
            // while (iter . hasNext()) {
            //     Short s = iter . next();
            //     sb . append(String . valueOf(s));
            //     sb . append(",");
            // }
            // sb . deleteCharAt(sb . length() - 1);
            // $pointOrder2 = implode(',', $pointMeshOrder2);
            //============
            // String idProduction = String . valueOf(productbean . production . getIdProduction());
            // Transaction tx = dbmgr . getTransaction();
            // query = new UnnamedSQLQuery("SELECT initial_temperature.INITIAL_T  FROM "
            //     + CryosoftDB . CRYOSOFT_DB_SCHEMAQUERY
            //     + "initial_temperature WHERE ID_PRODUCTION = " + idProduction
            //     + " AND MESH_2_ORDER IN (" + pointOrder2 + " ) AND (MESH_1_ORDER=0 AND MESH_3_ORDER=0)	ORDER BY MESH_2_ORDER ", "", "F");
            // tx . executeQuery(query);
            $idProduction = $productElmt->product->study->ID_PRODUCTION;
            $it = InitialTemperature::where('ID_PRODUCTION', $idProduction)->whereIn('MESH_2_ORDER', $pointMeshOrder2)
                ->where('MESH_1_ORDER', 0)->where('MESH_3_ORDER', 0)->orderBy('MESH_2_ORDER')->get();
            // Iterator < QueryResult > it = query . getIterator();
            // while (it . hasNext()) {
            //     QueryResult qr = (QueryResult) it . next();
            //     Double dtemp = new Double(qr . getFloat());
            //     String data = convert . prodTemperature(dtemp . doubleValue());
            //     dtemp = new Double(convert . convertToDouble(data));
            //     listtemp . add(dtemp);
            // }
            foreach ($it as $temp) {
                $data = $this->units->prodTemperature($temp->INITIAL_T);
                array_push($listtemp, $data);
            }
        } catch (\Exception $e) {
            // log . error("Unexpected exception  search datatbase", e);
        }
        return compact('listtemp', 'meshPositions');
    }

    public function PropagationTempProdElmtIso ($pb, /*boolean*/ $b3D)
    {
        $pe = \App\Models\ProductElmt::find($pb['ID_PRODUCT_ELMT']);
        $product = \App\Models\Product::find($pb['ID_PROD']);
        $study = $product->study;
        $prodMeshgene = $product->meshGenerations()->first();
        // log . debug("PropagationTempProdElmtIso / 3D?:" + b3D);
        
        // search nb point in axe X Z
        $nbPointaxe1 = 1;
        $nbPointaxe2 = 1;
        $nbPointaxe3 = 1;
        if ($b3D) {
            $nbPointaxe1 = $prodMeshgene->MESH_1_NB;
            $nbPointaxe3 = $prodMeshgene->MESH_3_NB;
            switch (intval($pb['ID_SHAPE'])) {
                case $this->value->SLAB:
                case $this->value->SPHERE:
                    $nbPointaxe1 = $nbPointaxe3 = 1;
                    break;
                case $this->value->CYLINDER_STANDING:
                case $this->value->CYLINDER_CONCENTRIC_LAYING:
                case $this->value->CYLINDER_LAYING:
                case $this->value->CYLINDER_CONCENTRIC_STANDING:
                    $nbPointaxe3 = 1;
                    break;
                case $this->value->PARALLELEPIPED_STANDING:
                case $this->value->PARALLELEPIPED_BREADED:
                case $this->value->PARALLELEPIPED_LAYING:
                    break;
            }
        }
        
        //search meshpoints on axis 2
        $pointMeshOrder2 = $this->products->searchNbPtforElmt($pe, $this->value->MESH_AXIS_2);

        
        // pb . pointMeshOrder2 = pointMeshOrder2;
        $nbPointaxe2 = count($pointMeshOrder2);
        
        /*double */$lfTemp = floatval( $this->units->prodTemperature(floatval( $pb['initTemp'][0] ) ) );
        
        // short i, j, k;
        $i = $j = $k = 0;

        // /*list < InitialTemperature > */$listTemp = [];//new ArrayList < InitialTemperature > ();
        /*InitialTemperature */$listTemp = [];

        for ($j = 0; $j < $nbPointaxe2; $j ++) {
            // $s = (Short) pb . pointMeshOrder2 . get(j);// recup
            $meshOrderaxe2 = $pointMeshOrder2[$j];

            for ($i = 0; $i < $nbPointaxe1; $i ++) {
                for ($k = 0; $k < $nbPointaxe3; $k ++) {
                    $temp = new InitialTemperature();
                    $temp->ID_PRODUCTION = $study->ID_PRODUCTION;
                    $temp->MESH_1_ORDER = ($i);
                    $temp->MESH_2_ORDER = ($meshOrderaxe2);
                    $temp->MESH_3_ORDER = ($k);
                    $temp->INITIAL_T = ($lfTemp);
                    // $temp->save();
                    // add in initial list
                    // listTemp . add(temp);
                    array_push($listTemp, $temp->toArray());
                } // for axis 3
            } // for axis 1
        } // for axis 2
        
        // save temperature inDB 
        // DBInitialTemperature . insertList(listTemp);
        $slices = array_chunk($listTemp, 100);
        foreach ($slices as $slice) {
            InitialTemperature::insert($slice);
        }
    }

    public function PropagationTempProdElmtIsoForBreaded ($pb)
    {
        $pe = \App\Models\ProductElmt::find($pb['ID_PRODUCT_ELMT']);
        $product = \App\Models\Product::find($pb['ID_PROD']);
        $study = $product->study;
        $prodMeshgene = $product->meshGenerations()->first();
        // log . debug("PropagationTempProdElmtIso for BREADED");
        if ($pe->ID_SHAPE != $this->value->PARALLELEPIPED_BREADED) {
            $this->PropagationTempProdElmtIso($pb, true);
        } else {
            $lfTemp = 0;
            
            // search nb point in axe 1, 2, 3
            $nbPointaxe1 = 1;
            $nbPointaxe2 = 1;
            $nbPointaxe3 = 1;

            $firstMesh1 = 0;
            $firstMesh2 = 0;
            $firstMesh3 = 0;
            $lastMesh1 = 0;
            $lastMesh2 = 0;
            $lastMesh3 = 0;

            $firstIntNode1 = 0;
            $lastIntNode1 = 0;

            $firstIntNode2 = 0;
            $lastIntNode2 = 0;

            $firstIntNode3 = 0;
            $lastIntNode3 = 0;

            $i = $j = $k = 0;
            
            //search meshpoints on axis 2
            $pointMeshOrder1 = $this->products->searchNbPtforElmt($pe, $this->value->MESH_AXIS_1);
            $pointMeshOrder2 = $this->products->searchNbPtforElmt($pe, $this->value->MESH_AXIS_2);
            $pointMeshOrder3 = $this->products->searchNbPtforElmt($pe, $this->value->MESH_AXIS_3);
            
            // get the first and last nodes of the internal product
            $nbPointaxe1 = count($pointMeshOrder1);
            $nbPointaxe2 = count($pointMeshOrder2);
            $nbPointaxe3 = count($pointMeshOrder3);
            $first = $last = 0;
            for ($i = 1; $i < $nbPointaxe1; $i ++) {
                $last = $pointMeshOrder1[$i];
                $first = $pointMeshOrder1[$i-1];
                if (($last - $first) > 1) {
                    $firstIntNode1 = ($first + 1);
                    $lastIntNode1 = ($last - 1);
                    break;
                }
            }
            for ($j = 1; $j < $nbPointaxe2; $j ++) {
                $last = $pointMeshOrder2[$j];
                $first = $pointMeshOrder2[$j-1];
                if (($last - $first) > 1) {
                    $firstIntNode2 = ($first + 1);
                    $lastIntNode2 = ($last - 1);
                    break;
                }
            }
            for ($k = 1; $k < $nbPointaxe3; $k ++) {
                $last = $pointMeshOrder3[$k];
                $first = $pointMeshOrder3[$k-1];
                if (($last - $first) > 1) {
                    $firstIntNode3 = ($first + 1);
                    $lastIntNode3 = ($last - 1);
                    break;
                }
            }
            
            //	first mesh order (node number) on each axis ( -1 => for following loop)
            $firstMesh1 = $pointMeshOrder1[0];
            $firstMesh2 = $pointMeshOrder2[0];
            $firstMesh3 = $pointMeshOrder3[0];
            
            // number of nodes contains in this component
            $lastMesh1 = $pointMeshOrder1[$nbPointaxe1 - 1];
            $lastMesh2 = $pointMeshOrder2[$nbPointaxe2 - 1];
            $lastMesh3 = $pointMeshOrder3[$nbPointaxe3 - 1];
            
            // save temperature
            $lfTemp = $this->units->prodTemperature( floatval($pb['initTemp'][0]) );

            // list < InitialTemperature > listTemp = new ArrayList < InitialTemperature > ();
            $listTemp = [];
            // /*InitialTemperature */$temp = null;
            for ($i = $firstMesh1; $i <= $lastMesh1; $i ++) {
                for ($j = $firstMesh2; $j <= $lastMesh2; $j ++) {
                    for ($k = $firstMesh3; $k <= $lastMesh3; $k ++) {
                        if (!(($i >= $firstIntNode1) && ($i <= $lastIntNode1)
                            && ($j >= $firstIntNode2) && ($j <= $lastIntNode2)
                            && ($k >= $firstIntNode3) && ($k <= $lastIntNode3))) {
                            //	save node temperature
                            $temp = new InitialTemperature();
                            $temp->ID_PRODUCTION = ($study->ID_PRODUCTION);
                            $temp->MESH_1_ORDER = ($i);
                            $temp->MESH_2_ORDER = ($j);
                            $temp->MESH_3_ORDER = ($k);
                            $temp->INITIAL_T = ($lfTemp);
                            
                            // add in initial list
                            // listTemp . add(temp);
                            array_push($listTemp, $temp->toArray());
                        }
                    }  // for axis 3
                } // for axis 2
            } // for axis 1
            
            // save temperature inDB 
            // DBInitialTemperature . insertList(listTemp);
            $slices = array_chunk($listTemp, 100);
            foreach ($slices as $slice) {
                InitialTemperature::insert($slice);
            }
        } // if breaded
    }
}