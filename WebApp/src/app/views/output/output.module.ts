import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputRoutingModule } from './output-routing.module';
import { PreliminaryComponent } from './preliminary/preliminary.component';
import { SizingComponent } from './sizing/sizing.component';
import { LayoutComponent } from './layout/layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { CalculationModule } from '../calculation/calculation.module';
import { OutputChartsComponent } from './output-charts/output-charts.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { ModalModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    OutputRoutingModule,
    CommonModule,
    FormsModule,
    CalculationModule,
    LaddaModule.forRoot({
      style: 'slide-left',
    }),
    TranslateModule.forChild(),
    TabsModule.forRoot(),
    ChartsModule,
    ChartModule,
    ModalModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [PreliminaryComponent, SizingComponent, LayoutComponent, OutputChartsComponent]
})
export class OutputModule { }
