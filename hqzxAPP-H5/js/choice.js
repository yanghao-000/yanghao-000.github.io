$(function(){
	var n = 6;
	init(n);  
	setTimeCountDown(1,30,0);  
});

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
	
	var mySwiper = new Swiper('.swiper-container', {
		autoHeight: true,
		onSlideChangeStart: slideTouch,
	});
//	单选点击
	$(".box").on("click",".dx p",function(){
		$(this).addClass("active").siblings().removeClass("active");
//		if(!$(this).parent().hasClass("hasChoose")){
			mySwiper.slideNext(function(){},500);
//		}else{
//			slideTouch();
//		}
//		$(this).parent().addClass("hasChoose");
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

//倒计时
function setTimeCountDown(a,b,c,fn){
//	var end = new Date(time);
	var end = new Date();
	end = end.getTime() + (a*3600+b*60+c)*1000;
	
	var tDay = document.getElementById("t-d-text");
	var tHour = document.getElementById("t-h-text");
	var tMin = document.getElementById("t-m-text");
	var tSec = document.getElementById("t-s-text");
	var tMs = document.getElementById("t-ms-text");
	
	var setTimeCountDownT = setInterval(function(){
		var now = new Date();
		var leftTime = end-now.getTime();
		var ms = Math.floor((leftTime)%100);
		var s = Math.floor((leftTime/1000)%60);
		var m = Math.floor((leftTime/1000/60)%60);
		var h = Math.floor((leftTime/1000/60/60)%24);
		var d = Math.floor((leftTime/1000/60/60/24));		
		if(ms<10){ms="0"+ms}
		if(s<10){s="0"+s}
		if(m<10){m="0"+m}
		if(h<10){h="0"+h}
		if(d<10){d="0"+d}
//		tMs.innerHTML = ms;
		tSec.innerHTML = s;
		tMin.innerHTML = m;
		tHour.innerHTML = h;
		if(s=="00"&&m=="00"&&h=="00"){
			if(fn){fu();}
		}
//		tDay.innerHTML = d;
	},10);
}

//点击收藏
$(".hid").on("click",function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).siblings().text("收藏");
	}else{
		$(this).addClass("active");
		$(this).siblings().text("已收藏");
	}
});
