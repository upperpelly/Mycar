var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('EditData', {
        url: '/EditData',
        templateUrl: 'cruise-detailed-ats.html'
    })
   .state('ShowData', {
        url: '/ShowData',
        templateUrl: '../Pages/Show.html'
    })
    .state('home', {
        templateUrl: 'homepage10.html',
        controller:  'homeController'
    })
    .state('view', {
        templateUrl: 'cruise-detailed-ats.html',
        params:      ['index', 'anotherKey'],
        controller:  'overviewController'
    })
    
   
});

myApp.factory("myFactory", function () {
    var savedData = {}
    function set(data) {
        savedData = data;
    }
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }
})

myApp.controller('overviewController', function($scope, $stateParams) {
    var index = $stateParams.index;
    var anotherKey = $stateParams.anotherKey;
    alert("index"+index);
    $state.go('view', { 'editObj': {val1:2, val2:3, val4:'Hello'}})
});

myApp.controller("showCtrl", function ($scope, $location, myFactory) {
     $scope.Students = [
        { Name: "Akhilesh", Address: "Kolkata", Email: "xxxx@gmail.com" },
        { Name: "Mukesh", Address: "Delhi", Email: "yyyy@gmail.com" },
        { Name: "Rakesh", Address: "Mumbai", Email: "zzzz@gmail.com" },
    ] 
    $scope.Edit = function (d) {
    	 alert("cameere");
        myFactory.set(d);
        
        $location.path('/EditData');
        window.location = "cruise-detailed-ats.html";
    }


});

myApp.controller("editCtrl", function ($scope, $location, myFactory) {
    alert("came here in edit control");
	$scope.Student = myFactory.get();
	alert("came here in edit control"+$scope.Student);
    $scope.Back = function () {
        $location.path('/ShowData');
    }
})