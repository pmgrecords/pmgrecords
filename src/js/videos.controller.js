(function() {
    angular.module('PMG Records').controller('VideosController', VideosController);

    VideosController.$inject = ['videosService'];

    function VideosController(videosService) {
        var vm = this;
        vm.add = add;
        vm.remove = remove;

        videosService.getVideos()
            .then(function(videos) {
                vm.videos = videos;
                vm.videos.remove(vm.videos.getById("3"));
                vm.videos.remove(vm.videos.getById("4"));
                vm.videos.remove(vm.videos.getById("6"));
                vm.videos.remove(vm.videos.getById("7"));
                vm.videos.remove(vm.videos.getById("14"));
                vm.videos.remove(vm.videos.getById("15"));
                vm.videos.remove(vm.videos.getById("17"));

                //missing
                vm.videos.remove(vm.videos.getById("8"));
                vm.videos.remove(vm.videos.getById("10"));
                vm.videos.remove(vm.videos.getById("16"));
            });

        function add() {
            vm.videos.unshift({})
        }

        function remove(video) {
            vm.videos.remove(video);
        }
    }
})();