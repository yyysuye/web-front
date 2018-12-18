// 秒杀倒计时
function sec(){
	var a,b,c,tday,thour,tminutes,tseconds=0;
	var nowTime=new Date();
	var setTime=new Date();
	console.log(setTime.getFullYear());
	console.log(setTime);
	var thour=[0,2,4,6,8,10,12,14,16,18,20,22];
	b=new Date();
	b.setHours(selectHour());
	b.setMinutes(0);
	b.setSeconds(0);
	var scdHour=document.getElementsByClassName("scd_hour_txt")[0];
	var scdMinute=document.getElementsByClassName("scd_minute_txt")[0];
	var scdSecond=document.getElementsByClassName("scd_second_txt")[0];
	// d=3600000*2;
	var t=setInterval(function (){
		a=new Date();
		c=b-a;
		if(c<0){
			clearInterval(t);
		}else{
			tday=c/216000000;
			thour=(tday-Math.floor(tday))*60;
			tminutes=(thour-Math.floor(thour))*60;
			tseconds=(tminutes-Math.floor(tminutes))*60;
			thour=judge(Math.floor(thour));
			tseconds=judge(Math.floor(tseconds));
			tminutes=judge(Math.floor(tminutes));
			scdHour.innerHTML=thour;
			scdMinute.innerHTML=tminutes;
			scdSecond.innerHTML=tseconds;
			// console.log(Math.floor(tday)+"天"+Math.floor(thour)+"小时"+Math.floor(tminutes)+"分钟"+Math.floor(tseconds)+"秒")
			if(t==0){
				clearInterval(t);
			}
		}
	},1000);
	function judge(time){
		if(time<10){
			time="0"+time;
		}
		return time;
	}
	function selectHour(){
		var now=new Date();
		var h=now.getHours();
		console.log(now.getHours());
		switch(h){
			case 0:
			case 1:
				return 2;
				break;
			case 2:
			case 3:
				return 4;
				break;
			case 4:
			case 5:
				return 6;
				break;
			case 6:
			case 7:
				return 8;
				break;
			case 8:
			case 9:
				return 10;
				break;
			case 10:
			case 11:
				return 12;
				break;
			case 12:
			case 13:
				return 14;
				break;
			case 14:
			case 15:
				return 16;
				break;
			case 16:
			case 17:
				return 18;
				break;
			case 18:
			case 19:
				return 20;
				break;
			case 20:
			case 21:
				return 22;
				break;
			case 22:
			case 23:
				return 24;
				break;
		}
	}
}
document.body.onload=sec();