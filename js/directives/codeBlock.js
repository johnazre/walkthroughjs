angular.module('WalkthroughJS').directive('codeBlock', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: "templates/codeBlock.html"
  }
})
