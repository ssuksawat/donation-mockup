module.exports = ProjectCtrl;

function ProjectCtrl($stateParams, ProjectService) {
  const vm = this;

  vm.$onInit = init;

  /***** PRIVATE *****/

  function init() {
    ProjectService.getProjectById($stateParams.id).then(project => {
      vm.currentProject = project;
    });
  }
}
