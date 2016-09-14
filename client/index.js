require('jquery');

const angular = require('angular');
const uiRouter = require('angular-ui-router');

const app = angular.module('FundMe', [
  /* Libraries */
  uiRouter.default,

  /* Dependencies */
  require('./shared'),
  require('./projects')
]);

require('./app.config')(app);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['FundMe']);
});
