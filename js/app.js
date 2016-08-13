$( document ).ready(function() {
	$('.btn').click( function () {
		// get values from form 
	    var programType = $('[name="program-type"]').val();
	    var programTypeSelector = programType ? "." + programType : '';

	    // unless all then blank
	    var eduLevel = $('[name="edu-level"]').val();
	    var eduLevelSelector =  eduLevel ? "." + eduLevel : '';
	    var	combinedSelector = programTypeSelector + eduLevelSelector;

	    if (combinedSelector === "") {
	    	$('.images img').addClass('active');
	    } else {

	    	$('.images img').removeClass('active');
	    	console.log(combinedSelector);

	    	$(combinedSelector).addClass('active');
		}
	
	    
	    
		// if (programType === '.all' && eduLevel != '.all') {
		// 	eduLevelSelector
		// } else if (eduLevel === '.all' && programType != '.all') {
		// 	programTypeSelector
		// }


		// if either are all only check the one that's used
		// both all show everything
		// combine $('.SP.HS')

		});

	
});