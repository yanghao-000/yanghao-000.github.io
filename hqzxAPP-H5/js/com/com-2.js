$(function(){

});
document.body.addEventListener('touchstart', function (){});

//function slideHuaDongAH(flag){
//	var nav = $(".slide-nav em");
//	var li = $(".slide-nav li");
//	var bar = $(".slide-nav .nav-bar");
//	var mySwiper = new Swiper(".swiper-container",{
//		autoHeight: true,
//		onTouchStart: function(swiper){
////			wrap.height('auto');
//		},
//		onSlideChangeStart: function(){
//			inputI(mySwiper.activeIndex);
//		},
//		onTransitionEnd: function(){
//			if(!flag){wrapHei();}
//			navTwoSlideDown(mySwiper.activeIndex);
//		},
//	});
//	li.on("touchend",function(){
//		var i = $(this).index();
//		inputI(i);
//		mySwiper.slideTo(i,300,function(){
//			if(!flag){wrapHei();}
//		});
//	});
//	
//	function inputI(i){
//		nav.eq(i).addClass("act").parent().siblings().find("em").removeClass("act");
//		var w = nav.eq(i).outerWidth();
//		var l = nav.eq(i).offset().left;
//		bar.stop(true).animate({"width":w,"left":l},100);
//	}
//	
//	var wrap = $(".swiper-wrapper");
//	var hei = $(window).outerHeight() - $(".slide-nav").outerHeight();
//	function wrapHei(){
//		if(wrap.outerHeight()<hei){
//			wrap.css({"height":hei});
//		}
//	}
//	if(!flag){wrapHei();}
//	
//	function navTwoSlideDown(i){
//		var navTowUl = $(".slide-nav-two-out ul");
//		navTowUl.eq(i).stop(true,true).fadeIn().slideDown().siblings("ul").stop(true.true).hide(0);
//		slideNavTwoWid(navTowUl.eq(i));	
//	}
//}

