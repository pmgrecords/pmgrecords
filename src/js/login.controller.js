(function() {
    angular.module('PMG Records').controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'userService'];
    
    function LoginController($location, userService) {
        var vm = this;

        vm.login = login;

        function login() {
            userService.login();
            $location.path('home');
        }
    }
})();