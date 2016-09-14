module.exports = AppConfig;

/***** PUBLIC *****/

function AppConfig(app) {
  app.config(['$logProvider', LogConfig]);
  app.config(['$urlRouterProvider', '$locationProvider', RouteConfig]);
}

/***** PRIVATE *****/

function RouteConfig($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/projects/1");
}

function LogConfig($logProvider) {
  $logProvider.debugEnabled(true);
}
