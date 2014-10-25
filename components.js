( function() {
	var app = angular.module('contacts-contact', []);
	/**
		Contact Table Component
	*/
	app.directive("contactTable", function() {
		return {
			restrict: 'E',
			templateUrl: "list.html",
			controller: function() {
				this.fieldName = 'name';
				this.ascDirection = true;
				// Highlighting the rows
				this.highlight = function(birthDate) {
					bDate = new Date(birthDate);
					currentDate = new Date();
					bDate.setFullYear(currentDate.getFullYear());
					var diff =(  bDate.getTime() - currentDate.getTime() ) /(24*60*60*1000);
					if (diff > 0 && diff < 15 ) {
						return "danger";
					}
					else if ( diff > 0 && diff < 30) {
						return "warning";
					}
					else return "";
					
				};
				this.sortTable = function(fieldName, ascDirection) {
					this.fieldName = fieldName;
					this.ascDirection = !ascDirection;
				}

			},
			controllerAs: "table"
		}
	});

	app.directive("loading", function() {
		return {
			restrict: 'E',
			templateUrl: "Loader.html"
		};
	});

})();
