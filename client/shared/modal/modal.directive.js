module.exports = Modal;

function Modal($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'modal.html',
    transclude: true,
    scope: {
      name: '@',
      modalTitle: '@',
      onClose: '&'
    },
    link: ModalLink
  };

  function ModalLink($scope, $el) {
    const name = $scope.name || '';
    const $modal = $el.find('.modal');
    const $modalContainer = $modal.find('.modal__container');
    const $modalBox = $modal.find('.modal__box');

    $modalBox.click(evt => evt.stopPropagation());
    $modalContainer.click(() => $scope.close());

    $scope.$on(name + ':modal:open', () => $modal.addClass('is-visible'));
    $scope.$on(name + ':modal:close', () => $scope.close());

    $scope.close = () => {
      $modal.addClass('js-closing');
      $timeout(() => {
        $modal.removeClass('is-visible');
        $modal.removeClass('js-closing');
      }, 250);
      $scope.onClose();
    };
  }
}
