/* tslint:disable */
import { ViewDwellingTimes } from './view-dwelling-times';
import { ViewTemperatures } from './view-temperatures';
import { ViewSelect } from './view-select';

/**
 */
export class StartBrainCalculate {
    tempPtSurf?: number;
    idStudy?: number;
    checkOptim?: boolean;
    scheckOptim?: number;
    dwellingTimes?: ViewDwellingTimes[];
    temperatures?: ViewTemperatures[];
    toc?: number;
    typeCalculate?: number;
    epsilonTemp?: number;
    epsilonEnth?: number;
    nbOptimIter?: number;
    timeStep?: number;
    precision?: number;
    scheckStorage?: number;
    storagestep?: number;
    hRadioOn?: number;
    hRadioOff?: number;
    maxIter?: number;
    relaxCoef?: number;
    vRadioOn?: number;
    vRadioOff?: number;
    idStudyEquipment?: number;
    tempPtIn?: number;
    tempPtBot?: number;
    tempPtAvg?: number;
    select1?: ViewSelect[];
    select2?: ViewSelect[];
    select3?: ViewSelect[];
    select4?: ViewSelect[];
    select5?: ViewSelect[];
    select6?: ViewSelect[];
    select7?: ViewSelect[];
    select8?: ViewSelect[];
    select9?: ViewSelect[];
    seValue1?: number;
    seValue2?: number;
    seValue3?: number;
    seValue4?: number;
    seValue5?: number;
    seValue6?: number;
    seValue7?: number;
    seValue8?: number;
    seValue9?: number;
}
