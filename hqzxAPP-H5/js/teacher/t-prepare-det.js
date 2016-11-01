$(function(){
	slideHuaDong();
	videoControl();
});

function videoControl(){
	var video = $("video");
	var bg = $(".play-btn-bg");
	var btn = $(".play-btn");
	btn.on("click",function(){
		bg.stop().fadeOut(200);
		video[0].play();
		video.attr("controls","controls");
		screen.orientation.lock("landscape");
	});
	video[0].onpause = function(){
		bg.stop().fadeIn(200);
		video.removeAttr("controls");
	};
}
