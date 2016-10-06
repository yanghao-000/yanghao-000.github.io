$(function(){
	$(".p1").on("touchend",function(){
		popup.pause("是否退出做题？",function(){});
	});
	
	$(".p2").on("touchend",function(){
		popup.pause("本题还有未完成的部分，你确定要跳转到下一题作答？",function(){});
	});
	
	$(".p3").on("touchend",function(){
		popup.flish("是否继续上次做题？","不做了","接着做",function(){});
	});
	
	$(".p4").on("touchend",function(){
		popup.pause("你还有11题没做，你确定要结束作答？",function(){});
	});
	
	$(".p5").on("touchend",function(){
		popup.flish("已答完所有题目，是否现在交卷？","取消","确定",function(){});
	});
	
	$(".p6").on("touchend",function(){
		popup.balance("12","10",function(){});
	});
	
	$(".p7").on("touchend",function(){
		popup.share();
	});
	
	$(".p8").on("touchend",function(){
		popup.tips("未购买",function(){});
	});
});