(function() {
    angular.module('PMG Records').controller('SiteController', SiteController);

    SiteController.$inject = ['$location'];

    function SiteController($location) {
        var vm = this;

        vm.mainMenu = [
            { name: 'Store', url: 'store' },
            { name: 'News', url: 'news' },
            { name: 'Events', url: 'events' },
            { name: 'Music', url: 'music' },
            { name: 'Videos', url: 'videos' },
            { name: 'Artwork', url: 'artwork' },
            { name: 'Contact', url: 'contact' }
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