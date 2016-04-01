(function() {
    angular.module('PMG Records').controller('SiteController', SiteController);

    SiteController.$inject = ['$location'];

    function SiteController($location) {
        var vm = this;

        vm.mainMenu = [
            { name: 'STORE', url: 'store' },
            { name: 'EVENTS', url: 'events' },
            { name: 'MUSIC', url: 'music' },
            { name: 'VIDEOS', url: 'videos' },
            { name: 'ARTWORK', url: 'artwork' },
            { name: 'CONTACT', url: 'contact' }
        ];
        vm.isActive = isActive;

        if ($location.path() != '/') {
            vm.showNavigation = true;
        }

        function isActive(viewLocation) {
            return $location.path().startsWith(viewLocation);
        }
    }
})();