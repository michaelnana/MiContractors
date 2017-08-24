app.controller('dashboardController', ['$scope', 'companiesFactory', DashboardController]);

function DashboardController ($scope, companiesFactory) {
  var dashboard = this;
  dashboard.companies = [];
  dashboard.currentPage = 1;
  dashboard.pageSize = 10;

  dashboard.init = function () {
    dashboard.companies = companiesFactory.data();
  }

  dashboard.filter = function () {
    dashboard.companies = _.filter(companiesFactory.data(), function (data) {
      return data.name == dashboard.filterValue;
    });
  }

  dashboard.sortBy = function (value) {
    if (value === 'name') {
      dashboard.companies = _.sortBy(companiesFactory.data(), function (data) {
        return data.name;
      });
    } else if (value === 'rating') {
      dashboard.companies = _.sortBy(companiesFactory.data(), function (data) {
        return data.avg_rating_cache;
      });
    } else if (value === 'category') {
      dashboard.companies = _.sortBy(companiesFactory.data(), function (data) {
        return data.categories_info_cache;
      });
    }
  };

  function sortCompanies (value) {
    return _.sortBy(companiesFactory.data(), function (data) {
      return value;
    });
  }
}
