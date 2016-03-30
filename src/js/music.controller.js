(function() {
    angular.module('PMG Records').controller('MusicController', MusicController);

    MusicController.$inject = [];

    function MusicController() {
        var vm = this;
        vm.artists = [
            { name: 'P2THEGOLDMA$K', url: 'https://soundcloud.com/p2ski' },
            { name: 'BARRY WHYTE', url: 'https://soundcloud.com/barrywhytepmg' },
            { name: 'MA$$IE DA SNEAKGAWD', url: 'https://soundcloud.com/massiethesneak' },
            { name: 'BREAL GODLY', url: 'https://soundcloud.com/breal_godly' },
            { name: 'TAMA GUCCI', url: 'https://soundcloud.com/tamahoochie' },
            { name: 'DRIPPIN SO PRETTY', url: 'https://soundcloud.com/driplord6' },
            { name: 'ASH EINSTEIN', url: 'https://soundcloud.com/ashielyeinstein' },
            { name: 'BURGER', url: 'https://soundcloud.com/burger-on-the-beat' },
            { name: 'WIFIGAWD', url: 'https://soundcloud.com/wifigawd' },
            { name: 'JT STEEZ', url: 'https://soundcloud.com/jteesteezy' },
            { name: 'HOT BOY JODI', url: 'https://soundcloud.com/hotboijode' },
            { name: 'WA$ABI D', url: 'https://soundcloud.com/wasabidpmg' },
            { name: 'TRILLAWULF', url: 'https://soundcloud.com/trillawolf' },
            { name: 'GLENNJITSU', url: 'https://soundcloud.com/glenn-latimore' },
            { name: 'NEEKS', url: 'https://soundcloud.com/neeksthekid' },
            { name: 'DRETTI FRANKS', url: 'https://soundcloud.com/drettifranks' },
            { name: 'KAMBO', url: 'https://soundcloud.com/kambino' },
            { name: 'BRANTHADON', url: 'https://soundcloud.com/honeyberryjesus' },
            { name: 'KICKDOE', url: 'https://soundcloud.com/47-ruthle-click' },
            { name: 'SVDFACE D', url: 'https://soundcloud.com/svdfvced3455' },
            { name: 'WULFTRILLA', url: 'https://soundcloud.com/wulftrilla' }
        ];
    }
})();