(function() {
    angular.module('PMG Records').controller('StoreController', StoreController);

    StoreController.$inject = [];
    
    function StoreController() {
        var vm = this;
        
        vm.products = (function() {
            var products = [];
            for (var i = 0; i < 20; i++) {
                products.push({});
            }
            return products;
        })();
    }
})();

