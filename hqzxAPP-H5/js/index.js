$(function(){
	dataInit();	
});

function dataInit(){
	$("#dome").mobiscroll().date({ 
	    theme: 'ios7', 
	    display: 'bottom',
	    minDate: new Date(),
	    maxDate: new Date(2030,1,1),   
	    lang: 'zh',
//	    fixedWidth: 50,
//	    onInit: function(inst){
//	    	dateAddText(inst.settings.wheels[0][0].values,"年");
//			dateAddText(inst.settings.wheels[0][1].values,"月");
//			dateAddText(inst.settings.wheels[0][2].values,"日");
//	    },
	    onSelect: function (valueText,inst) {
	    	console.log(valueText);   //返回选择的日期
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
}

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
