$(function(){
	yuyinAjax();
//	playMp3();
});

//语音文章数据请求
function yuyinAjax(){
	var _id = $.query.get("_id");
//	_id = '56f8a5fd8e1d93c4f4b8e084_30';
	$.ajax({
		url:mainUrlActions.yuyin+'?_id='+_id,
		type:"get",
		async:true,
		dataType:"json",
		success:function(res){
			var d = res.data;
			var con =  	'<div class="radio-title">'+
							'<div class="tit">'+d.recommend_title+'</div>'+
							'<div class="t-h2">'+
								'<i class="i-1">'+d.recommend_time+'</i>'+
								'<i class="i-2">'+d.recommend_radio_teacher_name+'</i>'+
							'</div>'+
						'</div>'+
						'<!--语音-->'+
						'<div class="mp3-box">'+
							'<i class="t-i1 v-mid"><i class="v-mid"></i></i><i class="t-i2 v-mid">'+d.summary+'</i><i class="t-i3 v-mid">'+SecChangeMin(d.recommend_radio_time)+'</i><i class="v-mid-a"></i>'+
							'<div class="mp3-bar"></div>'+
							'<audio src="'+d.recommend_mp3url+'" class="mp3" preload="auto" width="0" height="0" preload></audio>'+
						'</div>'+
						'<!--文章内容-->'+
						'<div class="article-box">'+
							d.recommend_html+
							'<!--文章底部-->'+
							'<div class="foo"><i>阅读: </i><span>'+d.read_count+'</span></div>'+
						'</div>'
						
			$(".mainCon").append(con);
			playMp3(SecChangeMin(d.recommend_radio_time));
		},
		error:function(res){
			
		}
	});
}
//播放音频
function playMp3(duration){
	var mp3 = $("audio.mp3")[0];
	var bar = $(".mp3-box .mp3-bar");
	var t = $(".mp3-box .t-i3");

//	点击播放
	$(".mp3-box").on("click",function(){
		if(mp3.paused){
			mp3.play();
			bar.show(0);
		}else{
			showDur();
			mp3.pause();
			bar.hide(0);
		}
		return false;
	});
//	暂停时 显示总时长
	mp3.onpause = function(){
		showDur();
	}
//	播放时间改变是时 显示播放时间
	mp3.ontimeupdate = function(){
		t.text(SecChangeMin(mp3.currentTime));
    	var a = mp3.currentTime/mp3.duration*100;
        bar.css({"width":a+"%"});
	}
//	结束时
	mp3.onended = function(){
		showDur();
		bar.hide(0).css({"width":"0"});
		mp3.pause();
	}
//	显示总时长
	function showDur(){
		t.text(duration);
	}
}
//秒转分
function SecChangeMin(s){
	var a = (s%60)<10 ? "0"+Math.floor(s%60) : Math.floor(s%60);
	var m = Math.floor(s/60)+"'"+a;
	return m;
}
