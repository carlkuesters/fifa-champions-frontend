import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

import LineChart = google.visualization.LineChart;
import LineChartOptions = google.visualization.LineChartOptions;

import {MemberDetailsRanking} from '../../../model/member-details-ranking.model';

@Component({
  selector: 'fc-member-ranking-chart',
  templateUrl: './member-ranking-chart.component.html',
  styleUrls: ['./member-ranking-chart.component.scss']
})
export class MemberRankingChartComponent implements AfterViewInit{

  @ViewChild('chart', { static: false }) cartContainer: ElementRef;
  chart: LineChart;

  @Input() rankings: MemberDetailsRanking[];

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(() => {
        this.chart = new google.visualization.LineChart(this.cartContainer.nativeElement);
        this.drawChart();
    });
  }

  private drawChart(): void {
    const dataArray: any[] = [
      [{
        type: 'date',
        label: 'Datum'
      }, {
        type: 'number',
        label: 'Platz'
      }],
    ];
    this.rankings.forEach(ranking => {
      dataArray.push([new Date(ranking.date * 1000), Number(ranking.rank)]);
    });
    const data = google.visualization.arrayToDataTable(dataArray);

    const options: LineChartOptions = {
      legend: { position: 'none' },
      theme: 'maximized',
      colors: [ '#058' ],
      hAxis: {
        textPosition: 'none',
      },
      vAxis: {
        textPosition: 'none',
        viewWindow: {
          min: 0.5,
          max: 30,
        },
        direction: -1
      },
      animation: {
        duration: 500,
        easing: 'out',
        startup: true,
      },
    };
    this.chart.draw(data, options);
  }
}
