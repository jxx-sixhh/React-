# 一

```js
//法1：顺序遍历到第n-k个节点即可
var getKthFromEnd = function(head, k) {
    let node = head,
           n = 0;
    while (node) {
        node = node.next;
        n++;
    }
    node = head;
    for (let i = 0; i < n - k; i++) {
        node = node.next;
    }
    return node; 
};


//法2： 创建只能容两个的数组 把结点一直往里存 多了就从前往后删
var getKthFromEnd = function(head, k) {
    if (!head){
        return null;
    }
    let q = [];
    while(head) {
        if (q.length === k) {
            q.shift()
        }
        q.push(head);
        head = head.next;
    }
    return q[0];
};

//法3：第一个指针fast指向链表的第 k+1个节点，第二个指针 slow 指向链表的第一个节点，此时指针fast 与 slow 二者之间刚好间隔 k个节点。此时两个指针同步向后走，当第一个指针fast 走到链表的尾部空节点时，则此时 slow 指针刚好指向链表的倒数第k个节点。
var getKthFromEnd = function(head, k) {
    let fast = head, 
        slow = head;
    while (fast && k > 0) {
        [fast, k] = [fast.next, k - 1];
    }
    while (fast) {
        [fast, slow] = [fast.next, slow.next];
    }
    return slow;
};
```

# 二

## 1.

 立即执行的函数表达式。立即调用的函数表达式可用于避免块内的变量提升，防止污染全局环境，同时允许公共访问方法，同时保留函数中定义的变量的隐私.

IIFE中定义的任何变量和函数，都会在执行结束时被销毁。这种做法可以减少闭包占用的内存问题，因为没有指向匿名函数的引用。只要函数执行完毕，就可以立即销毁其作用域链了；

```js
// 常见形式
(function(){ 
    console.log(123);
}()); 

(function(){
    console.log(123);
 })(); 

(function keith() {
    console.log(123);
})()
```

## 2.

闭包就是能够读取其他函数内部变量的函数

当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄漏 。

本质上，闭包是将函数内部和函数外部连接起来的桥梁。

比如：

```js
function test(){
    var arr=[];
    for(var i=0;i<10;i++){
        arr[i]=function(){
            console.log(i);
        }
    }
    return arr;
}
var my = test();
for(var j=0;j<10;j++){
    my[j]();
}// 出来10个10
```

优点：

1）实现公有变量 eg:函数累加器

2）可以做缓存 eg:eater

3) 实现封装，属性私有化 eg:Person()

4) 模块化开发，防止污染全局变量

## 3.

预编译阶段的过程会发生提升，整个过程预编译：创建AO对象（执行期上下文）->找形参和变量声明，将变量和形参名作为AO属性名，值为undef->将实参值和形参统一->在函数体里面找函数声明，值赋予函数体。

因此：js程序的执行分为函数和变量的声明阶段 与 执行阶段 两个阶段

函数和变量的声明阶段 会先于 执行阶段 进行。
普通函数就是在声明阶段创建的。

箭头函数属于匿名函数，匿名函数是要通过赋值语句赋值给变量，这个赋值的过程是在代码执行阶段进行的，不是在声明阶段，所以没有函数声明提升的特性。

## 4.

用于删除对象属性，用法：

```JS
delete object.property
delete object['property']
```

局限性：

1）任何使用 var 声明的属性不能从全局作用域或函数的作用域中删除。这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。

2）任何用let或const声明的属性不能够从它被声明的作用域中删除。

3）不可设置的(Non-configurable)属性不能被移除。这意味着像Math, Array, Object内置对象的属性以及使用Object.defineProperty()方法设置为不可设置的属性不能被删除。

4）delete可以删除数组但是数组的长度不会改变，想要删除数组可以使用splice（删除的直接为empty

## 5.

使用arguments

```js
function showargs() {
	console.log( arguments );
}
showargs(1,2,3,4,5); // Arguments(5)
```

## 6.

eval()可以接受一个**字符串**str作为参数，并把这个参数作为脚本代码来执行。如果执行结果是一个值就返回，不是就返回undefined，如果参数不是一个字符串，则直接返回该参数

