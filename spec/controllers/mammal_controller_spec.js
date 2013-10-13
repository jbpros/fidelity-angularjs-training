(function (angular) {

  describe("MammalController", function () {
    var scope, controller, defaultMammalName;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      defaultMammalName = "default mammal name";
      controller = $controller('MammalController', { $scope: scope, defaultMammalName: defaultMammalName });
    }));

    it("sets the mammal name to the default name", inject(function () {
      expect(scope.name).toEqual(defaultMammalName);
    }));
  });

})(angular);
