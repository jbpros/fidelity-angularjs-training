(function (angular) {

  var app = angular.module("app", []);

  app.controller("AController", function ($scope, greet, greeting) {
    $scope.data = greeting;
    $scope.greet = greet;
  });

  app.controller("BController", function ($scope, greet, greeting) {
    $scope.data = greeting;
    $scope.greet = greet;
  });

  app.factory("defaultGreeting", function () {
    return "Bonjour à vous!";
  });

  app.factory("greeting", function (defaultGreeting) {
    return {};
  });

  app.factory("greet", function (defaultGreeting) {
    return function (greeting) {
      alert(greeting || defaultGreeting);
    }
  });

  app.filter("quote", function () {
    return function (text) {
      return '"' + (text || '') + '"';
    };
  });

})(angular);
