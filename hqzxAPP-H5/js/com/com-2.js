$(function(){

});
document.body.addEventListener('touchstart', function (){});

//滑动切换
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
		var con = 	
//		'<div class="black-bg"></div>'+
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
		tips:tips,
		flish:flish,
		apply:apply,
		leave:leave
	}
})();

//返回顶部
function backTop(){
	var flag = true;
	var backTop;
	$(window).on("scroll",function(){
		if($(this).scrollTop()>800){
			if(flag){
				flag = false;
				$('<div class="back-top"><i>&and;</i></div>').appendTo("body");
				$(".back-top").show(0);
				$(".back-top").on("touchend",function(){
					$("html,body").animate({"scrollTop":0},300);
				});
			}
		}else{
			flag = true;
			$(".back-top").remove();
		}
	});
}
//backTop();
//选择弹框
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


//时间选择弹框
function dataInit(clickObj,fn){
	if(typeof(mobiscrollFlag) == "boolean"){
		clickObj.mobiscroll().date({ 
		    theme: 'ios7', 
		    display: 'bottom',
		    minDate: new Date(2010,0,1),
		    maxDate: new Date(2030,11,30),   
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

//为空页
function emptyState(text,obj,imgUrl){
	var url;
	if(!imgUrl){
		url = "images/school/icon/empty-bg.png";
	}else if(imgUrl == 1){
		url = "images/school/icon/kaifa-bg.png";
	}else if(imgUrl == 2){
		url = "images/school/icon/noPower-bg.png";
	}
	var con = 	'<div class="empty-bg">'+
					'<div class="empty-cont">'+
						'<div class="empty-img"><img src='+url+'/></div>'+
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

//样式调整
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

//数据加载前成功前创建loading
function loadingBefor(){
	var con =   '<div class="loading-bg">'+
					'<div class="spinner">'+
					  	'<div class="spinner-container container1">'+
						    '<div class="circle1"></div>'+
						    '<div class="circle2"></div>'+
						    '<div class="circle3"></div>'+
						    '<div class="circle4"></div>'+
					  	'</div>'+
					  	'<div class="spinner-container container2">'+
						    '<div class="circle1"></div>'+
						    '<div class="circle2"></div>'+
						    '<div class="circle3"></div>'+
						    '<div class="circle4"></div>'+
					  	'</div>'+
					  	'<div class="spinner-container container3">'+
						    '<div class="circle1"></div>'+
						    '<div class="circle2"></div>'+
						    '<div class="circle3"></div>'+
						    '<div class="circle4"></div>'+
					 	'</div>'+
					'</div>'+
				'</div>'
	
	$("body").append(con);
}
//数据加载成功后去除loading
function loadingAfter(){
	$(".loading-bg").remove();
}

//touchend解决办法
function touchendResolve(cobj,fn){
	var posX; 
	var posY;
	var posXend;
	var posYend;
	var slideX = 0;
	var slideY = 0;
    cobj.on("touchstart",function(){
    	slideX = 0;
    	slideY = 0;
        var touch = event.targetTouches[0];
        posX = touch.clientX;
        posY = touch.clientY;
    });
	cobj.on("touchmove",function(){
    	var touch = event.targetTouches[0];
        posXend = touch.clientX;
        posYend = touch.clientY;
        slideX = Math.abs(posXend - posX);
        slideY = Math.abs(posYend - posY);
    });
    cobj.on("touchend",function(event){
    	if(slideX<4&&slideY<4){
    		if(fn){fn();}
    	}
   		event.preventDefault();
    });
}