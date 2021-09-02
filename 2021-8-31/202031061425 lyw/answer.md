# 一

## 1.

**添加**

<u>push()</u> 末尾添加，返回长度，改变原数组。

var a = [1,2,3];

var b = a.push(6);

console.log(a); *//[1, 2, 3, 6]*

console.log(b); *//4*



<u>unshift()</u> 向数组的开头添加元素，返回新的长度，改变原数组。

var arr = [2,3,4,5];

console.log(arr.unshift(3,6)); //6

console.log(arr); //[3, 6, 2, 3, 4, 5]

**删除**

<u>pop()</u>删除并返回数组的最后一个元素,会改变原数组。

var a = [1,2,3];

console.log(a.pop()); *//3*

console.log(a); *//[1, 2]*



<u>shift()</u> 第一个元素从其中删除，并返回第一个元素的值,改变原数组。

var a = [1,2,3];

console.log(a.shift()); *//1*

console.log(a); *//[2,3]*

**删除 插入 替换**

<u>splice()</u> 可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 原数组 中删除了元素，则返回的是含有被删除的元素的数组。会直接对数组进行修改。

删除：删除任意数量的项，只要指定两个参数：要删除的第一项的位置和删除的项数。如：splice(0,2)会删除数组中的前两项。

var colors=["red","green","blue","black","white"];
colors.splice(0,2);
console.log(colors);// ["blue", "black", "white"]

插入：向指定的位置插入任意数量的项，需要3个参数：起始位置、0（要删除的项数）和要插入的项。如：splice(2,0,"red","green")

var colors=["red","green","blue","black","white"];
colors.splice(1,0,"orange");
console.log(colors);// ["red", "orange", "green", "blue", "black", "white"]

替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项。需要3哥参数：起始位置、要删除的项数和要插入的项。如：splice(2,1,"red","green")

var colors=["red","green","blue","black","white"];
colors.splice(1,1,"orange");
console.log(colors);// ["red", "orange", "blue", "black", "white"]

**连接**

<u>concat()</u> 连接两个或多个数组。该方法不会改变现有的数组，返回被连接数组的一个副本。

var arr1 = [1,2,3];
var arr2 = [4,5];
var arr3 = arr1.concat(arr2);
console.log(arr1); //[1, 2, 3]
console.log(arr3); //[1, 2, 3, 4, 5]

**转化字符串**

<u>join()</u> 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用','号分割，不改变原数组。

var arr = [2,3,4];

console.log(arr.join('?')); *//2?3?4*

console.log(arr); *//[2, 3, 4]*

**截取**

<u>slice()</u> 返回一个新数组，包含从 start 到 end （不包括该元素）的原数组中的元素，返回选定的元素，该方法不会修改原数组。

arrayObject.splice(index,howmany,element1,.....,elementX)

var arr = [2,3,4,5];
console.log(arr.slice(1,3));  //[3,4]
console.log(arr);  //[2,3,4,5]

**排序**

<u>sort()</u> 按照 Unicode code 位置排序，默认升序

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2];
scores.sort(); // [1, 10, 2, 21]

**反转**

<u>reverse()</u> 返回的是颠倒后的数组，会改变原数组

var arr = [1,2,3];
console.log(arr.reverse()); //[3,2,1]
console.log(arr);  //[3,2,1]

**查找**

接受两个参数：<u>indexOf</u> 和 <u>lastIndexOf</u> 查找的值、查找起始位置

不存在，返回 -1 ；存在，返回位置。indexOf 是从前往后查找， lastIndexOf 是从后往前查找。

var a = [2, 9, 9];
a.indexOf(2); // 0
a.indexOf(6); // -1

var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3

**遍历每一项**

<u>every</u>:对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true

function isBigEnough(element, index, array) {
  return element < 10;
} 
[2, 5, 8, 3, 4].every(isBigEnough);   // true

<u>some</u>:对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true

