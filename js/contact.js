/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		


	function ValidateEmail(input) {

		var validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  
		if (input.match(validRegex)) {
	  
		  return true;
	  
		} else {
	  
		  return false;
	  
		}
	  
	}

	function formActivation() {
		setTimeout(() => {
			ContactForm()
		}, 1500);

		setTimeout(() => {
			ApplyForm()
		}, 1500);

		console.log('hello')
	}


	function ContactForm() {	

		const nameForm = document.querySelector('#name');
		const emailForm = document.querySelector('#email');
		const commentsForm = document.querySelector('#comments');
		const verifyForm = document.querySelector('#verify');
		const btnForm = document.querySelector('#submit-btn');

		btnForm.addEventListener('click', function(){

			$('#message div').remove();

			if(nameForm.value.trim() == '') {
				$('#message').append('<div class="error_message">You must enter your name.</div>')
			}
			else if(emailForm.value.trim() == '') {
				$('#message').append('<div class="error_message">Please enter a valid email address.</div>')
			}
			else if(!ValidateEmail(emailForm.value)) {
				$('#message').append('<div class="error_message">You have enter an invalid e-mail address, try again.</div>')
			}
			else if(commentsForm.value.trim() == '') {
				$('#message').append('<div class="error_message">Please enter a message.</div>')
			}
			else if(verifyForm.value.trim() == '' ) {
				$('#message').append('<div class="error_message">Please complete the captcha validation.</div>')
			}
			else if(verifyForm.value.trim() != '4' ) {
				$('#message').append('<div class="error_message">The verification number you entered is incorrect.</div>')
			}
			else {
				document.querySelector('#contactform').submit();
			}


			
		})

		nameForm.addEventListener("change", function(){
			$('#message div').remove();
		})
		emailForm.addEventListener("change", function(){
			$('#message div').remove();
		})
		commentsForm.addEventListener("change", function(){
			$('#message div').remove();
		})
		verifyForm.addEventListener("change", function(){
			$('#message div').remove();
		})
	

		

	}//End ContactForm	

	function ApplyForm() {	

		const nameForm = document.querySelector('#name-apply');
		const emailForm = document.querySelector('#email-apply');
		const commentsForm = document.querySelector('#comments-apply');
		const verifyForm = document.querySelector('#verify-apply');
		const btnForm = document.querySelector('#submit-btn-apply');

		btnForm.addEventListener('click', function(){

			$('#message-apply div').remove();

			if(nameForm.value.trim() == '') {
				$('#message-apply').append('<div class="error_message">You must enter your name.</div>')
			}
			else if(emailForm.value.trim() == '') {
				$('#message-apply').append('<div class="error_message">Please enter a valid email address.</div>')
			}
			else if(!ValidateEmail(emailForm.value)) {
				$('#message-apply').append('<div class="error_message">You have enter an invalid e-mail address, try again.</div>')
			}
			else if(commentsForm.value.trim() == '') {
				$('#message-apply').append('<div class="error_message">Please enter a message.</div>')
			}
			else if(verifyForm.value.trim() == '' ) {
				$('#message-apply').append('<div class="error_message">Please complete the captcha validation.</div>')
			}
			else if(verifyForm.value.trim() != '4' ) {
				$('#message-apply').append('<div class="error_message">The verification number you entered is incorrect.</div>')
			}
			else {
				document.querySelector('#applyform').submit();
			}


			
		})

		nameForm.addEventListener("change", function(){
			$('#message-apply div').remove();
		})
		emailForm.addEventListener("change", function(){
			$('#message-apply div').remove();
		})
		commentsForm.addEventListener("change", function(){
			$('#message-apply div').remove();
		})
		verifyForm.addEventListener("change", function(){
			$('#message-apply div').remove();
		})
	

		

	}//End ApplyForm	

