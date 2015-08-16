'use strict';

require('angular');
require('./test-div-controller');

angular.module('test-div-directive-module',['test-div-controller-module'])
	.directive('testDiv',[
		function TestDiv(){
			return {
				
			};
		}])