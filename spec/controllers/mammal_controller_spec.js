(function (angular) {

  describe("MammalController", function () {
    var scope, controller, defaultMammalName, getDefaultMammalName;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      defaultMammalName = "default mammal name";
      getDefaultMammalName = jasmine.createSpy("getDefaultMammalName serivce").andReturn(defaultMammalName);
      controller = $controller('MammalController', { $scope: scope, getDefaultMammalName: getDefaultMammalName });
    }));

    it("asks for the default mammal name", inject(function () {
      expect(getDefaultMammalName).toHaveBeenCalled();
    }));

    it("sets the mammal name to the default name", inject(function () {
      expect(scope.name).toEqual(defaultMammalName);
    }));
  });

})(angular);
