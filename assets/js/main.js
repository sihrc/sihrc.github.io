// Main Javascript File
// author: Chris Lee
// created: 10/28/2013


//Gets the height of the window
// does not use jquery $(window).height() because jquery does not return the right height
function getWindowHeight(){
	var winH = 460;
	if (document.body && document.body.offsetWidth) {
		winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winH = window.innerHeight;
	}
	return winH;
}

//Set the position of the footer
function setBottomBar(){
	//Projected Footer Position
	var footerHeight = getWindowHeight() - $('#footerbar').height() - 20;
	//Content Position
	var profileHeight = $('#profile').height() + $('#profile').offset().top + 30;
	//Choosing which to use
	if (footerHeight > profileHeight)
		$('#footerbar').offset({left:0,top:footerHeight});
	else 
		$('#footerbar').offset({left:0,top:profileHeight});
}

//Set the holder alignment
function setHolder(){
	$('#dividor').width(.6*$('#holder').width());
}

//What to run when document is ready
$(document).ready(function(){
	setBottomBar();
	setHolder();
});

$(window).resize(function(){
	setBottomBar();
});



