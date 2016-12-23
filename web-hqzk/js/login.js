$(function(){
	seviceSwiperSlide();
	
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