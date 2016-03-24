(function() {
    angular.module('PMG Records').controller('ArtworkController', ArtworkController);

    function ArtworkController() {
        var vm = this;

        vm.images = [];

        for(var i = 1; i <= 19; i++) {
            vm.images.push({
                url: 'images/art/' + i + '.JPG'
            });
            // var img = new Image();
            // img.onload = function() {
            //
            //     vm.images.push({
            //         url: 'images/art/' + i + '.JPG',
            //         width: this.width,
            //         height: this.height
            //     });
            // };
            // img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';



        }
    }
})();
