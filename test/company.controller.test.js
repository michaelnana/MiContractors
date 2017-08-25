var assert = require('assert');
var jsdom = require('./test-helper.js');
var app;
var ctrl;
require('./../app/app.js');
require('./../assets/dirpagination/dirPagination.js');
require('./../app/controllers/company.controller.js');

describe('CompanyController', function() {
  beforeEach(ngModule('app'));
  beforeEach(ngModule(function($provide) {
    $provide.factory('companiesFactory', function() {
      return {
        data: function () {
          return [
            {
              "id": 0,
              "profile": "Company A",
              "url": "http://a.link",
              "services": "Offer A Service",
              "name": "Company A",
              "avg_rating_cache": 10,
              "categories_info_cache": "Services",
              "logo": "http://a.link/default.png"
            },
            {
              "id": 1,
              "profile": "Company B",
              "url": "http://b.link",
              "services": "Offer B Service",
              "name": "Company B",
              "avg_rating_cache": 9,
              "categories_info_cache": "Services",
              "logo": "http://b.link/default.png"
            }
          ];
        }
      }
    });
  }));
  beforeEach(inject(function ($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    var $companiesFactory = $injector.get('companiesFactory');
    var scope = $rootScope.$new();
    ctrl = $controller('companyController', {$scope: scope, companiesFactory: $companiesFactory});
  }));
  describe('init', function() {
    it('should find the company that matches the id passed in and set it to company.details', function() {
      var expectedDetails = {
        "id": 1,
        "profile": "Company B",
        "url": "http://b.link",
        "services": "Offer B Service",
        "name": "Company B",
        "avg_rating_cache": 9,
        "categories_info_cache": "Services",
        "logo": "http://b.link/default.png"
      };
      ctrl.companyId = 1;
      ctrl.init();
      assert.deepEqual(ctrl.details, expectedDetails);
    });
  });
});
