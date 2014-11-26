
 var watchGeoID = null;
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
	 { 
	  alert("onDeviceReady 10"); 
           getGPSInfo();
	 }

function getGPSInfo(){

alert("getGPSInfo 10"); 
  var watchGeoID = navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             geolocationError,
                                             {enableHighAccuracy: true});

 
}

 function geolocationSuccess(position)
     {
       alert("onSuccess 10"); 

var element = document.getElementById('GPSdata');


var today = new Date().toISOString();
    
       element.innerHTML =('Latitude: '          + position.coords.latitude        + '<br />' +
              'Longitude: '         + position.coords.longitude        + '<br />' +
              'Altitude: '          + position.coords.altitude         + '<br />' +
              'Accuracy: '          + position.coords.accuracy          + '<br />' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br />' +
              'Heading: '           + position.coords.heading          + '<br />' +
              'Speed: '             + position.coords.speed            + '<br />' +
	      'Timestamp: '         + today              + '<br />');


    
    };

    // onError Callback receives a PositionError object
    //
    function geolocationError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }


























