const app = require('angular').module('FundMe.shared.modal', [
  /* HTML Template */
  require('./modal.html')
]);

app.directive('modal', ['$timeout', require('./modal.directive')]);

module.exports = app.name;
