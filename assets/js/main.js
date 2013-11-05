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
	var footerHeight = getWindowHeight() - $('#projects').height() - 74;
	//Content Position
	var profileHeight = $('#profile').height() + $('#profile').offset().top + 30;
	//Choosing which to use
	if (footerHeight > profileHeight)
		$('#projects').offset({left:0,top:footerHeight});
	else 
		$('#projects').offset({left:0,top:profileHeight});
}

//Set Project Content
function setProjectContent(){
	var projectheight = $('#projects').offset().top + 70;
	$('#projectcontent').offset({left:0,top:projectheight});
}
//Set the holder alignment
function setHolder(){
	$('#dividor').width(.6*$('#holder').width());
}

function setProjectAnimation(){
	$('#footerbar').click(function(e){
		//Make Animation
	});
}

//What to run when document is ready
$(document).ready(function(){
	setBottomBar();
	setProjectContent()
	setHolder();
	setProjectAnimation()
});

$(window).resize(function(){
	setBottomBar();
});



