(function() {

    angular.module('PMG Records').config(configure);

    configure.$inject = ['$routeProvider', '$locationProvider'];

    function configure($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', { templateUrl: 'landing.html' })
            .when('/:page', {
                templateUrl: function (params) {
                    return params.page + '.html';
                }
            })
            .otherwise({templateUrl: 'home.html'});
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }
})();