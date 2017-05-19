var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 4.258860, lng: 24.293072},
    zoom: 1,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: true,
    streetViewControl: false
  });
  
  plotMembers();
}

function plotMembers(){
  if (gon.members != undefined) {
    var size = gon.members.length;
    for (i = 0; i < size; i++) {
      var birthplace = gon.members[i].birthplace;
      if (birthplace != undefined && birthplace != "" && birthplace != null) {
        if (birthplace.includes(",") && birthplace.includes(".")) {
          var latlng_str = birthplace.split(",");
          if (latlng_str.length == 2) {
            var lat_d = parseFloat(latlng_str[0]);
            var lng_d = parseFloat(latlng_str[1]);
            var latlng = {lat: lat_d, lng: lng_d};
            var marker = new google.maps.Marker({
              position: latlng,
              map: map,
              title: gon.members[i].name
            });
          }
        }
      }
    }
  }
}
