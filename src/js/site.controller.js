(function() {
    angular.module('PMG Records').controller('SiteController', SiteController);

    SiteController.$inject = ['$location'];

    function SiteController($location) {
        var vm = this;

        vm.mainMenu = ['Store', 'News', 'Events', 'Music', 'Videos', 'Graphics'];
    }
})();