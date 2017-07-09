var cities = [
	/************************ NORTH AMERICA ****************************/
	{
		city : 'Hamirpur',
		desc : 'Contact Us: +1.212.619.5200',
		lat : 31.620257,
		long : 76.673969
	} 
];


angular.module("app").controller("contactController", function($scope, $compile) {
//		$scope.bgImage = 'images/contactUs.jpg';
		$scope.bgImage = "images/Social_01.png";
		$scope.meetTeamImg = "images/contact/meetTheTeam.png";
		$scope.innerBtn ="Growing Fast"
 		
		$scope.groups = [
	    	{
	    		
	    		Address:{
	    			first: {
	    				name: 'Deva Nand Sharma',
						designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			second: {
	    				name: 'Om Sagar Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			third: {
	    				name: 'Lalit Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			fourth: {
	    				name: 'Kuldeep Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			fifth: {
	    				name: 'Pankaj Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+918847085689'	    				
	    				},
	    			sixth: {
	    				name: 'Devinder Anand',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			seventh: {
	    				name: 'Suresh Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			eighth: {
	    				name: 'Vinod Sharma',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+919418046852'
	    				},
	    			ninth: {
						name: 'Vikas Anand',
	    				designation: 'Designation: ABC',
						occuptation: 'Occupation: XYZ',
	    				address: 'Village - Lag',
						address1: 'P.O - LagManwin',
	    				address2: 'Tehsil - Bhoranj',
	    				area: 'Distt - Hamirpur',
	    				postel: 'Pin - 177118',
	    				contact: '+918975766814'
	    				},
	    		}
	    	}
	    ];
	    $scope.ind = '';
	    $scope.countryDetails = $scope.groups[0].Address;
	    
	    $scope.showhide = function(pickIndex){
			$scope.isShow = false;
			$scope.ind=pickIndex;
			$scope.isShow=!$scope.isShow;
			$scope.countryDetails = $scope.groups[pickIndex].Address;
			
		};
		
 		var mapOptions = {
	        zoom: 3,
	        minZoom: 3, maxZoom: 15,
	        center: new google.maps.LatLng(31.620257, 76.673969),
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	
	    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	    $scope.markers = [];
	    var infoWindow = new google.maps.InfoWindow();
	    var createMarker = function (info){
	        
	        var marker = new google.maps.Marker({
	            map: $scope.map,
	            position: new google.maps.LatLng(info.lat, info.long),
	            title: info.city
	        });
	        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
	        
	        google.maps.event.addListener(marker, 'click', function(){
	            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
	            infoWindow.open($scope.map, marker);
	        });
	        
	        $scope.markers.push(marker);
	        
	    }  
	    
	    for (i = 0; i < cities.length; i++){
	        createMarker(cities[i]);
	    }
	
	    $scope.openInfoWindow = function(e, selectedMarker){
	        e.preventDefault();
	        google.maps.event.trigger(selectedMarker, 'click');
	    }
		
		
		
		

  
 		$scope.showData = function( ){
			 $scope.curPage = 0;
			 $scope.pageSize = 5;
				 $scope.datalists = [
					{"volImg": "images/contact/devaNand.jpg","name": "Devanand Sharma", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/omSagar.jpg","name": "Om Sagar Sharma","designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/lalit.jpg","name": "Lalit Sharma", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/kuldeep.jpg","name": "Kuldeep Sharma", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/pankaj.jpg","name": "Pankaj Sharma", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/devinder.jpg","name": "Devinder Anand", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/suresh.jpg","name": "Suresh Sharma", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/vinod.jpg","name": "Vinod Sharma", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"},
					{"volImg": "images/contact/vikas.jpg","name": "Vikas Anand", "designation":"Member", "mobileNo":"8975766814", "eMail":"vikasanand23@gmail.com"}
					
				]
				 $scope.numberOfPages = function() {
					return Math.ceil($scope.datalists.length / $scope.pageSize);
				};
		}	
 	});
	
	angular.module("app").filter('pagination', function()
		{
		 return function(input, start)
		 {
		  start = +start;
		  return input.slice(start);
		 };
		});




