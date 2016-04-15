(function() {
    angular.module('PMG Records').controller('VideosController', VideosController);

    VideosController.$inject = ['videosService'];

    function VideosController(videosService) {
        var vm = this;

        videosService.getVideos()
            .then(function(videos) {
                vm.videos = videos;
            });
    }
})();