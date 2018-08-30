function GoogleMap(id){

	this.initialize = function(){
		var map = showMap();
		addMarkersToMap(map, id);
	}

	var showMap = function(){
		var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(32.3798835, -117.0570667),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		
		/* begin - try to get current location */
		var onSuccess = function(location) {
		  var msg = ["Current your location:\n",
			"latitude:" + location.latLng.lat,
			"longitude:" + location.latLng.lng,
			"speed:" + location.speed,
			"time:" + location.time,
			"bearing:" + location.bearing].join("\n");


		  var marker = map.addMarker({
			'position': location.latLng,
			'title': msg
		  });
		  map.animateCamera({
			target: location.latLng,
			zoom: 16
		  }, function() {
			marker.showInfoWindow();
		  });
		};

		var onError = function(msg) {
		  alert(JSON.stringify(msg));
		};
		
		map.getMyLocation(onSuccess, onError);		
		/* end - try to get current location */
		
		


		return map;
	}
}

var addMarkersToMap = function(map, id){
	var mapBounds = new google.maps.LatLngBounds();
	//var latitudeAndLongitudeOne = new google.maps.LatLng('32.3798835','-117.0570667');
	var latitudeAndLongitudeOne = new google.maps.LatLng('32.360899','-117.058601');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeOne,
		title: "Café Galería San Miguel",
		label: {
			text: "Café Galería San Miguel",
			fontFamily: 'Roboto, Arial, sans-serif'
		},
		map: map
	});

	//var latitudeAndLongitudeTwo = new google.maps.LatLng('32.3547192', '-117.0593652');
	var latitudeAndLongitudeTwo = new google.maps.LatLng('32.350711', '-117.0549779');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeTwo,
		title: "Wearable Art",
		label: {
			text: "Wearable Art",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});

	var latitudeAndLongitudeThree = new google.maps.LatLng('32.341353', '-117.058695');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeThree,
		title: "IMAC",
		label: {
			text: "IMAC",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	var latitudeAndLongitudeFour = new google.maps.LatLng('32.339531', '-117.055624');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeFour,
		title: "Take and Fake Photo Art Gallery",
		label: {
			text: "Take and Fake Photo Art Gallery",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});

	var latitudeAndLongitudeFive = new google.maps.LatLng('32.336078', '-117.054436');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeFive,
		title: "Paco's Gallery",
		label: {
			text: "Paco's Gallery",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	var latitudeAndLongitudeSix = new google.maps.LatLng('32.335772', '-117.054829');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeSix,
		title: "Ugi's",
		label: {
			text: "Ugi's",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeSeven = new google.maps.LatLng('32.335531', '-117.054691');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeSeven,
		title: "Amaya's Gallery",
		label: {
			text: "Amaya's Gallery",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeEight = new google.maps.LatLng('32.321771', '-117.049465');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeEight,
		title: "Miguel's",
		label: {
			text: "Miguel's",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeNine = new google.maps.LatLng('32.306007', '-117.043817');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeNine,
		title: "Morales",
		label: {
			text: "Morales",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
		
	
	var latitudeAndLongitudeTen = new google.maps.LatLng('32.308406', '-117.044457');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeTen,
		title: "ROHO",
		label: {
			text: "ROHO",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeEleven = new google.maps.LatLng('32.301687', '-117.041769');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeEleven,
		title: "Art & Tango",
		label: {
			text: "Art & Tango",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
		
	
	var latitudeAndLongitudeTwelve = new google.maps.LatLng('32.303230', '-117.042566');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeTwelve,
		title: "Luca Art",
		label: {
			text: "Luca Art",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
		
	
	var latitudeAndLongitudeThirdteen = new google.maps.LatLng('32.284842', '-117.032523');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeThirdteen,
		title: "Art Gallery Popotla",
		label: {
			text: "Art Gallery Popotla",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
		
	
	var latitudeAndLongitudeFourteen = new google.maps.LatLng('32.285018', '-117.032822');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeFourteen,
		title: "White Rabbit",
		label: {
			text: "White Rabbit",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
		
	 
	var latitudeAndLongitudeFifthteen = new google.maps.LatLng('32.285250', '-117.032977');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeFifthteen,
		title: "Montecristo",
		label: {
			text: "Montecristo",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	 
	var latitudeAndLongitudeSixteen = new google.maps.LatLng('32.285399', '-117.032975');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeSixteen,
		title: "Polo's",
		label: {
			text: "Polo's",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	 
	var latitudeAndLongitudeSeventeen = new google.maps.LatLng('32.285577', '-117.033073');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeSeventeen,
		title: "Klein",
		label: {
			text: "Klein",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeEighteen = new google.maps.LatLng('32.287719', '-117.034637');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeEighteen,
		title: "Moroga y Arte Mass",
		label: {
			text: "Moroga y Arte Mass",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	 
	var latitudeAndLongitudeNineteen = new google.maps.LatLng('32.268320', '-117.021020');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeNineteen,
		title: "Baja Glass Studio",
		label: {
			text: "Baja Glass Studio",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeTwenty = new google.maps.LatLng('32.258574', '-116.972767 ');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeTwenty,
		title: "Glass Gallery Jorge Luna",
		label: {
			text: "Glass Gallery Jorge Luna",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	
	var latitudeAndLongitudeTwentyOne = new google.maps.LatLng('32.242607', '-116.934731');

	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeTwentyOne,
		title: "Galería Puerto Nuevo",
		label: {
			text: "Galería Puerto Nuevo",
			fontFamily: 'Roboto, Arial, sans-serif'
		},		
		map: map
	});
	
	switch (id) {
		case 1:
			mapBounds.extend(latitudeAndLongitudeOne);
			mapBounds.extend(latitudeAndLongitudeTwo);
		
	}
	
	/*
	mapBounds.extend(latitudeAndLongitudeOne);
	mapBounds.extend(latitudeAndLongitudeTwentyOne);
*/
	map.fitBounds(mapBounds);	
}
