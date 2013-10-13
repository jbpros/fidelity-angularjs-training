(function (angular) {

  describe("defaultMammalName service", function () {

    beforeEach(angular.mock.module('app'));

    it("exists", inject(function (defaultMammalName) {
      expect(defaultMammalName).not.toBeNull();
    }));

    it("gives us the default mammal name", inject(function (defaultMammalName) {
      expect(defaultMammalName).toBe("Garfield");
    }));
  });

})(angular);
