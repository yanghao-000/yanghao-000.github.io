$(function(){
	slideHuaDong(true);
	videoControl();
	slideUpDown();
	judgeAndTeacher();
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
//		screen.orientation.lock("landscape");
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

	var posX; 
	var posY;
	var posXend;
	var posYend;
	var slideX = 0;
	var slideY;
    zhang.on("touchstart",function(){
    	slideX = 0;
        var touch = event.targetTouches[0];
        posX = touch.clientX;
        posY = touch.clientY;
    });
	zhang.on("touchmove",function(){
    	var touch = event.targetTouches[0];
        posXend = touch.clientX;
        posYend = touch.clientY;
        slideX = Math.abs(posXend - posX);
        slideY = posYend - posY;
    });
    zhang.on("touchend",function(event){
    	if(slideX<4){
    		if($(this).hasClass("act")){
				$(this).removeClass("act");
				wrap.css({"height":"auto"});
				$(this).siblings(".box-jie").stop(true,true).slideUp(200);
			}else{
				$(this).addClass("act");
				wrap.css({"height":"auto"});
				$(this).siblings(".box-jie").stop(true,true).slideDown(200);
			}
    	}
 		event.preventDefault();
    });
}