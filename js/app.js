angular
    .module("myApp", ['ngRoute'])
    .controller("myController", myController);

    myController.$inject = ['$scope', '$http'];
    function myController($scope){
          $scope.demo = "Hello";
    };
