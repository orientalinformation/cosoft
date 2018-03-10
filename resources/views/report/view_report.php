<html>
    <body>
        <div class="production">
            <div class="table table-bordered">
                <table border="0.5">
                <tr>
                    <th>Daily production</th>
                    <th align="center"><?php echo $arrayParam['production']->DAILY_PROD ?></th>
                    <th>Hours/Day</th>
                </tr>
                <tr>
                    <td>Weekly production</td>
                    <td align="center"><?php echo $arrayParam['production']->WEEKLY_PROD ?></td>
                    <td>Days/Week</td>
                </tr>
                <tr style="height: 10px;">
                    <td>Annual production</td>
                    <td align="center"><?php echo $arrayParam['production']->NB_PROD_WEEK_PER_YEAR ?></td>
                    <td>Weeks/Year</td>
                </tr>
                <tr>
                    <td>Number of equipment cooldowns</td>
                    <td align="center"><?php echo $arrayParam['production']->DAILY_STARTUP ?></td>
                    <td>per day</td>
                </tr>
                <tr>
                    <td>Factory Air temperature</td>
                    <td align="center"><?php echo $arrayParam['production']->AMBIENT_TEMP ?></td>
                    <td>(°C)</td>
                </tr>
                <tr>
                    <td>Relative Humidity of Factory Air</td>
                    <td align="center"><?php echo $arrayParam['production']->AMBIENT_HUM ?></td>
                    <td>(%)</td>
                </tr>
                <tr>
                    <td>Required Average temperature</td>
                    <td align="center"><?php echo $arrayParam['production']->AVG_T_INITIAL ?></td>
                    <td>(°C)</td>
                </tr>
                <tr>
                    <td>Required Production Rate</td>
                    <td align="center"><?php echo $arrayParam['production']->PROD_FLOW_RATE ?></td>
                    <td>(kg/h)</td>
                </tr>
                </table>
            </div>
        </div>
        <h3>Composition of the product and its components</h3>
        <div class="pro-data">
            <div class="table table-bordered">
                <table border="0.5">
                    <tr>
                        <th align="center">Product name</th>
                        <th align="center">Shape</th>
                        <th align="center">Height (cm)</th>
                        <th align="center">Length (cm)</th>
                        <th align="center">Width (cm)</th>
                        <th align="center">Real product mass per unit (kg)</th>
                        <th align="center">Same temperature throughout product.</th>
                        <th align="center">Initial temperature (°C)</th>
                    </tr>
                    <tr>
                        <td align="center"><?php echo $arrayParam['product']->PRODNAME ?></td>
                        <td align="center"><?php echo $arrayParam['shapeName']->LABEL ?></td>
                        <td align="center"><?php echo $arrayParam['proElmt']->SHAPE_PARAM1 ?></td>
                        <td align="center"><?php echo $arrayParam['proElmt']->SHAPE_PARAM2 ?></td>
                        <td align="center"><?php echo $arrayParam['proElmt']->SHAPE_PARAM3 ?></td>
                        <td align="center"><?php echo $arrayParam['product']->PROD_REALWEIGHT ?></td>
                        <td align="center"><?php echo $arrayParam['product']->PROD_ISO == 1 ? "YES" : "NO" ?></td>
                        <td align="center"><?php echo $arrayParam['production']->AVG_T_INITIAL ?></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="pro-components">
            <div class="table table-bordered">
                <table border="0.5">
                    <tr>
                        <th align="center">Component list</th>
                        <th align="center">Description</th>
                        <th align="center">Product dimension (cm)</th>
                        <th align="center">Real mass (cm)</th>
                        <th align="center">Same temperature throughout product.</th>
                        <th align="center">Added to product in study number</th>
                        <th align="center">Initial temperature (°C)</th>
                    </tr>
                    <?php foreach($productComps as $resproductComps) { ?>
                    <tr>
                        <td align="center"><?php echo $resproductComps['display_name'] ?></td>
                        <td align="center"><?php echo $resproductComps['PROD_ELMT_NAME'] ?></td>
                        <td align="center"><?php echo $resproductComps['SHAPE_PARAM2'] ?></td>
                        <td align="center"><?php echo $resproductComps['PROD_ELMT_REALWEIGHT'] ?></td>
                        <td align="center"><?php echo ($resproductComps['PROD_ELMT_ISO'] == 1) ? "YES" : "NO" ?></td>
                        <td align="center"><?php echo "" ?></td>
                        <td align="center"><?php echo ($resproductComps['PROD_ELMT_ISO'] == 1 )|| ($resproductComps['PROD_ELMT_ISO'] == 2) ? '' : "non isothermal" ?></td>
                    </tr>
                    <?php } ?>
                </table>
            </div>
        </div>
        <h3>Product 3D</h3>
        <div class="product3d">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th colspan="6" align="center">Packing</th>
                    <th colspan="2" align="center">3D view of the product</th>
                </tr>
                <tr>
                    <td rowspan="2">Side</td>
                    <td rowspan="2">Number of layers</td>
                    <td colspan="3">Packing data</td>
                    <td rowspan="2">Thickness ()</td>
                    <td colspan="2" rowspan="2"></td>
                </tr>
                <tr>
                    <td>Order</td>
                    <td colspan="2">Name</td>
                </tr>
            </table>
            </div>
        </div>
        <h3>Equipment data</h3>
        <div class="equipment-data">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th align="center">No.</th>
                    <th align="center">Name</th>
                    <th align="center">Residence / Dwell time(s)</th>
                    <th align="center">Control temperature(°C)</th>
                    <th align="center">Convection Setting(Hz)</th>
                    <th align="center">Product orientation</th>
                    <th align="center">Conveyor coverage or quantity of product per batch</th>
                </tr>
                <?php foreach($equipData as $key => $resequipDatas) { ?>
                <tr>
                    <td align="center"><?php echo $key+1 ?></td>
                    <td align="center"><?php echo $resequipDatas['displayName'] ?></td>
                    <td align="center"><?php echo $resequipDatas['ORIENTATION'] == 1 ? 'Parallel' : 'Perpendicular' ?></td>
                    <td align="center"><?php echo $resequipDatas['tr'][0] ?></td>
                    <td align="center"><?php echo $resequipDatas['ts'][0] ?></td>
                    <td align="center"><?php echo $resequipDatas['vc'][0] ?></td>
                    <td align="center"><?php echo $resequipDatas['top_or_QperBatch'] ?></td>
                </tr>
                <?php } ?>
            </table>
            </div>
        </div>
        <h3>Belt or shelves layout</h3>
        <?php foreach($equipData as $key => $resequipDatas) { ?>
        <h4><?php echo $resequipDatas['displayName'] ?></h4>
        <div class="layout">
            <div class = "row">
                <div class="md-col-6">
                    <div class="table table-bordered">
                    <table border="0.5">
                        <tr>
                            <th colspan="2" align="center">Inputs</th>
                        </tr>
                        <tr>
                            <td>Space (length) (cm)</td>
                            <td align="center"><?php echo "User not define" ?></td>
                        </tr>
                        <tr>
                            <td>Space (width) (cm)</td>
                            <td align="center"><?php echo "User not define" ?></td>
                        </tr>
                        <tr>
                            <td>Orientation</td>
                            <td align="center"><?php echo $resequipDatas['ORIENTATION'] == 1 ? 'Parallel' : 'Perpendicular' ?></td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">Outputs</td>
                        </tr>
                        <tr>
                            <td>Space in width (cm)</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <td>Number per meter</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <td>Number in width</td>
                            <td align="center"> </td>
                        </tr>
                        <tr>
                            <td>Conveyor coverage or quantity of product per batch</td>
                            <td align="center"><?php echo $resequipDatas['top_or_QperBatch'] ?></td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div class="md-col-6">
                    image
                </div>
            </div>
        </div>
        <?php } ?>
        
        <h3>Cryogenic Pipeline</h3>
        <div class="consum-esti">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th colspan="2" align="center">Type</th>
                    <th colspan="4" align="center">Name</th>
                    <th colspan="2" align="center">Number</th>
                </tr>
                <tr>
                    <td colspan="2">Insulated line</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['insulatedline'] ?? "" ?></td>
                    <td colspan="2" align="center"><?php echo $cryogenPipeline['insulllenght'] ?? "" ?></td>
                </tr>
                <tr>
                    <td colspan="2">Insulated valves</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['insulatedlineval'] ?? "" ?></td>
                    <td colspan="2" align="center"><?php echo $cryogenPipeline['insulvallenght'] ?? "" ?></td>
                </tr>
                <tr>
                    <td colspan="2">Elbows</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['elbows'] ?? "" ?></td>
                    <td colspan="2" align="center"><?php echo $cryogenPipeline['elbowsnumber'] ?? "" ?></td>
                </tr>
                <tr>
                    <td colspan="2">Tees</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['tee'] ?? "" ?></td>
                    <td colspan="2" align="center"><?php echo $cryogenPipeline['teenumber'] ?? "" ?></td>
                </tr>
                <tr>
                    <td colspan="2">Non-insulated line</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['non_insulated_line'] ?? "" ?></td>
                    <td colspan="2" align="center"><?php echo $cryogenPipeline['noninsullenght'] ?? "" ?></td>
                </tr>
                <tr>
                    <td colspan="2">Non-insulated valves</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['non_insulated_valves'] ?? "" ?></td>
                    <td colspan="2"align="center"><?php echo $cryogenPipeline['noninsulatevallenght'] ?? "" ?></td>
                </tr>
                <tr>
                    <td colspan="2">Storage tank</td>
                    <td colspan="4" align="center"><?php echo $cryogenPipeline['storageTankName'] ?? "" ?></td>
                    <td colspan="2" align="center"><?php echo "" ?></td>
                </tr>
            </table>
            <div id="pressuer"><strong>Tank pressure :</strong> <?php echo $cryogenPipeline['pressuer'] ?? "" ?> (Bar)</div>
            <div id="height"><strong>Equipment elevation above tank outlet. :</strong><?php echo $cryogenPipeline['height'] ?? "" ?> (m)</div>
            </div>
        </div>
        
        <h3>Consumptions / Economics assessments</h3>
        <h4>Values</h4>
        <div class="consum-esti">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th colspan="3" align="center" rowspan="2">Equipment</th>
                    <th rowspan="2" align="center">Overall Cryogen Consumption Ratio (product + equipment and pipeline losses) Unit of Cryogen, per piece of product. (UC)</th>
                    <th rowspan="2" align="center">Total Cryogen Consumption (product + equipment and pipeline losses).(UC/kg)</th>
                    <th rowspan="2" align="center">Specific Cryogen Consumption Ratio (product only) Unit of Cryogen, per unit weight of product.(UC/kg)</th>
                    <th rowspan="2" align="center">Total Cryogen Consumption per hour(UC)</th>
                    <th rowspan="2" align="center">Total Cryogen Consumption per day(UC)</th>
                    <th rowspan="2" align="center">Total Cryogen Consumption per week(UC)</th>
                    <th rowspan="2" align="center">Total Cryogen Consumption per month(UC)</th>
                    <th rowspan="2" align="center">Total Cryogen Consumption per year(UC)</th>
                    <th colspan="2" align="center">Equipment Cryogen Consumption</th>
                    <th colspan="2" align="center">Pipeline consumption</th>
                    <th rowspan="2">Tank losses(UC)</th>
                </tr>
                <tr>
                    <td align="center">Heat losses per hour(UC/h)</td>
                    <td align="center">Cooldown(UC)</td>
                    <td align="center">Heat losses per hour(UC/h)</td>
                    <td align="center">Cooldown(UC)</td>
                </tr>
                <?php foreach($consumptions as $resconsumptions) { ?>
                <tr>
                    <td colspan="2" rowspan="2"><?php echo $resconsumptions['equipName'] ?></td>
                    <td align="center">(l)</td>
                    <td align="center"><?php echo $resconsumptions['tc'] ?></td>
                    <td align="center"><?php echo $resconsumptions['kgProduct'] ?></td>
                    <td align="center"><?php echo $resconsumptions['product'] ?></td>
                    <td align="center"><?php echo $resconsumptions['hour'] ?></td>
                    <td align="center"><?php echo $resconsumptions['day'] ?></td>
                    <td align="center"><?php echo $resconsumptions['week'] ?></td>
                    <td align="center"><?php echo $resconsumptions['month'] ?></td>
                    <td align="center"><?php echo $resconsumptions['year'] ?></td>
                    <td align="center"><?php echo $resconsumptions['eqptPerm'] ?></td>
                    <td align="center"><?php echo $resconsumptions['eqptCold'] ?></td>
                    <td align="center"><?php echo $resconsumptions['linePerm'] ?></td>
                    <td align="center"><?php echo $resconsumptions['lineCold'] ?></td>
                    <td align="center"><?php echo $resconsumptions['tank'] ?></td>
                </tr>
                <tr>
                    <td align="center">(€)</td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                    <td align="center"><?php echo "--" ?></td>
                </tr>
                <?php } ?>
            </table>
            </div>
        </div>
        <h3>Heat balance / sizing results</h3>
        <h4>Chosen product flowrate</h4>
        <div class="heat-balance-sizing">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th colspan="2" rowspan="2" align="center">Equipment</th>
                    <th rowspan="2" align="center">Average initial temperature (°C)</th>
                    <th rowspan="2" align="center">Final Average Product temperature (°C)</th>
                    <th rowspan="2" align="center">Control temperature (°C)</th>
                    <th rowspan="2" align="center">Residence / Dwell time (s)</th>
                    <th rowspan="2" align="center">Product Heat Load (kj/kg)</th>
                    <th colspan="4" align="center">Chosen product flowrate</th>
                    <th rowspan="2" align="center">Precision of the high level calculation. (%)</th>
                </tr>
                <tr>
                    <td align="center">Hourly production capacity (kg/h)</td>
                    <td colspan="2" align="center">Cryogen consumption (product + equipment heat load) (l/kg)</td>
                    <td align="center">Conveyor coverage or quantity of product per batch</td>
                </tr>
                <?php foreach($optimumHeadBalance as $resoptHeads) { ?>
                <tr>
                    <td align="center" colspan="2"><?php echo $resoptHeads['equipName'] ?></td>
                    <td align="center"><?php echo $arrayParam['proInfoStudy']['avgTInitial'] ?></td>
                    <td align="center"><?php echo $resoptHeads['tfp'] ?></td>
                    <td align="center"><?php echo $resoptHeads['tr'] ?></td>
                    <td align="center"><?php echo $resoptHeads['ts'] ?></td>
                    <td align="center"><?php echo $resoptHeads['vep'] ?></td>
                    <td align="center"><?php echo $resoptHeads['dhp'] ?></td>
                    <td align="center"><?php echo $resoptHeads['conso'] ?></td>
                    <td align="center" colspan="2"><?php echo $resoptHeads['toc'] ?></td>
                    <td align="center"><?php echo $resoptHeads['precision'] ?></td>
                </tr>
                <?php } ?>
            </table>
            </div>
        </div>
        <h4>Maximum product flowrate</h4>
        <div class="Max-prod-flowrate">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th colspan="2" rowspan="2">Equipment</th>
                    <th rowspan="2">Average initial temperature (°C)</th>
                    <th rowspan="2">Final Average Product temperature (°C)</th>
                    <th rowspan="2">Control temperature (°C)</th>
                    <th rowspan="2">Residence / Dwell time (s)</th>
                    <th rowspan="2">Product Heat Load (kj/kg)</th>
                    <th colspan="4">Maximum product flowrate </th>
                    <th rowspan="2">Precision of the high level calculation. (%)</th>
                </tr>
                <tr>
                    <td>Hourly production capacity (kg/h)</td>
                    <td colspan="2">Cryogen consumption (product + equipment heat load) (l/kg)</td>
                    <td>Conveyor coverage or quantity of product per batch</td>
                </tr>
                <?php foreach($optimumHbMax  as $resoptimumHbMax) { ?>
                <tr>
                    <td align="center" colspan="2"><?php echo $resoptimumHbMax['equipName'] ?></td>
                    <td align="center" ><?php echo $arrayParam['proInfoStudy']['avgTInitial'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['tfp'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['tr'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['ts'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['vep'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['dhp'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['conso'] ?></td>
                    <td align="center" colspan="2"><?php echo $resoptimumHbMax['toc'] ?></td>
                    <td align="center"><?php echo $resoptimumHbMax['precision'] ?></td>
                </tr>
                <?php } ?>
            </table>
            </div>
        </div>
        <h4>Graphic</h4>
        <div class ="graphic">
        Graphic
        </div>

        <h3>Heat Exchange</h3>
        <!-- <h4>get first Equipment </h4> -->
        <?php foreach($heatexchange as $key=> $resheatexchanges) { ?>
        <div class="heat-exchange">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th colspan="2">Equipment</th>
                    <th align="center"> <?php echo $resheatexchanges['result'][0]['x']?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][1]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][2]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][3]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][4]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][5]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][6]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][7]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][8]['x'] ?></th>
                    <th align="center"> <?php echo $resheatexchanges['result'][9]['x'] ?></th>
                </tr>
                <tr>
                    <td colspan="2"><?php echo $consumptions[$key]['equipName'] . "- (kj/kg)" ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][0]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][1]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][2]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][3]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][4]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][5]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][6]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][7]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][8]['y'] ?></td>
                    <td align="center"><?php echo $resheatexchanges['result'][9]['y'] ?></td>
                </tr>
            </table>
            </div>

            <div id="hexchGraphic">
            Graphic Heat Exchange
            </div>
            <?php } ?>
        </div>

        <h3>Product Section</h3>
        <!-- <h4>get first Equipment </h4> -->
        <?php foreach ($proSections as $resproSections) {?>
        <h4><?php echo $resproSections['equipName'] ?></h4>
        <?php if ($resproSections['selectedAxe'] == 1) {?> 
        Values - Dimension <?php echo $resproSections['selectedAxe'] . "(" . "*," . $resproSections['axeTemp'][0] . "," . $resproSections['axeTemp'][0] . ")" . "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?>  
        <?php } else if ($resproSections['selectedAxe'] == 2) { ?>
        Values - Dimension <?php echo $resproSections['selectedAxe'] . "(" . $resproSections['axeTemp'][0] . ",*," . $resproSections['axeTemp'][0] . ")" . "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?>  
        <?php } else if ($resproSections['selectedAxe'] == 3) {?>
        Values - Dimension <?php echo $resproSections['selectedAxe'] . "(" . $resproSections['axeTemp'][0] . "," . $resproSections['axeTemp'][0] . ",*" . ")" . "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?>  
        <?php } ?>
        <div class="values-dim2">
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th align="center">Node number</th>
                    <th align="center">Position Axis 1 <?php echo "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?></th>
                    <?php foreach ($resproSections['resultLabel'] as $index => $labelTemp) { ?>
                        <th align="center">T° at <?php echo $resproSections['resultLabel'][$index] . $resproSections['timeSymbol'] . "(" . $resproSections['temperatureSymbol'] . ")" ?></th>
                    <?php }?>
                </tr>
                <?php foreach ($resproSections['result']['recAxis'] as $key=> $node) {?>
                <tr>
                    <td align="center"> <?php echo $key?></td>
                    <td align="center"> <?php echo $resproSections['dataChart'][0][$key]['y']?></td>
                    <?php foreach ($resproSections['dataChart'] as $index => $dbchart) { ?>
                    <td align="center"> <?php echo $resproSections['dataChart'][$index][$key]['x'] ?></td>
                    <?php }?>
                </tr>
                <?php }?>
            </table>
            </div>
        </div>
        
        <div class="graphic-dim2"> 
        <?php if ($resproSections['selectedAxe'] == 1) {?> 
        Graphic - Dimension <?php echo $resproSections['selectedAxe'] . "(" . "*," . $resproSections['axeTemp'][0] . "," . $resproSections['axeTemp'][0] . ")" . "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?>  
        <?php } else if ($resproSections['selectedAxe'] == 2) { ?>
        Graphic - Dimension <?php echo $resproSections['selectedAxe'] . "(" . $resproSections['axeTemp'][0] . ",*," . $resproSections['axeTemp'][0] . ")" . "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?>  
        <?php } else if ($resproSections['selectedAxe'] == 3) {?>
        Graphic - Dimension <?php echo $resproSections['selectedAxe'] . "(" . $resproSections['axeTemp'][0] . "," . $resproSections['axeTemp'][0] . ",*" . ")" . "(" . $resproSections['prodchartDimensionSymbol'] . ")" ?>  
        <?php } ?>
        </div>
        <?php } ?>
        
        <h3>Product Graph - Time Based</h3>
        <?php foreach ($timeBase as $key => $timeBases) { ?>
        <h4><?php echo $consumptions[$key]['equipName'] ?></h4>
        <div class="values-graphic"> 
            <div class="table table-bordered">
            <table border="0.5">
                <tr>
                    <th align="center">Points</th>
                    <th align="center"><?php echo "(" . $timeBases['timeSymbol'] . " )" ?></th>
                    <?php foreach ($timeBases['result'] as $key => $points) { ?>
                    <th align="center"><?php echo $timeBases['result'][$key]['points']?></th>
                    <?php } ?>
                </tr>
                <tr>
                    <td align="center">Top<br>()</td>
                    <td align="center"><?php echo "(" . $timeBases['temperatureSymbol'] . " )" ?></td>
                    <?php foreach ($timeBases['result'] as $key => $tops) { ?>
                    <td align="center"><?php echo $timeBases['result'][$key]['top']?></td>
                    <?php } ?>
                </tr>
                <tr>
                    <td align="center">Internal</td>
                    <td align="center"><?php echo "(" . $timeBases['temperatureSymbol'] . " )" ?></td>
                    <?php foreach ($timeBases['result'] as $key => $internals) { ?>
                    <td align="center"><?php echo $timeBases['result'][$key]['int']?></td>
                    <?php } ?>
                </tr>
                <tr>
                    <td align="center">Bottom</td>
                    <td align="center"><?php echo "(" . $timeBases['temperatureSymbol'] . " )" ?></td>
                    <?php foreach ($timeBases['result'] as $key => $bottoms) { ?>
                    <td align="center"><?php echo $timeBases['result'][$key]['bot']?></td>
                    <?php } ?>
                </tr>
                <tr>
                    <td align="center">Avg. Temp.</td>
                    <td align="center"><?php echo "(" . $timeBases['temperatureSymbol'] . " )" ?></td>
                    <?php foreach ($timeBases['result'] as $key => $avgs) { ?>
                    <td align="center"><?php echo $timeBases['result'][$key]['average']?></td>
                    <?php } ?>
                </tr>
            </table>
            </div>
        </div>
        <div class="pro-graphic">
        Graphic Time Based
        </div>
        <?php } ?>

        <h3>2D Outlines</h3>
        <!-- <h4>Graphic get name equipment - ..</h4> -->
        <div class="outlines"> 
            Graphic
        </div>

        <h3>Comments</h3>
        <div class="comment">
            <textarea rows="4" cols="50">
                fgdfgdf
            </textarea>
        </div>
        <div class="info-company">
            <div align="center">
                <img src="'.$tcpdf_path align="center".'/images/banner_cryosoft.png" height="400" width="4200">
            </div>
            <div><strong><u>Customer:</u></strong></div>
                <div><strong>Company name : '. PDF::SetTitle("Cryosoft Report") .' </strong></div>
                <div><strong>Surname / Name :</strong></div>
                <div><strong>Function :</strong></div>
                <div><strong>Contact :</strong></div>
                <div><strong>Date of the redivort generation : 27/02/2018 </strong></div>
            <div align="center">
                <img src="'.$tcpdf_path .'/images/image_cryosoft.png" height="200" width="200">
            </div>
            <div class="table table-bordered">
                <table border="1">
                <tr>
                    <th align="center" colspan="2">Study of the product: AAK STUDY 1 23 FEB</th>
                </tr>
                <tr>
                    <td >Calculation mode :</td>
                    <td align="center">Optimum equipment</td>
                </tr>
                <tr>
                    <td >Economic :</td>
                    <td align="center">NO</td>
                </tr>
                <tr>
                    <td >Cryogenic Pipeline :</td>
                    <td align="center">NO</td>
                </tr>
                <tr>
                    <td >Chaining :</td>
                    <td align="center">YES</td>
                </tr>
                </table>
            </div>
        </div>
    </body>
</html>