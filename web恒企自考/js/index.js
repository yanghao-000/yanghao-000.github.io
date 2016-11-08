$(function(){
	swiperSlide();
	
	$(".slide-btn").on("touchend",function(){
		sildeNav();
	});
	
	classifyShow();
	
	backTop();
});

//	轮播图
function swiperSlide(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		autoplay : 4000,
		autoplayDisableOnInteraction: false,
		loop: true,
	});
}
//	侧边栏
function sildeNav(nav){
	var navTrue = $(".slide-nav-out");
	var navClone = $(".slide-nav-out").clone(true);
	
	var bg = $(".black-bg");
	var pop = $(".slide-nav");
	
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
//	分类下拉框
function classifyShow(){
	$(".classify p").on("click",function(){
		var i = $(".classify").find("i");
		var ul = $(".classify").find("ul");
		if(ul.css("display") == "none"){
			i.addClass("active");
			ul.slideDown();
		}else{
			i.removeClass("active");
			ul.slideUp();
		}
	});
}