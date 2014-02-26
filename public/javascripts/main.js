/**
 * Created by Krishna on 2/24/14.
 */
var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.name = "Krishna";
});

app.controller('MyController', function($scope){
    $scope.person={age:30, name:"Lokesh"};
});

app.controller('CounterController', function($scope){
    $scope.counter={};
    $scope.counter.count = 0;

    $scope.counter.increment = function(byAmount){$scope.counter.count += byAmount;};

    $scope.counter.decrement = function(byAmount){$scope.counter.count -= byAmount;};

});

app.controller('ExpressionController', ['$scope', '$parse', function($scope, $parse){
    $scope.expression = {};
    $scope.expression.expr=2+"*" +3;
    $scope.expression.add = function(byAmout){
        $scope.expression.expr += "+1";
    };
   // $scope.expression.value="";
    $scope.$watch('expression.expr', function(newVal, oldVal, scope){
        var parser = $parse(newVal);
        $scope.expression.value = parser(scope);
    });


}]);