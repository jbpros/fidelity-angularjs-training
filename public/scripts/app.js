(function (angular) {

  var app = angular.module("app", []);

  app.controller("MammalController", function ($scope) {
    $scope.name = 'Lassie'
  });

  app.directive("mammal", function() {
    return {
      restrict: "E",
      scope: {
        name: "="
      },
      template: "<div>I'm a mammal and my name is {{ name }}</div>" +
        "<div><input ng-model='name'></div>"
    };
  });

})(angular);
