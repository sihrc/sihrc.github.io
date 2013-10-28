// Main Javascript File
// author: Chris Lee
// created: 10/28/2013


//Gets the height of the window
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
	var footer = document.getElementById("footerbar");
	footer.style.top = getWindowHeight() - footer.offsetHeight - 20;
}

//Set the holder alignment
function setHolder(){
	var dividor = document.getElementById("dividor");
	var holder = document.getElementById("holder");
	dividor.style.width = holder.style.width;
}

//What to run when document is ready
$(document).ready(function(){
	setBottomBar();
	setHolder();
});

$(document).resize(function(){
	setBottomBar();
})



