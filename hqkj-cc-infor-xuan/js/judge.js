$(function(){
	
	var id = "3F2147C49F6DF30F9C33DC5901307461";
	var h = "auto";
	document.getElementById("voide-box").src = "https://p.bokecc.com/player?vid=" + id + "&siteid=FE7A65E6BE2EA539&autoStart=true&width=100%&height=" + h + "&playerid=CED4B0511C5D4992&playertype=1";
	
	var timer = setInterval(function(){
		if($("video").length>0){
			$(".ccH5playerBox").css({"margin-top":-$(".ccH5playerBox").height()/2});
			videoPlay();
			clearInterval(timer);
		}
	},50);
	
	dowmloadJudge();
    
});
//下载判断
function dowmloadJudge(){
	var browser={
  	  	versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                webKit: u.indexOf('AppleWebKit') > -1, 
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                wx: window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	var tipsPop = $(".pop-load-tip");
	var shareTipsPop = $(".pop-share-tip");
	
	judgeWeb();
	shareTipsShow();
	$(".download-btn").on("click",function(){
		download();
		return false;
	});
	
	
		
	function downloadWeixin(){
		if(browser.versions.ios){
			window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8";
		}else if(browser.versions.android){
			window.location.href="http://download.hqjy.com/app/Answer_Student_v3.0.0.apk";
		}
		tipsPop.fadeIn();
	}
	function download(){
		if(browser.versions.wx&&browser.versions.ios){
			window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8";
			tipsPop.fadeIn();
		}
		if(browser.versions.wx&&browser.versions.android){
			window.location.href="http://download.hqjy.com/app/Answer_Student_v3.0.0.apk";
			tipsPop.fadeIn();
		}
		if((!browser.versions.wx)&&browser.versions.ios){
			window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8";
		}
		if((!browser.versions.wx)&&browser.versions.android){
			window.location.href="http://download.hqjy.com/app/Answer_Student_v3.0.0.apk";
		}
	}
	function download2(){
		if((!browser.versions.wx)&&browser.versions.ios){
			window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8";
		}
		if((!browser.versions.wx)&&browser.versions.android){
			window.location.href="http://download.hqjy.com/app/Answer_Student_v3.0.0.apk";
		}
	}
	function judgeWeb(){
		if(browser.versions.ios){
			tipsPop.find("img").attr("src","images/tips/ios-tips.png");
		}else if(browser.versions.android){
			tipsPop.find("img").attr("src","images/tips/and-tips.png");	
		}
		tipsPop.find("img").click(function(){
            tipsPop.fadeOut();
            return false;
        });
		download2();
	}
	function shareTipsShow(){
		$(".wx-share-btn").on("click",function(){
			if(browser.versions.wx){
				shareTipsPop.fadeIn();
			}
			return false;
		});
		shareTipsPop.find("img").click(function(){
            shareTipsPop.fadeOut();
            return false;
        });
	}
}
//点击播放
function videoPlay(){
	var videoOut = $(".ccH5playerBox"); 
	var video = $("video").get(0);
	document.IsFullScreen = false;
	
	$(".play-box .t-h1").on("click",function(){
		videoOut.show(0);
		video.play();
		launchFullscreen(video);
	});
	
	video.addEventListener("webkitfullscreenchange",function(){
        if(document.IsFullScreen){
        	document.IsFullScreen = false;
        	videoOut.hide(0);
        	video.pause();
		}else{
			document.IsFullScreen = true;
		}
	});
}
//进入全屏
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
//退出全屏
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