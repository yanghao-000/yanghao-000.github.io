$(function(){
	var n = 6;
	init(n);   
	hid();
	showSheet();
});
var mySwiper;
//初始化
function init(n){
	var wrap = $(".swiper-wrapper");
	for(var i=0; i<n; i++){
		$('<div class="swiper-slide"></div>').appendTo(wrap);
	}
	var H = $("html").outerHeight(true);
	var h1 = $(".title").outerHeight(true);
	var h2 = $(".footer").outerHeight(true);
	var d = H-h1-h2;
	$(".box").css("height",d);
	$(".swiper-slide").each(function(i){
		if($(this).outerHeight(true)<d){
			$(this).css({"height":d});
		}
	});
	
	mySwiper = new Swiper('.swiper-container', {
		autoHeight: true,
		onSlideChangeStart: slideTouch,
	});
//	单选点击
	$(".box").on("click",".dx p",function(){
		$(this).addClass("active").siblings().removeClass("active");
		mySwiper.slideNext(function(){},500);
	});
//	多选点击
	$(".box").on("click",".ddx p",function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	});
//	多选确定按钮点击
	$(".box").on("click",".ddx .sure-btn",function(){
		mySwiper.slideNext(function(){},500);
	});
}

// 点击答案 滑动下一题的回调
function slideTouch(){    
//	alert(123);
}

//点击收藏
function hid(){
	$(".hid").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).siblings().text("收藏");
		}else{
			$(this).addClass("active");
			$(this).siblings().text("已收藏");
		}
	});
}

//答题卡
function showSheet(n){
	var answerSheet = $(".answer-sheet");
	var p = $(".sheet-body p");
	$(".sheet").on("click",function(){
		$(".answer-sheet").fadeIn();
	});
	p.on("click",function(){
		answerSheet.fadeOut(0);
		var i = $(this).index();
		mySwiper.slideTo(i, 500, false);    //点击答题卡 跳转对应题目
	});
	$(".answer-sheet").on("click",function(){
		answerSheet.fadeOut(0);
	});
}