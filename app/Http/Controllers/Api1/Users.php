<?php

namespace App\Http\Controllers\Api1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Factory as Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\CoolingFamily;
use App\Models\Translation;
use App\Models\Equipseries;
use App\Models\Equipment;
use App\Models\Equipfamily;


class Users extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request, Auth $auth)
    {
        $this->request = $request;
        $this->auth = $auth;
    }

    public function changePassword($id)
    {
        $input = $this->request->all();

        if (!isset($input['oldPass']) || !isset($input['newPass']))
            throw new \Exception("Error Processing Request", 1);

        $oldPass = $input['oldPass'];
        $newPass = $input['newPass'];
        // $hashOldPass = Hash::make($oldPass);
        $hashNewPass = Hash::make($newPass);

        $user = User::find($id);
        // var_dump($user->USERPASS);
        // var_dump($hashOldPass);
        // die;
        if (!Hash::check($oldPass, $user->USERPASS)) {
            return -1;
        }
        User::where('ID_USER', $id)
        ->update(['USERPASS' => $hashNewPass]);

        return 1;
    }

    public function getEnergies()
    {
        $list = Translation::join('cooling_family', 'ID_TRANSLATION', '=', 'cooling_family.ID_COOLING_FAMILY')
        ->where('TRANS_TYPE', 2)->where('CODE_LANGUE', $this->auth->user()->CODE_LANGUE)->orderBy('LABEL', 'ASC')
        ->distinct()->get();

        return $list;
    }

    public function getConstructors()
    {
        $input = $this->request->all();
        $energy = 0;
        if (isset($input['idCooling'])) $energy = $input['idCooling'];

        if ($energy != 0) {
            $list = Equipseries::select('CONSTRUCTOR')->join('equipment', 'Equipseries.ID_EQUIPSERIES', '=', 'equipment.ID_EQUIPSERIES')
            ->where('equipment.ID_COOLING_FAMILY', $energy)->distinct()->get();
        } else {
            $list = Equipseries::select('CONSTRUCTOR')->join('equipment', 'Equipseries.ID_EQUIPSERIES', '=', 'equipment.ID_EQUIPSERIES')
            ->distinct()->get();
        }
        
        return $list;
    }

    public function getFamilies()
    {
        $input = $this->request->all();
        $energy = 0;
        $manufacturerLabel = '';

        if (isset($input['idCooling'])) $energy = $input['idCooling'];

        if (isset($input['manufacturerLabel'])) $manufacturerLabel = $input['manufacturerLabel'];

        $list = Translation::select('ID_TRANSLATION', 'LABEL')
        ->join('equipfamily', function($fam){
            $fam->on('ID_TRANSLATION', '=', 'equipfamily.ID_FAMILY')
            ->join('equipseries', function ($series){
                $series->on('equipfamily.ID_FAMILY', '=', 'equipseries.ID_FAMILY')
                ->join('equipment', function($equip){

                    $equip->on('equipseries.ID_EQUIPSERIES', '=', 'equipment.ID_EQUIPSERIES');
                });
            });
        })
        ->where('TRANS_TYPE', 5)->where('CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
        ->orderBy('LABEL', 'ASC')->distinct()->get();

        return $list;
    }

    public function getOrigines()
    {

        $input = $this->request->all();
        $energy = 0;
        $manufacturerLabel = '';
        $idFamily = 0;

        if (isset($input['idCooling'])) $energy = $input['idCooling'];

        if (isset($input['manufacturerLabel'])) $manufacturerLabel = $input['manufacturerLabel'];

        if (isset($input['idFamily'])) $idFamily = $input['idFamily'];

        $list = Translation::select('ID_TRANSLATION', 'LABEL')
        ->join('equipment', function($equip){
            $equip->on('ID_TRANSLATION', '=', 'equipment.STD')
            ->join('equipseries', function ($series){
                $series->on('equipseries.ID_EQUIPSERIES', '=', 'equipment.ID_EQUIPSERIES')
                ->join('equipfamily', function($fam){
                    $fam->on('equipfamily.ID_FAMILY', '=', 'equipseries.ID_FAMILY');
                });
            });
        })
        ->where('TRANS_TYPE', 17)->where('CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
        ->orderBy('LABEL', 'ASC')->distinct()->get();

        return $list;
    }

    public function getProcesses()
    {
        $input = $this->request->all();
        $energy = 0;
        $manufacturerLabel = '';
        $idFamily = 0;
        $idSdt = 0;

        if (isset($input['idCooling'])) $energy = $input['idCooling'];

        if (isset($input['manufacturerLabel'])) $manufacturerLabel = $input['manufacturerLabel'];

        if (isset($input['idFamily'])) $idFamily = $input['idFamily'];

        if (isset($input['idStd'])) $idStd = $input['idStd'];

        $list = Translation::select('ID_TRANSLATION', 'LABEL')
        ->join('equipfamily', function($fam){
            $fam->on('ID_TRANSLATION', '=', 'equipfamily.BATCH_PROCESS')
            ->join('equipseries', function ($series){
                $series->on('equipfamily.ID_FAMILY', '=', 'equipseries.ID_FAMILY')
                ->join('equipment', function($equip){
                    $equip->on('equipseries.ID_EQUIPSERIES', '=', 'equipment.ID_EQUIPSERIES');
                });
            });
        })
        ->where('TRANS_TYPE', 13)->where('CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
        ->orderBy('LABEL', 'ASC')->distinct()->get();

        return $list;
    }

    public function getModels()
    {
        $input = $this->request->all();
        $energy = 0;
        $manufacturerLabel = '';
        $idFamily = 0;
        $idSdt = 0;
        $idProcess = 0;

        if (isset($input['idCooling'])) $energy = $input['idCooling'];

        if (isset($input['manufacturerLabel'])) $manufacturerLabel = $input['manufacturerLabel'];

        if (isset($input['idFamily'])) $idFamily = $input['idFamily'];

        if (isset($input['idStd'])) $idStd = $input['idStd'];

        if (isset($input['idProcess'])) $idProcess = $input['idProcess'];

        $list = Translation::select('ID_TRANSLATION', 'LABEL')
        ->join('equipseries', function ($series){
            $series->on('ID_TRANSLATION', '=', 'equipseries.ID_EQUIPSERIES');
        })
        ->join('equipfamily', function($fam){
            $fam->on('equipfamily.ID_FAMILY', '=', 'equipseries.ID_FAMILY');
        })
        ->join('equipment', function($equip){
            $equip->on('equipseries.ID_EQUIPSERIES', '=', 'equipment.ID_EQUIPSERIES');
        })
        ->where('TRANS_TYPE', 7)->where('CODE_LANGUE', $this->auth->user()->CODE_LANGUE)
        ->orderBy('LABEL', 'ASC')->distinct()->get();

        return $list;
    }
}
