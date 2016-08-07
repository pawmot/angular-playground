import ng from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';

import routing from './interpolation.routes';
import InterpolationController from './interpolation.controller';
import TemplateParser from './templateParser';

let module = ng.module('app.interpolation', [uiRouter, ngMaterial, ngMaterialIcons, ngMessages]);
module.config(routing);
module.controller(InterpolationController.name, InterpolationController);
module.factory(TemplateParser.name, TemplateParser.factory);

export default module.name;