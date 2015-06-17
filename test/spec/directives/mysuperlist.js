'use strict';

describe('Directive: mySuperList', function () {

  // load the directive's module
  beforeEach(module('testApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-super-list></my-super-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mySuperList directive');
  }));
});
