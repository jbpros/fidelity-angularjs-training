(function (angular) {

  describe("MammalController", function () {
    var scope, controller;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('MammalController', { $scope: scope });
    }));

    it("sets the mammal name to 'Lassie'", inject(function () {
      expect(scope.name).toEqual("Lassie");
    }));
  });

})(angular);
