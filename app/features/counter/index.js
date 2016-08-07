import ng from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';

import routing from './counter.routes';
import CounterController from './counter.controller';

let module = ng.module('app.counter', [uiRouter, ngMaterial, ngMaterialIcons]);
module.config(routing);
module.controller(CounterController.name, CounterController);

export default module.name;