const angular = require('angular');

const app = angular.module('FundMe.shared', [
  require('./progress-bar')
]);

module.exports = app.name;
