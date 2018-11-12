const position = [-20.88231, 55.4504];
const centerPosition = [-5.88231, 120.4504];

function showGoogleMaps() {
  // Map positions
  const latLng = new google.maps.LatLng(position[0], position[1]);
  const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1]);

  // Map options
  const mapOptions = {
    zoom: 3,
    streetViewControl: false,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: centerLatLng
  }

  //Create Map
  map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

  // Show Marker
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });

}

// Maps event
google.maps.event.addDomListener(window, 'load', showGoogleMaps);