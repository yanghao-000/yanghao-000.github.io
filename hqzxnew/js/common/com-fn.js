$(function(){
	headerNavHover();        //头部导航
	slideBanner();           //banner切换
	headerUserPhoto();        //头像下拉菜单
	$(".backTop").backTop(300); //返回顶部
	floatNavRightCode();     //右侧导航二维码
	courseNavA();          //头部导航课程移入下拉
	$(window).scrollFix($(".fix-nav"));  //浮动导航条
	iePlaceholder();             //IEplaceHolder
});

//头部导航移入
function headerNavHover(){
	$(".header .nav li").not(".act,.course-nav-a").hover(function(){
		$(this).css({"color":"#18aa1f"});
		var w = $(this).width();
		$(this).find("i").stop().animate({"width":w},300);
		$(".course-nav-a").css({"color":"#333"});
	},function(){
		$(this).css({"color":"#333"});
		$(this).find("i").stop().animate({"width":"0"},300);
	});
	$(".header").on("mouseleave",function(){
		$(".course-nav-a").css({"color":"#333"});
	});
	$(".header .nav .act").on("mouseenter",function(){
		$(".course-nav-a").css({"color":"#333"});
	});
}
//切换banner
function slideBanner(){
	var ww = document.documentElement.clientWidth;
	var sb = $(".slide-banner");
	var ul = sb.find(".slide-ul");
	var li = sb.find(".slide-li");
	var dd = sb.find(".slide-dd");
	var index = 0;
	
	li.each(function(){$(this).css("width",ww);});
	ul.css({"width":ww*li.length});
	
	var timer = setInterval(function(){
		index++;
		if(index>=li.length){index=0;}
		dd.eq(index).addClass("act").siblings("dd").removeClass("act");
		ul.stop(true,true).animate({"marginLeft":-ww*index},300);
	},4000);
	
	dd.hover(function(){
		clearInterval(timer);
		var i = $(this).index();
		index = i;
		$(this).addClass("act").siblings("dd").removeClass("act");
		ul.stop(true,true).animate({"marginLeft":-ww*index},300);
	},function(){
		timer = setInterval(function(){
			index++;
			if(index>=li.length){index=0;}
			dd.eq(index).addClass("act").siblings("dd").removeClass("act");
			ul.stop(true,true).animate({"marginLeft":-ww*index},300);
		},4000);
	});
	
}

//返回顶部
$.fn.backTop = function(t){
	var t = t || 500;
	$(this).on("click",function(){
		$("html,body").animate({"scrollTop":0},t);
	});
}

//头像下拉菜单
function headerUserPhoto(){
	var o = $(".register-yes-out .dl-out");
	var flag = true;
	$(".register-yes").on("mouseenter",function(){
		if(flag){
			flag = false;
			o.stop(true,true).slideDown(function(){
				flag = true;
			});
		}
	});
	$(".register-yes-out").on("mouseleave",function(){
//		if(flag){
//			flag = false;
			o.stop(true,true).slideUp(function(){
				flag = true;
			});
//		}
	});
};

//二维码显示
function floatNavRightCode(){
	$(".phone-code").hover(function(){
		$(this).find("dl").stop().fadeIn(200);
	},function(){
		$(this).find("dl").stop().fadeOut(200);
	});
}

//课程切换
function courseSlide(){
	$(".main-big-box").each(function(){
		var slideNav = $(this).find(".main-bar-nav li");
		var slideBox = $(this).find(".main-course-box-out .main-course-box");
		slideNav.on("click",function(){
			var i = $(this).index();
			$(this).addClass("act").siblings("li").removeClass("act");
			slideBox.eq(i).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut(0);
		});
	});
}

