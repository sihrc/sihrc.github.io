// Main Javascript File
// author: Chris Lee
// created: 10/28/2013


// Dynamically Resize Body and Holder
void resizeDivs(){
	var body = $("#body");
	var profile = $("#profile")
	var bio = $("#bio");
	var connect = $("#connect");
	var holder = $("#holder");

	//Setting the height of the holder
	while (connect.position().top > profile.position().top){
		body.width(body.width() + 10);
		holder.width(holder.width() + 10);
	}

	//Check to see if bio and connect and profile pic are at the same height
	while (bio.position().top != connect.position().top){
		body.width(body.width() + 10);
		holder.width(holder.width() + 10);
	}	

	holder.width(bio.width() + connect.width() + body.width());
}


//What to run when document is ready
$(document).ready(function(){
	resizeDivs();
});



