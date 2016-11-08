function slideHuaDong(flag){
	var nav = $(".slide-nav-1 em");
	var li = $(".slide-nav-1 li");
	var bar = $(".slide-nav-1 .nav-bar");
	var mySwiper = new Swiper(".swiper-container",{
		autoHeight: true,
		onSlideChangeStart: function(){
			inputI(mySwiper.activeIndex);
		},
		onTransitionEnd: function(){
			if(!flag){wrapHei();}
		},
	});
	li.on("touchend",function(){
		var i = $(this).index();
		inputI(i);
		mySwiper.slideTo(i,300,function(){
			if(!flag){wrapHei();}
		});
	});
	
	function inputI(i){
		nav.eq(i).addClass("act").parent().siblings().find("em").removeClass("act");
		var w = nav.eq(i).outerWidth();
		var l = nav.eq(i).offset().left;
		bar.stop(true).animate({"width":w,"left":l},100);
	}
	
	var wrap = $(".swiper-wrapper");
	var hei = $(window).outerHeight() - $(".slide-nav").outerHeight();
	function wrapHei(){
		if(wrap.outerHeight()<hei){
			wrap.css({"height":hei});
		}
	}
	if(!flag){wrapHei();}
}
//	返回顶部
function backTop(){
	$(document).scroll(function(){
		var t = $(document).scrollTop();
		if(t>=50){
			$(".backTop").stop().show();
		}else{
			$(".backTop").stop().hide();
		}
	});
	$(".backTop").on("click",function(){
		$("html,body").stop().animate({"scrollTop":0},300);
	});
}
