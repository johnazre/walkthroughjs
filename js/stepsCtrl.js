angular.module('WalkthroughJS').controller('stepsCtrl', function ($scope) {

  $scope.correctStuff = {
    'var_ex1': false,
    'var_ex2': false,
    'var_ex3': false,
    'func_ex1': false,
    'func_ex2': false,
  };

  $scope.checkVarAnswers = function () {
    if($scope.var_ex1_var === 'dozen' && $scope.var_ex1_val === '12') {$scope.correctStuff.var_ex1 = true;}
    if($scope.var_ex2_var === 'cokeOrPepsi' && ($scope.var_ex2_val.toLowerCase() === 'coke' || $scope.var_ex2_val.toLowerCase() === 'pepsi')) {$scope.correctStuff.var_ex2 = true;}
    if($scope.var_ex3_var === 'javascriptIsAwesome' && ($scope.var_ex3_val === 'true' || $scope.var_ex3_val === 'false')) {$scope.correctStuff.var_ex3 = true;}
  };

  $scope.checkFuncAnswers = function () {
    alert('works');

    if($scope.func_ex1_name === "sumOfTwo" && ($scope.func_ex1_arg1===$scope.func_ex1_arg3  && $scope.func_ex1_arg2===$scope.func_ex1_arg4)){ $scope.correctStuff.func_ex1 = true; }
    if($scope.func_ex2_name === "helloThere" && ($scope.func_ex2_arg1===$scope.func_ex2_arg2)){ $scope.correctStuff.func_ex2 = true; }
  };


});
