(function () {
    angular.module('PMG Records').factory('storeService', storeService);

    storeService.$inject = ['$http', 'api'];

    function storeService($http, api) {
        return {
            getProducts: getProducts
        };

        function getProducts() {
            return $http.get(api.products)
                .then(getProductsComplete)
                .catch(getProductsFailed);

            function getProductsComplete(response) {
                return response.data;
            }

            function getProductsFailed(error) {
                console.log(error);
            }
        }
    }
})();