(function() {
    angular.module('PMG Records').factory('userService', userService);

    userService.$inject = [];

    function userService() {

        var authenticated = false,
            observerCallbacks = [];

        return {
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            registerObserverCallback: registerObserverCallback
        };

        function isAuthenticated() {
            return authenticated;
        }

        function login() {
            authenticated = true;
            notifyObservers();
        }

        function logout() {
            authenticated = false;
            notifyObservers();
        }

        function registerObserverCallback(callback) {
            observerCallbacks.push(callback);
        }

        function notifyObservers() {
            angular.forEach(observerCallbacks, function(callback) { callback(authenticated); });
        }
        
    }
})();

