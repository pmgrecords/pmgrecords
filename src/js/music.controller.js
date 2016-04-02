(function() {
    angular.module('PMG Records').controller('MusicController', MusicController);

    MusicController.$inject = ['$http', 'Paths'];

    function MusicController($http, Paths) {
        var vm = this;

        vm.soundCloudUrl = soundCloudUrl;

        function soundCloudUrl(artist) {
            return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/" + artist.soundCloudId +
                "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
        }

        // $http.get(Paths.videos).then(function(response) {
        //     console.log(response);
        // });

        vm.artists = [
            { name: 'P2THEGOLDMA$K', url: 'https://soundcloud.com/p2ski', soundCloudId: '10965665' },
            { name: 'BARRY WHYTE', url: 'https://soundcloud.com/barrywhytepmg', soundCloudId: '23961374' },
            { name: 'MA$$IE DA SNEAKGAWD', url: 'https://soundcloud.com/massiethesneak', soundCloudId: '37966237' },
            { name: 'BREAL GODLY', url: 'https://soundcloud.com/breal_godly', soundCloudId: '129889015' },
            { name: 'TAMA GUCCI', url: 'https://soundcloud.com/tamahoochie', soundCloudId: '6383845'  },
            { name: 'DRIPPIN SO PRETTY', url: 'https://soundcloud.com/driplord6', soundCloudId: '74246418' },
            { name: 'ASH EINSTEIN', url: 'https://soundcloud.com/ashielyeinstein', soundCloudId: '87889872' },
            { name: 'BURGER', url: 'https://soundcloud.com/burger-on-the-beat', soundCloudId: '72815753' },
            { name: 'JT STEEZ', url: 'https://soundcloud.com/jteesteezy', soundCloudId: '11167003&' },
            { name: 'HOT BOY JODI', url: 'https://soundcloud.com/hotboijode', soundCloudId: '90532701' },
            { name: 'WA$ABI D', url: 'https://soundcloud.com/wasabidpmg', soundCloudId: '4046729' },
            { name: 'TRILLAWULF', url: 'https://soundcloud.com/trillawolf', soundCloudId: '33218062' },
            { name: 'GLENNJITSU', url: 'https://soundcloud.com/glenn-latimore', soundCloudId: '35748391' },
            { name: 'NEEKS', url: 'https://soundcloud.com/neeksthekid', soundCloudId: '93300652' },
            { name: 'DRETTI FRANKS', url: 'https://soundcloud.com/drettifranks', soundCloudId: '21585826' },
            { name: 'KAMBO', url: 'https://soundcloud.com/kambino', soundCloudId: '21277008' },
            { name: 'BRANTHADON', url: 'https://soundcloud.com/honeyberryjesus', soundCloudId: '48642063' },
            { name: 'KICKDOE', url: 'https://soundcloud.com/47-ruthle-click', soundCloudId: '77277754' },
            { name: 'SVDFACE D', url: 'https://soundcloud.com/svdfvced3455', soundCloudId: '9412441' },
            { name: 'WULFTRILLA', url: 'https://soundcloud.com/wulftrilla', soundCloudId: '162970431' },
            { name: 'WIFIGAWD', url: 'https://soundcloud.com/wifigawd', soundCloudId: '62752671' }
        ];
    }
})();