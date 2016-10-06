$(function(){
	dataInit();	
	popTikuChoice();
});

function dataInit(){
	$("#dome").mobiscroll().date({ 
	    theme: 'ios7', 
	    display: 'bottom',
	    minDate: new Date(),
	    maxDate: new Date(2030,1,1),   
	    lang: 'zh',
	    onSelect: function (valueText,inst) {
	    	console.log(calLeftTime(valueText));   //返回剩余日期
		},
		onBeforeShow: function (inst) { 
			if(inst.settings.wheels[0][0].values[0].length<=4){
				dateAddText(inst.settings.wheels[0][0].values,"年");
				dateAddText(inst.settings.wheels[0][1].values,"月");
				dateAddText(inst.settings.wheels[0][2].values,"日");
			}
//      	inst.settings.wheels[0].splice(2,1);//去掉“日”列表
	   	},
//  	headerText: function (valueText) {
//      	array = valueText.split('/');
//      	return array[0] + "年"+array[1] + "月" ;//窗体标题头显示
//  	},
	});
	
	function dateAddText(arr,str){
		var a = arr;
		var l = a.length;
		var b = [];
		for(var i=0; i<l; i++){
			b.push(a[i]+str);
		}
		a.splice(0,l);
		for(var i=0; i<l; i++){
			a.push(b[i]);
		}
	}
}
//计算剩余时间
 function calLeftTime(str){
 	var a = new Date();
 	var t = new Date(str);
 	var l = t.getTime()-a.getTime();
 	var day = Math.ceil((l/1000/60/60)/24);
 	return day;
 }

//题库类型选择弹框
function popTikuChoice(){
	$("body").on("touchend",".domee",function(){
		var hei = $(".pop-choice").outerHeight();
		$(".pop-choice").css({"marginTop":-hei/2});
		$(".pop-choice-out,.pop-choice").stop(true,true).fadeIn();
	});
	$("body").on("touchend",".pop-choice-out",function(){
		$(".pop-choice-out,.pop-choice").stop(true,true).fadeOut();
	});
}

