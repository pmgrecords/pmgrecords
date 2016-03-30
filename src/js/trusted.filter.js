(function() {
    angular.module('PMG Records').filter('trusted', trusted);

    trusted.$inject = ['$sce'];

    function trusted($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }
})();