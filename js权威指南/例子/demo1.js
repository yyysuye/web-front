/*
 加法操作符
*/
console.log("1"+"2");
//12
console.log(1+"2");
//12，转换字符串之后进行连接
console.log(1+{});
//1[object Object]对象转换成字符串之后进行连接
console.log(true+true);
//2
console.log(2+null);
//null转化成0
console.log(2+undefined);
// NaN ,undefined转换成NaN
console.log(1+2+"aaa");
//3aaa
console.log(1+(2+"aaa"));
//12aaa

/*
 一元操作符
*/
var i=1,j=++i;
console.log("i:"+i+";j:"+j);//2,2
var i=1,j=i++;
console.log("i:"+i+";j:"+j);//2,1

/*
 比较
*/
console.log("11"<3);
//转换成数字比较
console.log("11"<"3");
//字符串比较
console.log("one"<"3");
//数字比较，转换成NaN

/*
in运算符
*/
var point = {x:1,y:2};
console.log("x" in point);
//true,对象中有一个名为“x”的属性
console.log("z" in point);
//false，没有z
console.log("toString" in point);
//true，对象继承了toString()方法
let data = [6,7,8];
console.log("0" in data);
//true,数组中包含元素0
console.log(1 in data);
//true，转换为字符串
console.log(3 in data);
//false

/*
instanceof
*/
let d = new Date();//通过Date()构造函数来创建一个新对象
console.log(d instanceof Date);//true,d是由Date()创建的
console.log(d instanceof Object);//true,所有的对象都是Object的实例
console.log(d instanceof Number);//false,d不是一个Number对象
let a = [1,2,3];//通过数组直接量的写法创建一个数组
console.log(a instanceof Array);//true
console.log(a instanceof Object);//true
console.log(a instanceof Number);//false

/*
逻辑与&&
*/
let o ={x:1};
let p = null;
console.log(o&&o.x);//1,左值为真，所以返回o.x
console.log(p&&p.x);//null，p是假值，返回，不计算右值；

/*
逻辑或||
*/
//将o的成员复制到p，并返回p
function copy(o,p){
	p=p||{}//如果向参数p没有传入任何对象，则使用一个新创建的对象
}

/*
逻辑非！
*/
let q;
console.log(!(p&&q)===!p||!q);
console.log(!(p||q)===!p&&!q);

/*
赋值运算符
*/
data=[1,2,3],i=0;
console.log(data[i++]*=2);//2
console.log(i);//1
console.log(data[i]);
i=0;
console.log(data[i++]=data[i++]*2);//4

/*
条件运算符
*/
let x=-5;
console.log(x>0?x:-x);//求x的绝对值

/*
typeof运算符
*/
let value="asd";
// let value=123;
console.log((typeof value=="string")?"'"+value+"'":value);

/*
delete运算符
*/
o = {x:1,y:2};
delete o.x;//删除一个对象属性，返回true
console.log(typeof o.x);//属性不存在，返回undefined
console.log("x" in o);//false，已经删除x属性
console.log(delete o.x);//删除不存在的属性，返回true
console.log(delete o);//false,不能删除var声明的变量
console.log(delete 1);//参数不是一个左值，返回true
a=[1,2,3];
delete a[0];//true
console.log(0 in a);//已经删除
console.log(a.length);//没有修改数组的长度；
this.y=1;//给全局对象定义一个属性，
console.log(delete y);//试图删除，非严格模式下返回true，严格模式下会抛出异常，使用“delete this.y”
// console.log(y);//运行时错误，没有定义y

/*
复合语句
*/
{
	x = Math.PI;
	cx = Math.cos(x);
	console.log("cos(pi):" + cx);
}

/*
空语句
*/
;
a = [1,2,3];
for(i=0;i<a.length;a[i++]=0)/*empty*/;//初始化一个数组a

/*
function声明
*/
var f = function(x){return x*x;};//将表达式赋值给一个变量
function f1(x){return x;};//含有表达式的语句

/*
条件语句
*/
let username='';
if(!username){
	username="ycx";
}//如果username是null、undefined、false、0、“”、NaN，给一个新值；

function convert(x){
	switch(typeof x){
		case 'number'://将数字转换为十六进制
			return x.toString(16);
		case 'string'://返回两端带双引号的字符串
			return '"'+x+'"';
		default://使用普通的方法转换其他类型
			return String(x);
	}
}
console.log(convert(0));

/*
循环语句
*/

//do...while
function printArray(a) {
	let len=a.length,i=0;
	if(len==0) {
		console.log("Empty Array.");
	}else {
		do{
			console.log(a[i]);
		}while(++i<len);
	}
}
printArray([1,23,3]);

