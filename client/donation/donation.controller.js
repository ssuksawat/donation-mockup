module.exports = DonationCtrl;

function DonationCtrl($scope, $window) {
  const vm = this;

  vm.$onInit = init;
  vm.openShareModal = openShareModal;
  vm.openWhyModal = openWhyModal;

  /***** PUBLIC *****/

  function openShareModal() {
    $scope.$broadcast('share:modal:open');
  }

  function openWhyModal() {
    $scope.$broadcast('why:modal:open');
  }

  /***** PRIVATE *****/

  function init() {
    vm.donateAmount = vm.project.defaultDonation;
    vm.currentUrl = $window.location.href;

    $scope.$watch('$ctrl.project.current', (newCurrent) => {
      if (!newCurrent) { return; }
      const { target, current } = vm.project;
      vm.percentCompleted = Math.floor(current / target * 100);
      vm.amountRequired = target - current;
    });
  }
}
