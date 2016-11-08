var popupT = (function(){
	var apply = function(fn){
		var con = 	'<div class="black-bg"></div>'+
					'<div class="pop-pause pop-flish">'+
						'<div class="t-h2">申请成功</div>'+
						'<div class="t-h3">您可以直接在恒企在线教师端里面，用对应手机号重置密码，即可登录</div>'+
						'<ul class="t-h4 clearfix">'+
							'<li class="left no-do">知道了</li>'+
						'</ul>'+
					'</div>'
					
		$("body").append(con);
		
		var bg = $(".black-bg");
		var pop = $(".pop-flish");
		
		var hei = pop.outerHeight();
		pop.css({"marginTop":-hei/2});
		
		bg.css({"display":"block","-webkit-animation":"fadeIn 0.5s both"});
		pop.css({"display":"block","-webkit-animation":"fadeInUp 0.4s both"});
		
		bg.on("touchend",function(){
			animateFlish();
			return false;
		});
		pop.find(".no-do").on("touchend",function(){
			animateFlish();
			return false;
		});
		
		pop.find(".yes-do").on("touchend",function(){
			if(fn){fn();}
			return false;
		});
		
		function animateFlish(){
			bg.css({"-webkit-animation":"fadeOut 0.5s both"});
			pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
			bg[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false); 
			pop[0].addEventListener("webkitAnimationEnd", function(){
				$(this).remove();
			}, false); 
		}
	}
	
	return {
		apply:apply,
	}
})();