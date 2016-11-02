document.body.addEventListener('touchstart', function (){});  

function slideHuaDong(flag){
	var nav = $(".slide-nav em");
	var li = $(".slide-nav li");
	var bar = $(".slide-nav .nav-bar");
	var mySwiper = new Swiper(".swiper-container",{
		autoHeight: true,
		onSlideChangeStart: function(){
			inputI(mySwiper.activeIndex);
		},
		onTransitionEnd: function(){
			if(!flag){wrapHei();}
		},
	});
	li.on("touchend",function(){
		var i = $(this).index();
		inputI(i);
		mySwiper.slideTo(i,300,function(){
			if(!flag){wrapHei();}
		});
	});
	
	function inputI(i){
		nav.eq(i).addClass("act").parent().siblings().find("em").removeClass("act");
		var w = nav.eq(i).outerWidth();
		var l = nav.eq(i).offset().left;
		bar.stop(true).animate({"width":w,"left":l},100);
	}
	
	var wrap = $(".swiper-wrapper");
	var hei = $(window).outerHeight() - $(".slide-nav").outerHeight();
	function wrapHei(){
		if(wrap.outerHeight()<hei){
			wrap.css({"height":hei});
		}
	}
	if(!flag){wrapHei();}
}

var popup = (function(){
	var flish = function(t1,fn){
		var con = 	'<div class="black-bg"></div>'+
					'<div class="pop-pause pop-flish">'+
						'<div class="t-h2">成为VIP会员</div>'+
						'<div class="t-h3">全程免费，给你最好体验</div>'+
						'<div class="t-h5"><i>￥'+t1+'</i>/年</div>'+
						'<ul class="t-h4 clearfix">'+
							'<li class="left no-do">取消</li>'+
							'<i class="left"></i>'+
							'<li class="left yes-do">购买服务</li>'+
						'</ul>'+
					'</div>'
					
		$("body").append(con);
		
		var bg = $(".black-bg");
		var pop = $(".pop-flish");
		
		var hei = pop.outerHeight();
		pop.css({"marginTop":-hei/2});
		
		bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
		pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
		
		bg.on("touchend",function(){
			animateFlish();
			return false;
		});
		pop.find(".no-do").on("touchend",function(){
			animateFlish();
			return false;
		});
		
		pop.find(".yes-do").on("touchend",function(){
			if(fn){fn();}
			return false;
		});
		
		function animateFlish(){
			bg.css({"-webkit-animation":"fadeOut 0.5s both"});
			pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
			bg[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false); 
			pop[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false);
		}
	}
	
	var apply = function(fn){
		var con = 	'<div class="black-bg"></div>'+
					'<div class="pop-apply">'+
						'<div class="img-box"></div>'+
						'<div class="text">提交成功</div>'+
					'</div>'
					
		$("body").append(con);
		
		var bg = $(".black-bg");
		var pop = $(".pop-apply");
		
		var hei = pop.outerHeight();
		pop.css({"marginTop":-hei/2});
		
		bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
		pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
		
		var timer = setTimeout(function(){
			animateFlish();
		},1600);
		
		function animateFlish(){
			bg.css({"-webkit-animation":"fadeOut 0.5s both"});
			pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
			bg[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
				if(fn){fn();}
			}, false); 
			pop[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false);
		}
	}
	
	var leave = function(fn){
		var con = 	'<div class="black-bg"></div>'+
					'<div class="pop-pause pop-flish">'+
						'<div class="t-h2">请假说明</div>'+
						'<div class="t-h3">请假后，您的请假课程将无法学习每年最多请假3次，超过时间将自动撤销请假状态中，您可以观看空中课程 </div>'+
						'<ul class="t-h4 clearfix">'+
							'<li class="left no-do">取消</li>'+
							'<i class="left"></i>'+
							'<li class="left yes-do">我要请假</li>'+
						'</ul>'+
					'</div>'
					
		$("body").append(con);
		
		var bg = $(".black-bg");
		var pop = $(".pop-flish");
		
		var hei = pop.outerHeight();
		pop.css({"marginTop":-hei/2});
		
		bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
		pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
		
		bg.on("touchend",function(){
			animateFlish();
			return false;
		});
		pop.find(".no-do").on("touchend",function(){
			animateFlish();
			return false;
		});
		
		pop.find(".yes-do").on("touchend",function(){
			if(fn){fn();}
			return false;
		});
		
		function animateFlish(){
			bg.css({"-webkit-animation":"fadeOut 0.5s both"});
			pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
			bg[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false); 
			pop[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false); 
		}
	}
	
	return {
		flish:flish,
		apply:apply,
		leave:leave
	}
})();

function judgeAnd(){
	var browser={
  	  	versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	
	if(browser.versions.android){
		$(".item").each(function(){
			$(this).find(".right p").eq(0).css({"marginBottom":"1.2em"});
			$(this).find(".right p").eq(1).css({"marginBottom":"0.4em"});
		});
		$(".box.all").each(function(){
			$(this).find(".sec-top .tit p").css({"top":"0"});
		});
		$(".box .sec-bot .sub-box .tit").each(function(){
			$(this).find("em").css({"lineHeight":"1.4em"});
		});
		$(".record-box .t-h3 ul").each(function(){
			$(this).find(".t-li-2").css({"height":"2.7em"});
		});
	}
}