function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(-19.920430, -43.921115),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var WTMs = [
      ['Google Belo Horizonte', -19.920430, -43.921115],
  ];

  var marker, i;

  for( i = 0; i < WTMs.length; i++ ) {
    var position = new google.maps.LatLng(WTMs[i][1], WTMs[i][2]);
        marker = new google.maps.Marker({
        position: position,
        map: map,
        title: WTMs[i][0]
      });

    };
}
google.maps.event.addDomListener(window, 'load', initialize);
