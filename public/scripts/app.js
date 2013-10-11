(function (angular) {

  var app = angular.module("app", []);

  app.controller("AppController", function ($scope, defaultGreeting) {
    $scope.data = { message: "Hi there!" };
    $scope.greet = function () {
      alert($scope.data.message || defaultGreeting);
    };
  });

  app.factory("defaultGreeting", function () {
    return "Bonjour à vous!";
  });

})(angular);
