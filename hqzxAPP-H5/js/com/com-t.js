$(function(){
	dataInit($(".time-select"));
});

document.body.addEventListener('touchstart', function (){});

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
//选择列表弹框
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
//多选弹框
function multichoicePopAfter(popObj,fn){
	var bg = $(".black-bg");
	var pop = popObj;

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
		animateFlish();
		if(fn){fn();}
		return false;
	});
	
	function animateFlish(){
		bg.hide(0);
		pop.hide(0);
	}	
}
//多选框展开
function sectionSlide(){
	var sec = $(".section");
	sec.on("click",".stair",function(){
		if($(this).hasClass("act")){
			$(this).removeClass("act");
			$(this).children("ul").stop(true,true).slideUp();
		}else{
			$(this).addClass("act");
			$(this).children("ul").stop(true,true).slideDown();
		}
		return false;
	});
	
	sec.find(".all").on("click",function(){
		if($(this).find(".stair-h1").hasClass("act")){
			sec.find(".stair-h1").removeClass("act");
		}else{
			sec.find(".stair-h1").addClass("act");
		}
		return false;
	});
	
	$(".section .stair-1 .stair-h1").not(".all-stair-h1").on("click",function(){
		if($(this).hasClass("act")){
			$(this).removeClass("act");
			$(this).parent().siblings("ul").find(".stair-h1").removeClass("act");
		}else{
			$(this).addClass("act");
			$(this).parent().siblings("ul").find(".stair-h1").addClass("act");
		}
		return false;
	});
	
	$(".stair-2").on("click",function(){
		if($(this).find(".stair-h1").hasClass("act")){
			$(this).find(".stair-h1").removeClass("act");
		}else{
			$(this).find(".stair-h1").addClass("act");
		}
		return false;
	});
}
//时间选择弹框
function dataInit(clickObj){
	if(typeof(mobiscrollFlag) == "boolean"){
		clickObj.mobiscroll().date({ 
		    theme: 'ios7', 
		    display: 'bottom',
		    minDate: new Date(),
		    maxDate: new Date(2020,1,1),   
		    lang: 'zh',
		    onSelect: function (valueText,inst){
				console.log(valueText.replace(/\//g,'.')); //返回选择的时间
				var str = valueText.replace(/\//g,'.');
				$(this).find("em").text(str);
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

function judgeAndTeacher(){
	var browser={
  	  	versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
            	ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	
	if(browser.versions.android){
		$(".check-in-body ul li").each(function(){
			$(this).find("i").eq(0).css({"marginTop":"25%"});
		});
		$(".slide-nav.slide-nav-scroll").css({"width":"126%"});
		$(".course-list-box .item .right").each(function(){
			$(this).find("p").eq(0).css({"marginBottom":"0.2em"});
		});
	}
	if(browser.versions.ios){
//		$(".ban .play-btn-bg").css({"background":"none"});
//		$(".ban .play-btn").css({"background":"none"});
	}
}