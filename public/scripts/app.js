(function (angular) {

  var app = angular.module("app", []);

  app.directive("mammal", function() {
    return {
      restrict: "E",
      template: "<div class='well'><input ng-model='mammal.name'><br>Hi, my name is {{ mammal.name }}!</div>",
      replace: true
    };
  });

})(angular);
