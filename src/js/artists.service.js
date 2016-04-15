(function () {
    angular.module('PMG Records').factory('artistsService', artistsService);

    artistsService.$inject = ['$http', 'api'];
    
    function artistsService($http, api) {
        return {
            getArtists: getArtists
        };

        function getArtists() {
            return $http.get(api.artists)
                .then(getArtistsComplete)
                .catch(getArtistsFailed);

            function getArtistsComplete(response) {
                return response.data;
            }

            function getArtistsFailed(error) {
                console.log(error);
            }
        }
    }
})();