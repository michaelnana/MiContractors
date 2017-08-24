app.controller('dashboardController', ['$scope', DashboardController]);

function DashboardController ($scope) {
  var dashboard = this;
  dashboard.companies = [];
  dashboard.currentPage = 1;
  dashboard.pageSize = 10;

  dashboard.init = function () {
    dashboard.companies = companies.data();
  }

  dashboard.filter = function () {
    dashboard.companies = _.filter(companies.data(), function (data) {
      return data.name == dashboard.filterValue;
    });
  }

  dashboard.sortBy = function (value) {
    if (value === 'name') {
      dashboard.companies = _.sortBy(companies.data(), function (data) {
        return data.name;
      });
    } else if (value === 'rating') {
      dashboard.companies = _.sortBy(companies.data(), function (data) {
        return data.avg_rating_cache;
      });
    }
  };

  function sortCompanies (value) {
    return _.sortBy(companies.data(), function (data) {
      return value;
    });
  }
}
