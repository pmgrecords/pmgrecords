(function() {
    angular.module('PMG Records').controller('SiteController', SiteController);

    SiteController.$inject = ['$location', 'userService'];

    function SiteController($location, userService) {
        var vm = this;

        vm.mainMenu = [
            { name: 'STORE', url: 'store' },
            { name: 'EVENTS', url: 'events' },
            { name: 'MUSIC', url: 'music' },
            { name: 'VIDEOS', url: 'videos' },
            { name: 'ARTWORK', url: 'artwork' },
            { name: 'CONTACT', url: 'contact' }
        ];
        
        vm.adminMenu = [
            { name: 'STORE', url: 'edit-store' },
            { name: 'EVENTS', url: 'edit-events' },
            { name: 'MUSIC', url: 'edit-music' },
            { name: 'VIDEOS', url: 'edit-videos' },
            { name: 'ARTWORK', url: 'edit-artwork' }
        ];
        vm.isActive = isActive;

        if ($location.path() != '/') {
            vm.showNavigation = true;
        }

        function isActive(viewLocation) {
            return $location.path().startsWith(viewLocation);
        }

        userService.registerObserverCallback(function(authenticated) {
            vm.isAdmin = authenticated;
        });
    }
})();