$(function(){
	playMp3();
});

function playMp3(){
	var mp3 = $("audio.mp3")[0];
	var bar = $(".mp3-box .mp3-bar");
	
//	$("body")[0].addEventListener("touchstart", function(){
//		mp3.play();
//		mp3.pause();
//		$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60)); 
//		mp3.play();
//		mp3.pause();
//		$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60));
//		var i = setTimeout(function(){
//			$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60));
//		},100);
//	}); 
	
//	点击播放
	$(".mp3-box").on("click",function(){
		if(mp3.paused){
			mp3.play();
			bar.show(0);
		}else{
			mp3.pause();
			bar.hide(0);
		}
		return false;
	});
//	进度条
	mp3.ontimeupdate = function(){
		if (!isNaN(mp3.duration)){
			$(".mp3-box .t-i3").addClass("act").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60));
        	var a = mp3.currentTime/mp3.duration*100;
            bar.css({"width":a+"%"});
        }
	}
//	结束
//	mp3.onended = function(){
//		$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60));
//		bar.hide(0).css({"width":"0"});
//	}
////  取音频时长
//	mp3.oncanplay = function(){
//		$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60));   
//	}
//	mp3.addEventListener("loadedmetadata", function(){
//		$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60)); 
//	}); 
//	var i = setInterval(function(){ 
//		if(mp3.readyState > 0) { 
//			clearInterval(i);
//			$(".mp3-box .t-i3").text(Math.floor(mp3.duration/60)+"'"+Math.ceil(mp3.duration%60));
//		} 
//	}, 50);
}
