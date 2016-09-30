//左右切换 
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
	nav.on("touchend",function(){
		var i = $(this).index();
		mySwiper.slideTo(i, 500, false);
		$(this).addClass("active").siblings().removeClass("active");
		slide.eq(mySwiper.previousIndex).animate({"scrollTop":0},300);
	});
}
//展开效果
function launchInit(){
	var posX; 
	var posY;
	var posXend;
	var posYend;
	var slideX = 0;
	var slideY;
    $(".t-zong").on("touchstart",function(){
    	slideX = 0;
        var touch = event.targetTouches[0];
        posX = touch.clientX;
        posY = touch.clientY;
    });
	$(".t-zong").on("touchmove",function(){
    	var touch = event.targetTouches[0];
        posXend = touch.clientX;
        posYend = touch.clientY;
        slideX = Math.abs(posXend - posX);
        slideY = posYend - posY;
    });
    $(".t-zong").on("touchend",function(event){
    	if(slideX<4){
    		if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).find(".ss").removeClass("active");
	//			$(this).stop().siblings().slideUp(200);
				$(this).siblings().hide(0).css("-webkit-transform","translateY(-50px)");
			}else{
				$(this).addClass("active");
				$(this).find(".ss").addClass("active");
	//			$(this).stop().siblings().slideDown(200);
				$(this).siblings().show(0);
				$(this).siblings().css("-webkit-transform","translateY(0px)");
				$(this).siblings().css("-webkit-transition","all 0.2s");
			}
    	}
 		event.preventDefault();
    });
}

//弹框
var popup = (function(){
	var timer;
	var flag = true;
	
	var tips = function(h1){
		if(flag){
			flag = false;
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
					flag = true;
				}, false); 
			},t);
		}
	}
	
	var share = function(){
		$(".pop-bg,.share-pop").remove();
			
		var con = '<div class="pop-bg"></div><div class="share-pop"><ul class="clearfix"><li><p></p><h1>朋友圈</h1></li><li><p></p><h1>微信</h1></li><li><p></p><h1>QQ</h1></li><li><p></p><h1>QQ空间</h1></li><li><p></p><h1>微博</h1></li></ul><dl><dt class="pop-cancel-btn">取消</dt></dl></div>'
		$("body").append(con);
		
		$(".pop-bg,.share-pop").stop(true,true).fadeIn();
		
		$(".share-pop .pop-cancel-btn,.pop-bg").on("click",function(){
			$(".pop-bg,.share-pop").remove();
			return false;
		});
	}
	
	return {
		tips:tips,
		share:share,
	}
})();

//设置答题卡圆角
function setRadius(obj){
	var h = obj.eq(0).outerWidth();
	obj.each(function(i){
		$(this).css({"height":h,"lineHeight":h+"px"});
	});
}
