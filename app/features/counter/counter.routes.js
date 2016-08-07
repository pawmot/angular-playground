routes.$inject = ['$stateProvider'];
import CounterController from './counter.controller';

export default function routes($stateProvider) {
    $stateProvider.state('counter', {
        url: '/counter',
        template: require('./counter.html'),
        controller: CounterController.name,
        controllerAs: 'counter'
    });
}