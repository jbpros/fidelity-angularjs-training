(function (angular) {

  var app = angular.module("app", []);

  app.factory("defaultMammalName", function () {
    return "Garfield";
  });

  app.controller("MammalController", function ($scope, defaultMammalName) {
    $scope.name = defaultMammalName;
  });

  app.directive("mammal", function() {
    return {
      restrict: "E",
      scope: {
        name: "="
      },
      transclude: true,
      template: "<div>I'm a mammal and my name is {{ name }}.</div><div ng-transclude></div>" +
        "<div><input ng-model='name'></div>"
    };
  });

})(angular);
