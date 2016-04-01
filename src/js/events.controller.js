(function() {
    angular.module('PMG Records').controller('EventsController', EventsController);

    EventsController.$inject = [];

    function EventsController() {
        var vm = this;

        vm.events = [
            {
                name: 'noise in the hood festival',
                date: '04/08',
                location: 'TDB',
                city: 'Los Angeles, CA',
                time: '8:00 PM',
                image: 'images/events/2.png'
            },
            {
                name: 'DAD Tour',
                date: '04/08',
                location: 'TBD',
                city: 'TBD',
                time: 'TBD',
                image: 'images/events/1.png'
            }
        ];
    }
})();