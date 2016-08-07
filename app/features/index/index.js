import ng from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import routing from './index.routes';
import IndexController from './index.controller';

let module = ng.module('app.index', [uiRouter, ngMaterial]);
module.config(routing);
module.controller(IndexController.name, IndexController);

export default module.name;