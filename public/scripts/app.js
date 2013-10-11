(function (angular) {

  var app = angular.module("app", []);

  app.directive("mammal", function() {
    return {
      restrict: "A",
      template: "<div class='well'>Here is a dolphin!</div>",
      replace: true
    };
  });

})(angular);
