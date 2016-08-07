import ng from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';

import routing from './interpolation.routes';
import InterpolationController from './interpolation.controller';

let module = ng.module('app.interpolation', [uiRouter, ngMaterial, ngMaterialIcons]);
module.config(routing);
module.controller(InterpolationController.name, InterpolationController);

export default module.name;