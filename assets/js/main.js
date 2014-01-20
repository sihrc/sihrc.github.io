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

//Set Project Content
function setProjectContent(){
	var projectheight = $('#projects').offset().top + 60;
	$('#projectcontent').offset({left:0,top:projectheight});
}
//Set the holder alignment
function setHolder(){
	$('#dividor').width(.6*$('#holder').width());
}
//Scroll to the projects
function setProjectAnimation(){
	$('#footerbar').click(function(){
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		},200);
	});
}

//Initially position the logos
function positionLogos(){
	var numLogos = 4;
	var dividorMargin = 80;
	if (numLogos < 8){
		for (var i=2; i<=numLogos;i++){
			dividorMargin = dividorMargin + $("#logo" + i).width() + 15;
		}
	}
	var buttonOffset = dividorMargin - 60;
	$('.content-dividor').css("margin","0 " + dividorMargin + " 4 " + dividorMargin);
	$('#left-button').offset({left:buttonOffset});
	$('#right-button').offset({left:$(window).width() - buttonOffset - $('#right-button').outerWidth()});

	var firstOffset = buttonOffset + $('#left-button').width() + 30;
	
	$('#logo1').offset({left:firstOffset});
	for (var i=2;i<=numLogos;i++){
		var prevLogo = "#logo" + (i - 1);
		var curLogo = "#logo" + i;
		var nextOffset = $(prevLogo).offset().left + $(prevLogo).width() + 15;
		if (nextOffset > ($('#right-button').offset().left - 10)){
			for (var n = i; n<= numLogos; n++){
				$("#logo" + i).hide();	
			}
			break;
		}
		$(curLogo).offset({left:nextOffset})
	}

	$('#block-right').offset({left:($('#right-button').offset().left - 10),top:$("#logo1").offset().top});
	$('#block-right').width($(window).width() - $("block-right").offset().left);
	$('#block-right').height($('#logo1').height());

	$('#block-left').offset({left:$('#logo1').offset().left - 100,top:$("#logo1").offset().top});
	$('#block-left').width($('#logo1').offset().left);
	$('#block-left').height($('#logo1').height());
}

//Set the position of the footer
function setBottomBar(){
	//Projected Footer Position
	var footerHeight = getWindowHeight() - $('#projects').height() - 74;
	//Content Position
	var profileHeight = $('#profile').height() + $('#profile').offset().top + 30;
	//Choosing which to use
	if (footerHeight > profileHeight)
		$('#projects').offset({top:footerHeight});
	else 
		$('#projects').offset({top:profileHeight});
}

function centerMain(){
	var offset = ($(window).width() - $('#holder').width())/2;
	if (offset <= 0){
		offset = 0;
	}
	$('#holder').offset({left:offset});
}

//What to run when document is ready
$(window).ready(function(){
	centerMain();
	setBottomBar();
	setProjectContent();
	setHolder();
	setProjectAnimation();
});

$(window).resize(function(){
	centerMain();
	setBottomBar();
	setProjectContent();
	setHolder();
	setProjectAnimation();
});



