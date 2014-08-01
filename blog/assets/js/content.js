// var query = function () {
//   // This function is anonymous, is executed immediately and 
//   // the return value is assigned to query!
//   var query_string = {};
//   var query = window.location.search.substring(1);
//   var vars = query.split("&");
//   for (var i=0;i<vars.length;i++) {
//     var pair = vars[i].split("=");
//     	// If first entry with this name
//     if (typeof query_string[pair[0]] === "undefined") {
//       query_string[pair[0]] = pair[1];
//     	// If second entry with this name
//     } else if (typeof query_string[pair[0]] === "string") {
//       var arr = [ query_string[pair[0]], pair[1] ];
//       query_string[pair[0]] = arr;
//     	// If third or later entry with this name
//     } else {
//       query_string[pair[0]].push(pair[1]);
//     }
//   } 
//     return query.split("=")[1];
// } ();

$(function(){
	var query = window.location.search.substring(1);
	if (query == "") {
		$('#mainContent').load("posts/main.html").fadeIn("slow");
	} else {
		$('#mainContent').load("posts/" + query + ".html").fadeIn("slow");
	}
});

function swapContent(post) {
	$('#mainContent').fadeOut("slow").hide().load("posts/" + post + ".html").fadeIn("slow");
	window.location.search.substring(1)
}

$(function() {
    $('#navigation a').stop().animate({'marginLeft':'-120px'},1000);

    $('#navigation > li').hover(
        function () {
            $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
        },
        function () {
            $('a',$(this)).stop().animate({'marginLeft':'-120px'},200);
        }
    );
});