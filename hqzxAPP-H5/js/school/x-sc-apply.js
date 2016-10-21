$(function(){
	$(".apply-bar").eq(0).on("touchend",function(){
		popup.leave(function(){
			window.location.href = "x-sc-apply-qj.html";
		});
	});
});