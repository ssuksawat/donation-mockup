module.exports = DonationCtrl;

function DonationCtrl() {
  const vm = this;

  vm.$onInit = init;

  /***** PRIVATE *****/

  function init() {
    const { target, current, defaultDonation } = vm.project;
    vm.percentCompleted = Math.floor(current / target * 100);
    vm.donateAmount = defaultDonation;
  }
}
