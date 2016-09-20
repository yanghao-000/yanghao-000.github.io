$(function(){
	var n = 6;
	init(n);   
	hid();
	showSheet();
});
var mySwiperCHoiceCHoice;
//初始化
function init(n){
	var wrap = $(".swiper-wrapper");
	for(var i=0; i<n; i++){
		$('<div class="swiper-slide"></div>').appendTo(wrap);
	}
	var H = $("html").outerHeight(true);
	var h1 = $(".choice-title").outerHeight(true);
	var h2 = $(".footer").outerHeight(true);
	var d = H-h1-h2;
	$(".box").css("height",d);
	$(".swiper-slide").each(function(i){
		$(this).css({"height":d});
	});
	
	mySwiperCHoice = new Swiper('.swiper-container', {
		autoHeight: true,
		onSlideChangeStart: slideTouch,
		preventLinksPropagation : false,
		preventClicks : false,
	});
//	单选点击
	$(".box").on("click",".dx p",function(){
		$(this).addClass("active").siblings().removeClass("active");
		mySwiperCHoice.slideNext(function(){},500);
	});
//	多选点击
	$(".box").on("touchend",".ddx p,.dddx p",function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
		event.preventDefault();
	});
//	多选确定按钮点击
	$(".box").on("click",".ddx .sure-btn,.dddx .sure-btn",function(){
		mySwiperCHoice.slideNext(function(){},500);
	});
}

// 点击答案 滑动下一题的回调
function slideTouch(){    
	$(".swiper-slide").eq(mySwiperCHoice.previousIndex).animate({"scrollTop":0},300);
}

//点击收藏
function hid(){
	$(".hid").on("touchend",function(){
		if($(this).find("p").hasClass("active")){
			$(this).find("p").removeClass("active");
			$(this).find("h1").text("收藏");
		}else{
			$(this).find("p").addClass("active");
			$(this).find("h1").text("已收藏");
		}
	});
}

//答题卡
function showSheet(n){
	var answerSheet = $(".answer-sheet");
	var p = $(".sheet-body p");
	$(".sheet").on("touchend",function(){
		$(".answer-sheet").show(0).addClass("active");
		setRadius(p);
	});
	p.on("touchend",function(){
		answerSheet.fadeOut(0);
		var i = $(this).index();
		mySwiperCHoice.slideTo(i, 500, false);    //点击答题卡 跳转对应题目
	});
	$(".answer-sheet").on("touchend",function(){
		answerSheet.hide(0);
	});
}