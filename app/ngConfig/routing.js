routing.$inject = ['$urlRouterProvider', '$locationProvider'];

// TODO: check ng-annotate loader for Webpack
export default function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}