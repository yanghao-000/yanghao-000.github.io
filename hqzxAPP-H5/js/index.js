$(function(){
	popTikuChoice();
});

//题库类型选择弹框
function popTikuChoice(){
	$(".index-tit em").on("touchend",function(){
		var hei = $(".pop-choice").outerHeight();
		$(".pop-choice").css({"marginTop":-hei/2});
		$(".pop-choice-out,.pop-choice").stop(true,true).fadeIn();
	});
	$("body").on("touchend",".pop-choice-out",function(){
		$(".pop-choice-out,.pop-choice").stop(true,true).fadeOut();
	});
}

