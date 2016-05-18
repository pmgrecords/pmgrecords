(function() {
    angular.module('PMG Records').controller('StoreController', StoreController);

    StoreController.$inject = [];

    function StoreController() {
        var vm = this;
        vm.add = add;
        vm.remove = remove;

        vm.products = (function () {
            var products = [];
            for (var i = 0; i < 20; i++) {
                products.push({});
            }
            return products;
        })();

        // storeService.getProducts()
        //     .then(function(products) {
        //         vm.products = products;
        //     });

        function add() {
            vm.products.unshift({})
        }

        function remove(product) {
            vm.products.remove(product);
        }
    }
})();

