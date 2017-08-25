var assert = require('assert');
var jsdom = require('./test-helper.js');
var app;
var ctrl;
require('./../app/app.js');
require('./../assets/dirpagination/dirPagination.js');
require('./../app/controllers/dashboard.controller.js');

describe('DashboardController', function() {
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
    ctrl = $controller('dashboardController', {$scope: scope, companiesFactory: $companiesFactory});
  }));
  describe('init', function() {
    it('should initialize the companies data as well as the default filter', function() {
      ctrl.init();
      assert.equal(ctrl.currentPage, 1);
      assert.equal(ctrl.pageSize, 20);
      assert.equal(ctrl.companies.length, 2);
      assert.equal(ctrl.filter, 'name');
      assert.equal(ctrl.nameFilter, true);
    });
  });
  describe('switchFilter', function() {
    it('should set nameFilter to true if dashboard.filter is name and all the other filters to false', function() {
      ctrl.filter = 'name';
      ctrl.switchFilter();
      assert.equal(ctrl.nameFilter, true);
      assert.equal(ctrl.ratingFilter, false);
      assert.equal(ctrl.categoryFilter, false);
    });
    it('should set ratingFilter to true if dashboard.filter is rating and all the other filters to false', function() {
      ctrl.filter = 'rating';
      ctrl.switchFilter();
      assert.equal(ctrl.nameFilter, false);
      assert.equal(ctrl.ratingFilter, true);
      assert.equal(ctrl.categoryFilter, false);
    });
    it('should set categoryFilter to true if dashboard.filter is category and all the other filters to false', function() {
      ctrl.filter = 'category';
      ctrl.switchFilter();
      assert.equal(ctrl.nameFilter, false);
      assert.equal(ctrl.ratingFilter, false);
      assert.equal(ctrl.categoryFilter, true);
    });
  });
  describe('sortBy', function() {
    it('should sort companies by name if input is name', function() {
      ctrl.sortBy('name');
      assert.equal(ctrl.companies[0].name, 'Company A');
      assert.equal(ctrl.companies[1].name, 'Company B');
    });
    it('should sort companies by rating if input is rating', function() {
      ctrl.sortBy('rating');
      assert.equal(ctrl.companies[0].name, 'Company B');
      assert.equal(ctrl.companies[1].name, 'Company A');
    });
    it('should sort companies by category if input is category', function() {
      ctrl.sortBy('category');
      assert.equal(ctrl.companies[0].name, 'Company A');
      assert.equal(ctrl.companies[1].name, 'Company B');
    });
  });
});
