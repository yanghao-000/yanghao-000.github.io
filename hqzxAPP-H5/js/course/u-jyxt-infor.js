$(function(){
	slideHuaDong(true);
	
	videoPlay(); //点击播放

});
function videoPlay(){
	var videoOut = $(".video-out"); 
	var video = $("video").get(0);
	document.IsFullScreen = false;
	
	$(".float-nav-bottom .right").on("click",function(){
		videoOut.show(0);
		video.play();
		launchFullscreen(video);
	});
	
	video.addEventListener("webkitfullscreenchange",function(){
        if(document.IsFullScreen){
        	document.IsFullScreen = false;
        	videoOut.hide(0);
			console.log(1);
			
		}else{
			document.IsFullScreen = true;
			console.log(2);		
		}
	});
}

function launchFullscreen(element) {
	//此方法不可以在異步任務中執行，否則火狐無法全屏
	if(element.requestFullscreen) {
	element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
	element.mozRequestFullScreen();
	} else if(element.msRequestFullscreen){ 
	element.msRequestFullscreen(); 
	} else if(element.oRequestFullscreen){
	element.oRequestFullscreen();
	}
	else if(element.webkitRequestFullscreen)
	{
	element.webkitRequestFullScreen();
	}else{
	
//	var docHtml = document.documentElement;
//	var docBody = document.body;
//	var videobox = document.getElementById('videobox');
//	var cssText = 'width:100%;height:100%;overflow:hidden;';
//	docHtml.style.cssText = cssText;
//	docBody.style.cssText = cssText;
//	videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
	
	}
	document.IsFullScreen = false;
}

function exitFullscreen(){
	if (document.exitFullscreen) {
	document.exitFullscreen();
	} else if (document.msExitFullscreen) {
	document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
	document.mozCancelFullScreen();
	} else if(document.oRequestFullscreen){
	document.oCancelFullScreen();
	}else if (document.webkitExitFullscreen){
	document.webkitExitFullscreen();
	}else{
//	var docHtml = document.documentElement;
//	var docBody = document.body;
//	var videobox = document.getElementById('videobox');
//	docHtml.style.cssText = "";
//	docBody.style.cssText = "";
//	videobox.style.cssText = "";
	
	}
	document.IsFullScreen = true;
}