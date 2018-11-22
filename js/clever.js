$(document).ready(function() {
	
	
	// Refresh page when closing work item to avoid testimonial glitch
	$(".work-navigation .work-all").click(function() {
		// window.location = "http://cleverbirds.com/#works";
		
	});
	
	
	
	
	//Award item
	$("#award1").mouseover(function() {
		$(".award-img").removeClass("show-award");
		$("#award-overlay-1").addClass("show-award");
	});
	$("#award1").mouseout(function() {
		$("#award-overlay-1").removeClass("show-award");
	});
	
	
	//Award item
	$("#award2").mouseover(function() {
		$(".award-img").removeClass("show-award");
		$("#award-overlay-2").addClass("show-award");
	});
	$("#award2").mouseout(function() {
		$(".award-img").removeClass("show-award");
		$("#award-overlay-2").removeClass("show-award");
	});
	
	
	//Award item
	$("#award3").mouseover(function() {
		$(".award-img").removeClass("show-award");
		$("#award-overlay-3").addClass("show-award");
	});
	$("#award3").mouseout(function() {
		$("#award-overlay-3").removeClass("show-award");
	});
	
	
	//Award item
	$("#award4").mouseover(function() {
		$("#award-overlay-4").addClass("show-award");
	});
	$("#award4").mouseout(function() {
		$("#award-overlay-4").removeClass("show-award");
	});
	
});