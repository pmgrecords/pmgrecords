(function() {
    angular.module('PMG Records').controller('MusicController', MusicController);

    MusicController.$inject = ['artistsService'];

    function MusicController(artistsService) {
        var vm = this;

        vm.soundCloudUrl = soundCloudUrl;

        function soundCloudUrl(artist) {
            return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/" + artist.soundCloudId +
                "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        }

        artistsService.getArtists()
            .then(function(artists) {
                vm.artists = artists;
                vm.artists.remove(vm.artists.getByProperty('name', 'WIFIGAWD'));
            });
    }
})();