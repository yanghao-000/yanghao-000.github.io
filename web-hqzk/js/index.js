$(function(){
	swiperSlide();
	classifyShow();
});

//	轮播图
function swiperSlide(){
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		autoplay : 4000,
		autoplayDisableOnInteraction: false,
		loop: true,
	});
}
//	分类下拉框
function classifyShow(){
	$(".classify p").on("click",function(){
		var i = $(".classify").find("i");
		var ul = $(".classify").find("ul");
		if(ul.css("display") == "none"){
			i.addClass("active");
			ul.slideDown();
		}else{
			i.removeClass("active");
			ul.slideUp();
		}
	});
}