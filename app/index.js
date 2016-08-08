import ng from 'angular';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';

import routing from './ngConfig/routing';
import themeConfig from './ngConfig/theme';

import StatusController from './controllers/StatusController';

import index from './features/index';
import counter from './features/counter';
import interpolation from './features/interpolation';
import scopes from './features/scopes';

let app = ng.module('app', [
    ngMaterial,
    ngMaterialIcons,
    ngMessages,
    uiRouter,
    index,
    counter,
    interpolation,
    scopes
]);
app.controller(StatusController.name, StatusController);
app.config(routing);
app.config(themeConfig);

export default app;