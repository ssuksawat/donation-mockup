const ProgressComponent = {
  bindings: {
    percent: '@'
  },
  template: `
    <div class="progressBar">
      <span ng-style="{'width': $ctrl.percent + '%'}"></span>
    </div>
  `
};

module.exports = ProgressComponent;
