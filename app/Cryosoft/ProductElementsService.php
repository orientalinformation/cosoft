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
        $this->units = app('App\\Cryosoft\\UnitsService');
        $this->products = app('App\\Cryosoft\\ProductService');
    }

    /**
     * @return array // double
     */
    public function searchTempMeshPoint(ProductElmt &$productElmt, $pointMeshOrder2 = null)
    {
        // ArrayList < Double > listtemp = new ArrayList < Double > ();
        $listtemp = [];
        try {
            //search the mesh2 order point
            if ($pointMeshOrder2 == null) {
                $pointMeshOrder2 = $this->products->searchNbPtforElmt($productElmt, 2);
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
        return $listtemp;
    }
}