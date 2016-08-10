import ng from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';

import routing from './scopes.routes';
import ParentController from './scopes.parentController';
import ChildController from './scopes.childController';

let module = ng.module('app.scopes', [uiRouter, ngMaterial, ngMaterialIcons, ngMessages]);
module.config(routing);
module.controller(ParentController.name, ParentController);
module.controller(ChildController.name, ChildController);

export default module.name;