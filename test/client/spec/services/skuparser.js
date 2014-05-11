'use strict';

describe('Service: Skuparser', function () {

  // load the service's module
  beforeEach(module('rkcApp'));

  // instantiate service
  var Skuparser;
  beforeEach(inject(function (_Skuparser_) {
    Skuparser = _Skuparser_;
  }));

  it('should do something', function () {
    expect(!!Skuparser).toBe(true);
  });

});
