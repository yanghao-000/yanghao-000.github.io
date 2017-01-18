$(function(){
	courseCanSwiper();
	verticalScroll($(".ty-6 .cont .ul-out"));
	backTop();
});
//头部banner切换
function courseCanSwiper(){
	var mySwiper = new Swiper('.course-swiper-container',{
		pagination : '.swiper-pagination',
		autoplay : 4000,
		autoplayDisableOnInteraction: false,
		loop: true,
	});
	
	$(".swiper-wrapper").eq(0).css({"height":"auto"});
}
//滚动学员信息
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
//cc视频========================
function createCCplayer(obj,ccId){
	obj.attr("src","http://p.bokecc.com/player?vid="+ ccId +"&siteid=FE7A65E6BE2EA539&autoStart=false&width=100%&height=100%&playerid=CED4B0511C5D4992&playertype=1");
}
//报名日期倒计时
function dateCd(date,obj){
	var nowDate = new Date();
	var toDate = new Date(date);
	console.log(toDate.getTime()+"=="+nowDate);
	var s = toDate.getTime() - nowDate.getTime();
	s = Math.ceil(s/1000/60/60/24);
	
	if(s<10){
		obj.removeClass("san").text("0"+s);
	}else if(s<100){
		obj.removeClass("san").text(s);
	}else{
		obj.text(s);
		obj.eq(1).addClass("san");
	}
}
