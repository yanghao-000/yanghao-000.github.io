$(function(){
	scrollFix($(".tips-bar"));
	new WOW().init();
});

function scrollFix(obj){
	var flag = true;
	var cl = {};
	var ttop = obj.offset().top;
	var lleft = obj.offset().left;
	$(window).on("scroll",function(){
		if($(this).scrollTop()>ttop){
			if(flag){
				flag = false;
				cl = obj.clone(true);
				cl.css({"-webkit-box-sizing":"border-box","position":"fixed","width":"100%","top":0,"left":lleft,"zIndex":"1234569"});
				obj.after(cl);
			}
		}else{
			if(cl.length > 0){
				cl.remove();
			}
			flag = true;
		}
	});
}