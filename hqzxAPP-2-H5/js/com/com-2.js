function slideHuaDong(){
	var nav = $(".slide-nav em");
	var li = $(".slide-nav li");
	var bar = $(".slide-nav .nav-bar");
	var mySwiper = new Swiper(".swiper-container",{
		autoHeight: true,
		onSlideChangeStart: function(){
			inputI(mySwiper.activeIndex);
		},
	});
	li.on("touchend",function(){
		var i = $(this).index();
		inputI(i);
		mySwiper.slideTo(i,300,false);
		
	});
	
	function inputI(i){
		nav.eq(i).addClass("act").parent().siblings().find("em").removeClass("act");
		var w = nav.eq(i).outerWidth();
		var l = nav.eq(i).offset().left;
		bar.stop(true).animate({"width":w,"left":l},100);
	}
}

