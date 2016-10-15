$(function(){
	courseSlide();			//课程切换
	navCenter();
});

function navCenter(){
	var num = 0;
	$(".main-bar-nav li").each(function(){
		num += $(this).outerWidth(true);
	});
	num = (1200-num)/2;
	$(".main-bar-nav").css({"paddingLeft":num +"px"});
}