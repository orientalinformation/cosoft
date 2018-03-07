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
                        <td align="center"><?php echo $arrayParam['productElmt']->SHAPE_PARAM1 ?></td>
                        <td align="center"><?php echo $arrayParam['productElmt']->SHAPE_PARAM2 ?></td>
                        <td align="center"><?php echo $arrayParam['productElmt']->SHAPE_PARAM3 ?></td>
                        <td align="center"><?php echo $arrayParam['product']->PROD_REALWEIGHT ?></td>
                        <td align="center"><?php echo $arrayParam['product']->PROD_ISO == 1 ? "YES" : "NO" ?></td>
                        <td align="center"><?php echo $arrayParam['initial']->INITIAL_T ?></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="pro-components">
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
                        <td align="center"><?php echo $arrayParam['productElmt']->SHAPE_PARAM1 ?></td>
                        <td align="center"><?php echo $arrayParam['productElmt']->SHAPE_PARAM2 ?></td>
                        <td align="center"><?php echo $arrayParam['productElmt']->SHAPE_PARAM3 ?></td>
                        <td align="center"><?php echo $arrayParam['product']->PROD_REALWEIGHT ?></td>
                        <td align="center"><?php echo $arrayParam['product']->PROD_ISO == 1 ? "YES" : "NO" ?></td>
                        <td align="center"><?php echo $arrayParam['initial']->INITIAL_T ?></td>
                    </tr>
                </table>
            </div>
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