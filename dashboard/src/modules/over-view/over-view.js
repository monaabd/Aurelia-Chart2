import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class OverView {
  constructor(router) {
    this.setGraphData();
    this.router = router;
  }

  setGraphData() {
    
    this.data = {
      labels: [
        'Underlag',
        'Fakturerade',
        'Betalda',
        'Förfallna'
      ],
      datasets: [
        {
          data: [25, 25, 25, 25],
          backgroundColor: [
            '#898787',
            '#f9ad4f',
            '#3bb873',
            '#d9534f'
          ],
          hoverBackgroundColor: [
            '#898787',
            '#f9ad4f',
            '#3bb873',
            '#d9534f'
          ]
        }
      ]
    };
  }

}
