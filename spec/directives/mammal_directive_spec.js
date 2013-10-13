(function (angular) {

  describe("'mammal' directive", function () {
    var scope, html, element;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($rootScope, $compile) {
      html       = "<mammal name='name'></name>";
      scope      = $rootScope.$new();
      scope.name = "Flipper";
      element    = angular.element(html);
      $compile(element)(scope);
      scope.$digest();
    }));

    it("tells the reader we're a mammal with a name", function () {
      expect(element.html()).toMatch("I'm a mammal and my name is Flipper.");
    });

    it("displays an input field to edit the mammal's name", function () {
      var input = element.find('input');
      expect(input.length).toEqual(1);
      expect(input.val()).toBe("Flipper");
      input.val("Echo").trigger('input');
      expect(scope.name).toBe("Echo");
    });
  });

})(angular);
