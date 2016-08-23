$(function(){
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
	
	if(browser.versions.ios){
		$(".pop-dload-tip img").attr('src','images/tips/pop_tit_bg.png');
		window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8"; //跳转APP下载链接
	}else if(browser.versions.android){
		$(".pop-dload-tip img").attr('src','images/tips/androind_tip.png');
//		window.location.href="http://answerimg.kjcity.com/app/Answer_Student_v2.0.0.apk"; //跳转APP下载链接
	}
	
	function isWeiXin(){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	    	$(".pop-dload-tip").fadeIn();
	        return true;
	    }else{
	        return false;
	    }
	}
	$(".lastDowloade").on("click",function(){
		if(browser.versions.ios){
			isWeiXin();
			window.location.href="https://itunes.apple.com/us/app/hui-da/id1064833923?l=zh&ls=1&mt=8"; //跳转APP下载链接
		}else if(browser.versions.android){
			if(isWeiXin()) return;
			window.location.href="http://answerimg.kjcity.com/app/Answer_Student_v2.0.0.apk"; //跳转APP下载链接
		}
	});
	
	$(".pop-dload-tip img").click(function(){
		$(".pop-dload-tip").fadeOut();
	});
	
	
	$('openApp').onclick = function(e){  
        // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为  
        // 否则打开a标签的href链接  
        var ifr = document.createElement('iframe');  
        ifr.src = 'weixin://';  
        ifr.style.display = 'none';  
        document.body.appendChild(ifr);  
        window.setTimeout(function(){  
            document.body.removeChild(ifr);  
        },3000);
    };
});
