$(function(){
	drawInit(70,1000);
});

function drawInit(inputNum,t){
	var dial = document.getElementById("dial");
	var ctx = dial.getContext("2d");
	var w = dial.width;
	var h = dial.height;
	var r = 89;
	var p = Math.PI;
	var num = -1;
	var deg;
	var ter;
	var time = t/inputNum;
	
	var loadImg = ["images/pc-report/report-dot.png","images/pc-report/report-zhen.png"];
	var imgNum = loadImg.length;
	var k = 0;
	for(var i=0; i<imgNum; i++){
		var img = new Image();
		img.src=loadImg[i];
		img.onload = function (){
			k++;
			if(k == imgNum) {
				ter = setInterval(function(){
					drawDial(inputNum);
				},time);
			};
		};
	};

	function drawDial(n){
		calDeg(n);
		ctx.clearRect(0,0,w,h);
		ctx.save();		
		
		ctx.translate(w/2,94);
		ctx.save();
		
		ctx.beginPath();
		var linear_gradient = ctx.createLinearGradient(0, 0, 100, 0);
		linear_gradient.addColorStop(0, '#ffffff');
		linear_gradient.addColorStop(0.75, '#ffffff');
		linear_gradient.addColorStop(0, '#ffffff');
		ctx.strokeStyle = linear_gradient;
		ctx.lineWidth = 2;
		ctx.arc(0,0,r,p,deg);
		ctx.stroke();
		ctx.restore();
		ctx.save();
		
		ctx.beginPath();
		var zhen = new Image();
		zhen.src = "images/pc-report/report-zhen.png";
		ctx.rotate(deg);
		ctx.drawImage(zhen,-8,-11,78,22);
		ctx.restore();
		ctx.save();
		
		ctx.beginPath();
		var dot = new Image();
		dot.src = "images/pc-report/report-dot.png";
		ctx.rotate(deg+p);
		ctx.drawImage(dot,-97,-8,18,17);
		ctx.restore();
		ctx.restore();
		ctx.save();
		
	}
	function calDeg(n){
		num++;
		if(num<n){
			deg = p + num/100*p;
		}else{
			deg = p + num/100*p;
			clearInterval(ter);
			return false;
		}	
	}
}
