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
      transclude: true,
      template: "<div>I'm a mammal and my name is {{ name }}.</div><div ng-transclude></div>" +
        "<div><input ng-model='name'></div>",
      link: function (scope, element, attributes) {
        element.on("click", function () {
          console.log("changing name!");
          scope.$apply(function () {
            scope.name = "Bob";
          });
        });
      }
    };
  });

})(angular);
