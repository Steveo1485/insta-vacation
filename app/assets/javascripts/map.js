var Map = {
	initialize: function() {
		var mapOptions = {
		    center: new google.maps.LatLng(39.50, -98.35),
		    zoom: 4
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		return map;
	},

	setMarker: function(map, latitude, longitude){
		var myLatlng = new google.maps.LatLng(latitude, longitude);
		var marker = new google.maps.Marker({ position: myLatlng, title:"Disneyland!" });
		marker.setMap(map);
		return marker;
	},

	setInfoWindow: function(map, marker, windowContent){
		var infowindow = new google.maps.InfoWindow({
			content: windowContent
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
}

$(document).ready(function(){
	var map = Map.initialize();
	var marker = Map.setMarker(map, 33.81049, -117.91900);
	Map.setInfoWindow(map, marker, "<h1>Disneyland!</h1>");
});