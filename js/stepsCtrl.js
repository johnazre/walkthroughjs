angular.module('WalkthroughJS').controller('stepsCtrl', function ($scope) {

  $scope.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");

});
