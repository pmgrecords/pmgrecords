(function() {
    angular.module('PMG Records').controller('ArtworkController', ArtworkController);

    function ArtworkController() {
        var vm = this;

        vm.images = [];

        for(var i = 1; i <= 28; i++) {
            vm.images.push({
                id: i,
                url: 'images/art/' + i + '.JPG'
            });
        }
    }
})();