//for循环，多条件
var sum=0;
for(var i=0,j=0;i<10;i++,j--){
	sum+=i*j;
}
console.log(sum);

//for循环
function tail(o){
	for(;o.next;o=o.next)/*empty*/;//根据判断o.next是不是真值来执行遍历
	return o;
}//返回链表最后一个指针

//for/in 循环 遍历对象属性成员；
//将对象的属性赋值给表达式；
o={x:1,y:2,z:3};
a=[],i=0;
for(a[i++] in o) /*empty*/;//将对象属性复制到一个数组中
for(index in a)//将数组的索引打印
console.log(index);
console.log(a);

/*
跳转语句
*/

//带标签的break跳转
//希望通过break跳出非就近的循环体或者switch；
var matrix=[[1,2,3],[4,5,6],[7,8,9]];
// 将二维数组中所有元素求和
sum =0;
var success=false;//从标签名开始，以便在报错时退出程序
compute_sum:if(matrix){//标签，跳转到标签标记的语句块的结尾
	for(x=0;x<matrix.length;x++){//循环每一行
		var row = matrix[x];//行
		if(!row)break compute_sum;//判断是否是假值
		for(var y=0;y<row.length;y++){//循环每一列的值
			var cell = row[y];//列
			if(isNaN(cell))break compute_sum;//判断是否不是数
			sum+=cell;//求和
		}
	}
	success=true;//没有出错，求和成功；
}
//break语句跳转至此
//如果success==false的条件下到达这里，说明给出的矩阵有错误
//否则将矩阵中所有的元素求和

//throw语句
function factorial(x){//如果传入的参数是非法的，抛出一个异常
	if(x<0)throw new Error("x不能是负数");
	for(var f=1;x>1;f*=x,x--)/*empty*/;
	return f;
}//使用非法参数调用函数时抛出一个Error对象

//try/catch/finally
try{//通常来讲，这里的代码会从头执行到尾而不会产生任何问题，
//但有时会抛出一个异常，要么是由throw语句直接抛出异常，
//要么是通过调用一个方法间接抛出异常
}
catch(e){//当且仅当try语句块抛出了异常，才会执行这里的代码
//这里可以通过局部变量e来获得对Error对象或者抛出的其他值的引用
//这里的代码块可以基于某种原因处理这个异常，也可以忽略这个异常，
//还可以通过throw语句重新抛出异常
}
finally{//不管try语句块是否抛出了异常，这里的逻辑总是会执行，终止try语句块的方式有：
//1）正常终止，执行完语句块的最后一条语句
//2）通过break、continue或return语句终止
//3）抛出一个异常，异常被catch从句捕获
//4）抛出一个异常，异常未被捕获，继续向上传播
}

try{//要求用户输入一个数字
	// var n=Number(prompt("请输入一个整数",""));//假设输入合法，计算阶乘
	var f=factorial(n);//显示结果
	// alert(n+"!="+f);
}catch(ex){//如果输入不合法，执行
	console.log(ex);//告诉用户出现了什么错误
}

/*
创建对象
*/
var empty={};//没有任何属性的对象
var point={x:0,y:0};//两个属性
var point2={x:point.x,y:point.y+1};
var book={
	"main title":"JavaScript",//属性名中间有空格，用引号
	"for":"all audiences",//for是保留字，用引号
	author:{//这个属性的值是一个对象
		firstname:"David",//属性名没有引号
		surname:"Flanagan"
	}
}
//Object.create()
//inherit（）返回了一个继承自原型对象p的属性的新对象
//使用es5的Object.create（）函数
//如果不存在，使用其他方法
function inherit(p){
	if(p==null)throw TypeError();//p是一个对象，但不能是null
	if(Object.create){//如果Object.create（）对象存在
		return Object.create(p);//直接使用它
	}
	var t=typeof p;//否则进一步检测
	if(t!=="object"&&t!=="function")throw TypeError();
	function f(){};//定义一个空构造函数
	f.prototype=p;//将其原型属性设置为p
	return new f();//使用f()创建p的继承对象
}

/*
属性查询和设置
*/
//通过[]访问属性
var addr = "";
for(let i=0;i<4;i++){
	// addr += customer["address"+i]+'\n';
}

function addstock(portfolio,stockname,shares){
	portfolio[stockname]=shares;
}//通过给函数传入对象、属性名和属性值来添加属性；

function getvalue(portfolio) {
	var total = 0.0;
	for(stock in portfolio){//遍历portfolio中每只股票
		var shares = portfolio[stock];//得到每只股票的份额
		var price = getquote(stock);//查找股票价格
		total += shares*price;//将结果累加至total中
	}
	return total;//返回total值
}

