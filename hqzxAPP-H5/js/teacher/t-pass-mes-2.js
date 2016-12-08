$(function(){
	sectionSlide();  //多选框展开
	
//	弹出多选框
	$(".multi-select").on("touchend",function(){
		multichoicePopAfter($(".multi-pop"),function(){});
	});
	
//	数据加载
	$(".t-bar-work-ul li").eq(1).on("touchend",function(){
		loadingBefor();
		var t = setTimeout(function(){
			loadingAfter();
		},2000);
	});
	
//	提示弹框
	$(".t-bar-work-ul li").eq(0).on("touchend",function(){
		popup.tips("请先选择</br>科目");
	});
	
});
