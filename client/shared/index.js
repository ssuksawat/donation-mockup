const angular = require('angular');

const app = angular.module('FundMe.shared', [
  require('./progress-bar'),
  require('./modal')
]);

module.exports = app.name;
