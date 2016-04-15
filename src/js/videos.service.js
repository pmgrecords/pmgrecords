(function () {
    angular.module('PMG Records').factory('videosService', videosService);

    videosService.$inject = ['$http', 'api'];

    function videosService($http, api) {
        return {
            getVideos: getVideos
        };

        function getVideos() {
            return $http.get(api.videos)
                .then(getVideosComplete)
                .catch(getVideosFailed);

            function getVideosComplete(response) {
                return response.data;
            }

            function getVideosFailed(error) {
                console.log(error);
            }
        }
    }
})();