;(function(){
	'use strict';
	angular.module('myApp.supermarket')
	.controller('supermarketCtrl',supermarketCtrl);

	supermarketCtrl.$inject = ['$scope','$state'];

	function supermarketCtrl($scope,$state){
		var vm = this;
		console.log('$state:    ',$state);

		vm.dataList = [];


		vm.legend = ['预算'];  
	    vm.item = ['销售', '管理', '信息技术', '客服', '研发', '市场'];  
	    vm.max = [55000,55000,55000,55000,55000,55000];  
	    vm.data = [  
	        [4300, 10000, 28000, 35000, 50000, 19000]  
	    ]; 

	}

})();