module.exports = ProjectCtrl;

function ProjectCtrl($stateParams, ProjectService) {
  const vm = this;

  vm.$onInit = init;
  vm.addBookmark = addBookmark;
  vm.deleteBookmark = deleteBookmark;
  vm.donate = donate;

  /***** PUBLIC *****/

  function addBookmark(id) {
    ProjectService.addBookmark(id).then(() => vm.currentProject.bookmarked = true);
  }

  function deleteBookmark(id) {
    ProjectService.deleteBookmark(id).then(() => vm.currentProject.bookmarked = undefined);
  }

  function donate(id, amount) {
    ProjectService.donate(id, amount).then(project => vm.currentProject = project);
  }

  /***** PRIVATE *****/

  function init() {
    ProjectService.getProjectById($stateParams.id).then(project => {
      vm.currentProject = project;
    });
  }
}
