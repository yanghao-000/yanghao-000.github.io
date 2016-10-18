$(function(){
	slideHuaDong();
	$(".float-nav-bottom .right").on("touchend",function(){
		courseBuyPop();
	});
});

function courseBuyPop(){
	var bg = $(".black-bg");
	var pop = $(".course-bug-pop");
	bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
	pop.css({"display":"block","-webkit-animation":"fadeInUp 0.3s both"});
	
	$(".course-bug-pop .sec-mid ul li").on("touchend",function(){
		$(this).addClass("act").siblings().removeClass("act");
	});
	
	$(".black-bg,.course-bug-pop .close-btn").on("touchend",function(){
		bg.css({"display":"none"});
		pop.css({"display":"none"});
	});
}
