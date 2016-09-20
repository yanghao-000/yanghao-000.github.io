$(function(){
	slideCreate();
	var posX; 
	var posY;
	var posXend;
	var posYend;
	var slideX = 0;
	var slideY;
	$(".t-zong")[0].addEventListener('touchstart', function(event) {
		slideX = 0;
        var touch = event.targetTouches[0];
        console.log(touch.clientX);
        posX = touch.clientX;
        posY = touch.clientY;
    }, false);
    $(".t-zong")[0].addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];
        posXend = touch.clientX;
        posYend = touch.clientY;
        slideX = Math.abs(posXend - posX);
        slideY = posYend - posY;
    }, false);
    $(".t-zong").on("touchend",function(event){
    	if(slideX<4){
    		if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).find(".ss").removeClass("active");
	//			$(this).stop().siblings().slideUp(200);
				$(this).siblings().hide(0).css("-webkit-transform","translateY(-50px)");
			}else{
				$(this).addClass("active");
				$(this).find(".ss").addClass("active");
	//			$(this).stop().siblings().slideDown(200);
				$(this).siblings().show(0);
				$(this).siblings().css("-webkit-transform","translateY(0px)");
				$(this).siblings().css("-webkit-transition","all 0.2s");
			}
    	}
//  	return false;
 		event.preventDefault();
    });
	
});


