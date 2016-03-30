(function() {
    angular.module('PMG Records').controller('VideosController', VideosController);

    VideosController.$inject = [];

    function VideosController() {
        var vm = this;
    
        vm.videos = [
            'https://www.youtube.com/embed/IkGyqUZcGHU',
            'https://www.youtube.com/embed/6P2pu9aRzVc',
            'https://www.youtube.com/embed/NhjQETUBOXM',
            'https://www.youtube.com/embed/qj9nlXfPyBQ',
            'https://www.youtube.com/embed/Jlgc1sh6xrE',
            'https://www.youtube.com/embed/D4cMuLgpth0',
            'https://www.youtube.com/embed/V3LT-uHXrZs',
            'https://www.youtube.com/embed/g3Xbp1LoOJA',
            'https://www.youtube.com/embed/fhFsNW0e5c8',
            'https://www.youtube.com/embed/SNkJEtF2_Zg',
            'https://www.youtube.com/embed/cQXp7iXZE2k',
            'https://www.youtube.com/embed/zl-COTkxXqU',
            'https://www.youtube.com/embed/zJIblsHo0aw',
            'https://www.youtube.com/embed/i9ADK_zGWr0',
            'https://www.youtube.com/embed/KJwHgJNwE_U',
            'https://www.youtube.com/embed/ZO4hJZ5dXqY',
            'https://www.youtube.com/embed/fSobwiLdT_w',
            'https://www.youtube.com/embed/EQbEF429Pb0',
            'https://www.youtube.com/embed/Ye0NNwpa3OE',
            'https://www.youtube.com/embed/Q4GAcGuPgPw',
            'https://www.youtube.com/embed/OmrzZHj0Gcc'
        ];

    }
})();