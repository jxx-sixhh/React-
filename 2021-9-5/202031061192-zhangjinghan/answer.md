##### 1. 什么是`IIFE`？如何使用？

`IEEF` : 立即调用的函数表达式

![在这里插入图片描述](https://img.php.cn/upload/article/000/000/052/7088f2e3ee270526a9a0a4e090fc4235-0.png)

例 1 :

```js
(function(a,b){
    console.log(a+b); // 5
})(2,3)
```

例 2 :

```js
(function(a,b){
    console.log(a*b);
}(6,7))
```

* 立即执行函数可以没有函数名 , 因为只调用一次

* `IIFE` 的目的是为了隔离作用域，防止污染全局命名空间

**`IIEF` 如何使用 ?**

* 代码在页面加载完成之后，不得不执行一些设置工作，比如时间处理器，创建对象等等
* 所有的这些工作只需要执行一次，比如只需要显示一个时间
* 页面加载的时候就要请求一些数据，初始化的时候写到页面里
* 将所有的代码包裹在它的局部作用域中，不会让任何变量泄露成全局变量 , 避免污染全局命名空间

##### 2. 什么是闭包 ? 闭包有什么优点 ?

**闭包 :**  闭包是指有权访问另外一个函数作用域中的变量的函数

在 JS 中 , 函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量

**闭包的作用 :** 

1. 可以读取函数内部的变量
2. 让这些变量的值始终保持在内存中，不会在 `f1` 调用后被自动清除
3. 本质上，闭包是将函数内部和函数外部连接起来的桥梁

````js
function fun1(){
    let num = 999;
    function fun2(){
        alert(num);
    }
    return fun2;
}
const result = fun1();
result();
````

**闭包的优点 :**

* 保护函数内的变量安全,加强了封装性

* 在内存中维持一个变量 (用的太多就变成了缺点，占内存)

  > 闭包之所以会占用资源是当函数a执行结束后, 变量i不会因为函数a的结束而销毁, 因为b的执行需要依赖a中的变量

##### 3. 什么是提升(变量提升/函数提升)？提升规则是什么

* 变量提升

  ```js
  // 例1
  function foo() {
    // 定义+赋值
    var a = 1;
    /*
    	相当于是
    	var a;
    	a = 1;
    */
    function a() {}
    console.log(a);
  }
  foo();// 1
  
  // 例2
  function foo() {
    // 定义
    var a;
    // 赋值
    function a() {}
    console.log(a);
  }
  foo();// a()
  ```

  >变量在声明提升的时候，是全部提升到作用域的最前面，一个接着一个的。但是在变量赋值的时候就不是一个接着一个赋值了，而是赋值的位置在变量原本定义的位置。原本js定义变量的地方，在js运行到这里的时候，才会进行赋值操作，而没有运行到的变量，不会进行赋值操作。
  >
  >所以变量的提升，提升的其实是变量的声明，而不是变量的赋值。

JS 创建变量 :

````js
function foo() {
  var a = 1;
  console.log(a);
  console.log(b);
  var b = 2;
}
foo();
````

JS 解析代码时 , 是按照如下方法解析的

````js
function foo() {
  var a;
  var b;
  a = 1;
  console.log(a); // 1
  console.log(b); // undefined
  b = 2;
}
foo();
````

>所以 js 并不是在我们定义一个变量的时候，声明完成之后立即赋值，而是把所有用到的变量全部声明之后，再到变量的定义的地方进行赋值，变量的声明的过程就是变量的提升

* **函数的提升**

> 函数的提升和变量的提升类似，都是提升到作用域的最开始的位置，只不过变量的提升是分两步的，第一步是变量声明的提升，第二步是变量的赋值。而函数的提升是**直接将整个函数整体提升到作用域的最开始位置**，相当于剪切过去的样子 , 但是函数中的语句还是在原来的位置执行
>
> 在作用域中，不管是变量还是函数，都会提升到作用域最开始的位置，不同的是，函数的提升后的位置是在变量提升后的位置之后的

1. * 举例如下

     ````js
     function foo() {
       console.log(a);
       var a = 1;
       console.log(a);
       function a() {}
       console.log(a);
     }
     foo();
     ````

     在 JS 眼中 , 这段函数是这样的

     ````js
     function foo() {
       var a;
       function a() {}
       console.log(a); // a()
       a = 1;
       console.log(a); // 1
       console.log(a); // 1
     }
     foo();
     ````


##### 4. `delete` 命令的作用是什么 ? 其局限性是什么 ?

1. 用来删除一个对象的属性

   > 在严格模式下，如果属性是一个不可配置的属性，删除是会抛出异常，非严格模式下返回false,其他情况返回true
   >
   > 内置对象的内置属性不能被删除，用户自定义的属性可以被删除

   ```js
   var item = {name:'Jack',age:18,gender:'男'};
   delete item.gender;// true
   ```

2. 可以删除隐式全局变量，但不可已删除显示全局变量

   ```js
   x = 10;
   var y = 20;
   
   delete x; //true;
   delete y; //false
   ```

3. 不能删除一个对象从原型继承而来的属性，但是可以直接从原型上删掉它

   ```js
   function foo(){}
   foo.prototype.name = 'Mike';
   var f = new foo();
   
   //delete只能删除自己的属性，不能删除继承来的属性
   delete f.name; // false 
   console.log(f.name);//Mike
   
   delete foo.prototype.anme; // true
   console.log(f.name); // undefined
   ```

4. 内置对象的内置属性不能被删除，用户自定义的属性可以被删除

   ```js
   obj = {
       h : 10
   }
   
   var obj1 = {
       h: 10
   }
   
   delete Math.PI; // false
   delte obj.h; //true
   delete obj; //ture ,obj 是全局变量的属性，而不是变量。
   
   delete obj1.h;//true
   delete obj1; //false 全局显示变量不能被删除
   
   
   function fn(){
       var z = 10;
       delete z; //false
       //z是局部变量，不能被删除，delete只能删除对象的属性。
   }
   delete fn; //false
   //fn 相当于是一个匿名变量，所以也不能被删除
   ```

5. 可以用来删除数组元素,但当删除数组元素时，数组的长度并不会变小

   ```js
   var arr = [1,3,4,6,73,2];
   delete arr[2];
   
   console.log(arr.length); // 6
   console.log(arr[2]); //undefiend
   consoel.log(arr); //[ 1, 3, , 6, 73, 2 ]
   ```

   > 作用：在 `forEach` 循环中删除元素，**不会影响循环结果**

   ```js
   var arr = [1,3,5,21,3,4,53,21,5,2];
   
   arr.forEach(function(val,index){
   
       if(val < 10){
   
           delete arr[index];
       }
   })
   
   console.log(arr); //[ , , , 21, , , 53, 21, ,  ]
   
   //可以使用filter过滤掉空值 [ 21, 53, 21 ]
   arr = arr.filter(function(val){return val});
   ```

   > 与 `Array.splice` 对比

   ```js
   arr.forEach(function(val,index){
   
       if(val < 10){
   
           arr.splice(index,1);
       }
   })
   
   //没有答案我们预想的结果，因为splice删除元素会改变数组的长度。
   //所以说删除一个值后，其后的那个值占据了它的位置，在判断的时候就会漏掉。
   console.log(arr);// [ 3, 21, 4, 53, 21, 2 ]
   ```

##### 5. 如何获取函数预期传入的参数个数

> 在 JS 中，可以使用`arguments`对象的`length属性`来获取方法（函数）的参数个数，该属性可以获取函数的实参个数；使用函数对象的`length`属性来获取函数的形参个数
>
> 方法（method）是通过对象调用的JavaScript函数。也就是说，方法也是函数，只是比较特殊的函数

````js
function fun(a,b,c){
    // 返回形参个数
    console.log(fun.length);// 3
    // 返回实参数组
    // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments);
    // 返回实参个数
    console.log(arguments.length);// 5
    // 返回函数的调用者
    console.log(fun.caller);// f()
    // 返回函数名称
    console.log(fun.name); // fun
}
function f(){
    fun(1,2,3,4,5);
}
f();
````

##### 6. eval命令的作用有什么 ?

> `eval()`函数用于计算JavaScript字符串，并把它作为脚本代码来执行。如果参数是一个表达式，`eval()`函数将执行表达式。如果参数是`Javascript`语句，`eval()`将执行`Javascript `语句

举例 :

```js
console.log(eval('1+1'));// 2
eval("x=10;y=20;console.log(x+y)");// 30
```

##### 7. 遍历数组的方式有哪些 ?

* `for()`循环

  ```js
  const arr = [1,2,3,4,5,6,7,8,9];
  for(let i = 0;i < arr.length;i++){
      console.log(arr[i]);
  }
  ```

* `forEach()`方法 (也可以用来遍历对象)

  ![img](https://images2018.cnblogs.com/blog/1422714/201809/1422714-20180907155729791-1956502361.png)

  ```js
  arr.forEach((value, index) => {
      console.log(value);
  })
  ```

* `map()` 方法

  ```js
  var newArr = arr.map((value,index)=>{
      return value+10;
  })
  // [11, 12, 13, 14, 15, 16, 17, 18, 19]
  console.log(newArr);
  ```

* `for...in`方法 (也可以用来遍历对象)

  ```js
  for(let index in arr){
      console.log(arr[index]);
  }
  ```

* `for...of`方法

  ```js
  for(let index of arr){
      console.log(arr[index]);
  }
  ```

* `filter` 过滤筛选出符合条件的

  ```js
  let arr = [
    { id: 1, name: '买笔', done: true },
    { id: 2, name: '买笔记本', done: true },
    { id: 3, name: '练字', done: false }
  ]
      
  let newArr = arr.filter(function (item, index) {
    return item.done;
  })
  
  console.log(newArr);
  ```

* `some` 只要有一个元素符合条件就返回`true`

  ```js
  let arr = [
    { id: 1, name: '买笔', done: true },
    { id: 2, name: '买笔记本', done: true },
    { id: 3, name: '练字', done: false }
  ]
  
  let bool = arr.some(function (item, index) {
    return item.done;
  })
  
  console.log(bool);
  ```

* `every` 每个元素都符合条件才返回true

  ```js
  let arr = [
    { id: 1, name: '买笔', done: true },
    { id: 2, name: '买笔记本', done: true },
    { id: 3, name: '练字', done: false }
  ]
  
  let bool = arr.every(function (item, index) {
    return item.done;
  })
  
  console.log(bool);
  ```

* `find `找到符合条件的第一个元素并返回 , 如果没有符合的就返回`undefined`

  ```js
  let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6];
  
  let num = arr.find(function (item, index) {
    return item === 3;
  })
  
  console.log(num);
  ```

* `findIndex` 返回符合条件的第一个元素的索引 , 如果没有符合的就返回 -1

  ```js
  let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6];
  
  let num = arr.findIndex(function (item) {
    return item === 3;
  })
  
  console.log(num);
  ```

* `reduce` 从第一个索引开始执行回调函数                   

  ```js
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = arr.reduce((preValue,curValue)=>{
      return preValue + curValue;
  })
  console.log(result); // 45
  ```
  

##### 8. for...in遍历数组有什么缺点

* 数组的键名是数字，但是`for...in`循环是以字符串作为键名“0”、“1”、“2”等等。如果你使用字符串的 index 去参与某些运算（"2" + 1 == "21"），运算结果可能会不符合预期。
* `for...in`循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
* 某些情况下，`for...in`循环会以任意顺序遍历键名。
* 总之，`for...in`循环主要是为遍历对象而设计的，不适用于遍历数组。

##### 9. 逗号 (" , ") 运算符的作用是什么

> 逗号运算符是二元运算符，它能够先执行运算符左侧的操作数，然后再执行右侧的操作数，最后**返回右侧操作数的值**

* 逗号运算符可以实现连续运算，如多个变量连续赋值

  ```js
  let a = 1,b = 2,c = 3;
  ```

  相当于 :

  ```js
  let a = 1;
  let b = 2;
  let c = 3;
  ```

* 与条件运算符、逻辑运算符根据条件来决定是否执行所有或特定操作数不同的是，逗号运算符会执行所有的操作数，但并非返回所有操作数的结果，它**只返回最后一个操作数的值**。

  > 在下面代码中，变量 a 的值是逗号运算之后，通过第二个操作数 c=2 的执行结果赋值得到的。第一个操作数的执行结果没有返回，但是这个表达式被执行了

  ```js
  // 先给a赋值为1,然后再赋值为2
  a = (b = 1,c = 2);  //连续执行和赋值
  console.log(a);  //2
  console.log(b);  //1
  console.log(c);  //2
  ```

* 逗号运算符可以作为仅需执行表达式的工具，这些表达式不需要返回值，但必须要运算。在特定环境中，可以在一个表达式中包含多个子表达式，通过逗号运算符让它们全部执行，而不用返回结果

  > for 循环结构的小括号内包含 3 个表达式，第一个表达式为初始化值，第二个表达式为检测条件，第三个表达式为递增表达式。使用逗号运算符可以在 3 个表达式中添加多个额外的计算任务，但要**确保第二个表达式的最后一个子表达式返回一个可控布尔值**，否则会导致死循环

  ```js
  for(var a = 1,b = 10,c = 100;++ c,a < b;a ++,c --){
      console.log(a * c);
  }
  ```

* 逗号运算符的优先级是最低的。在下面代码中，赋值运算符优先于逗号运算符，也就是说数值 1 被赋值给变量 b 之后，继续赋值给变量 a，最后才执行逗号运算符

  ```js
  a = b = 1,c = 2;  //连续执行和赋值
  console.log(a);  //返回1
  console.log(b);  //返回1
  console.log(c);  //返回2
  ```

* 逗号运算符的作用是将若干表达式连接起来

  ```js
  console.log(2*3,6*7);//6 42
  ```

##### 10. 将字符串转化为数字的方法有哪些

* `Number()`

  > 通过Number()转换函数传入一个字符串，它会试图将其转换为一个整数或浮点数直接量，这个方法只能基于十进制进行转换，并且**字符串中不能出现非数字的字符**，否则将返回 NaN

  ```js
  var str1 = '123abc',str2 = '567';
  var num1 = Number(str1);
  var num2 = Number(str2)
  console.log(num1,num2); // NaN 567
  ```

* `parseInt()`

  > 它是全局函数，不从属于任何类的方法，且只解析整数。如果字符串前缀是"0x"或者"0X"，则parseInt()将其解释为十六进制数。它解析时会**跳过任意数量的前导空格**，尽可能解析更多数值字符，并忽略后面的内容，**如果第一个非空格字符是非数字字符，则返回 NaN**

  ```js
  var str1 = 'abc',str2 = '567abc';
  var num1 = parseInt(str1);
  var num2 = parseInt(str2)
  console.log(num1,num2); // NaN 567
  ```

* `parseFloat()`

  > 它也是全局函数，不从属于任何类的方法，它可以解析整数和浮点数。它不能识别十六进制前缀"0x"或"0X"。它解析时也会跳过任意数量的前导空格，尽可能解析更多数值字符，并忽略后面的内容，如果第一个非空格字符是非数字字符，则返回NaN。例如

  ```js
  var str1 = '  3.14abc',str2 = '123.567abc';
  var num1 = parseFloat(str1);
  var num2 = parseFloat(str2)
  console.log(num1,num2); // 3.14 123.567
  ```

