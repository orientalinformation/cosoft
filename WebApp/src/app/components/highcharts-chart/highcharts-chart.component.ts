import { Component, OnInit, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'highcharts-chart',
  templateUrl: './highcharts-chart.component.html',
  styleUrls: ['./highcharts-chart.component.scss']
})
export class HighchartsChartComponent implements OnInit {
  // @Input('')

  constructor(private el: ElementRef) { }

  chart: any;

  @Input() Highcharts: any;
  @Input() constructorType: string;
  @Input() callbackFunction: any;

  optionsValue: any;

  @Input()
  set options(val) {
    this.optionsValue = val;
    this.updateOrCreateChart();
  }

  updateValue = false;

  @Output() updateChange = new EventEmitter(true);
  @Input() set update(val) {
    if (val) {
      this.updateOrCreateChart();
      this.updateChange.emit(false); // clear the flag after update
    }
  }

  updateOrCreateChart() {
    if (this.chart && this.chart.update) {
      this.chart.update(this.optionsValue);
    } else {
      this.chart = this.Highcharts[this.constructorType || 'chart'](
        this.el.nativeElement,
        this.optionsValue,
        this.callbackFunction || null
      );
      this.optionsValue.series = this.chart.userOptions.series;
    }
  }

  ngOnInit() {
  }

}