//头部课程移入下拉
function courseNavA(){
	var a = $(".course-nav-a").find("em");
	$(".course-nav-a").on("mouseenter",function(){
		$(this).css({"color":"#18aa1f"});
		if($(".course-xiala").css("display") == "block"){
			a.stop(true,true).fadeIn(0);
			$(".course-xiala").stop(true,true).fadeIn(0);
		}else{
			a.stop(true,true).fadeIn();
			$(".course-xiala").stop(true,true).fadeIn();
		}
	});
	$(".course-xiala,.course-nav-a").on("mouseleave",function(){
		a.stop(true,true).fadeOut(100);
		$(".course-xiala").stop(true,true).fadeOut(200);
	});
	
	$(".course-xiala").on("mouseenter",function(){
		a.stop(true,true).fadeIn(0);
		$(".course-xiala").stop(true,true).fadeIn(0);
	});
	
	$(".course-xiala").on("mouseleave",function(){
		$(".course-nav-a").css({"color":"#333"});
	});
	
	$(".course-xiala .div-left li").on("mouseenter",function(){
		var obj = $(".course-xiala .div-right");
		var i = $(this).index();
		$(this).addClass("act").siblings("li").removeClass("act");
		obj.eq(i).show(0).siblings("dl").hide(0);
	});
}

//滚动 使元素定位  
$.fn.scrollFix = function(obj){
	if(obj.length > 0){
		var ttop = obj.offset().top;
		var lleft = obj.offset().left;
		$(this).on("scroll",function(){
			if($(this).scrollTop()>=ttop){
				obj.css({"position":"fixed","top":0,"left":lleft,"zIndex":"123456"});
			}else{
				obj.css({"position":""});
			}
		});
	}
}

//ie placeholder
function iePlaceholder(){
	//判断IE各个版本
	var isIE6 = /msie 6/i.test(navigator.userAgent);
	var isIE7 = /msie 7/i.test(navigator.userAgent);
	var isIE8 = /msie 8/i.test(navigator.userAgent);
	var isIE9 = /msie 9/i.test(navigator.userAgent);
	var isIE = /msie/i.test(navigator.userAgent);
	function pwIconPosi(setPostion){
		var _this = this
		var _top = setPostion.top || "50%";
		var _left = setPostion.left || "35px";
		// //找到所有Input的value值并清空
		// $('input').each(function(i){
		// 	var inputValue = $(this).val();
		// 	$(this).attr('placeholder',inputValue);
		// 	$(this).attr('value','');
		// 	//清除其标签的 onblur 与 onfocus 属性，以防止BUG出现
		// 	$(this).removeAttr('onblur');
		// 	$(this).removeAttr('onfocus');
		// })

		//判断是否在IE环境下
		if(isIE6 || isIE7 || isIE8 || isIE9){
			$('input[placeholder]').each(function(){
				/*-=-=-=-=-=-=-=-=*/
				if($(this).attr("type")=="text"){
					var thisVal = $(this).attr('placeholder');

					$(this).val(thisVal).css({color:"#999999"});
					$(this).focus(function(){
						if($(this).val()==thisVal){
							$(this).val("").css({color:"#555555"});
						}
					});
					$(this).blur(function(){
						if($(this).val()==""){
							$(this).val(thisVal).css({color:"#999999"});
						}
					})
				}
			
			})
		}else{
			return false;
		}
	}
	var ba = pwIconPosi({
		top:"50%",
		left:"40px"
	});
}

//题库下向上移入
function sxHoverTop(obj,cl){
	obj.on("mouseenter",function(){
		$(this).find(cl).css({"display":"block"}).stop(true).animate({"top":"0px"},200);
	});
	obj.on("mouseleave",function(){
		$(this).find(cl).stop(true).animate({"top":"100%"},200,function(){
			$(this).css({"display":"none"});
		});
	});
}

//图片加载  先加载数据
function loadingImg(obj,imgAdd){
	obj.each(function(){
		obj.css({"background":"url(images/icon/img-loading.gif) no-repeat center center"});
		obj.find("img").css({"display":"none"});
	});
	
	var len = imgAdd.length;
	for(var i=0; i<len; i++){
		var img = new Image();
		img.src = imgAdd[i];
		img.alt = i;
		img.onload = function(){
			var f = $(this).attr("alt");
			obj.eq(f).css({"background":""});
			obj.eq(f).find("img").fadeIn();
		}
	}
}
