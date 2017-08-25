angular.module('app').controller('dashboardController', ['$scope', 'companiesFactory', DashboardController]);

function DashboardController ($scope, companiesFactory) {
  var dashboard = this;
  dashboard.companies = [];
  dashboard.currentPage = 1;
  dashboard.pageSize = 20;

  dashboard.init = function () {
    dashboard.companies = companiesFactory.data();
    dashboard.filter = 'name';
    dashboard.nameFilter = true;
  };

  dashboard.switchFilter = function () {
    switch(dashboard.filter) {
      case 'name':
        dashboard.nameFilter = true;
        dashboard.ratingFilter = false;
        dashboard.categoryFilter = false;
        break;
      case 'rating':
        dashboard.nameFilter = false;
        dashboard.ratingFilter = true;
        dashboard.categoryFilter = false;
        break;
      case 'category':
        dashboard.nameFilter = false;
        dashboard.ratingFilter = false;
        dashboard.categoryFilter = true;
        break;
    }
  };

  dashboard.sortBy = function (value) {
    switch(value) {
      case 'name':
        dashboard.companies = _.sortBy(companiesFactory.data(), function (data) {
          return data.name;
        });
        break;
      case 'rating':
      dashboard.companies = _.sortBy(companiesFactory.data(), function (data) {
        return data.avg_rating_cache;
      });
        break;
      case 'category':
      dashboard.companies = _.sortBy(companiesFactory.data(), function (data) {
        return data.categories_info_cache;
      });
        break;
    }
  }
}
