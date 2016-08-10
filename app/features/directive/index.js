import ng from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';

import routing from './directive.routes';
import DirectiveController from './directive.controller';
import LinkDirective from './linkDirective';

let module = ng.module('app.directive', [uiRouter, ngMaterial, ngMaterialIcons]);
module.config(routing);
module.controller(DirectiveController.name, DirectiveController);
module.directive('myLink', LinkDirective);

export default module.name;