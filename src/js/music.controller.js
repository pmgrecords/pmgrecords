(function() {
    angular.module('PMG Records').controller('MusicController', MusicController);

    MusicController.$inject = [];

    function MusicController() {
        var vm = this;
        vm.tracks = [
            { artist: 'P2THEGOLDMA$K', url: 'https://soundcloud.com/p2ski' },
            { artist: 'BARRY WHYTE', url: 'https://soundcloud.com/barrywhytepmg' },
            { artist: 'MA$$IE DA SNEAKGAWD', url: 'https://soundcloud.com/massiethesneak' },
            { artist: 'BREAL GODLY', url: 'https://soundcloud.com/breal_godly' },
            { artist: 'TAMA GUCCI', url: 'https://soundcloud.com/tamahoochie' },
            { artist: 'DRIPPIN SO PRETTY', url: 'https://soundcloud.com/driplord6' },
            { artist: 'ASH EINSTEIN', url: 'https://soundcloud.com/ashielyeinstein' },
            { artist: 'BURGER', url: 'https://soundcloud.com/burger-on-the-beat' },
            { artist: 'WIFIGAWD', url: 'https://soundcloud.com/wifigawd' },
            { artist: 'JT STEEZ', url: 'https://soundcloud.com/jteesteezy' },
            { artist: 'HOT BOY JODI', url: 'https://soundcloud.com/hotboijode' },
            { artist: 'WA$ABI D', url: 'https://soundcloud.com/wasabidpmg' },
            { artist: 'TRILLAWULF', url: 'https://soundcloud.com/trillawolf' },
            { artist: 'GLENNJITSU', url: 'https://soundcloud.com/glenn-latimore' },
            { artist: 'NEEKS', url: 'https://soundcloud.com/neeksthekid' },
            { artist: 'DRETTI FRANKS', url: 'https://soundcloud.com/drettifranks' },
            { artist: 'KAMBO', url: 'https://soundcloud.com/kambino' },
            { artist: 'BRANTHADON', url: 'https://soundcloud.com/honeyberryjesus' },
            { artist: 'KICKDOE', url: 'https://soundcloud.com/47-ruthle-click' },
            { artist: 'SVDFACE D', url: 'https://soundcloud.com/svdfvced3455' },
            { artist: 'WULFTRILLA', url: 'https://soundcloud.com/wulftrilla' }
        ];
    }
})();