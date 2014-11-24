$(document).ready(function() {
  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(39.8488815, -86.1411532);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<strong>Monon Trail CrossFit</strong><br>5255 Winthrop Ave, Suite 120<br>Indianapolis, IN<br><a href="mailto:hello@monontrailcrossfit.com">hello@monontrailcrossfit.com</a><br /><abbr title="Phone">P:</abbr>(317) 489-0697'
  }); 
});