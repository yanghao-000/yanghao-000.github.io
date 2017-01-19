//学习进度条
function learningLoading(){
	$(".sec-top").each(function(){
		var per = $(this).find(".t-l .t-h1 i").text();
		$(this).find(".t-l .t-h2 p").css({"width":per});
	});
}
//章节展开
function learningCenterZhan(){
	var obj = $(".stair-out.has-down");
	var btn = obj.find(".stair-tit:eq(0)");
	
	btn.on("click",function(){
		$(".com-swiper-container .swiper-wrapper").css({"height":"auto"});
		var that = $(this).next("ul");
		if(that.hasClass("act")){
			that.removeClass("act");
			$(this).find(".t-h3").removeClass("act");
			$(this).next("ul").stop(true,true).slideUp(200);
		}else{
			that.addClass("act");
			$(this).find(".t-h3").addClass("act");
			$(this).next("ul").stop(true,true).slideDown(200);
		}
	});
}