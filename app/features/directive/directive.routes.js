routes.$inject = ['$stateProvider'];
import DirectiveController from './directive.controller';

export default function routes($stateProvider) {
    $stateProvider.state('directive', {
        url: '/directive',
        views: {
            'content@': {
                template: require('./directive.html'),
                controller: DirectiveController.name,
                controllerAs: 'directiveCtx'
            }
        },
        parent: 'root',
        data: { title: 'Directive' }
    });
}
