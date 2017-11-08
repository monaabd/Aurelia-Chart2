import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class View {
  constructor(router) {
    this.router = router;
    this.DynamicDoughnutData = {};
    this.SimpleLineData = {};
    this.SimpleLineData2 = {};

    this.resetLineData2();
    this.resetPieData();
    this.resetLineData();
  }


  resetLineData() {
    this.SimpleLineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Healthy People',
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Ill People',
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }
  resetLineData2() {
    this.SimpleLineData2 = {
      labels: ['male 30', 'male 35', 'female 30', 'female 35'

                    //   "gender" ={type:"male",
                    //   age:[30,35,40]
                    //  }
      ],
      datasets: [
        {
          label: 'Iron',
          backgroundColor: '#f4b0e1',
          borderColor: '#fd5cea',
          fill: false,
          borderDash: [5, 5],
          pointRadius: 15,
          pointHoverRadius: 10,
          data: [10, 15, 20, 40, 10]
        }
      ]
    };
  }

  resetPieData() {
    this.DynamicDoughnutData = {
      labels: ['Red', 'Green', 'Yellow' ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }
  addEntry() {
    this.DynamicDoughnutData.labels.push('New Colour');
        //här kan du pusha value
    this.DynamicDoughnutData.datasets[0].data.push(55);
    this.DynamicDoughnutData.datasets[0].backgroundColor.push('#B4FD5C');
  }

}
