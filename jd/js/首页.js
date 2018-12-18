// 顶部广告图
// 点击X号，广告图透明度变淡，消失
var eventDel=document.getElementById("event_del");
var JDevent=document.getElementById("JD_event");
// console.log(eventDel);
// console.log(JDevent);
eventDel.onclick=function(){
	JDevent.className+=" fade_e";
	setTimeout(
		function(){
			JDevent.style.display="none";
		},500
	);
}


// 更换地点
var scTxtItems=document.querySelectorAll(".sc-txt-items");
var scTxt=document.querySelectorAll(".sc-txt");
for(var j=0;j<scTxtItems.length;j++){
	scTxtItems[j].onclick=function(e){
		// console.log(e.target.textContent);
		for(var t=0;t<scTxtItems.length;t++){
			scTxtItems[t].className=scTxtItems[t].className.replace(" light"," off");
		}
		e.target.className=e.target.className.replace(" off"," light");
		scTxt[0].innerHTML="&nbsp"+e.target.textContent;
	}
}

// 轮播图
var slideIndex=1;
var bannerSlides=document.querySelectorAll(".banner-slide");
var bannerf=document.querySelectorAll(".sidebar-bannerf");
var bannerPre=document.querySelectorAll(".banner-pre");
var bannerNext=document.querySelectorAll(".banner-next");
var bannerDot=document.querySelectorAll(".banner-dot");
// console.log(bannerSlides.length);
// 给上一张和下一张绑定onclick事件，点击自动跳转
function showSlides(n){
	if(n>bannerSlides.length){
		slideIndex=1;
	}else if(n<1){
		slideIndex=bannerSlides.length;
	}
	for(var i=0;i<bannerSlides.length;i++){
		bannerSlides[i].style.display="none";
	}
	for(var j=0;j<bannerDot.length;j++){
		bannerDot[j].className=bannerDot[j].className.replace(" dot-on","");
	}
	bannerSlides[slideIndex-1].style.display="block";
	bannerDot[slideIndex-1].className+=" dot-on";
}
showSlides(slideIndex);
bannerNext[0].onclick=function(){slideIndex+=1;showSlides(slideIndex)};
bannerPre[0].onclick=function(){slideIndex-=1;showSlides(slideIndex)};
var s=0;
function set(){
	s=setInterval(function(){ slideIndex++;showSlides(slideIndex);},3000);
}
function get(s){
	clearInterval(s);
}
set();
bannerf[0].onmouseenter=function(){
	get(s);
	// console.log(s);
}
bannerf[0].onmouseleave=function(){
	set();
	// console.log(s);
}
for(var k=0;k<bannerDot.length;k++){
	bannerDot[k].onmouseenter=(function(t){
		return function(){
			console.log(k);
			slideIndex=t+1;
			showSlides(slideIndex);
	}
	})(k)
}
// nav内tab功能
var tit=getDom(".tit");
var con=getDom(".con");
var titOn=getDom(".tit_on");
console.log(tit.length);
console.log(tit);
tab(tit,con,titOn);
function getDom(dom){
	return document.querySelectorAll(dom);
}
// 聚焦标题
// 当滑动到第二个时偏移为ltrslide,否则为rtlslide
function setTit(tit,x,titOn){
	if(x==1){
		titOn[0].style.transform="translateX(50px)";
	}else{
		titOn[0].style.transform="translateX(0px)";
	}
}
// 显示内容
function setCon(con,x){
	for(var j=0;j<con.length;j++){
		con[j].style.display="none";/*给每一个内容先设置隐藏*/
	}
	con[x].style.display="block";/*显示传入结点的内容*/
}
function tab(tit,con,titOn){
	for(var i=0;i<tit.length;i++){/*for循环，给每一个节点绑定事件*/
		tit[i].onmouseenter=function(x){
			if(x.target.nodeName==tit[0].nodeName){/*判断当前点击节点是子节点还是父节点*/
				var num=0;
				var cu=x.target;
				while(cu.previousSibling){/*循环判断此时点击的节点有没有前一个节点*/
					if(cu.previousSibling.nodeType==1){
						num++;/*如果有，且为元素结点则num自增*/
					}
					cu=cu.previousSibling;/*往前寻找下一个元素结点*/
				}
				setTit(tit,num,titOn);/*调用设置聚焦标题函数*/
	 	 		setCon(con,num);/*调用设置显示内容函数*/
	 	 	}
		}
	}
}


