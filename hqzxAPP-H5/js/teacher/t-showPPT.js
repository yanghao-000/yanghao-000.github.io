$(function(){
	var imgArr = [
		"http://attach.bbs.miui.com/forum/201503/06/162417trpz6vobv63b6v44.jpg",
		"http://attach.bbs.miui.com/forum/201502/13/183109ac85u6wvqwd688sv.jpg",
		"http://attachments.gfan.com/forum/201601/26/074503cc9c90psss4bsncg.jpg",
		"http://img.elife.com/forum/201411/19/170208aaw788ajfl9ezaud.jpg",
		"http://pic.3h3.com/up/2015-7/20157722110949778.jpg",
	];
	showImg(imgArr);
});

function showImg(imgArr){
	var len = imgArr.length;
	var createImgBox = (function(){
		var imgBoxObj = "";
		for(var i=0; i<len; i++){
			imgBoxObj += "<div class='imgBox' data-index="+i+"></div>";
		}
		$(imgBoxObj).appendTo("body");
	})();
	
	var loadingImg = (function(){
		var obj = $(".imgBox");
		var i = 0;
		var img;
		(function imgByOne(){
			console.log(i);
			img = new Image();
			img.src = imgArr[i];
			img.onload = function(){
				obj.eq(i).css({"background":"none"});
				$(this).appendTo(obj.eq(i)).css({"display":"block"}).fadeIn();
				i++;
				if(i<=len){
					imgByOne();
				}
			}
		})();
	})();	
}
