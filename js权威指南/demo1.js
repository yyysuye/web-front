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
	var n=Number(prompt("请输入一个整数",""));//假设输入合法，计算阶乘
	var f=factorial(n);//显示结果
	alert(n+"!="+f);
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















