app.controller('companyController', ['$scope', 'companiesFactory', CompanyController]);

function CompanyController ($scope, companiesFactory) {
  var company = this;
  company.companyId = window.location.pathname.substring(1).split("/")[1];
  company.details = {};

  company.init = function () {
    company.details = _.find(companiesFactory.data(), function(data) {
      return data.id == company.companyId;
    });
  }
}
