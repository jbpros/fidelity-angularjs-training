(function (angular) {

  var app = angular.module("app", []);

  app.controller("AppController", function ($scope) {
    $scope.data = { message: "Hi there!" };
    $scope.greet = function () { alert($scope.data.message); };
  });

})(angular);
