(function() {
    angular.module('PMG Records').controller('EventController', EventController);

    EventController.$inject = [];

    function EventController() {
        var vm = this;

        vm.events = [
            {
                name: 'noise in the hood festival',
                date: '04/08',
                location: 'TDB',
                city: 'Los Angeles, CA',
                time: '8:00 PM',
                ticketLink: 'http://',
                image: ''
            },
            {
                name: 'DAD Tour',
                date: '04/08',
                location: 'TDB',
                city: 'Los Angeles, CA',
                time: '8:00 PM',
                ticketLink: 'http://',
                image: ''
            }
        ];
    }
})();