function mapInitialize() {
  var mapOptions = {
    center: new google.maps.LatLng(39.50, -98.35),
    zoom: 4
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
}

$(document).ready(mapInitialize)