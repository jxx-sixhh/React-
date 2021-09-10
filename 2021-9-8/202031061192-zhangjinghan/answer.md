## JS

#### 1. `new` 命令的原理

使用`new`命令时 , 它后面的函数依次执行下面的步骤

* 创建一个空对象 , 作为将要返回的对象实例

* 将这个空对象的原型 , 指向构造函数的`prototype`属性

* 将这个空对象赋值给函数内部的`this`关键字

* 开始执行构造函数内部的代码

* 返回这个对象

  也就是说 , 构造函数内部 , `this` 指的是一个新生成的空对象 , 虽有针对`this`的操作 , 都会发生在这个空对象上 , 构造函数之所以叫"构造函数" ,  就是说这个函数的目的 , 就是操作一盒空对象 (即`this`对象) , 将其"构造"成需要的样子

  使用`new` :

  ```js
  const Person = function(name){
      this.name = name;
  }
  const p1 = new Person("Jack");
  console.log(p1); // Person
  console.log(p1.name); // Jack
  ```

  不使用`new`,直接调用 :

  ```js
  const Person = function(){
      this.name = "Tom";
  }
  const p1 = Person();
  console.log(p1); // undefined
  console.log(name); // Tom
  console.log(p1.name); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
  ```

  **不使用`new`调用时 , 不会返回一个实例对象 , 并且其中的`this`指向全局对象**

  > 应该尽量避免这种使用方式，具体如何避免有很多别的方式：
  >
  > 1. `use strict` 命令保证了该函数在严格模式下运行。由于在严格模式中，函数内部的this不能指向全局对象，默认等于 `undefined `，导致不加`new`调用会报错（JavaScript不允许对 undefined 添加属性）
  > 2. 另一个解决办法，是在**构造函数内部判断是否使用 new 命令**，如果发现没有使用，则直接返回一个实例对象

  ````js
  // 1. 严格模式
  const Person = function(name,age){
      'use strict';
      this.name = name;
      this.age = age;
  }
  const p1 = Person("Tom",18);
  // 不能为undefined添加属性
  // Uncaught TypeError: Cannot set properties of undefined (setting 'name')
  
  // 2. 判断是否使用new
  const Person = function(name,age){
      if(!(this instanceof Person)){
          console.log("没有使用new命令!");
          return;
      }
      this.name = name;
      this.age = age;
  }
  const p1 = Person("Tom",18);
  // 没有使用new命令!
  console.log(p1);
  // undefined
  ````

  如何自己实现一个new :

  1. 创建一个新对象
  2. 将新对象的`__proto__`指向构造函数的`prototype`对象
  3. 将构造函数的作用域赋值给新对象
  4. 执行构造函数中的代码(为这个新对象添加属性)
  5. 返回新的对象

  ```js
  const Person = function(name){
      this.name = name;
  }
  Person.prototype.say = function(){
      console.log("我是"+this.name+",我今年"+this.age+"了");
  }
  function myNew(fn,...arg){
      let obj = Object.create(fn.prototype);
      let result = fn.apply(obj,arg);
      return typeof result === 'object' ? result : obj;
  }
  let p1 = myNew(Person,"Tom");
  console.log(p1);// Person {name: 'Tom'}
  console.log(p1.name); // Tom
  ```

#### 2. 绑定this的方法

1. `call`方法 和 `apply` 方法

   ```js
   function Product(name,price){
       this.name = name;
       this.price = price;
   }
   function ProductExtra(from,to){
       this.from = from;
       this.to = to;
   }
   function Food(name,price,extra){
       Product.call(this,name,price);
       ProductExtra.apply(this,extra);
       this.category = 'food';
   }
   console.log(new Food('烤鸭',5,['北京','广州']).name);// 烤鸭
   console.log(new Food('烤鸭',5,['北京','广州']).from);// 北京
   ```

   > 通过对比我们可以看出，call函数第一个参数为要绑定的this，之后可以跟上无数个参数，这些参数会依次作为执行函数的参数传入，而apply则**传入一个数组**，这个数组中的内容则会按顺序作为执行函数的参数传入

