( function() {
	var app = angular.module('contacts', ['dateFilters', 'contacts-contact']);
	// Inject the interceptor
	app.config(['$httpProvider', function ($httpProvider) {
    	$httpProvider.interceptors.push('myHttpInterceptor');    

		var spinnerFunction = function spinnerFunction(data, headersGetter) {
		  	document.getElementById("spinner").style.visibility = 'visible';	
			return data;
		};

		$httpProvider.defaults.transformRequest.push(spinnerFunction);
	}]);
	app.factory('myHttpInterceptor', function ($q, $window) {
		return function (promise) {
			return promise.then(function (response) {
		  		document.getElementById("spinner").style.visibility = 'visible';	
		  		return response;
			}, function (response) {
		  			document.getElementById("spinner").style.visibility = 'hidden';	
		  			return $q.reject(response);
			});
		}
	});
	app.controller('ContactController', ['$http', function($http) {
		var store  = this;
		$http.get("https://script.google.com/macros/s/AKfycbzrnl4RsjevblKaA71SbqQxfL2_lYWezClDLDMZyX4yy2VlEOM_/exec")
			.success(function(data) {
				store.contacts = data["values"];
				document.getElementById("spinner").style.visibility = 'hidden';				
				// Parsing JSON
				for ( i = 0; i < store.contacts.length; i++ ){
					var contact = store.contacts[i];
					contact.name = contact.name["v"];
					contact.firstName = contact.firstName["v"];
					contact.tel = contact.tel["v"];
					contact.birthDate = contact.birthDate["v"];
					contact.address = contact.address["v"];
				}
			});

	}], function() {
		this.contacts = gems;
	});


})();
