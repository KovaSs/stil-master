$(document).ready(function() {

	$(".main_head").css("min-height", $(window).height());

});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});