$(function(){
	subjectSlide();
});

function subjectSlide(){
	$(".subject").on("click",".stair",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).children("ul").stop().slideUp();
		}else{
			$(this).addClass("active");
			$(this).children("ul").stop().slideDown();
		}
		return false;
	});
	$(".section").on("click",".stair",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).children("ul").stop().slideUp();
		}else{
			$(this).addClass("active");
			$(this).children("ul").stop().slideDown();
		}
		return false;
	});
}
