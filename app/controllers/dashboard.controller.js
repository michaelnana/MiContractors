app.controller('dashboardController', ['$scope', 'companiesFactory', DashboardController]);

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

  dashboard.changer = function () {
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
