// Filter Date format: Age ( yyyy-MM-dd )
angular.module('dateFilters', []).filter('age', function() {

	return function(input) {
		var inputDate = new Date(input)
		var ageMs = Date.now() - inputDate.getTime();
   		var ageDate = new Date(ageMs); // miliseconds from epoch
   		return Math.abs(ageDate.getUTCFullYear() - 1970) + " (" + inputDate.getUTCFullYear() + "-" + new Number(inputDate.getUTCMonth()+1) + "-" + inputDate.getUTCDate() + ")";
	};
});