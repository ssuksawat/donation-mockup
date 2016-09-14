const angular = require('angular');

const app = angular.module('FundMe.donation', [
  require('./donation.html')
]);

app.component('donation', require('./donation.component'));

module.exports = app.name;
