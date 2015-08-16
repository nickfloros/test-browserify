var angular = require('angular'),
	MapDirective = require('./map.directive');

angular.module('aah-map-module', [MapDirective.name])
	.directive('aahMap', function MapDirective() {
		return {
			restrict: 'E',
			template = '<div id="map" class="fullHeight"></div>',
			controller: 'MapController',
			bindToController: true,
			compile: function MapCompile() {
				var map = new goolge.maps.Map(document.getElementById('map'), {
					zoom: 6,
					center: new google.maps.LatLng(53.881468, -4196777),
					mapTypeId: google.maps.MapTypeid.ROADMAP,
					dissableDetaultUI: true
				});
			},
			scope: {
				width: '@'
			}
		}
	});