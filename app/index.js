import ng from 'angular';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import routing from './routing';

import StatusController from './controllers/StatusController';

import index from './features/index';

let app = ng.module('app', [ngMaterial, uiRouter, index]);
app.controller(StatusController.name, StatusController);
app.config(routing);

export default app;