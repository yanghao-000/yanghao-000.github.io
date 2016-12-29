$(function(){
	slideHuaDong(true,false);
	clickCircle();
	judgeAnd();
});

//学习中心 点击圆
function clickCircle(){
	var nav = $(".box.learning .t-r li");
	var slide = $(".box.learning .sec-bot");
	nav.on("touchend",function(){
		var i = $(this).index();
		$(this).addClass("act").siblings().removeClass("act");
		slide.eq(i).slideDown().siblings(".sec-bot").hide(0);
	});
	
	$(".sec-top").each(function(){
		var per = $(this).find(".t-l .t-h1 i").text();
		$(this).find(".t-l .t-h2 p").css({"width":per,"transition":"width 0.5s"});
	});
}
