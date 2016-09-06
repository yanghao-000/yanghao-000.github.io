var numTiaoDong = function(obj,num,time){
	var i = 0;
	var t = setInterval(function(){
		obj.text(i++);
		if(i>=num){
			obj.text(num);
			clearInterval(t);
		}
	},time/num);
}