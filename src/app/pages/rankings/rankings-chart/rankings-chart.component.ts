import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

import LineChart = google.visualization.LineChart;
import LineChartOptions = google.visualization.LineChartOptions;

import {DisplayedChartRanking} from '../../../model/displayed-chart-ranking.model';

@Component({
  selector: 'fc-rankings-chart',
  templateUrl: './rankings-chart.component.html',
  styleUrls: ['./rankings-chart.component.scss']
})
export class RankingsChartComponent implements AfterViewInit{

  @ViewChild('chart') chartContainer: ElementRef;
  chart: LineChart;

  @Input() rankings: DisplayedChartRanking[];

  ngAfterViewInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(() => {
        this.chart = new google.visualization.LineChart(this.chartContainer.nativeElement);
        this.drawChart();
    });
  }

  private drawChart(): void {
    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('date','Datum');
    this.rankings[0].players.forEach(rankingPlayer => {
      dataTable.addColumn('number',rankingPlayer.name);
    });
    this.rankings.forEach(ranking => {
      const row: any[] = [ ranking.date ];
      ranking.players.forEach(rankingPlayer => {
        row.push(Number(rankingPlayer.rank));
      });
      dataTable.addRow(row);
    });

    const options: LineChartOptions = {
      theme: 'maximized',
      legend: {
        position: 'none'
      },
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
    this.chart.draw(dataTable, options);
  }
}
