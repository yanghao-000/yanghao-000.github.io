$(function(){
	courseSlide();			//课程切换
	personCenterSlide();
});

function personCenterSlide(){
	$(".sc-main-box .sc-main-box-l li").on("click",function(){
		var i = $(this).index();
		var o = $(".sc-main-box-r .main-big-box");
		$(this).addClass("act").siblings().removeClass("act");
		o.eq(i).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut(0);
	});
};
