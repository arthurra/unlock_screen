$(document).ready( function(){
	$("div.menu").click(function() {
	  $("div#nav").toggleClass("open");
	  $("div.panel").toggleClass("show");
	});
});