function slideHuaDong(flag){
	var nav = $(".slide-nav em");
	var li = $(".slide-nav li");
	var bar = $(".slide-nav .nav-bar");
	var mySwiper = new Swiper(".swiper-container",{
		autoHeight: true,
		onTouchStart: function(swiper){
//			wrap.height('auto');
		},
		onSlideChangeStart: function(){
			inputI(mySwiper.activeIndex);
		},
		onTransitionEnd: function(){
			if(!flag){wrapHei();}
			navTwoSlideDown(mySwiper.activeIndex);
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
	
	function navTwoSlideDown(i){
		var navTowUl = $(".slide-nav-two-out ul");
		navTowUl.eq(i).stop(true,true).fadeIn().slideDown().siblings("ul").stop(true.true).hide(0);
		slideNavTwoWid(navTowUl.eq(i));	
	}
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

//function choicePopBefore(){
//	var con =   '<div class="black-bg">'+
//					'<div class="loadEffect">'+
//				        '<span></span>'+
//				        '<span></span>'+
//				        '<span></span>'+
//				        '<span></span>'+
//				        '<span></span>'+
//				        '<span></span>'+
//				        '<span></span>'+
//				        '<span></span>'+
//					'</div>'+
//				'</div>';
//	
//	$("body").append(con);
//	
//	var bg = $(".black-bg");
//	var loading = bg.find(".loadEffect");
//	
//	bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
//	
//	bg.on("touchend",function(){
//		animateFlish();
//		return false;
//	});
//	
//	function animateFlish(){
//		bg.remove();
////		bg.css({"-webkit-animation":"fadeOut 0.5s both"});
////		bg[0].addEventListener("webkitAnimationEnd", function(){
////			$(this).remove();
////		}, false); 
//	}
//}
//function choicePopAfter(showObj){
//	if($(".black-bg").css("display") == "block"){	
//		var bg = $(".black-bg");
//		var pop = $(".choice-pop");
//		var loading = bg.find(".loadEffect");
//		var li = $(".choice-pop .cont li"); 
//		
//		loading.css({"display":"none"});
//		
//		var hei = pop.outerHeight();
//		pop.css({"marginTop":-hei/2});
//	
//		pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
//		
//		bg.on("touchend",function(){
//			animateFlish();
//			return false;
//		});
//		li.on("click",function(){
//			showObj.find("i").text($(this).text());
//			animateFlish();
//			return false;
//		});
//		
//		function animateFlish(){
//			bg.css({"-webkit-animation":"fadeOut 0.5s both"});
//			pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
//			bg[0].addEventListener("webkitAnimationEnd", function(){
//				$(this).remove();
//			}, false); 
//			pop[0].addEventListener("webkitAnimationEnd", function(){
//				$(this).remove();
//			}, false); 
//		}	
//	}else{
//		return false;
//	}
//}

function backTop(){
	var backTop = $(".back-top");
	$(window).on("scroll",function(){
		if($(this).scrollTop()>800){
			backTop.show(0);
		}else{
			backTop.hide(0);
		}
	});
	
	backTop.on("touchend",function(){
		$("html,body").animate({"scrollTop":0},300);
	});
}
backTop();

function choicePopAfter(popObj,fn){
	var bg = $(".black-bg");
	var pop = popObj;
	// var li = $(".choice-pop .cont li");
	var li = pop.find(".cont li");

	var hei = pop.outerHeight();
	pop.css({"marginTop":-hei/2});

	bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
	pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
	
	bg.on("touchend",function(){
		animateFlish();
		return false;
	});
	li.on("click",function(){
		animateFlish();
		if(fn){fn(this);}
		return false;
	});
	
	function animateFlish(){
		bg.hide(0);
		pop.hide(0);
	}	
}



function dataInit(clickObj,fn){
	if(typeof(mobiscrollFlag) == "boolean"){
		clickObj.mobiscroll().date({ 
		    theme: 'ios7', 
		    display: 'bottom',
		    minDate: new Date(),
		    maxDate: new Date(2020,1,1),   
		    lang: 'zh',
		    onSelect: function (valueText,inst){
				console.log(valueText.replace(/\//g,'-')); //返回选择的时间
				var str = valueText.replace(/\//g,'-');
				$(this).find("i").text(str);
				if(fn){fn();}
			},
			onBeforeShow: function (inst) { 
				if(inst.settings.wheels[0][0].values[0].length<=4){
					dateAddText(inst.settings.wheels[0][0].values,"年");
					dateAddText(inst.settings.wheels[0][1].values,"月");
					dateAddText(inst.settings.wheels[0][2].values,"日");
				}
		   },
		});
	}else{
		return false;
	}
	
	function dateAddText(arr,str){
		var a = arr;
		var l = a.length;
		var b = [];
		for(var i=0; i<l; i++){
			b.push(a[i]+str);
		}
		a.splice(0,l);
		for(var i=0; i<l; i++){
			a.push(b[i]);
		}
	}
}

function emptyState(text,obj){
	var con = 	'<div class="empty-bg">'+
					'<div class="empty-cont">'+
						'<div class="empty-img"><img src="images/school/icon/empty-bg.png"/></div>'+
						'<div class="empty-text"><i>'+text+'</i></div>'+
					'</div>'+
				'</div>';
	obj.append(con);
}

//列表加载loading
function scrollBottomLoading(obj,fn){
	$(window).on("scroll",function(){
		if($(document).scrollTop() >= $(document).height() - $(window).height()){
			$('<div class="shanglaLoading"><i>正在加载...</i></div>').appendTo(obj);
			var text = obj.find(".shanglaLoading");
//			$(window).off("scroll");
			if(fn){fn(text);}
		}
	});
}

//导航二级设置宽度
function slideNavTwoWid(obj){
	var navTow = obj;
	var sum = 0;
	var li = navTow.find("li");
	for(var i=0; i<li.length; i++){
		sum += li.eq(i).outerWidth(true);
	}
	navTow.css({"width":sum+2});
}

//导航二级点击
function slideNavTwoClick(){
	$(".slide-nav-two li").on("click",function(){
		$(this).parent().find("em").removeClass("act");
		$(this).find("em").addClass("act");
	});
}

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