//继承
o={};//o从Object.prototype继承对象的方法
o.x=1;//给o定义一个属性x
p = inherit(o);//p继承o和Object.prototype
p.y=2;//给p定义一个属性y
q = inherit(p);//q继承p、o和Object.protptype
q.z=3;//给q定义一个属性z
var s = q.toString();//toString继承自Object.prototype
console.log(q.x+q.y);//3；

//不可以修改原型链上的属性
var unitcircle = {r:1};//一个用来继承的对象
var c = inherit(unitcircle);//c继承属性r
c.x=1;c.y=1;//定义新属性
c.r=2;//覆盖继承来的属性
console.log(unitcircle.r);//1；

//避免查询属性时不存在而出错
//第一种
var len =undefined;
if(book){
	if(book.subtitle){
		len=book.subtitle.length;
	}
}
//第二种
var len = book&&book.subtitle&&book.subtitle.length;

/*
删除属性
*/
// 删除属性
delete Object.prototype;//不能删除，属性是不可配置的
x=1;//声明一个全局变量;
delete this.x;//不能删除这个属性
function f(){};
delete this.f;//不能删除全局函数；

this.x=1;//创建一个可配置的全局属性（没有使用var）
delete x;//将它删除

/*
检测属性
*/
//in运算符
o = {x:1};
"x" in o;//true,x是o的属性
"y" in o;//false，y不是o的属性
"toString" in o;//true，o继承toString属性

//hasOwnProperty()
o ={x:1};
o.hasOwnProperty("x");//true,自有属性
o.hasOwnProperty("y");//false，无
o.hasOwnProperty("toString");//false，继承属性

//propertyIsEnumerable()
o = inherit({x:1});
o.y=2;
o.propertyIsEnumerable("y");//true,可枚举的自有属性
o.propertyIsEnumerable("x");//false,x是继承来的
Object.prototype.propertyIsEnumerable("toString");//false，不可枚举

//！==
o={x:1}
o.x!==undefined;//true:o中有属性x
o.y!==undefined;//false:o中没有属性y
o.toString!==undefined;//true:o继承了toString属性

o={x:undefined}//属性被显式赋值为undefined
o.x!==undefined//false：属性存在，但值为undefined
o.y!==undefined//false：属性不存在
"x"in o//true：属性存在
"y"in o//false：属性不存在
delete o.x;//删除了属性x
"x"in o//false：属性不再存在

/*
枚举属性
*/
//遍历可枚举属性，for/in
o = {x:1,y:2,z:3};
o.propertyIsEnumerable(toString);//false，不可枚举
for(p in o)//遍历属性
console.log(p);//x y z

//用来枚举属性的对象工具函数
/*
把p中的可枚举属性复制到o中，返回o
如果p和o含有同名属性，覆盖o中的属性
不处理getter和setter以及复制属性
*/
function extend(o,p){
	for(prop in p){//遍历p中所有属性
		o[prop]=p[prop];//将属性添加至o中
	}
	return o;
}/*
*将p中的可枚举属性复制至o中，并返回o
*如果o和p中有同名的属性，o中的属性将不受影响
*这个函数并不处理getter和setter以及复制属性
*/
function merge(o,p){
	for(prop in p){//遍历p中的所有属性
		if(o.hasOwnProperty("prop")) continue;//过滤掉已经在o中存在的属性
		o[prop]=p[prop];//将属性添加至o中
	}
	return o;
}/*
*如果o中的属性在p中没有同名属性，则从o中删除这个属性
*返回o
*/
function restrict(o,p){
	for(prop in p){//遍历o中的所有属性
		if(!(prop in o)) delete o[prop];//遍历o中的所有属性
	}
	return o;
}/*
*如果o中的属性在p中存在同名属性，则从o中删除这个属性
*返回o
*/
function subtract(o,p) {
	for(prop in p){//遍历p中的所有属性
		delete o[prop];//从o中删除（删除一个不存在的属性不会报错）
	}
	return o;
}/*
*返回一个新对象，这个对象同时拥有o的属性和p的属性
*如果o和p中有重名属性，使用p中的属性值
*/
function union(o,p){
	return extend(extend({},o),p);
}/*
*返回一个新对象，这个对象拥有同时在o和p中出现的属性
*很像求o和p的交集，但p中属性的值被忽略
*/
function intersection(o,p){
	return restrict(extend({},o),p);
}/*
*返回一个数组，这个数组包含的是o中可枚举的自有属性的名字
*/
function keys(o){
	if(typeof o!=="object") throw TypeError();//参数必须是对象
	var result = [];//将要返回的数组
	for(var prop in o){//遍历所有可枚举的属性
		if(o.hasOwnProperty(prop))//判断是否是自有属性
			result.push(prop);//将属性名添加至数组中
	}
	return result;//返回这个数组
}

