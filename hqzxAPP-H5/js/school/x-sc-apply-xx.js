$(function(){
//	点击提交弹框
	$(".sub-btn").on("touchend",function(){
		popup.apply(function(){
			window.location.href = "x-sc-record-xx.html";
		});
	});
	
//	选择弹框
	$(".click-select").on("touchend",function(){
		choicePopAfter($(".choice-pop"),function(){});
	});
	
//	时间弹框
	dataInit($(".time-select"),function(){});
	
//	数据加载
	$(".apply-bar").eq(2).on("touchend",function(){
		loadingBefor();
		var t = setTimeout(function(){
			loadingAfter();
		},2000);
	});
});