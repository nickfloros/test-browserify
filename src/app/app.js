'use strict';

require( 'angular');

require('angular-ui-bootstrap');

require('angular-loading-bar');

require('./components/test-div/test-div.directive');

angular.module('test-browserify',
	['ui.bootstrap','angular-loading-bar','test-div-directive-module'
	]);