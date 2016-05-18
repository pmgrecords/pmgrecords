(function() {
    angular.module('PMG Records').controller('EventsController', EventsController);

    EventsController.$inject = ['eventsService'];

    function EventsController(eventsService) {
        var vm = this;

        vm.add = add;

        eventsService.getEvents()
            .then(function(events) {
                vm.events = events;
                vm.events.unshift({ imagePath: 'images/events/3.jpg' });
            });

        function add() {
            vm.events.unshift({});
        }

    }
})();