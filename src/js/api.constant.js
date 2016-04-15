(function() {

    var development = 'http://159.203.175.201',
        production = 'http://159.203.175.201',
        host = development;

    angular.module('PMG Records').constant('api', {
        videos: host + '/videos',
        events: host + '/shows',
        artists: host + '/artists',
        products: host + '/products'
    });
})();