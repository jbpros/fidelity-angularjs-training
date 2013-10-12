(function (angular) {

  var app = angular.module("app", []);

  app.controller("MammalController", function ($scope) {
    $scope.makeSomeNoise = function () {
      alert("Roaarrrr!");
    };
  });

  app.directive("mammal", function() {
    return {
      restrict: "E",
      scope: {
        scream: "&"
      },
      template: "<div class='well'><input ng-model='mammal.name'><br>Hi, my name is {{ mammal.name }}!<button ng-click='scream()'>Scream!</button></div>",
      replace: true
    };
  });

})(angular);
