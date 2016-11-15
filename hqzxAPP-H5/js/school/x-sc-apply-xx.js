$(function(){
	$(".sub-btn").on("touchend",function(){
		popup.apply(function(){
			window.location.href = "x-sc-record-xx.html";
		});
	});
	
	
	$(".click-select").on("touchend",function(){
		choicePopAfter($(".choice-pop"),function(){});
	});
	
	dataInit($(".time-select"),function(){});
		
});