const DonationComponent = {
  templateUrl: 'donation.html',
  bindings: {
    project: '=',
    onSave: '&',
    onUnsave: '&',
    onDonate: '&'
  },
  controller: ['$scope', '$window', require('./donation.controller')]
};

module.exports = DonationComponent;
