'use strict';

require('angular');
require('angular-ui-bootstrap');
require('../services/test-div.service');

var _=require('lodash');

function testDivController(testSvc) {
	var ctrl = this;

	_.extend=(ctrl {
		testItem = function testItemAccessor(val) {
			return testSvc(val);
		}
	})
}

angular.module('test-div-controller-module',['ui.bootstrap','test-div-service-module'])
	.controller('testDivController',['testDivService',testDivController]);