/*--------------------------------------------------
Function Contact Map
---------------------------------------------------*/	
		
	// function ContactMap() {	
	
	// 	if( jQuery('#map_canvas').length > 0 ){					
	// 		var latlng = new google.maps.LatLng(43.270441,6.640888);
	// 		var settings = {
	// 			zoom: 14,
	// 			center: new google.maps.LatLng(43.270441,6.640888),
	// 			mapTypeControl: false,
	// 			scrollwheel: false,
	// 			draggable: true,
	// 			panControl:false,
	// 			scaleControl: false,
	// 			zoomControl: false,
	// 			streetViewControl:false,
	// 			navigationControl: false};			
	// 			var newstyle = [
	// 			{
	// 				"featureType": "all",
	// 				"elementType": "labels.text.fill",
	// 				"stylers": [
	// 					{
	// 						"saturation": 36
	// 					},
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 40
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "all",
	// 				"elementType": "labels.text.stroke",
	// 				"stylers": [
	// 					{
	// 						"visibility": "on"
	// 					},
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 16
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "all",
	// 				"elementType": "labels.icon",
	// 				"stylers": [
	// 					{
	// 						"visibility": "off"
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "administrative",
	// 				"elementType": "geometry.fill",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 20
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "administrative",
	// 				"elementType": "geometry.stroke",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 17
	// 					},
	// 					{
	// 						"weight": 1.2
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "landscape",
	// 				"elementType": "geometry",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 20
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "poi",
	// 				"elementType": "geometry",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 21
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "road.highway",
	// 				"elementType": "geometry.fill",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 17
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "road.highway",
	// 				"elementType": "geometry.stroke",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 29
	// 					},
	// 					{
	// 						"weight": 0.2
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "road.arterial",
	// 				"elementType": "geometry",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 18
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "road.local",
	// 				"elementType": "geometry",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 16
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "transit",
	// 				"elementType": "geometry",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 19
	// 					}
	// 				]
	// 			},
	// 			{
	// 				"featureType": "water",
	// 				"elementType": "geometry",
	// 				"stylers": [
	// 					{
	// 						"color": "#000000"
	// 					},
	// 					{
	// 						"lightness": 17
	// 					}
	// 				]
	// 			}
	// 		];
	// 		var mapOptions = {
	// 			styles: newstyle,
	// 			mapTypeControlOptions: {
	// 				 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
	// 			}
	// 		};
	// 		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
	// 		var mapType = new google.maps.StyledMapType(newstyle, { name:"Grayscale" });    
	// 			map.mapTypes.set('holver', mapType);
	// 			map.setMapTypeId('holver');
						
			
	// 		google.maps.event.addDomListener(window, "resize", function() {
	// 			var center = map.getCenter();
	// 			google.maps.event.trigger(map, "resize");
	// 			map.setCenter(center);
	// 		});	
	// 		var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
	// 			'<div id="siteNotice">'+
	// 			'</div>'+
	// 			'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;">Hello Friend!</h4>'+
	// 			'<div id="bodyContent">'+
	// 			'<p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
	// 			'</div>'+
	// 			'</div>';
	// 		var infowindow = new google.maps.InfoWindow({
	// 			content: contentString
	// 		});	
	// 		var companyImage = new google.maps.MarkerImage('images/marker.png',
	// 			new google.maps.Size(58,63),<!-- Width and height of the marker -->
	// 			new google.maps.Point(0,0),
	// 			new google.maps.Point(35,20)<!-- Position of the marker -->
	// 		);
	// 		var companyPos = new google.maps.LatLng(43.270441,6.640888);	
	// 		var companyMarker = new google.maps.Marker({
	// 			position: companyPos,
	// 			map: map,
	// 			icon: companyImage,               
	// 			title:"Our Office",
	// 			zIndex: 3});	
	// 		google.maps.event.addListener(companyMarker, 'click', function() {
	// 			infowindow.open(map,companyMarker);
	// 		});	
	// 	}
		
	// 	return false
	
	// }//End ContactMap