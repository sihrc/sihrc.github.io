$(function(){
	$('#mainContent').load("posts/main.html");
});

function swapContent(post) {
	$('#mainContent').load("posts/" + post + ".html");
}