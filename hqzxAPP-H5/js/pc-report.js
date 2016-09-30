$(function(){
	var passRate = 100;
	var pArr = [70,50,30];
	var lArr = ["06.01","06.02","06.03","06.04","06.05","06.06","06.07","06.08"];
	var dArr = [20,40,30,10,90,20,50,40];
	drawInit(passRate,1000,pArr,lArr,dArr);
	
	$(".show-total").on("click",function(){
		popup.share();
	});
});

//表盘
function drawInit(inputNum,t,arr,arr2,arr3){
	var dial = document.getElementById("dial");
	var ctx = dial.getContext("2d");
	var w = dial.width;
	var h = dial.height;
	var r = 88;
	var p = Math.PI;
	var num = -1;
	var deg;
	var timer;
	
	var loadImg = ["images/pc-report/report-dot.png","images/pc-report/report-zhen.png"];
	var imgNum = loadImg.length;
	var k = 0;
	for(var i=0; i<imgNum; i++){
		var img = new Image();
		img.src=loadImg[i];
		img.onload = function (){
			k++;
			if(k == imgNum){
				setTimeout(function(){
					numTiaoDong($(".show-total h1 span"),inputNum,t);
					timer = setInterval(function(){
						calDeg(inputNum);
						drawDial(inputNum);
					},t/inputNum);
					$(".show-sub p").each(function(i){
						barPercent($(this),arr[i],t);
					});
					chartLine(arr2,arr3);
				},200);
			};
		};
	};

	function drawDial(n){
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
		ctx.drawImage(zhen,-8,-11,78,22);
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
		if(num<=n){
			deg = p + num/100*p;
		}else{
			clearInterval(timer);
			return false;
		}	
	}
}

//条形进度
function barPercent(obj,per,t){
	obj.animate({"width":per+"%"},t);
	numTiaoDong(obj.parent().next().find("span"),per,t);
}

//折线图
function chartLine(lArr,dArr){
	var winW = $(window).outerWidth(true);
	if(winW<=320){
		$("#chartLine").attr("width",314).attr("height",160);
	}else if(winW<=375){
		$("#chartLine").attr("width",360).attr("height",190);
	}else{
		$("#chartLine").attr("width",390).attr("height",205);
	}
	
	var scaleStepWidth = (Math.max.apply(null,dArr)+10)/5; //转化Y轴
	
	var ctx = document.getElementById("chartLine").getContext("2d");
			
	var strokeC=ctx.createLinearGradient(0,0,0,200);
	strokeC.addColorStop(0,"rgba(89,225,219,1)");
	strokeC.addColorStop(1,"rgba(51,160,248,1)"); 

	var data = {
		labels : lArr,
		datasets : [
			{
				fillColor : "rgba(255,255,255,0)",
				strokeColor : strokeC,
				pointColor : "rgba(255,255,255,1)",
				pointStrokeColor : "#289afb",
				data : dArr
			},
		]
	}
	var options = {
		animation : false,
		scaleFontColor : "#333",
		scaleGridLineColor : "#ddd",
		animationSteps : 100,
		pointDotRadius : 4,
		pointDotStrokeWidth : 3,
		scaleOverride : true,
		scaleSteps : 5,
		scaleStepWidth : scaleStepWidth,
		scaleStartValue : 0
	}
	var myNewChart = new Chart(ctx).Line(data,options);
}


//数字跳动
function numTiaoDong(obj,num,time){
	var i = 0;
	var t = setInterval(function(){
		obj.text(i++);
		if(i>=60){
			obj.parent().addClass("pass");
		}
		if(i>=num){
			obj.text(parseInt(num));
			clearInterval(t);
		}
	},time/num);
}