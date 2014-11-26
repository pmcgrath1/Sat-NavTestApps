// The watch id references the current `watchHeading`

 var watchIDCompass = null;

// Wait for device API libraries to load
 document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
 function onDeviceReady()
	 {
	 startWatchCompass();
	 }

// Start watching the compass

 function startWatchCompass()
 	{

	// Update compass every 3 seconds
	 var options = { frequency: 3000 };
	watchIDCompass = navigator.compass.watchHeading(onSuccess, onError, options);
 	}

// Stop watching the compass
 function stopWatchCompass()
 {
 	if (watchIDCompass)
	 {
	 navigator.compass.clearWatchCompass(watchIDCompass);
	 watchIDCompass = null;
	 }
 }
// onSuccess: Get the current heading
 function onSuccess(heading) 
	 {
	 var element = document.getElementById('heading');
	 element.innerHTML = 'Heading: ' + heading.magneticHeading;
	 }

// onError: Failed to get the heading
 function onError(compassError) 
	 {
	 alert('Compass error: ' + compassError.code);
	 }












