(function (angular) {

  var app = angular.module("app", []);

  app.controller("MammalController", function ($scope) {
  });

  app.directive("mammal", function() {
    return {
      restrict: "E",
      template: "<div>I'm a mammal and my name is {{ name }}</div>",
      link: function (scope, element, attributes) {
        scope.name = attributes.name;
      }
    };
  });

})(angular);
