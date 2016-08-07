routing.$inject = ['$urlRouterProvider', '$locationProvider'];

// TODO: check ng-annotate loader for Webpack
export default function routing($urlRouterProvider, $locationProvider) {
    // TODO: consider html5Mode
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}