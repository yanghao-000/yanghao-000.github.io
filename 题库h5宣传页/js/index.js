var mySwiper = new Swiper(".swiper-container",{
	direction : 'vertical',
//  watchSlidesProgress: true,
//  onInit: function(swiper) {
//		swiper.myactive = 0;
//	},
//	onProgress: function(swiper) {
//		for (var i = 0; i < swiper.slides.length; i++) {
//			var slide = swiper.slides[i];
//			var progress = slide.progress;
//			var translate, boxShadow;
//
//			translate = progress * swiper.height * 1;
//			scale = 1;
//			boxShadowOpacity = 0;
//
//			slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
//
//			if (i == swiper.myactive) {
//				es = slide.style;
//				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
//				es.zIndex=0;
//			}else{
//				es = slide.style;
//				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
//				es.zIndex=1;
//			}
//		}
//	},
	onSlideChangeStart: function(swiper){
//		$(".swiper-slide").eq(swiper.activeIndex).addClass("act").siblings().removeClass("act");
		if(swiper.activeIndex==2){
			$(".arrow").hide(0);
		}else{
			$(".arrow").show(0);
		}
  },
});