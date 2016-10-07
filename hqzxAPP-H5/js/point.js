$(function(){
	$(".zhan-tot p").on("click",function(){
		var p = $(this).parent();
		if(p.hasClass("active")){
			p.removeClass("active");
			$(this).siblings("ul").stop(true,true).slideUp();
		}else{
			p.addClass("active");
			$(this).siblings("ul").stop(true,true).slideDown();
		}
	});
});
