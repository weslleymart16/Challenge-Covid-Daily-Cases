import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { feature } from 'topojson-client';
import "chartjs-chart-geo";

@Component({
  selector: 'app-mapa-covid',
  templateUrl: './mapa-covid.component.html',
  styleUrls: ['./mapa-covid.component.scss']
})
export class MapaCovidComponent {

  public formatLabel(value: number): string {
    const day = 86400000;
    const firstDayMilesseconds = new Date(2020, 0, 1).getTime();
    const selectDate = new Date(firstDayMilesseconds + day * value);
    return `${selectDate.getDate()}/${
      selectDate.getMonth() + 1
    }/${selectDate.getFullYear()}`;
  }

  public get numberOfDays(): number {
    const firstDayMilesseconds = new Date('2020-01-01').getTime();
    const diference = new Date().getTime() - firstDayMilesseconds;
    return Math.round(diference / 60000 / 60 / 24);
  }

}
