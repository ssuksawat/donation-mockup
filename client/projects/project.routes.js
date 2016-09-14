module.exports = MainRoutes;

function MainRoutes($stateProvider) {
  $stateProvider
    .state('projects', {
      url: '/projects/:id',
      templateUrl: 'project.html',
      controller: 'ProjectCtrl as proj'
    });
}
