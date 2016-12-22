$(function(){
	slideHuaDong(true,false);
	launchInit();
	
//	会员弹框    398价钱   点击 购买服务的回调
	$(".be-vip-btn").on("touchend",function(){
		popup.flish("398",function(){});             
	});
});


//展开效果
function launchInit(){
    $(".t-zong").on("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find(".ss").removeClass("active");
			$(this).siblings().hide(0).css("-webkit-transform","translateY(-50px)");
		}else{
			$(this).addClass("active");
			$(this).find(".ss").addClass("active");
			$(this).siblings().show(0);
			$(this).siblings().css("-webkit-transform","translateY(0px)");
			$(this).siblings().css("-webkit-transition","all 0.2s");
		}
    });
}


