routes.$inject = ['$stateProvider'];
import DirectiveController from './directive.controller';

export default function routes($stateProvider) {
    $stateProvider.state('directive', {
        url: '/directive',
        template: require('./directive.html'),
        controller: DirectiveController.name,
        controllerAs: 'directiveCtx'
    });
}