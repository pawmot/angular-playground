import ng from 'angular';
import ngMaterial from 'angular-material';
import ngMaterialIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';
import uiRouter from 'angular-ui-router';

import routing from './ngConfig/routing';
import themeConfig from './ngConfig/theme';
import statesConfig from './ngConfig/states';

import StatusController from './controllers/StatusController';
import HeaderController from './controllers/HeaderController';

import index from './features/index';
import counter from './features/counter';
import interpolation from './features/interpolation';
import scopes from './features/scopes';
import directive from './features/directive';

let app = ng.module('app', [
    ngMaterial,
    ngMaterialIcons,
    ngMessages,
    uiRouter,
    index,
    counter,
    interpolation,
    scopes,
    directive
]);
app.controller(StatusController.name, StatusController);
app.controller(HeaderController.name, HeaderController);
app.config(routing);
app.config(themeConfig);
app.config(statesConfig);

export default app;