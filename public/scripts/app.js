function AppController($scope) {
  $scope.data = { message: "Hi there!" };
  $scope.greet = function () { alert($scope.data.message); };
}
