(function () {
    angular.module('PMG Records').factory('eventsService', eventsService);

    eventsService.$inject = ['$http', 'api'];

    function eventsService($http, api) {
        return {
            getEvents: getEvents
        };

        function getEvents() {
            return $http.get(api.events)
                .then(getEventsComplete)
                .catch(getEventsFailed);

            function getEventsComplete(response) {
                return response.data;
            }

            function getEventsFailed(error) {
                console.log(error);
            }
        }
    }
})();