"use strict";
function calculate(){
	var amount = document.getElementById("amount");
	var apr = document.getElementById("apr");
	var years = document.getElementById("years");
	var zipcode = document.getElementById("zipcode");
	var payment = document.getElementById("payment");
	var total = document.getElementById("total");
	var totalinterest = document.getElementById("totalinterest");
	var principal = parseFloat(amount.value);
	var interest = parseFloat(apr.value)/100/12;
	var payments = parseFloat(years.value)*12;
	var x = Math.pow(1+interest,payments);
	var monthly = (principal*x*interest)/(x-1);
	if(isFinite(monthly)){
		payment.innerHTML=monthly.toFixed(2);
		total.innerHTML=(monthly*payments).toFixed(2);
		totalinterest.innerHTML=((monthly*payments)-principal).toFixed(2);
		save(amount.value,apr.value,years.value,zipcode.value);
		try{
			getLenders(amount.value,apr.value,years.value,zipcode.value);
		}catch(e){}
		chart(principal,interest,monthly,payments);
	}else{
		payment.innerHTML-"";
		total.innerHTML="";
		totalinterest.innerHTML="";
		chart();
	}
}
function save(amount,apr,years,zipcode){
	if(window.localStorage){
		localStorage.loan_amount=amount;
		localStorage.loan_apr=apr;
		localStorage.loan_years=years;
		localStorage.loan_zipcode=zipcode;
	}
}
window.onload=function(){
	if(window.localStorage&&localStorage.loan_amount){
		document.getElementById("amount").value=localStorage.loan_amount;
		document.getElementById("apr").value=localStorage.loan_apr;
		document.getElementById("years").value=localStorage.loan_years;
		document.getElementById("zipcode").value=localStorage.loan_zipcode;
	}
}
function getLenders(amount,apr,years,zipcode){
	if(!window.XMLHttpRequest)return;
	var ad=document.getElementById("lenders");
	if(!ad)return;
	var url="getLenders.php"+
	"?amt="+encodeURICompoent(amount)+
	"?apr="+encodeURICompoent(apr)+
	"?yrs="+encodeURICompoent(years)+
	"?zip="+encodeURICompoent(zipcode);
	var req=new XMLHttpRequest();
	req.open("GET",url);
	req.send(null);
	req.onreadystatechange=function(){
		if(req.readyState==4&&req.status==200){
			var response=req.responseText;
			var lenders=JSON.parse(response);
			var list="";
			for(var i=0;i<lenders.length;i++){
				list+="<li><a href='"+lenders[i].url+"'>"+lenders[i].name+"</a>";
			}
			ad.innerHTML="<ul>"+list+"</ul>";
		}
	}
}
function chart(principal,interest,monthly,payments){
	var graph=document.getElementById("graph");
	graph.width=graph.width;
	if(arguments.length==0||!graph.getContext)return;
	var g=graph.getContext("2d");
	var width=graph.width,
		height=graph.height;
	function paymentToX(a){
		return height-(a*height/(monthly*payments*1.05));
	}
	function amountToY(a){
		return height-(a*height/(monthly*payments*1.05));
	}//付款数据是一条从(0,0)到(payments,monthly*payments)的直线
	g.moveTo(paymentToX(0),amountToY(0));//从左下方开始
	g.lineTo(paymentToX(payments),//绘至右上方
	amountToY(monthly*payments));
	g.lineTo(paymentToX(payments),amountToY(0));//再至右下方
	g.closePath();//将结尾连接至开头
	g.fillStyle="#f88";//亮红色
	g.fill();//填充矩形
	g.font="bold 12px sans-serif";//定义一种字体
	g.fillText("Total Interest Payments",20,20);//将文字绘制到图例中
	//很多资产数据并不是线性的，很难将其反映至图表中
	var equity=0;
	g.beginPath();//开始绘制新图形
	g.moveTo(paymentToX(0),amountToY(0));//从左下方开始
	for(var p=1;p<=payments;p++){//计算出每一笔赔付的利息
		var thisMonthsInterest=(principal-equity)*interest;
		equity+=(monthly-thisMonthsInterest);//得到资产额
		g.lineTo(paymentToX(p),amountToY(equity));//将数据绘制到画布上
	}
	g.lineTo(paymentToX(payments),amountToY(0));//将数据线绘制至x轴
	g.closePath();//将线条结尾连接至线条开头
	g.fillStyle="green";//使用绿色绘制图形
	g.fill();//曲线之下的部分均填充
	g.fillText("Total Equity",20,35);//文本颜色设置为绿色
	//再次循环，余额数据显示为黑色粗线条
	var bal=principal;
	g.beginPath();
	g.moveTo(paymentToX(0),amountToY(bal));
	for(var p=1;p<=payments;p++){
		var thisMonthsInterest=bal*interest;
		bal-=(monthly-thisMonthsInterest);//得到资产额
		g.lineTo(paymentToX(p),amountToY(bal));//将直线连接至某点
	}
	g.lineWidth=3;//将直线宽度加粗
	g.stroke();//绘制余额的曲线
	g.fillStyle="black";//使用黑色字体
	g.fillText("Loan Balance",20,50);//图例文字
	//将年度数据在X轴做标记
	g.textAlign="center";//文字居中对齐
	var y=amountToY(0);//Y坐标设为0
	for(var year=1;year*12<=payments;year++){//遍历每年
		var x=paymentToX(year*12);//计算标记位置
		g.fillRect(x-0.5,y-3,1,3);//开始绘制标记
		if(year==1)g.fillText("Year",x,y-5);//在坐标轴做标记
		if(year%5==0&&year*12!==payments)//每5年的数据
		g.fillText(String(year),x,y-5);
	}
	//将赔付数额标记在右边界
	g.textAlign="right";//文字右对齐
	g.textBaseline="middle";//文字垂直居中
	var ticks=[monthly*payments,principal];//我们将要用到的两个点
	var rightEdge=paymentToX(payments);//设置X坐标
	for(var i=0;i<ticks.length;i++){//对每两个点做循环
		var y=amountToY(ticks[i]);//计算每个标记的Y坐标
		g.fillRect(rightEdge-3,y-0.5,3,1);//绘制标记
		g.fillText(String(ticks[i].toFixed(0)),//绘制文本
		rightEdge-5,y);
	}
}