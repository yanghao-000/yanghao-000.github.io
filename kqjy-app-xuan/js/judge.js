//$(function(){
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
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	
	$(".download-btn").on("click",function(){
		download();
	});
	
	function download(){
		if(browser.versions.ios){
			window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8";
		}else if(browser.versions.android){
			window.location.href="http://answerimg.kjcity.com/app/Answer_Student_v2.0.0.apk";
		}
	}
//});