2. `bind`函数

   `bind`函数时ES5定义的一个函数，定义如下：`func.bind(thisArg, arg1, arg2, ...)`，它与`call`和`apply`不同的是，`bind`不会直接执行要执行的函数，而是返回一个新的函数，我们称之为a，当执行a被调用执行时，arg1, arg2, ...这些参数，将置于实参之前传递给a

   ```js
   function Person(name,age){
       console.log(name);
       console.log(age);
       console.log(this.sex);
       console.log(this.class);
   }
   function Student(age){
       var extra = {sex:"男",class:5};
       // var createStudent = Person.bind(extra,'Jack');
       // createStudent(age);
       Person.bind(extra,'Jack')(18);
   }
   Student(18); //Jack 18 男 5
   ```

3. 箭头函数

   箭头函数是ES6定义的一个写法，写法类似于`()=>{console.log(test);}`可以看做是匿名函数的另外一种写法，这里不对箭头函数的特性做详细的解读，仅对其绑定this方面做部分解析，箭头函数中的`this`跟正常的`this`不太一样，正常函数的`this`是在执行时确定下来的，指向调用当前方法的对象，而箭头函数则不同，箭头函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象，也就是所谓的词法作用域，在定义的时候就确定下来了，例如

   ```js
   var obj1 = {
       birth: 1990,
       getBirth: function () {
           var b = this.birth; // 1990
           var fn = function () {
               return this.birth; // this指向window或undefined，this.birth的值不确定
           };
           return fn();
       }
   };
   var obj2 = {
       birth: 1990,
       getBirth: function () {
           var b = this.birth; // 1990
           var fn = () => this.birth; // this指向obj对象，this.birth=1990
           return fn();
       }
   };
   console.log(obj1.getBirth())//undefined
   console.log(obj2.getBirth())//输出1990
   ```

4. `::`双冒号

   > 双冒号属于es尚未通过的一个提案，但目前babel已经支持，可以把它理解为一个语法糖，可以用它来代替bind，具体使用方法如下

   ```js
   obj::func;
   // 等同于
   func.bind(obj);
   obj::obj.func;
   // 等同于
   ::obj.func;
   ```

#### 3. 严格模式的目的

* 消除JavaScript语法的一些不合理 , 不严谨之处 . 减少一些怪异行为
* 消除代码运行的一些不安全之处 , 保证代码运行的安全
* 提高编译器效率 , 增加运行速度

> 不支持strict模式的浏览器把`"use strict"`当作一个字符串语句执行 , 支持scriot模式的浏览器将开启scrict模式
>
> 支持严格模式的浏览器包括IE10+、Firefox4+、safari12+、opera12+、chrome
>
> 在脚本头部声明  `"use strict"` 整个脚本都执行严格模式 , 即全局
>
> 在函数头部声明  `"use strict"` 只在函数内使用严格模式;即局部

如果将`"use strict"`放在脚本头部声明，当与另一个非严格模式的JS合并时，会使其受严格模式约束，可能会报错，所以建议代码都包在一个立即执行函数里面。(即一般局部使用)

````js
(function(){
    "use strict";
    var name = "张三";
})();
````

#### 4. JS的特点有什么

1. JS是一种解释性脚本语言(代码不进行预编译)

2. 跨平台特性 , 在绝大多数浏览器的支持下 , 可以在多种平台下运行 (如 : Windows , Linux , Mac , Android , IOS等)

3. 弱类型脚本语言

   对使用的数据类型未作出严格要求 , 可以进行类型转换 , 简单又灵活

