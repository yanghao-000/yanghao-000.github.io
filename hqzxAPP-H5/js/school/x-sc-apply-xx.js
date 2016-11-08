$(function(){
	$(".sub-btn").on("touchend",function(){
		popup.apply(function(){
			window.location.href = "x-sc-record-xx.html";
		});
	});
	
	$(".apply-bar").on("touchend",function(){
		choicePopBefore();	
		var t = setTimeout("choicePopAfter()",1500);  //模拟接收数据
	});
});