routes.$inject = ['$stateProvider'];
import InterpolationController from './interpolation.controller';

export default function routes($stateProvider) {
    $stateProvider.state('interpolation', {
        url: '/interpolation',
        template: require('./interpolation.html'),
        controller: InterpolationController.name,
        controllerAs: 'interpolation'
    });
}