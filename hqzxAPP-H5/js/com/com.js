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

//弹框
var popup = (function(){
	var timer;
	var tips = function(h1){
		clearTimeout(timer);
		$(".tips-popup").remove();
		
		var t = t || 1600;
		
		var con = '<div class="tips-popup">'+h1+'</div>'
		$("body").append(con);
		
		var hei = $(".tips-popup").outerHeight(true);
		$(".tips-popup").css({"marginTop":-hei/2});
		
		timer = setTimeout(function(){
			$(".tips-popup").addClass("out");
			$(".tips-popup.out")[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false); 
		},t);
	}
	return {
		tips:tips
	}
})();