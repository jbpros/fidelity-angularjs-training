(function (angular) {

  describe("getDefaultMammalName service", function () {

    beforeEach(angular.mock.module('app'));

    it("exists", inject(function (getDefaultMammalName) {
      expect(getDefaultMammalName).not.toBeNull();
    }));

    it("gives us the default mammal name", inject(function (getDefaultMammalName) {
      expect(getDefaultMammalName()).toBe("Garfield");
    }));
  });

})(angular);
