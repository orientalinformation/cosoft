<?php

namespace App\Kernel;


class KernelService
{
    public function __construct()
    {
        $this->ic = \Ice\initialize();
    }

    public function getKernelObject($name)
    {
        $strProxy = "{$name}:tcp -h ". getenv('KERNEL_HOST') ." -p ". getenv('KERNEL_PORT');
        $base = $this->ic->stringToProxy("{$name}:tcp -h ". getenv('KERNEL_HOST') ." -p ". getenv('KERNEL_PORT'));
        $className = "\\Cryosoft\\$name\\I{$name}PrxHelper";
        $obj = call_user_func( array( $className, 'checkedCast' ),$base );
        if(!$obj) {
            throw new RuntimeException("Invalid proxy");
        }
        return $obj;
    }

    public function getConfig($idStudy = 0, $idTmp = 0, $connectToDB = 1, $initTrace = 1)
    {
        return new \Cryosoft\stSKConf(
            getenv('KERNEL_ODBC'), 
            getenv('KERNEL_USER'), 
            getenv('KERNEL_PASS'), 
            getenv('KERNEL_LOG'), 
            $idStudy, $idTmp, $connectToDB, $initTrace
        );
    }

   function __destruct()
   {
        if($this->ic) {
            $this->ic->destroy(); // Clean up
        }
   }
}
