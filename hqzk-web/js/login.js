$(function(){
	seviceSwiperSlide();
	clickPhoneYzm($(".yzm-btn"),function(){});
});

function seviceSwiperSlide(){
	var mySwiper;
	
	mySwiper = new Swiper('.swiper-container',{
		autoHeight : true,
		noSwiping : true,
		noSwipingClass : 'stop-swiping',
//		effect : 'fade',
	});
	
	$(".zc-a").on("touchend",function(){
		mySwiper.slideTo(1,300,false);;
		return false;
	});
	$(".dl-a").on("touchend",function(){
		mySwiper.slideTo(0,300,false);;
		return false;
	});
	$(".wjmm-a").on("touchend",function(){
		mySwiper.slideTo(3,300,false);;
		return false;
	});
}

//点击获取验证码
function clickPhoneYzm(obj,fn){
	var timer;
	var i = 60;
	var flag = true;		

	obj.on("click",function(){
		if(flag){
			flag = false;
			if(fn){fn()};
			var that = $(this);
			that.text(i+"S");
			timer = setInterval(function(){
				cd(that,i);
			},1000);
		}
	});
	
	function cd(obj){
		i--;
		if(i>0){
			obj.text(i+"S");
		}else{
			clearInterval(timer);
			i = 60;
			obj.text("获取验证码");
			flag = true;
		}
	}
}