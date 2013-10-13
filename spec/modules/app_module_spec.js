(function (angular) {

  describe("'app' module", function () {
    var module;

    beforeEach(function () {
      module = angular.module('app');
    });

    it("exists", function () {
      expect(module).not.toBeNull();
      console.log(module);
    });
  });

})(angular);
