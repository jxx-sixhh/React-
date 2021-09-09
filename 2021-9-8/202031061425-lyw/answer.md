# 一

## 1.

使用new命令时，它后面的函数依次执行下面的步骤。

1. *创建*一个空对象，作为将要返回的对象实例。
2. 将这个空对象的*原型*，指向构造函数的`prototype`属性。
3. 将这个空对象*赋值给函数内部* 的`this`关键字。
4. 开始执行构造函数内部的代码。

如果构造函数内部有return语句，而且return后面跟着一个对象，`new`命令会返回`return`语句指定的对象；否则，就会不管`return`语句，返回`this`对象。

```js
var Vehicle = function (){
  this.price = 1000;
  return { price: 2000 };
};
(new Vehicle()).price
// 2000
```

因为`new`命令总是返回一个对象，要么是实例对象，要么是`return`语句指定的对象。

```js
function getMessage() {
  return 'this is a message';
}
var msg = new getMessage();
msg // {} getMessage是一个普通函数，返回一个字符串。对它使用new命令，会得到一个空对象。 本例中，return语句返回的是字符串，所以new命令就忽略了该语句。
typeof msg // "object"
```

## 2.

js中的this对象指向调用当前方法的对象，这个指向是在执行的时候才确定下来的，跟函数在何时何处声明是无关的。

改变当前this指向

**call apply ** 直接调用一个函数，并使其具有一个指定的this，区别在于，就是`call()`方法接受的是**若干个参数的列表**，而`apply()`方法接受的是**一个包含多个参数的数组**。具体使用方法如下

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}
 
function ProductExtra(from,to){
   this.from=from;
   this.to=to;
}
 
function Food(name, price,extra) {
  Product.call(this, name, price);
  ProductExtra.apply(this,extra);
  this.category = 'food';
}
 
console.log(new Food('烤鸭', 5,['北京','广东']).name);//输出: "烤鸭"
console.log(new Food('烤鸭', 5,['北京','广东']).from);//输出: "北京"
```



**bind**不会直接执行要执行的函数，而是返回一个新的函数，我们称之为a，当执行a被调用执行时，arg1, arg2, ...这些参数，将置于实参之前传递给a，示例代码如下

```js
function product(name, price) {
  console.log(name);
  console.log(price);
  console.log(this.from);
  console.log(this.to);
}
 
function test(price){
var extra={from:'北京',to:'广东'};
var productWithExtra =product.bind(extra,'烤鸭');
productWithExtra(price);
}

test(50);// 输出："烤鸭",50,"北京","广东"
```

**箭头函数** 箭头函数中的this跟正常的this不太一样，正常函数的this是在执行时确定下来的，指向调用当前方法的对象，而箭头函数则不同，箭头函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。箭头函数里面的 `this` 是继承外面的环境。

```js
let obj={
    a:222,
    fn:function(){    
        setTimeout(function(){console.log(this.a)})
    }
};
obj.fn();//undefined   虽然 fn() 里面的 this 是指向 obj ，但是，传给 setTimeout 的是普通函数， this 指向是 window ， window 下面没有 a ，所以这里输出 undefined。