/*
属性getter和setter
*/
//表示2D笛卡尔点坐标
p={//x和y是普通的可读写的数据属性
	x:1.0,
	y:1.0,//r是可读写的存取器属性，它有getter和setter.
	//函数体结束后不要忘记带上逗号
	get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
	set r(newvalue){
		var oldvalue=Math.sqrt(this.x*this.x+this.y*this.y);
		var ratio=newvalue/oldvalue;
		this.x*=ratio;
		this.y*=ratio;
	},//theta是只读存取器属性，它只有getter方法
	get theta(){return Math.atan2(this.y,this.x);}
};
q=inherit(p);//创建一个继承getter和setter的新对象
q.x=1,q.y=1;//给q添加两个属性
console.log(q.r);//可以使用继承的存取器属性
console.log(q.theta);

//产生严格自增的序列号
var serialnum = {//这个数据属性包含下一个序列号
	$n:0,//$符号暗示这个属性是一个私有属性
	get next(){return this.$n++;},//返回当前值，然后自增
	set next(n){//给n设置新的值，但只有当它比当前值大时才设置成功
		if(n>=this.$n)this.$n=n;
		else throw"序列号的值不能比当前值小";
	}
};

//这个对象有一个可以返回随机数的存取器属性
//例如，表达式"random.octet"产生一个随机数
//每次产生的随机数都在0～255之间
var random={
	get octet(){return Math.floor(Math.random()*256);},
	get uint16(){return Math.floor(Math.random()*65536);},
	get int16(){return Math.floor(Math.random()*65536)-32768;}
};

/*
属性的特性
*/
//getOwnPropertyDescriptor();可以获得某个对象特定属性的属性描述符
Object.getOwnPropertyDescriptor({x:1},"x");
//返回{value:1,writable:true,enumerable:true,configurable:true}
Object.getOwnPropertyDescriptor(random,"octet");
//查询上文中定义的randam对象的octet属性
//返回{get:/*func*/,set:undefined,enumerable:true,configurable:true}
Object.getOwnPropertyDescriptor({},"x");//对于继承属性和不存在的属性，返回undefined
Object.getOwnPropertyDescriptor({},"toString");//undefined，继承属性

//Object.defineProperty();设置属性的特性，或者想让新建属性具有某种特性
o={};//创建空对象
Object.defineProperty(o,"x",
	{
		value:1,
		writable:true,
		enumerable:false,
		configurable:true
	});//添加一个不可枚举的数据属性x，并赋值为1
o.x;//1
Object.keys(o);//[],没有可枚举属性
Object.defineProperty(o,"x",{writable:false});//将x变为只读
o.x=2;//更改属性的值，失败，不报错，严格模式抛出类型错误异常
o.x;//1
Object.defineProperty(o,"x",{value:2});//属性是可配置的，可以通过这种方式进行修改；
o.x//2
Object.defineProperty(o,"x",{get:function(){return 0;}});//将x从数据属性修改为存取其属性
o.x//0

//Object.defineProperties():同时修改或创建多个属性
p=Object.defineProperties({},{
	x:{value:1,writable:true,enumerable:true,configurable:true},
	y:{value:1,writable:true,enumerable:true,configurable:true},
	r:{
	get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},
	enumerable:true,
	configurable:true
	}
});

// 新extend()方法，复制属性的特性
/*
*给Object.prototype添加一个不可枚举的extend()方法
*这个方法继承自调用它的对象，将作为参数传入的对象的属性一一复制
*除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性，
*参数对象的所有自有对象（包括不可枚举的属性）也会一一复制。
*
*/
Object.defineProperty(Object.prototype,"extend",//定义Object.prototype.extend
{
	writable:true,
	enumerable:false,//将其定义为不可枚举的
	configurable:true,
	value:function(o){//值就是这个函数
		var names=Object.getOwnPropertyNames(o);//得到所有的自有属性，包括不可枚举属性
		for(var i=0;i<names.length;i++){//遍历它们
			if(names[i] in this)continue;//如果属性已经存在，则跳过
			var desc = Object.getOwnPropertyDescriptor(o,name[i]);//获得o中的属性的描述符
			Object.defineProperty(this,names[i],desc);//用它给this创建一个属性
		}
	}
})



/*
数组
*/

//多维数组
var table=new Array(10);
for(var i=0;i<table.length;i++){
	table[i]=new Array(10);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}



