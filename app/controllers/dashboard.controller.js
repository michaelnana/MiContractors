app.controller('dashboardController', ['$scope', DashboardController]);

function DashboardController ($scope) {
  var dashboard = this;
  dashboard.companies = [];

  dashboard.init = function () {
    dashboard.companies = companies.data();
    console.log(JSON.stringify(dashboard.companies));
  }
}
