const DonationComponent = {
  templateUrl: 'donation.html',
  bindings: {
    project: '='
  },
  controller: require('./donation.controller')
};

module.exports = DonationComponent;
