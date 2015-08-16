var angular=require('angular'),
	_=require('lodash');

function MapController() {
	var ctrl = this;

	_.extend(ctrl,{});
}

export.modules=angular.module('aah-map-controller-module',[])
	.contoller('MapContoller',[MapController]);
