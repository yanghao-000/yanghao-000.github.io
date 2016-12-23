$(function(){
	backTop();
	
	$(".slide-btn").on("touchend",function(){
		sildeNav();
	});
});
//	返回顶部
function backTop(){
	$(document).scroll(function(){
		var t = $(document).scrollTop();
		if(t>=50){
			$(".backTop").stop().show();
		}else{
			$(".backTop").stop().hide();
		}
	});
	$(".backTop").on("click",function(){
		$("html,body").stop().animate({"scrollTop":0},300);
	});
}
//	侧边栏
function sildeNav(){
	var navTrue = $(".slide-nav-out");
	var navClone = $(".slide-nav-out").clone(true);
	
	var bg = $(".black-bg-v2");
	var pop = $(".slide-nav-v2");
	
	bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
	pop.css({"display":"block","-webkit-animation":"fadeInRight 0.4s both"});
	
	bg.on("touchend",function(){
		animateFlish();
		return false;
	});
		
	function animateFlish(){
		bg.css({"-webkit-animation":"fadeOut 0.5s both"});
		pop.css({"-webkit-animation":"fadeOutRight 0.4s both"});
		bg[0].addEventListener("webkitAnimationEnd", function(){
//			nav.remove();
		}, false); 
		pop[0].addEventListener("webkitAnimationEnd", function(){
			navTrue.remove();
			$("body").append(navClone);
		}, false);
	}
}