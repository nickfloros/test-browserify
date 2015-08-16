'use strict';

require('angular');
var _=require('lodash');

function testDivService() {
	var svc = this,
		_version='1.0';

	_.extend(svc,{
		version : function(val) {
			return arguments.length>0?_version=val:_version;
		}
	});
}

angular.module('test-div-service-module',[]).
	service(testDivService);