$(function(){
	slideCreate();
	
	
	function slideCreate(){
		var H = $("html").outerHeight(true);
		var h = $(".hd").outerHeight(true);
		var d = H-h;
		$(".swiper-slide").each(function(i){
			if($(this).outerHeight()<d){
				$(this).css("height",d)
			}
		});
		var nav = $(".hd li");
		var mySwiper = new Swiper('.swiper-container', {
			autoHeight: true,
			onSlideChangeStart: function(){
		     	nav.eq(mySwiper.activeIndex).addClass("active").siblings().removeClass("active");
		    }
		});
		nav.click(function(){
			var i = $(this).index();
			mySwiper.slideTo(i, 500, false);
			$(this).addClass("active").siblings().removeClass("active");
		});
	}
});
