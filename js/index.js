var head=angular.module("head",["ui.router"]);

head.config(["$stateProvider","$urlRouterProvider",function($staterProvider,$urlRouterProvider){
	$urlRouterProvider.when("","/mainlist");
	$staterProvider
	.state("mainlist",{
		url:"/mainlist",
		templateUrl:"./html/main.html",
		controller:"mainlist"
	});
}])

head.controller("body",["$scope","$rootScope","$http","$location",function($scope,$rootScope,$http,$location){
	
}]);
head.controller("mainlist",["$scope","$http",function($scope,$http){
	$http.get("./json/index.json").success(function(data){
		$scope.mainlist=data["yule"];
	})
	var search=$("#search");
	$("#head button").click(function(){
		var c=search.val();
		window.open("http://www.baidu.com/s?word="+c);
	})
}]);
head.controller("developer",["$scope","$http",function($scope,$http){
	$http.get("./json/index.json").success(function(data){
		$scope.developer=data["kaifa"];
	})
}])