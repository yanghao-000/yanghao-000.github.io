$(function(){
	slideHuaDong();
	videoControl();
	slideUpDown();
});

function videoControl(){
	var video = $("video");
	var bg = $(".play-btn-bg");
	var btn = $(".play-btn");
	btn.on("click",function(){
		bg.stop().fadeOut(200);
		video[0].play();
		video.attr("controls","controls");
		video.removeAttr("style");
		screen.orientation.lock("landscape");
	});
	video[0].onpause = function(){
		bg.stop().fadeIn(200);
		video.removeAttr("controls");
	};
}

function slideUpDown(){
	var zhang = $(".box-out .box .box-zhang");
	var jie = $(".box-out .box .box-jie");
	var wrap = $(".swiper-wrapper");
	zhang.on("click",function(){
		if($(this).hasClass("act")){
			$(this).removeClass("act");
			wrap.css({"height":"auto"});
			$(this).siblings(".box-jie").stop(true,true).slideUp(200);
		}else{
			$(this).addClass("act");
			wrap.css({"height":"auto"});
			$(this).siblings(".box-jie").stop(true,true).slideDown(200);
		}
	});
}