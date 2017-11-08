import { PLATFORM } from 'aurelia-pal';
//import { OverView } from './over-view';


export class App {
  // constructor() {
  //   this.message = 'Hello charts';
  // }

  //method config
  configureRouter(config, router) {
    config.map([
      {route: ['', 'View'], moduleId: PLATFORM.moduleName('./modules/view/view'), title: 'View', nav: true, name: 'view'},
      {route: 'OverView', moduleId: PLATFORM.moduleName('./modules/over-view/over-view'), title: 'Overview', nav: true, name: 'Overview'}
    ]);
    this.router = router;
    console.log('Roter', router);
  }

}