// 点击搜索框，默认value值取消
var hSearch=document.getElementById("h-search");
console.log(hSearch.elements[0]);
// setValue();
var stop=0;
// function setValue(){
// 磁力片 颈椎按摩器 投影仪 618狂欢会场 天梭手表 联想一体机 西门子开关 卸妆水 烧烤炉 美度手表
var i=0;
var hot=['磁力片',' 颈椎按摩器',' 投影仪',' 618狂欢会场',' 天梭手表 ','联想一体机 ','西门子开关',' 卸妆水',' 烧烤炉',' 美度手表'];
setHot();
function setHot(){
	stop=setInterval(function(){
		hSearch.elements[0].value=hot[i];
		i++;
		if(i>=hot.length){
			i=0;
		}
	},2000);
}
console.log(stop);
hSearch.elements[0].onclick=function(){
	hSearch.elements[0].value=null;
	hSearch.elements[0].focus();
	stopHot(stop);
	hSearch.elements[0].onmouseleave=function(){
		hSearch.elements[0].blur();
		setHot();
	}
};
function stopHot(stop){
	
	console.log(stop);
	clearInterval(stop);
	console.log(stop);
}

// 鼠标悬停在哪个圆圈上，秒杀广告图显示哪张
var seckillDot=document.querySelectorAll(".seckill-dot");
var seckillConAdImg=document.querySelectorAll(".seckill_con_ad_img");
// console.log(seckillConAdImg[]);
// for(var i=0;i<seckillDot.length;i++){
	// var i=0;
	seckillDot[0].onmouseenter=function(){
		for(var j=0;j<seckillDot.length;j++){
			seckillDot[j].className=seckillDot[j].className.replace(" seckill-dot-on","");
			seckillConAdImg[j].style.display="none";
		}
		seckillConAdImg[0].style.display="block";
		seckillDot[0].className+=" seckill-dot-on";
	}
	seckillDot[1].onmouseenter=function(){
		for(var j=0;j<seckillDot.length;j++){
			seckillDot[j].className=seckillDot[j].className.replace(" seckill-dot-on","");
			seckillConAdImg[j].style.display="none";
		}
		seckillConAdImg[1].style.display="block";
		seckillDot[1].className+=" seckill-dot-on";
	}
// }


// buy内轮转
var slideIndex2=1;
var buyList=document.querySelectorAll(".buy_list");
var buyListWrap=document.querySelectorAll(".buy_list_wrap");
var buyPre=document.querySelectorAll(".buy_pre");
var buyNext=document.querySelectorAll(".buy_next");
var buyDot=document.querySelectorAll(".buy-dot");
console.log(buyNext[0]);
// 给上一张和下一张绑定onclick事件，点击自动跳转
function showSlide2(n){
	if(n>buyList.length){
		slideIndex2=1;
	}else if(n<1){
		slideIndex2=buyList.length;
	}
	for(var i=0;i<buyList.length;i++){
		buyList[i].style.display="none";
	}
	for(var j=0;j<buyDot.length;j++){
		buyDot[j].className=buyDot[j].className.replace(" buy-dot-on","");
	}
	buyList[slideIndex2-1].style.display="block";
	buyDot[slideIndex2-1].className+=" buy-dot-on";
}
showSlide2(slideIndex2);
buyNext[0].onclick=function(){slideIndex2+=1;showSlide2(slideIndex2)};
buyPre[0].onclick=function(){slideIndex2-=1;showSlide2(slideIndex2)};
var t2=0;
function sets(){
	t2=setInterval(function(){ slideIndex2++;showSlide2(slideIndex2);},3000);
}
function gets(t2){
	clearInterval(t2);
}
sets();
buyListWrap[0].onmouseenter=function(){
	gets(t2);
}
buyListWrap[0].onmouseleave=function(){
	sets();
}
for(var k=0;k<buyDot.length;k++){
	buyDot[k].onmouseenter=(function(e){
		return function(){
			console.log(k);
			slideIndex2=e+1;
			showSlide2(slideIndex2);
	}
	})(k);
}

