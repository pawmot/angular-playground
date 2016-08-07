import ng from 'angular';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';
import uiRouter from 'angular-ui-router';

import routing from './ngConfig/routing';
import themeConfig from './ngConfig/theme';

import StatusController from './controllers/StatusController';

import index from './features/index';
import counter from './features/counter';
import interpolation from './features/interpolation';

let app = ng.module('app', [
    ngMaterial,
    ngMaterialIcons,
    uiRouter,
    index,
    counter,
    interpolation
]);
app.controller(StatusController.name, StatusController);
app.config(routing);
app.config(themeConfig);

export default app;