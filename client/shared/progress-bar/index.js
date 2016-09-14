const angular = require('angular');

const app = angular.module('FundMe.shared.progressbar', []);
app.component('progressBar', require('./progress-bar.component'));

module.exports = app.name;
