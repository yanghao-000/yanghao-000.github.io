$(function(){
	$(".click-select").on("touchend",function(){
		choicePopAfter($(".choice-pop"),function(){});
	});
	
	dataInit($(".time-select"),function(){});
});
