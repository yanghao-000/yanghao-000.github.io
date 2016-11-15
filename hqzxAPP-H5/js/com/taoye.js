$(function(){
	verticalScroll($(".ty-6 .cont .ul-out"));
	courseCanSwiper();
});

function courseCanSwiper(){
	var mySwiper = new Swiper('.course-swiper-container',{
		pagination : '.swiper-pagination',
		autoplay : 4000,
		autoplayDisableOnInteraction: false,
		loop: true,
	});
}

function verticalScroll(outer){
	var outer = outer;
	var ul = outer.find("ul");
	var li = ul.find("li");
	var disten = li.eq(0).outerHeight(true);
	var ini=0,ini2=0;
	var i = 1;
	var max = li.length/2;
	var ini3=0;
	
	for(var j=0; j<4; j++){
		ini+=parseInt(li.eq(j).outerHeight(true));
	}
	for(var j=0; j<6; j++){
		ini2+=parseInt(li.eq(j).outerHeight(true));
	}
	outer.css({"height":ini});
	ul.css({"marginTop":-ini2+"px"});
	
	var timer = setInterval(function(){
		ini3 +=  parseInt(li.eq(i).outerHeight(true));
		ul.animate({"marginTop":-ini2+ini3},700,function(){
			i++;
			if(i==max+1){
				i=1;
				ini3=0;
				ul.css({"marginTop":-ini2});
			}
		});
	},4000);
}