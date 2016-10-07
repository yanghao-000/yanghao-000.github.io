//左右切换 
function slideCreate(){
	var H = $("html").outerHeight(true);
	var h = $(".hd").outerHeight(true);
	var d = H-h;
	var slide = $(".swiper-slide");
	var nav = $(".hd li");
	
	$(".box").css("height",d);
	slide.each(function(i){
		$(this).css("height",d);
	});
	var mySwiper = new Swiper('.swiper-container', {
		autoHeight: true,
		onSlideChangeStart: function(){
	     	nav.eq(mySwiper.activeIndex).addClass("active").siblings().removeClass("active");
	     	slide.eq(mySwiper.previousIndex).animate({"scrollTop":0},300);
	    }
	});
	nav.on("touchend",function(){
		var i = $(this).index();
		mySwiper.slideTo(i, 500, false);
		$(this).addClass("active").siblings().removeClass("active");
		slide.eq(mySwiper.previousIndex).animate({"scrollTop":0},300);
	});
}
//展开效果
function launchInit(){
	var posX; 
	var posY;
	var posXend;
	var posYend;
	var slideX = 0;
	var slideY;
    $(".t-zong").on("touchstart",function(){
    	slideX = 0;
        var touch = event.targetTouches[0];
        posX = touch.clientX;
        posY = touch.clientY;
    });
	$(".t-zong").on("touchmove",function(){
    	var touch = event.targetTouches[0];
        posXend = touch.clientX;
        posYend = touch.clientY;
        slideX = Math.abs(posXend - posX);
        slideY = posYend - posY;
    });
    $(".t-zong").on("touchend",function(event){
    	if(slideX<4){
    		if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).find(".ss").removeClass("active");
	//			$(this).stop().siblings().slideUp(200);
				$(this).siblings().hide(0).css("-webkit-transform","translateY(-50px)");
			}else{
				$(this).addClass("active");
				$(this).find(".ss").addClass("active");
	//			$(this).stop().siblings().slideDown(200);
				$(this).siblings().show(0);
				$(this).siblings().css("-webkit-transform","translateY(0px)");
				$(this).siblings().css("-webkit-transition","all 0.2s");
			}
    	}
 		event.preventDefault();
    });
}

//设置答题卡圆角
function setRadius(obj){
	var h = obj.eq(0).outerWidth();
	obj.each(function(i){
		$(this).css({"height":h,"lineHeight":h+"px"});
	});
}

