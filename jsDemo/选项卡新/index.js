// 获取选项卡节点
let tab = document.getElementsByTagName("li");
// 给每一个节点绑定点击事件
// 给点击的选项绑定active效果
for(let i=0;i<tab.length;i++){
	tab[i].onclick = function(e){
		// 先取消其他的active效果
		for(let j=0;j<tab.length;j++){
			tab[j].className="";
		}
		// 绑定到点击的选项上
		e.target.className="active";
	}
}