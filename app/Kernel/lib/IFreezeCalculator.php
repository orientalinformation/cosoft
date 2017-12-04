<?php
// **********************************************************************
//
// Copyright (c) 2003-2017 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.7.0
//
// <auto-generated>
//
// Generated from file `IFreezeCalculator.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//


namespace
{
    require_once 'Cryosoft.php';
}

namespace Cryosoft\FreezeCalculator
{
    global $Cryosoft_FreezeCalculator__t_IFreezeCalculator;
    global $Cryosoft_FreezeCalculator__t_IFreezeCalculatorPrx;

    class IFreezeCalculatorPrxHelper
    {
        public static function checkedCast($proxy, $facetOrContext=null, $context=null)
        {
            return $proxy->ice_checkedCast('::Cryosoft::FreezeCalculator::IFreezeCalculator', $facetOrContext, $context);
        }

        public static function uncheckedCast($proxy, $facet=null)
        {
            return $proxy->ice_uncheckedCast('::Cryosoft::FreezeCalculator::IFreezeCalculator', $facet);
        }

        public static function ice_staticId()
        {
            return '::Cryosoft::FreezeCalculator::IFreezeCalculator';
        }
    }

    $Cryosoft_FreezeCalculator__t_IFreezeCalculator = IcePHP_defineClass('::Cryosoft::FreezeCalculator::IFreezeCalculator', '\\Cryosoft\\FreezeCalculator\\IFreezeCalculator', -1, false, true, $Ice__t_Value, null);

    $Cryosoft_FreezeCalculator__t_IFreezeCalculatorPrx = IcePHP_defineProxy('::Cryosoft::FreezeCalculator::IFreezeCalculator', $Ice__t_ObjectPrx, null);

    IcePHP_defineOperation($Cryosoft_FreezeCalculator__t_IFreezeCalculatorPrx, 'FCFreezeCalculation', 0, 0, 0, array(array($Cryosoft__t_stSKConf)), null, array($IcePHP__t_long), null);
}
?>
