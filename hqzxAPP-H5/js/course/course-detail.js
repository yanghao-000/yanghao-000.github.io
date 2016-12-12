$(function(){
	slideHuaDong(true);
	$(".float-nav-bottom .right").on("touchend",function(){
		courseBuyPop();
		return false;
	});
});

function courseBuyPop(){
	var bg = $(".black-bg");
	var pop = $(".course-bug-pop");
	
	bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
	pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
	
	$(".course-bug-pop .sec-mid ul li").on("touchend",function(){
		$(this).addClass("act").siblings().removeClass("act");
		return false;
	});
	
	$(".black-bg,.course-bug-pop .close-btn").on("touchend",function(){
		animateFlish();
		return false;
	});
	
	function animateFlish(){
//		bg.css({"-webkit-animation":"fadeOut 0.5s both"});
//		pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
//		bg[0].addEventListener("webkitAnimationEnd", function(){
//			$(this).css({"display":"none"});
//		}, false); 
//		pop[0].addEventListener("webkitAnimationEnd", function(){
//			$(this).css({"display":"none"});
//		}, false); 
		bg.css({"display":"none"});
		pop.css({"display":"none"});
	}
}