参数：（1）如果参数是一个表达式，eval() 函数将执行表达式；
            （2） 如果参数是Javascript语句，eval()将执行 Javascript 语句

```js
eval(“var a=1”);//声明一个变量a并赋值1。
eval(“2+3”);//执行加运算，并返回运算值。
eval(“mytest()”);//执行mytest()函数。
eval("{b:2}");//声明一个对象。如果想返回此对象，则需要在对象外面再嵌套一层小括如下：eval("({b:2})");
//使用eval来解析JSON格式字符串的时候，会将{}解析为代码块，而不是对象的字面量
//1.在JSON格式的字符串前面拼接上 “var o =”
//2.把JSON格式的字符串使用()括起来，就不会将{}解析为代码块，而是表达式
```

## 7.

1)<u>every</u>:对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true

function isBigEnough(element, index, array) {
  return element < 10;
} 
[2, 5, 8, 3, 4].every(isBigEnough);   // true

2)<u>some</u>:对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true

function compare(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(compare);  // false
[12, 5, 8, 1, 4].some(compare); // true

3)<u>map</u>:对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

4)<u>foreach</u>:单纯遍历

const items = ['item1', 'item2', 'item3'];

const copy = [];  

items.forEach(function(item){

 copy.push(item)

});

console.log(copy); *//["item1", "item2", "item3"]*

5)for 就循环

```js
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i]
}
```

6)for...of

```js
let sum = 0;
for(const item of arr){
    sum += item
}
```

7)reduce

```js
const sum = arr.reduce((val,item,index) => {
    //val初始值为第一个元素值，在每一次循环中，更新为上一次循环时回调函数的返回值，并在reduce循环结束后将该值返回
    return val + item
})
```

8）for...in(只能拿索引)

```js
for(const index in arr){
    console.log(index)
}
```

## 8.

for in遍历数组的话需要注意

如果对js原生的Array进行了类进行了拓展，那么用for in也会遍历其拓展的内容：

```js
// 正常：
var a = [1, 2, 3, 4];
for(var i in a){
	console.log(a[i]); // 1 2 3 4
}
// 拓展后：
Array.prototype.searchItem = function(value){
	return value;
}
var a = [1, 2, 3, 4];
for(var i in a){
	console.log(a[i]); // 1 2 3 4 ƒ(value)
}
```

## 9.

逗号表达式的一般形式是：表达式1，表达式2，表达式3……表达式n 
逗号表达式的求解过程是：先计算表达式1的值，再计算表达式2的值，……一直计算到表达式n的值。最后整个逗号表达式的值是表达式n的值。 

```js
x=8*2,x*4 // 整个表达式的值为64，x的值为16

(x=8*2,x*4),x*2 //整个表达式的值为32，x的值为16

(x=(x=8*2,x*4)),x*2 //整个表达式的值为128，x的值为64

x=(z=5,5*2) //整个表达式为赋值表达式，它的值为10，z的值为5
```

## 10.

1）转换函数

parseInt() 和parseFloat() 

*parseInt()*

```js
parseInt( "1234blue" );    //returns   1234    
parseInt("0xA" );    //returns   10    
parseInt("22.5" );    //returns   22    
parseInt("blue" );    //returns   NaN   
parseInt( "10",2);    //returns   2    
parseInt("10",8);    //returns   8    
parseInt("10", 10);    //returns   10    
```

*parseFloat()* 

```js
parseFloat( "1234blue" );    //returns   1234   
parseFloat("0xA" );    //returns   NaN    
parseFloat("22.5" );    //returns   22.5    
parseFloat("22.34.5" );    //returns   22.34    
parseFloat("0908" );    //returns   908    
parseFloat("blue" );    //returns   NaN   
```

2)强制类型转化
***\*Number(value)\**** ——把给定的值转换成数字（可以是整数或浮点数）； 

```js
Number( false )   // 0   
Number(true )   // 1   
Number(undefined)  // NaN   
Number(null )   // 0   
Number( "5.5 " )   // 5.5   
Number( "56 " )   // 56   
Number( "5.6.7 " )   // NaN   
Number(new Object())   // NaN   
Number(100)  // 100
```

3)隐式转化

```js
var str=  '012.345 ' ;   
console.log(str-0) //12.345 
```

