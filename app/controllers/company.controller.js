app.controller('companyController', ['$scope', CompanyController]);

function CompanyController ($scope) {
  var company = this;
  company.companyId = window.location.pathname.substring(1).split("/")[1];
  company.details = {};

  company.init = function () {
    company.details = _.find(companies.data(), function(data) {
      return data.id == company.companyId;
    });
  }
}
