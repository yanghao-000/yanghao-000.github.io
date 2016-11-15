$(function(){
	$(".t-bar-work-ul.t-choice").on("touchend",function(){
		courseBuyPop();
	});
});


function courseBuyPop(fn){
	var pos =  $(".t-bar-work-ul.t-choice em");
	$(".text-work-popup .cont li").on("touchend",function(){
		$(this).addClass("act").siblings().removeClass("act");
	});
	
	var bg = $(".black-bg");
	var pop = $(".text-work-popup");
	
	bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
	pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
	
	$(".black-bg,.text-work-popup .sure-btn").on("touchend",function(){
		var str = $(".text-work-popup .cont li.act").text();
		pos.text(str);
		if(fn){fn();}
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