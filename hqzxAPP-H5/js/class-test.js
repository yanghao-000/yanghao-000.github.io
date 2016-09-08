$(function(){
	slideCreate();
	init();
});

function init(){
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
