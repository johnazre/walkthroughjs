angular.module('WalkthroughJS').controller('stepsCtrl', function ($scope) {

  $scope.correctStuff = {
    'var_ex1': false,
    'var_ex2': false,
    'var_ex3': false,
  };

  $scope.checkVarAnswers = function () {
    if($scope.var_ex1_var === 'dozen' && $scope.var_ex1_val === '12') {$scope.correctStuff.var_ex1 = true;}
    if($scope.var_ex2_var === 'cokeOrPepsi' && ($scope.var_ex2_val.toLowerCase() === 'coke' || $scope.var_ex2_val.toLowerCase() === 'pepsi')) {$scope.correctStuff.var_ex2 = true;}
    if($scope.var_ex3_var === 'javascriptIsAwesome' && ($scope.var_ex3_val === 'true' || $scope.var_ex3_val === 'false')) {$scope.correctStuff.var_ex3 = true;}
  };


});
