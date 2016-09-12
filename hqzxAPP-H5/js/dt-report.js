$(function(){
	setRadius($(".sheet-body p"));
	dtReportNav();
});
function dtReportNav(){
	var cont = $(".cont");
	$(".nav li").on("click",function(){
		var i = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		cont.eq(i).stop().show(0).siblings(".cont").stop().hide(0);
	});
}
