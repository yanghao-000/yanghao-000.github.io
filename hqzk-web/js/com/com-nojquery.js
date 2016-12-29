//设置滑动导航的样式
function huadongNav(){
	var o = document.getElementsByClassName("slide-nav")[0];
	var act = o.getElementsByClassName("act")[0];
	var bar = o.getElementsByClassName("nav-bar")[0];
	
	bar.style.width = act.clientWidth + "px";
	bar.style.left = act.offsetLeft + "px";
}
huadongNav();