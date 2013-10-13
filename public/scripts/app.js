(function (angular) {

  var app = angular.module("app", []);

  app.factory("getDefaultMammalName", function () {
    return function () { return "Garfield" };
  });

  app.controller("MammalController", function ($scope, getDefaultMammalName) {
    $scope.name = getDefaultMammalName();
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
