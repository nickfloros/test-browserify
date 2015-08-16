'use strict';

require('angular');
require('../../services/test-div.service');

var _=require('lodash');

function testDivController(testSvc) {
	var ctrl = this,
		_tmp = testSvc;
	_.extend(ctrl, {
		testItem : _tmp.version
	});
}

angular.module('test-div-controller-module',['test-div-service-module'])
.controller('testDivController',['testDivService',testDivController]);

