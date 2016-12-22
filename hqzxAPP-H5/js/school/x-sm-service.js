$(function(){
//	滑动
	seviceSwiperSlide();
//	单选勾上
	radioClick();
	//	选择弹框
	touchendResolve($(".click-select-1"),function(){
		clickSelectPop($(".click-select-1"),$(".choice-pop-1"));
	});
	touchendResolve($(".click-select-2"),function(){
		clickSelectPop($(".click-select-2"),$(".choice-pop-2"));
	});
	touchendResolve($(".click-select-3"),function(){
		clickSelectPop($(".click-select-3"),$(".choice-pop-3"));
	});
	touchendResolve($(".click-select-4"),function(){
		clickSelectPop($(".click-select-4"),$(".choice-pop-4"));
	});
//	点击下一步
	$(".sevice-btn.sub-btn.sev-next-btn").on("click",function(){
		firstClickNext();
		navJinTuiSet(mySwiper.activeIndex);
	});
//	点击上一部
	$(".sevice-btn.sub-btn.sev-prev-btn").on("click",function(){
		firstClickPrev();
		navJinTuiSet(mySwiper.activeIndex);
	});
//	点击确定提交
	$(".sevice-btn.sub-btn.sev-sure-btn").on("click",function(){
		firstClickNext();
		navJinTuiSet(mySwiper.activeIndex);
	});
//	错误弹出 提示框
	popup.tips("验证码错误");
//	点击获取验证码
	clickPhoneYzm($(".sevice-phone-yzm"),function(){
		alert(123);
	});
});

//单选勾上
function radioClick(){
	$(".apply-bar .t-fen-gs .t-h1").on("touchend",function(){
		if(!$("this").find(".t-i1").hasClass("act")){
			$(this).find(".t-i1").addClass("act").parent().siblings().find(".t-i1").removeClass("act");
		}
	});
}
//swiper
var mySwiper
function seviceSwiperSlide(){
	mySwiper = new Swiper('.swiper-container',{
		autoHeight:true,
	});
}
//滑动下一步
function firstClickNext(){
	mySwiper.slideNext(function(){},300);
}
//返回上一步
function firstClickPrev(){
	mySwiper.slidePrev(function(){},300);
}
function navJinTuiSet(i){
	var obj = $(".record-box .t-progress .sec-in");
	obj.removeClass("act");
	for(var j=0; j<=i; j++){
		obj.eq(j).addClass("act");
	}
}

//选择弹框
//function clickSelectPop(clickObj,popObj){
//	clickObj.on("touchend",function(){
//		var that = $(this);
//		choicePopAfter(popObj,function(obj){
//			that.find("i").text($(obj).text());
//		});
//		return false;
//	});
//}

//选择弹框
function clickSelectPop(clickObj,popObj){
	choicePopAfter(popObj,function(obj){
		clickObj.find("i").text($(obj).text());
	});
}
//点击获取验证码
function clickPhoneYzm(obj,fn){
	var timer;
	var i = 60;
	var flag = true;		

	obj.on("click",function(){
		if(flag){
			flag = false;
			if(fn){fn()};
			var that = $(this);
			that.text(i+"S");
			timer = setInterval(function(){
				cd(that,i);
			},100);
		}
	});
	
	function cd(obj){
		i--;
		if(i>0){
			obj.text(i+"S");
		}else{
			clearInterval(timer);
			i = 60;
			obj.text("获取验证码");
			flag = true;
		}
	}
}
