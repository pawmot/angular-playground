routes.$inject = ['$stateProvider'];
import IndexController from './index.controller';

export default function routes($stateProvider) {
    $stateProvider.state('index', {
        url: '/',
        template: require('./index.html'),
        controller: IndexController.name,
        controllerAs: 'index'
    });
}