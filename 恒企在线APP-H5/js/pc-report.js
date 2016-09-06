$(function(){
	drawInit(100,1000);
});

function drawInit(inputNum,t){
	var dial = document.getElementById("dial");
	var ctx = dial.getContext("2d");
	var w = dial.width;
	var h = dial.height;
	var r = 88;
	var p = Math.PI;
	var num = -1;
	var deg;
	var ter;
	
	var loadImg = ["images/pc-report/report-dot.png","images/pc-report/report-zhen.png"];
	var imgNum = loadImg.length;
	var k = 0;
	for(var i=0; i<imgNum; i++){
		var img = new Image();
		img.src=loadImg[i];
		img.onload = function (){
			k++;
			if(k == imgNum) {
				numTiaoDong($(".show-total h1 span"),inputNum,t);
				ter = setInterval(function(){
					drawDial(inputNum);
				},t/inputNum);
			};
		};
	};

	function drawDial(n){
		calDeg(n);
		ctx.clearRect(0,0,w,h);
		ctx.save();		
		
		ctx.translate(w/2,95);
		ctx.save();
		
		ctx.beginPath();
		ctx.rotate(p);
		 //水平渐变值必须保持为0
        var gr = ctx.createLinearGradient(0,0,0,160);
        //添加颜色端点
		gr.addColorStop(0,'rgba(255,255,255,0.0)');
        gr.addColorStop(.5,'rgba(255,255,255,1)');  
        gr.addColorStop(1,'rgba(255,255,255,0.0)');  
        ctx.strokeStyle = gr;
		ctx.lineWidth = 3;
		ctx.arc(0,0,r,p,deg+p);
		ctx.stroke();
		ctx.restore();
		ctx.save();
		
		ctx.beginPath();
		var zhen = new Image();
		zhen.src = "images/pc-report/report-zhen.png";
		ctx.rotate(deg);
		ctx.drawImage(zhen,-8,-10,78,22);
		ctx.restore();
		ctx.save();
		
		ctx.beginPath();
		var dot = new Image();
		dot.src = "images/pc-report/report-dot.png";
		ctx.rotate(deg+p);
		ctx.drawImage(dot,-97,-9,18,17);
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
