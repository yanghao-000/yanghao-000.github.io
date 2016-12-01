$(function(){
	slideHuaDong2(true);
	
	slideNavTwoWid($(".slide-nav-scroll"));
	slideNavTwoClick();
	
	scrollBottomLoading($(".swiper-slide-1"),function(text){
		var t = setTimeout(function(){
			text.remove();
		},5000);
	});
	
	judgeAndTeacher();
});


function slideHuaDong2(flag){
	var nav = $(".slide-nav em");
	var li = $(".slide-nav li");
	var bar = $(".slide-nav .nav-bar");
	var out = $(".slide-nav-out");
	
	var mySwiper = new Swiper(".swiper-container",{
//		autoHeight: true,
		onTouchStart: function(swiper){
//			wrap.height('auto');
		},
		onSlideChangeStart: function(){
			inputI(mySwiper.activeIndex);
			inputI2(false,mySwiper.activeIndex);
		},
		onTransitionEnd: function(){
			if(!flag){wrapHei();}
			navTwoSlideDown(mySwiper.activeIndex);
		},
	});
	li.on("click",function(){
		var i = $(this).index();
		inputI(i);
		inputI2(true);
		mySwiper.slideTo(i,300,function(){
			if(!flag){wrapHei();}
			navTwoSlideDown(mySwiper.activeIndex);
		});
	});
	
	function inputI(i){
		nav.eq(i).addClass("act").parent().siblings().find("em").removeClass("act");
		var w = nav.eq(i).outerWidth();
		var l = nav.eq(i).position().left;
		bar.stop(true).animate({"width":w,"left":l},100);
	}

	function inputI2(flag,i){
		if(flag){
			li.eq(0).click(function(){
			scrollAni(out,0);
			});
			li.eq(1).click(function(){
				scrollAni(out,1);
			});
			li.eq(2).click(function(){
				scrollAni(out,2);
			});
			li.eq(3).click(function(){
				scrollAni(out,3);
			});
			li.eq(4).click(function(){
				scrollAni(out,4);
			});
		}else{
			scrollAni(out,i);
		}
	}
	function scrollAni(obj,num){
		if(num*40<=40){
			num = 0;
		}else if(num*40>=120){
			num = 1000;
		}
		obj.stop(true,true).animate({"scrollLeft":num*40+"px"},200);
	}
	
	var wrap = $(".swiper-wrapper");
	var hei = $(window).outerHeight() - $(".slide-nav").outerHeight();
	var hei = hei || h;
	function wrapHei(){
		if(wrap.outerHeight()<hei){
			wrap.css({"height":hei});
		}
	}
	if(!flag){wrapHei();}
	
	function navTwoSlideDown(i){
		var navTowUl = $(".slide-nav-two-out ul");
		navTowUl.eq(i).stop(true,true).fadeIn().slideDown().siblings("ul").stop(true.true).hide(0);
		slideNavTwoWid(navTowUl.eq(i));	
	}
}
