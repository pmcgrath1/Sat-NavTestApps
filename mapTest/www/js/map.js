

var map = L.map('map');

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup



map.locate({watch:true,setView: true, maxZoom: 16,enableHighAccuracy:true});

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    alert(e.latlng);

    

    L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
   
}

map.on('locationfound', onLocationFound);

function onLocationError(e) 
{
    alert(e.message);
}

map.on('locationerror', onLocationError);