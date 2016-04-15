(function() {
    angular.module('PMG Records').controller('EventsController', EventsController);

    EventsController.$inject = ['eventsService'];

    function EventsController(eventsService) {
        var vm = this;
        
        eventsService.getEvents()
            .then(function(events) {
                vm.events = events;
            });
    }
})();