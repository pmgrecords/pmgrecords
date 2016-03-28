(function() {
    angular.module('PMG Records').controller('VideosController', VideosController);

    VideosController.$inject = [];

    function VideosController() {
        var vm = this;

        vm.videos = [
            'https://www.youtube.com/watch?v=IkGyqUZcGHU',
            'https://www.youtube.com/watch?v=6P2pu9aRzVc',
            'https://www.youtube.com/watch?v=NhjQETUBOXM',
            'https://www.youtube.com/watch?v=qj9nlXfPyBQ',
            'https://www.youtube.com/watch?v=Jlgc1sh6xrE',
            'https://www.youtube.com/watch?v=D4cMuLgpth0',
            'https://www.youtube.com/watch?v=V3LT-uHXrZs',
            'https://www.youtube.com/watch?v=g3Xbp1LoOJA',
            'https://www.youtube.com/watch?v=fhFsNW0e5c8',
            'https://www.youtube.com/watch?v=SNkJEtF2_Zg',
            'https://www.youtube.com/watch?v=cQXp7iXZE2k',
            'https://www.youtube.com/watch?v=zl-COTkxXqU',
            'https://www.youtube.com/watch?v=zJIblsHo0aw',
            'https://www.youtube.com/watch?v=i9ADK_zGWr0',
            'https://www.youtube.com/watch?v=KJwHgJNwE_U',
            'https://www.youtube.com/watch?v=ZO4hJZ5dXqY',
            'https://www.youtube.com/watch?v=fSobwiLdT_w',
            'https://www.youtube.com/watch?v=EQbEF429Pb0',
            'https://www.youtube.com/watch?v=Ye0NNwpa3OE',
            'https://www.youtube.com/watch?v=Q4GAcGuPgPw',
            'https://www.youtube.com/watch?v=OmrzZHj0Gcc'
        ];

    }
})();