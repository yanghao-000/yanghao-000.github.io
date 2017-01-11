$(function(){
	slideHuaDongNew([$(".slide-nav.slide-nav-2")]);
	clickCircle();
	learningLoading();
	judgeAnd();
});

function clickCircle(){
	var nav = $(".box.learning .t-r li");
	var slide = $(".box.learning .sec-bot");
	nav.on("touchend",function(){
		var i = $(this).index();
		$(this).addClass("act").siblings().removeClass("act");
		slide.eq(i).slideDown().siblings(".sec-bot").hide(0);
	});
}
//学习进度条
function learningLoading(){
	$(".sec-top").each(function(){
		var per = $(this).find(".t-l .t-h1 i").text();
		$(this).find(".t-l .t-h2 p").css({"width":per});
	});
}
