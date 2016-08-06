import ng from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import routing from './routing';

import StatusCtrl from './controllers/StatusCtrl';

let app = ng.module('app', [ngMaterial, uiRouter]);
app.controller(StatusCtrl.name, StatusCtrl);
app.config(routing);

export default app;