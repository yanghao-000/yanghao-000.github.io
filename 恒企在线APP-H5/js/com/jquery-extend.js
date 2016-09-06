//数字跳动
var numTiaoDong = function(obj,num,time){
	var i = 0;
	var t = setInterval(function(){
		obj.text(i++);
		if(i>=num){
			obj.text(parseInt(num));
			clearInterval(t);
		}
	},time/num);
}