(function (angular) {

  var app = angular.module("app", []);

  app.controller("AnimalsController", function ($scope) {
    $scope.animals = [
      { name: "capybara" },
      { name: "bear" },
      { name: "snake" },
      { name: "spider" },
      { name: "jellyfish" },
      { name: "rat" },
      { name: "whale" }
    ];
  });

})(angular);