//换成箭头函数：
let obj={
    a:222,
    fn:function(){    
        setTimeout(()=>{console.log(this.a)});
    }
};
obj.fn();//222 传给 setTimeout 的是箭头函数，然后箭头函数里面没有 this ，所以要向上层作用域查找，在这个例子上， setTimeout 的上层作用域是 fn。而 fn 里面的 this 指向 obj ，所以 setTimeout 里面的箭头函数的 this ，指向 obj 。所以输出 222 。
```



## 3.

让js代码更加规范：

1.消除js语法的一些不合理、不严谨之处，减少一些怪异行为;

2.消除代码运行的一些不安全之处，保证代码运行的安全；

3.提高编译器效率，增加运行速度；



## 4.

1、解释性的脚本语言（代码不进行预编译）

与其他脚本语言一样，JavaScript也是一种解释性语言，它提供了非常方便的开发过程。JavaScript的基本语法结构与C、C++、Java非常相似。

但是在使用之前，与这些语言不同，它们需要先被编译，但是在运行程序的过程中需要逐行解释。javascript与HTML标识符结合使用，方便用户操作。

2、基于对象

它也可以看作是一种面向对象的语言，这意味着JavaScript可以使用它创建的对象。因此，许多函数可以来自脚本环境中对象方法和脚本之间的交互。

3、安全性

JavaScript是一种安全性语言，它不允许访问本地的硬盘，并不能将数据存入到服务器上，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。从而有效地防止数据的丢失。

4、跨平台性

JavaScript依赖于浏览器本身，与操作环境无关。只要计算机能运行浏览器，支持javascript浏览器，就可以正确执行，实现“一次写，环游世界”的梦想。

因此，javascript是一种可以嵌入到HTML文件中的新描述语言。JavaScript语言可以响应用户需求事件（例如表单输入），而不需要任何网络来回传输数据。因此，当用户输入数据时，数据可以由客户机应用程序直接处理，而不是由服务器处理。

## 5.

单线程模型指：js只在一个线程上运行。即同时只能执行一个任务，其他任务必须在后面排队等待。

单线程模型的好处是实现起来比较简单，执行环境相对单纯。因为多线程需要共享资源，而且有可能修改彼此的运行结果。比如要是js同时有两个线程，一个线程在网页DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

坏处是只要有一个任务耗时很长，后面的任务都必须排队等待，从而拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段JavaScript代码长时间运行（比如，死循环），导致整个页面卡在这个地方，其他任务无法执行。JavaScript语言本身并不慢，慢的是读写外部数据，比如等待Ajax请求返回结果。这个时候，如果对方服务器迟迟没有响应，或者网络不通畅，就会导致脚本的长时间停滞。

## 6.

异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有等主线程任务执行完毕，"任务队列"开始通知主线程，请求执行任务，该任务才会进入主线程执行。

主要异步任务有：

Events：javascript各种事件的执行都是异步任务
setTimeout、setInterval 定时器 特别的如果将setTimeout()的第二个参数设为0，就表示当前代码执行完（执行栈清空）以后，立即执行（0毫秒间隔）指定的回调函数
queueMicrotask 执行微任务
XMLHttpRequest（也就是 Ajax）
requestAnimationFrame 类似于定时器，但是是以每一帧为单位
fetch Fetch API 提供了一个 JavaScript 接口,用于访问和操纵 HTTP 管道的一些具体部分
MutationObserver 创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。
Promise
async 

## 7.

1.相同条件下，setTimeout() 只执行一次，setInterval() 则循环执行；
2.setTimeout() 延迟执行一次： setTimeout(fn, 1000); //延迟1秒，执行一次fn()；
3.setInterval() 隔段时间循环执行； setInterval(fn, 1000); //每隔1秒，循环执行fn();

4.只有 setTimeout() 会被 clearTimeout() 或 clearInterval() 依次停止，而 setInterval() 则无法被停止。

## 8.

不准确

定时器是属于宏任务。如果当前执行栈所花费的时间大于定时器时间，那么定时器的回调在宏任务里，来不及去调用，所有这个时间会有误差。

因为微任务在宏任务之前，微任务执行完，需要渲染页面，然后再执行宏任务中的定时器，在这之前就是误差时间。

# 二

排序然后找出第k个元素。

排序的方法有很多，这里写快排的方法

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
var quickSort = function(arr) {
 　　if (arr.length <= 1) { return arr; }
 　　var pivotIndex = Math.floor(arr.length / 2);
 　　var pivot = arr.splice(pivotIndex, 1)[0];
 　　var left = [];
 　　var right = [];
 　　for (var i = 0; i < arr.length; i++){
 　　　　if (arr[i] > pivot) {
 　　　　　　left.push(arr[i]);
 　　　　} else {
 　　　　　　right.push(arr[i]);
 　　　　}
 　　}
 　　return quickSort(left).concat([pivot], quickSort(right));
 };
    return quickSort(nums)[k-1]
};


```

