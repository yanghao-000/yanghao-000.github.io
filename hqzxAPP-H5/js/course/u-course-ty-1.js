$(function(){
//	slideHuaDongTe();
	
	createCCplayer($("#video-box-1"),"A0DF3C0F49B4B5B89C33DC5901307461");
	createCCplayer($("#video-box-2"),"E6CB736D45FBB16D9C33DC5901307461");
});

//function slideHuaDongTe(){
//	var nav = $(".slide-nav em");
//	var li = $(".slide-nav li");
//	var bar = $(".slide-nav .nav-bar");
//	var swi = $(".swiper-container .swiper-slide");
//	
//	function inputI(i){
//		nav.eq(i).addClass("act").parent().siblings().find("em").removeClass("act");
//		var w = nav.eq(i).outerWidth();
//		var l = nav.eq(i).offset().left;
//		bar.stop(true).animate({"width":w,"left":l},100);
//	}
//	
//	$(".slide-nav.slide-nav-2 li").on("click",function(){
//		var i = $(this).index();
//		swi.eq(0).animate({"marginLeft":-i*100+"%"},300);
//		inputI(i);
//	});	
//}
