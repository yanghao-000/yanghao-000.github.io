$(function(){
	learningLoading();
	learningCenterZhan();
	slideChannel();
	wangShowPop();
});

//在线录播-在线直播切换
function slideChannel(){
	var box = $(".sec-lr-box-out .sec-lr-box");
	
	$(".sec-lr .t-i").on("touchend",function(){
		var i = $(this).index(".t-i");
		$(this).addClass("act").siblings(".t-i").removeClass("act");
		box.eq(i).stop(true,true).fadeIn(200).siblings().hide(0);
	});
}
//网络课程-选择弹框
function wangShowPop(){
	$(".sec-lr-bar").on("touchend",function(){
		choicePopAfter($(".choice-pop"),function(){});
	});
}
