import HeaderController from '../controllers/HeaderController';

state.$inject = ['$stateProvider'];

export default function state($stateProvider) {
    $stateProvider
        .state('root', {
            url: '',
            abstract: true,
            views: {
                'header': {
                    template: require('../layout/header.html'),
                    controller: HeaderController.name,
                    controllerAs: 'header'
                }
            }
        });
}