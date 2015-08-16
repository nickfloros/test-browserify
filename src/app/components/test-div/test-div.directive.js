'use strict';

require('angular');
require('./test-div.controller');

function testDivDirective() {
			return {
				restrict : 'E',
				replace : true,
				templateUrl : 'partials/test-div.template.html',
				controller : 'testDivController',
				scope : {},
				controllerAs : 'ctrl',
				bindToController:true
			};	
}

angular.module('test-div-directive-module',[
	'test-div-controller-module'
	])
	.directive('testDiv',[ testDivDirective ])