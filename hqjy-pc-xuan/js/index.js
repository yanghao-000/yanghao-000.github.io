$(function(){
	var ie = false;
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"){ 
		$(".first-phone-out").css({opacity:1,"filter":"Alpha(opacity=100)"}).addClass("first-phone-out-ie");
		$(".phone-out").css({opacity:1,"filter":"Alpha(opacity=100)"}).addClass("phone-out-ie");
		$(".text-1").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".text-2").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".text-3").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".text-4").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".last-text").css({opacity:1,"filter":"Alpha(opacity=100)"});
		$(".point").addClass("pointIe");
		ie = true;
	}
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0"){ 
		$(".first-phone-out").css({opacity:1,"filter":"Alpha(opacity=100)"}).addClass("first-phone-out-ie");
		$(".phone-out").css({opacity:1,"filter":"Alpha(opacity=100)"}).addClass("phone-out-ie");
		$(".text-1").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".text-2").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".text-3").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".text-4").css({opacity:1,"filter":"Alpha(opacity=100)","marginLeft":0});
		$(".last-text").css({opacity:1,"filter":"Alpha(opacity=100)"});
		ie = true;
	}
	
	var con = $(".con");
    $('#fullpage').fullpage({
        'verticalCentered': false,
//      anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        scrollingSpeed:500,
		easingcss3: "cubic-bezier(1, 0, 0.8, 0)",
        'navigation': true,
        'navigationPosition': 'right',
        onLeave:function(l,i,d){
			con.eq(l-1).show(0);
			con.eq(i-1).show(0);
			switch (l-1){
        		case 1: page2Stop();break;
        		case 2: page3Stop();break;
        		case 3: page4Stop();break;
        		case 4: page5Stop();break;
        		case 5: page6Stop();break;
        		default: break;
        	}
        },
        afterLoad:function(a,i){
        	i==6?$(".arrow").hide(0) : $(".arrow").show(0);
        	con.eq(i-1).parent().siblings().find(".con").hide(0);
        	switch (i-1){
        		case 1: page2();break;
        		case 2: page3();break;
        		case 3: page4();break;
        		case 4: page5();break;
        		case 5: page6();break;
        		default: break;
        	}
        }
    });
	
	$(".arrow").on("click",function(){
		$.fn.fullpage.moveSectionDown();
	});

	$(".text-3").on("click",function(){
		$(".mask").fadeTo(400,0.4);
		$(".pop").fadeIn(400);
	});
	$(".pop .close-btn").on("click",function(){
		$(".mask").fadeOut(400);
		$(".pop").fadeOut(400);
	});
});
function page2(){
	$(".page2 .point1").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(1000).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page2 .img2").css({"left":"279px"}).delay(2000).animate({left:0},500);
	$(".page2 .point2").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(3500).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page2 .img3").css({"left":"279px"}).delay(4500).animate({left:0},500);
	$(".page2 .point3").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(5500).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page2 .point4").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(6600).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page2 .img4").css({"left":"279px"}).delay(7500).animate({left:0},500);
}
function page2Stop(){
	$(".page2 .point1").stop();
	$(".page2 .img2").stop();
	$(".page2 .point2").stop();
	$(".page2 .img3").stop();
	$(".page2 .point3").stop();
	$(".page2 .point4").stop();
	$(".page2 .img4").stop();
}
function page3(){
	$(".page3 .point1").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(1000).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page3 .img2").css({"left":"279px"}).delay(2000).animate({left:0},500);
	$(".page3 .point2").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(3500).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page3 .img3").css({"left":"279px"}).delay(4500).animate({left:0},500);
	$(".page3 .point3").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(5500).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page3 .img4").css({"left":"279px"}).delay(6500).animate({left:0},500);
}
function page3Stop(){
	$(".page3 .point1").stop();
	$(".page3 .img2").stop();
	$(".page3 .point2").stop();
	$(".page3 .img3").stop();
	$(".page3 .point3").stop();
	$(".page3 .img4").stop();
}
function page4(){
	$(".page4 .point1").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(1000).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page4 .img2").css({"top":"-100%"}).delay(2000).animate({top:0},500);
}
function page4Stop(){
	$(".page4 .point1").stop();
	$(".page4 .img2").stop();
}
function page5(){
	$(".page5 .point1").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(1000).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page5 .img2").css({"top":"-100%"}).delay(2000).animate({top:0},500);
	$(".page5 .img3").css({"left":"100%"}).delay(3800).animate({left:0},500);
	$(".page5 .point2").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(5300).animate({opacity:1},400).css("filter","Alpha(opacity=100)").animate({opacity:0},400).css("filter","Alpha(opacity=0)");
	$(".page5 .img4").css({"left":"100%"}).delay(6300).animate({left:0},500);
}
function page5Stop(){
	$(".page5 .point1").stop();
	$(".page5 .img2").stop();
	$(".page5 .img3").stop();
	$(".page5 .point2").stop();
	$(".page5 .img4").stop();
}
function page6(){
	$(".page6 .img2").css({"opacity":0,"filter":"Alpha(opacity=0)"}).delay(1500).animate({opacity:1},600).css("filter","Alpha(opacity=100)");
}
function page6Stop(){
	$(".page6 .img2").stop();
}

function arrowClick(){
	$(".arrow").on("click",function(){
		
	});
}
