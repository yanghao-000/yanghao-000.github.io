//左右切换   接收完数据再执行
function slideCreate(){
	var H = $("html").outerHeight(true);
	var h = $(".hd").outerHeight(true);
	var d = H-h;
	var slide = $(".swiper-slide");
	var nav = $(".hd li");
	
	$(".box").css("height",d);
	slide.each(function(i){
		$(this).css("height",d);
	});
	var mySwiper = new Swiper('.swiper-container', {
		autoHeight: true,
		onSlideChangeStart: function(){
	     	nav.eq(mySwiper.activeIndex).addClass("active").siblings().removeClass("active");
	     	slide.eq(mySwiper.previousIndex).animate({"scrollTop":0},300);
	    }
	});
	nav.click(function(){
		var i = $(this).index();
		mySwiper.slideTo(i, 500, false);
		$(this).addClass("active").siblings().removeClass("active");
		slide.eq(mySwiper.previousIndex).animate({"scrollTop":0},300);
	});
}
//展开效果
function launchInit(){
	$(".t-zong").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find(".ss").removeClass("active");
			$(this).siblings().fadeOut(200);
		}else{
			$(this).addClass("active");
			$(this).find(".ss").addClass("active");
			$(this).siblings().fadeIn(200);
		}
	});
}