//弹框
var popup = (function(){
	var timer;
	var flag = true;
	
	var tips = function(h1){
		if(flag){
			flag = false;
			clearTimeout(timer);
			$(".tips-popup").remove();
			
			var t = t || 1400;
			
			var con = '<div class="tips-popup">'+h1+'</div>'
			$("body").append(con);
			
			var hei = $(".tips-popup").outerHeight();
			$(".tips-popup").css({"marginTop":-hei/2});
			
			timer = setTimeout(function(){
				$(".tips-popup").addClass("out");
				$(".tips-popup.out")[0].addEventListener("webkitAnimationEnd", function(){
					$(this).remove();
					flag = true;
				}, false); 
			},t);
		}
	}
	
	var share = function(){
		$(".pop-bg,.share-pop").remove();
			
		var con = 	'<div class="pop-bg"></div>'+
					'<div class="share-pop">'+
						'<ul class="clearfix">'+
							'<li>'+
								'<p></p>'+
								'<h1>朋友圈</h1>'+
							'</li>'+
							'<li>'+
								'<p></p>'+
								'<h1>微信</h1>'+
							'</li>'+
							'<li>'+
								'<p></p>'+
								'<h1>QQ</h1>'+
							'</li>'+
							'<li>'+
								'<p></p>'+
								'<h1>QQ空间</h1>'+
							'</li>'+
							'<li>'+
								'<p></p>'+
								'<h1>微博</h1>'+
							'</li>'+
						'</ul>'+
						'<dl><dt class="pop-cancel-btn">取消</dt></dl>'+
					'</div>'
					
		$("body").append(con);
		
		$(".pop-bg,.share-pop").stop(true,true).fadeIn();
		
		$(".share-pop .pop-cancel-btn,.pop-bg").on("touchend",function(){
			$(".pop-bg,.share-pop").stop(true,true).fadeOut(function(){
				$(this).remove();
			});
			return false;
		});
	}
	
	var pause = function(t1,fn){
		var con = 	'<div class="pop-bg"></div>'+
					'<div class="pop-pause">'+
						'<div class="t-h1"><img src="images/icon/pop-text-icon.png"/></div>'+
						'<div class="t-h2">提示</div>'+
						'<div class="t-h3">'+t1+'</div>'+
						'<ul class="t-h4 clearfix">'+
							'<li class="left no-do">不做了</li>'+
							'<i class="left"></i>'+
							'<li class="left yes-do">接着做</li>'+
						'</ul>'+
					'</div>'
					
		$("body").append(con);
		
		$(".pop-bg,.pop-pause").stop(true,true).fadeIn();
		
		var hei = $(".pop-pause").outerHeight();
		$(".pop-pause").css({"marginTop":-hei/2});
		
		$(".pop-pause .yes-do,.pop-bg").on("touchend",function(){
			$(".pop-pause,.pop-bg").stop(true,true).fadeOut(function(){
				$(this).remove();
			});
			return false;
		});
		
		$(".pop-pause .no-do").on("touchend",function(){
			if(fn){fn();}
			return false;
		});
	}
	
	var flish = function(t1,t2,t3,fn){
		var con = 	'<div class="pop-bg"></div>'+
					'<div class="pop-pause pop-flish">'+
						'<div class="t-h1"><img src="images/icon/pop-text-icon.png"/></div>'+
						'<div class="t-h2">提示</div>'+
						'<div class="t-h3">'+t1+'</div>'+
						'<ul class="t-h4 clearfix">'+
							'<li class="left no-do">'+t2+'</li>'+
							'<i class="left"></i>'+
							'<li class="left yes-do">'+t3+'</li>'+
						'</ul>'+
					'</div>'
					
		$("body").append(con);
		
		$(".pop-bg,.pop-flish").stop(true,true).fadeIn();
		
		var hei = $(".pop-flish").outerHeight();
		$(".pop-flish").css({"marginTop":-hei/2});
		
		$(".pop-flish .no-do").on("touchend",function(){
			$(".pop-flish,.pop-bg").stop(true,true).fadeOut(function(){
				$(this).remove();
			});
			return false;
		});
		
		$(".pop-flish .yes-do").on("touchend",function(){
			if(fn){fn();}
			return false;
		});
	}
	
	var balance = function(i1,i2,fn){
		var con = 	'<div class="pop-bg"></div>'+
					'<div class="pop-balance">'+
						'<div class="t-h1"><img src="images/icon/pop-pig-icon.png"/></div>'+
						'<div class="t-h2">您的会豆不足，请充值</div>'+
						'<div class="t-h3">'+
							'<p class="t-p-1">当前余额：  <i>'+i1+'</i>   会豆</p>'+
							'<p class="t-p-2">支付会豆：  <i>'+i2+'</i>   会豆</p>'+
						'</div>'+
						'<ul class="t-h4 clearfix">'+
							'<li class="left no-do">取消</li>'+
							'<i class="left"></i>'+
							'<li class="left yes-do">立即充值</li>'+
						'</ul>'+
					'</div>'
					
		$("body").append(con);
		
		$(".pop-bg,.pop-balance").stop(true,true).fadeIn();
		
		var hei = $(".pop-balance").outerHeight();
		$(".pop-balance").css({"marginTop":-hei/2});
		
		$(".pop-balance .no-do,.pop-bg").on("touchend",function(){
			$(".pop-balance,.pop-bg").stop(true,true).fadeOut(function(){
				$(this).remove();
			});
			return false;
		});
		
		$(".pop-balance .yes-do").on("touchend",function(){
			if(fn){fn();}
			return false;
		});
	}
	
	return {
		tips:tips,
		share:share,
		pause:pause,
		flish:flish,
		balance:balance,
	}
})();

function judgeAnd(){
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
	
	if(browser.versions.android){
		$(".rank-ul li .rank-d-3 dl dt").each(function(){
			$(this).find("p").eq(1).css({"marginTop":0});
		});
		
		$(".pass-body .head .w2 h1").css({"marginTop":"0.7em"});
		
		$(".pass-body .body .w1").each(function(){
			$(this).find("p").eq(0).css({"marginTop":"0.7em"});
		});
		$(".pass-body .head .dif h1").css({"lineHeight":"3.6em","height":"3.6em"});
		
		$(".index-ban .t-h3").css({"lineHeight":"2.1em"});
		$(".conti-test .text").css({"width":"27%"});
		$(".index-ban").css({"paddingTop":"2.4em"});
	}
}
judgeAnd();