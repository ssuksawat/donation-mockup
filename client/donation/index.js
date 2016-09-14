const angular = require('angular');

const app = angular.module('FundMe.donation', [
  /* HTML Templates */
  require('./modals/share-modal.html'),
  require('./modals/why-modal.html'),
  require('./donation.html')
]);

app.component('donation', require('./donation.component'));

module.exports = app.name;