function compare(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(compare);  // false
[12, 5, 8, 1, 4].some(compare); // true

<u>map</u>:对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

<u>foreach</u>:单纯遍历

const items = ['item1', 'item2', 'item3'];

const copy = [];  

items.forEach(function(item){

 copy.push(item)

});

console.log(copy); *//["item1", "item2", "item3"]*

**过滤**

<u>filter()</u>对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

var longWords = words.filter(function(word){
  return word.length > 6;
});

## 2.

冒泡：

```js
var arr = [4,23,100,9,7,49,36,57];
for(var i=0;i<arr.length-1;i++){//确定轮数
			for(var j=0;j<arr.length-i-1;j++){
				if(arr[j]>arr[j+1]){
					tem = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = tem;
				}
			}
		}
console.log(arr);
```

选择：

```js
var arr = [4,102,100,9,7,49,36,57];
//选择排序
function selsetSort(arr){
	var len = arr.length;
	var index;
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
	}
	return arr;
}
console.log(selsetSort(arr));
```

快排：

```js
 function quickSort(arr){
      if(arr.length<2){
          return arr
      }

      var left=[],
          right=[],
          mid=arr.splice(Math.floor(arr.length/2),1);

      for(var i=0;i<arr.length;i++){
            if(arr[i]<mid){
                left.push(arr[i]);
            }else {
                right.push(arr[i])
            }
      }
      return quickSort(left).concat(mid,quickSort(right))
  }
 console.log(quickSort([6,1,2,4,3,5]))
```

插入：

```js
 function insertSort(arr){
    var len = arr.length;
        for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
    console.log(insertSort([6,1,2,4,3,5]))
```

sort：

```
		var arr3 = [30,10,111,35,1899,50,45];
		arr3.sort(function(a,b){
			return a - b;
		})
		console.log(arr3);//输出  [10, 30, 35, 45, 50, 111, 1899]
		
		var arr4 = [30,10,111,35,1899,50,45];
		arr4.sort(function(a,b){
			return b - a;
		})
		console.log(arr4);//输出 [1899, 111, 50, 45, 35, 30, 10]

```

3.ECMAScript没有定义使用哪种排序算法，各个浏览器的实现方式会有不同。火狐中使用的是归并排序，下面是Chrome的sort排序算法的实现。

数组长度不超过10时，使用插入排序。长度超过10使用快速排序。在数组较短时插入排序更有效率。

# 二

## 1.

三种

1）函数声明方式

   function sum（）{}；调用：sum（）

2）函数表达式声明方式

  var add=function（）{}；调用：add（）

3）使用Function构造函数

var add=new Function（）；调用 ：add（）

## 2.

预编译阶段：创建AO对象（执行期上下文）->找形参和变量声明，将变量和形参名作为AO属性名，值为undef->将实参值和形参统一->在函数体里面找函数声明，值赋予函数体。

总结：js程序的执行分为函数和变量的声明阶段 与 执行阶段 两个阶段

函数和变量的声明阶段 会先于 执行阶段 进行。
普通函数就是在声明阶段创建的。

箭头函数属于匿名函数，匿名函数是要通过赋值语句赋值给变量，这个赋值的过程是在代码执行阶段进行的，不是在声明阶段，所以没有函数声明提升的特性。

## 3.

1）闭包可以实现公有变量，比如函数累加器的使用；可以做缓存（储存结构），比如eater；可以实现封装，属性私有化，比如Person();可以实现模块化开发，防止全局污染

2）我的理解：当内部函数被保存到外部时将产生闭包。它会导致原有作用域链不释放，造成内存泄漏。子函数可以使用父函数的局部变量，还有父函数的参数。

比如一个经典例题：

```JS
<script>
    function fun(n,o) {
    console.log(o)
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}

var a = fun(0); a.fun(1); a.fun(2); a.fun(3);//undefined,0,0,0

var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2

var c = fun(0).fun(1); c.fun(2); c.fun(3);//undefined,0,1,1
// 先从fun(0)开始看，肯定是调用的第一层fun函数；而他的返回值是一个对象，所以第二个fun(1)调用的是第二层fun函数，后面几个也是调用的第二层fun函数。

// 遂：

// 在第一次调用第一层fun(0)时，o为undefined；

// 第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；

// 第三次调用 .fun(2)时m为2，此时当前的fun函数不是第一次执行的返回对象，而是第二次执行的返回对象。而在第二次执行第一层fun函数时时(1,0)所以n=1,o=0,返回时闭包了第二次的n，遂在第三次调用第三层fun函数时m=2,n=1，即调用第一层fun函数fun(2,1)，所以o为1；

// 第四次调用 .fun(3)时m为3，闭包了第三次调用的n，同理，最终调用第一层fun函数为fun(3,2)；所以o为2；
</script>
```

## 4.

一般针对初始化功能的函数

正确写法：

```JS
// 匿名函数
(function() {
  console.log(2)
})()
//具名函数
(function log() {
  console.log(2)
})
// 传参
(function add(a, b) {
  console.log(a + b)
})(1, 2)
// 传递函数作为参数
var a =2;
(function log(fn) {
  fn(window)
})(function fn(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a); // 2
})
// 返回值
let fn = (function add(a, b) {
  return a + b;
}) (2, 4)
console.log(fn)

```

错误写法：

```JS
// 没把匿名函数用大括号括起来
function (){alert('我是匿名函数')}()
function a(){alert('我是匿名函数')}()
// 原因：第一个：解析器解析全局的function或者function内部function关键字的时候，默认是认为function声明，而不是function表达式，如果你不显示告诉编译器，它默认会声明成一个缺少名字的function，并且抛出一个语法错误信息，因为function声明需要一个名字。第二个：是在一个语句后面加上括号()，是完全不一样的意思，他的只是分组操作符。
// 改进方法：
(function(){alert('我是匿名函数')} ()) // 用括号把整个表达式包起来
(function(){alert('我是匿名函数')}) () //用括号把函数包起来
!function(){alert('我是匿名函数')}() // 求反，我们不在意值是多少，只想通过语法检查。
+function(){alert('我是匿名函数')}()
-function(){alert('我是匿名函数')}()
~function(){alert('我是匿名函数')}()
void function(){alert('我是匿名函数')}()
new function(){alert('我是匿名函数')}()
```

注意事项：

```JS
// 分号问题
console.log(5); // 分号不可省
(function add(a, b){
	var c = 2;
	console.log(a + b);
})(1,2)
// 分号改进：只要语句开头是括号，方括号，正则开头的斜杠，加号，减号的情况下，在前面加分号就行了，当然也可以加别的符号，比如感叹号，不过一般都是加分号
console.log(5)
;(function add(a, b){
	var c = 2;
	console.log(a + b);
})(1,2)
!(function add(a, b){
	console.log(a * b);
})(3,2)
// 对象里的自执行函数this指向 window 改变了指向
var a = 5
var obj = {
	a: 1,
	b: (function(){
		console.log(this.a)// 5
	})(),
	c: 4
}
```

## 5.

可以采用直接调用而不是间接调用的方法

```JS
//直接调用
 2 var b1=10;
 3 function testb(){
 4     var b1=1;
 5     eval('console.log(b1)');//当前作用域
 6 }
 7 testb();//1
 8 console.log(b1);//10
 9 
10 //间接调用
11 var b2=10;
12 function testc(){
13     var e=eval;
14     var b2=1;
15     e('console.log(b2)')//e是eval的引用,作用域是全局作用域
16 }
17 testc();//10
18 console.log(b2);//10
```

