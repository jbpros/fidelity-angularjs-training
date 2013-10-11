(function (angular) {

  var app = angular.module("app", []);

  app.controller("AppController", function ($scope, greet) {
    $scope.data = { message: "Hi there!" };
    $scope.greet = greet;
  });

  app.factory("defaultGreeting", function () {
    return "Bonjour à vous!";
  });

  app.factory("greet", function (defaultGreeting) {
    return function (greeting) {
      alert(greeting || defaultGreeting);
    }
  });

})(angular);
