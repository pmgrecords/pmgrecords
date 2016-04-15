(function() {
    angular.module('PMG Records').run(initialize);

    initialize.$inject = [];

    function initialize() {
        Array.prototype.remove = function(object) {
            return this.splice(this.indexOf(object), 1);
        };

        Array.prototype.replaceByProperty = function(property, object) {
            var results = this.filter(function(o) { return o[property] == object[property] }),
                remove = results.length && results[0],
                index = this.indexOf[remove];
            this[index] = object;
            return this;
        };

        Array.prototype.getByProperty = function(property, value) {
            var results = this.filter(function(o) {
                return o[property] == value;
            });
            return results && results[0];
        }
    }
})();