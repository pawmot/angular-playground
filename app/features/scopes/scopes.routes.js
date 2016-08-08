routes.$inject = ['$stateProvider'];
import ParentController from './scopes.parentController';

export default function routes($stateProvider) {
    $stateProvider.state('scopes', {
        url: '/scopes',
        template: require('./scopes.html'),
        controller: ParentController.name,
        controllerAs: 'parent'
    });
}