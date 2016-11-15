$(function(){
	sectionSlide();  //多选框展开
	$(".multi-select").on("touchend",function(){
		multichoicePopAfter($(".multi-pop"),function(){});
	});
});
