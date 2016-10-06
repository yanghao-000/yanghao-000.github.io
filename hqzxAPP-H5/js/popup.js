$(function(){
	$("body").on("click",".p1",function(){
		popup.pause("是否退出做题？",function(){});
	});
	
	$("body").on("click",".p2",function(){
		popup.pause("本题还有未完成的部分，你确定要跳转到下一题作答？",function(){});
	});
	
	$("body").on("click",".p3",function(){
		popup.flish("是否继续上次做题？","不做了","接着做",function(){});
	});
	
	$("body").on("click",".p4",function(){
		popup.pause("你还有11题没做，你确定要结束作答？",function(){});
	});
	
	$("body").on("click",".p5",function(){
		popup.flish("已答完所有题目，是否现在交卷？",function(){});
	});
	
	$("body").on("click",".p6",function(){
		popup.balance("12","10",function(){});
	});
	
	$("body").on("click",".p7",function(){
		popup.share();
	});
	
	$("body").on("click",".p8",function(){
		popup.tips("未购买",function(){});
	});
});