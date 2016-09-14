const angular = require('angular');

const app = angular.module('FundMe.projects', [
  /* Dependencies */
  require('../donation'),

  /* Templates */
  require('./project.html')
]);

app.service('ProjectService', ['$q', require('./project.service')]);
app.controller('ProjectCtrl', ['$stateParams', 'ProjectService', require('./project.controller')]);
app.config(['$stateProvider', require('./project.routes')]);

module.exports = app.name;