// 觅me内轮转
var slideIndex3=1;
var jdMeList=document.querySelectorAll(".JD_me_list");
var jDMeCon=document.querySelectorAll(".JD_me_con");
var mePre=document.querySelectorAll(".me_pre");
var meNext=document.querySelectorAll(".me_next");
var meDot=document.querySelectorAll(".me-dot");
// console.log(buyNext[0]);
// 给上一张和下一张绑定onclick事件，点击自动跳转
console.log(meDot.length);
function showSlide3(n){
	if(n>jdMeList.length){
		slideIndex3=1;
	}else if(n<1){
		slideIndex3=jdMeList.length;
	}
	for(var i=0;i<jdMeList.length;i++){
		jdMeList[i].style.display="none";
	}
	for(var j=0;j<meDot.length;j++){
		meDot[j].className=meDot[j].className.replace(" buy-dot-on","");
	}
	jdMeList[slideIndex3-1].style.display="block";
	meDot[slideIndex3-1].className+=" buy-dot-on";
	// console.log(slideIndex3);
}
showSlide3(slideIndex3);
meNext[0].onclick=function(){slideIndex3+=1;showSlide3(slideIndex3)};
mePre[0].onclick=function(){slideIndex3-=1;showSlide3(slideIndex3)};
var t3=0;
function sets3(){
	t3=setInterval(function(){ slideIndex3++;showSlide3(slideIndex3);},3000);
}
function gets3(t3){
	clearInterval(t3);
}
sets3();
jDMeCon[0].onmouseenter=function(){
	gets3(t3);
}
jDMeCon[0].onmouseleave=function(){
	sets3();
}
for(var k=0;k<meDot.length;k++){
	meDot[k].onmouseenter=(function(e){
		return function(){
			console.log(k);
			slideIndex3=e+1;
			showSlide3(slideIndex3);
	}
	})(k);
}

// 当滚轮向下滚动到一定距离，搜索框出现
// 当滚轮滚过700px,则出现nav
var navBar = document.getElementById("h_search_form");
document.body.addEventListener("wheel",myFunction);
function myFunction(){
	var sT=document.body.scrollTop;
	console.log(sT);
	if(sT>=700){
		navBar.style.display="block";
		if(navBar.className.indexOf("h_search")==-1){
			navBar.className+=" h_search";
		}
	}
	if(sT<700){
		navBar.className=navBar.className.replace(" h_search","");
	}
}

//京东秒杀，点击下一列

var seckillConPre=document.getElementsByClassName("seckill-con-pre")[0];
var seckillConNext=document.getElementsByClassName("seckill-con-next")[0];
var scItems=document.getElementsByClassName("sc_items");
var scWrap=document.getElementsByClassName("sc_wrap")[0];
scWrap.style.left=-1000+"px";
seckillConNext.onclick=function(){
	if(parseInt(scWrap.style.left)>=-4000){
		scWrap.style.transition="left 0.6s";
		scWrap.style.left=parseInt(scWrap.style.left)-1000+"px";
		if(parseInt(scWrap.style.left)==-5000){
			setTimeout(function(){
				scWrap.style.transition="";
				scWrap.style.left=-1000+"px";
			},500);
		}
	}
}
seckillConPre.onclick=function(){
	if(parseInt(scWrap.style.left)<=-1000){
		scWrap.style.transition="left 0.6s";
		scWrap.style.left=parseInt(scWrap.style.left)+1000+"px";
		if(parseInt(scWrap.style.left)==0){
			setTimeout(function(){
				scWrap.style.transition="";
				scWrap.style.left=-4000+"px";
			},500);
		}
	}
}
// 排行榜
// 当鼠标悬停到第几个标题上，下滑线滑到哪个标题
var JDrSubnavList=document.getElementById("JDr_subnav_list");//子标题父节点
var JDrSubnavUnder=document.getElementsByClassName("JDr_subnav_under")[0];//下划线
var JDrSubcon=document.getElementsByClassName("JDr_subcon");//内容区域
// 获取子节点
var JDrSnavChild=JDrSubnavList.childNodes;//获取孩子节点
var JDrCount=[];//存放元素结点序列
var JDrF=0;
// 寻找元素结点
console.log(JDrSnavChild[1].nodeType);
for(var i=0;i<JDrSnavChild.length;i++){
	if(JDrSnavChild[i].nodeType==1){
		JDrCount[JDrF]=i;
		JDrF++;
	}
}
for(var j=0;j<JDrF;j++){
	function sun(j){
		JDrSnavChild[JDrCount[j]].addEventListener("mouseenter",function(){
			console.log(j);
			if(j==0){
				JDrSubnavUnder.style.left=0;
				for(var k=0;k<JDrSubcon.length;k++){
					JDrSubcon[k].style.display="none";
				}
				JDrSubcon[0].style.display="block";
			}else{
				JDrSubnavUnder.style.left=j*(58+19)+"px";
				for(var r=0;r<JDrSubcon.length;r++){
					JDrSubcon[r].style.display="none";
				}
				JDrSubcon[j].style.display="block";
			}
		});
	}
	sun(j);
}