4. 单线程 , 事件驱动

   JavaScript对用户的响应，是以事件驱动的方式进行的。在网页（Web Page）中执行了某种操作所产生的动作，被称为“事件”（Event）。例如按下鼠标、移动窗口、选择菜单等都可以被视为事件。当事件发生后，可能会引起相应的事件响应，执行某些对应的脚本，这种机制被称为“事件驱动”。

5. 面向对象

   一种基于对象的脚本语言，这意味着JavaScript能运用其已经创建的对象。因此，许多功能可以来自于脚本环境中对象的方法与脚本的相互作用。

6. 安全性

   JavaScript是一种安全性语言，它不允许访问本地的硬盘，并不能将数据存入到服务器上，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。从而有效地防止数据的丢失。

#### 5. 单线程模型的优缺点有哪些

* 同步单线程
  * 优点
    * 实现简单
    * 不用考虑线程间同步互斥问题
  * 缺点
    * 对 CPU 的使用率不高(容易在IO操作或自身等待操作时阻塞) , 在多CPU时劣势更明显
    * 并发性不好 , 在有的时间需要长时间占用CPU处理的情况下 , 其他事件会长时间等待得不到处理
* 异步单线程模式
  * 优点
    * 对 CPU 的利用率高
    * 不用考虑线程间同步互斥问题
  * 缺点
    * 实现较复杂, 要把所有会导致阻塞的操作转化为异步操作 
    * 并发性不好 , 在有的事件需要长时间占用CPU处理的情况下 , 其他事件会长时间得不到处理
    * 在多CPU时不如多线程高效

#### 6. JS有哪些异步任务

> 异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有等主线程任务执行完毕，"任务队列"开始通知主线程，请求执行任务，该任务才会进入主线程执行
>
> 分为了以下两种
>
> 宏任务
>
> - 宏任务就是将当前任务放在下一个任务列最顶部
>
> 微任务
>
> - 微任务会将当前任务放入下一个任务列的底部

异步任务 :

* `events` 

  JS各种事件的绑定执行都是异步任务

* `setTimeout(延时调用) , setInterval(定时调用)` 定时器

  如果将`setTimeout()`的第二个参数设置为 0 ,就表示当前代码执行完(执行栈清空)以后 , 立即执行(0毫秒间隔) 指定的回调函数

* `XMLHttpRequest` 即Ajax

* `Promise`

* 回调函数

#### 7. `setTimeout`和`setInterval`的区别

* `setTimeout(函数表达式,毫米数)`

  `setTimeout()`方法用于载指定毫秒数后再调用函数或者计算表达式(延时调用)

  `setTimeout()`只执行一次函数 , 如果需要多次使用 , 可以调用`setInterval()` , 或者在函数体内再次调用`setTimeout()`

* `setInterval(函数表达式,毫秒数)`

  `setInterval()`方法可按照指定的周期来调用函数或者计算表达式(以毫秒为单位)

  `setInterval()`会不停的调用函数 , 直到`clearInterval()`被调用或者窗口被关闭 , 有 `setInterval()` 返回的id值可用作`clearInterval()`方法的参数

* 二者的区别

  `setTimeout()`方法只运行一次，也就是说当达到设定的时间后就出发运行指定的代码，运行完后就结束了，如果还想再次执行同样的函数，可以在函数体内再次调用`setTimeout()`，可以达到循环调用的效果。

  `setInterval()`是循环执行的，即每达到指定的时间间隔就执行相应的函数或者表达式，是真正的定时器。

#### 8. setTimeout的执行时间是准确的吗？为什么

​	`setTimeout`的执行时间不是准确的

​	原因:

​	因为JS是一个单线程的解释器 , 因此 一定时间内只能执行一段代码

​	为了控制要执行的代码 , 就有一个 JS 任务队列

​	这些任务i会按照将他们添加队列的顺序执行

​	`setTimeout`的第二个参数告诉JS再过多长时间把当前任务添加到队列中 , 如果队列是空的 , 那么添加的代码就会立即执行 , 如果队列不	是空的 , 那么它就要等前面的代码执行完之后再执行





