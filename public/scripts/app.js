(function (angular) {

  var app = angular.module("app", []);

  app.controller("DolphinController", function ($scope) {
    $scope.mammal = { type: "dolphin", name: "Flipper" };
  });

  app.directive("mammal", function() {
    return {
      restrict: "E",
      template: "<div class='well'>Hi, my name is {{ mammal.name }} and I'm  a {{ mammal.type }}!</div>",
      replace: true
    };
  });

})(angular);
