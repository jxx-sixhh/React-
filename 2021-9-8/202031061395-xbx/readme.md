1. new 命令的原理？
    new命令的作用，就是执行构造函数，返回一个实例对象。
    ```js
    var fn=function(){
        this.num=1000;
    }
    var f=new fn();
    console.log(f.num)//1000
    ```

2. 绑定this的方法？
     call()方法：
     ```js
     var person={
         name:"zs",
         age:18
     }
     function fn(x,y){
         console.log(x+","+y);
         console.log(this);
     }
     fn(1,1);
     //此时this指向window
     ```
    ```js
    var person={
         name:"zs",
         age:18
     }
     function fn(x,y){
         console.log(x+","+y);
         console.log(this);
     }
     fn.call(person,1,1);
     //此时this指向person对象  {name: 'zs', age: 18}
     ```

     apply() 方法:
     apply() 与call（） 非常相似， 不同之处在于提供参数的方式， apply（） 使用参数数组， 而不是参数列表
     ```js
     var person={
         name:"zs",
         age:18
     }
     function fn(x,y){
         console.log(x+","+y);
         console.log(this);
     }
     fn.apply(person,[1,1]);
     ```
     bind() 方法:
     bind() 创建的是一个新的函数（ 称为绑定函数）， 与被调用函数有相同的函数体， 当目标函数被调用时this的值绑定到 bind() 的第一个参数上
     ```js
     var person={
         name:"zs",
         age:18
     }
     function fn(x,y){
         console.log(x+","+y);
         console.log(this);
     }
     fn.bind(person,1,1);//只是更改了this指向，没有输出
     fn.bind(person,1,1)();//this指向person对象
     ```

     使用new关键字进行绑定:
     就是new关键字只是在调用函数的基础上，多增加了几个步骤，其中就包括了修正this指针到return回去的对象上。
     ```js
     var a = 5;
     function Fun() {
     this.a = 10;
     }
     var obj = new Fun();
     obj.a    //10
     ```

3. 严格模式的目的？
    - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;

　　- 消除代码运行的一些不安全之处，保证代码运行的安全；

　　- 提高编译器效率，增加运行速度；

　　- 为未来新版本的Javascript做好铺垫。

4. JavaScript的特点有什么
    (1).一种解释性执行的脚本语言。
    同其他脚本语言一样，JavaScript也是一种解释性语言，其提供了一个非常方便的开发过程。JavaScript的语法基本结构形式与C、C++、Java十分类似。但在使用前，不像这些语言需要先编译，而是在程序运行过程中被逐行地解释。JavaScript与HTML标识结合在一起，从而方便用户的使用操作。

    (2).一种基于对象的脚本语言。
    其也可以被看作是一种面向对象的语言，这意味着JavaScript能运用其已经创建的对象。因此，许多功能可以来自于脚本环境中对象的方法与脚本的相互作用。

    (3).一种简单弱类型脚本语言。
    其简单性主要体现在：首先，JavaScript是一种基于Java基本语句和控制流之上的简单而紧凑的设计，从而对于使用者学习Java或其他C语系的编程语言是一种非常好的过渡，而对于具有C语系编程功底的程序员来说，JavaScript上手也非常容易；其次，其变量类型是采用弱类型，并未使用严格的数据类型。

    (4).一种相对安全脚本语言。
    JavaScript作为一种安全性语言，不被允许访问本地的硬盘，且不能将数据存入服务器，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。从而有效地防止数据的丢失或对系统的非法访问。

    (5).一种事件驱动脚本语言。
    JavaScript对用户的响应，是以事件驱动的方式进行的。在网页（Web Page）中执行了某种操作所产生的动作，被称为“事件”（Event）。例如按下鼠标、移动窗口、选择菜单等都可以被视为事件。当事件发生后，可能会引起相应的事件响应，执行某些对应的脚本，这种机制被称为“事件驱动”。

    (6).一种跨平台性脚本语言。
    JavaScript依赖于浏览器本身，与操作环境无关，只要计算机能运行浏览器，并支持JavaScript的浏览器，就可正确执行，从而实现了“编写一次，走遍天下”的梦想。

    因此，JavaScript是一种新的描述语言，其可以被嵌入到HTML文件中。JavaScript语言可以做到响应使用者的需求事件（例如表单的输入），而不需要任何的网络来回传输资料。所以当一位使用者输入一项资料时，此资料数据不用经过传给服务器（server）处理再传回来的过程，而直接可以被客户端（client）的应用程序所处理。


5. 单线程模型的优缺点有哪些
    优点：
    (1) 由于单例模式在内存中只有一个实例，减少内存开支，特别是一个对象需要频繁地创建销毁时，而且创建或销毁时性能又无法优化,单例模式就非常明显了

    (2) 由于单例模式只生成一个实例，所以，减少系统的性能开销，当一个对象产生需要比较多的资源时，如读取配置，产生其他依赖对象时，则可以通过在应用启动时直接产生一个单例对象，然后永久驻留内存的方式来解决。

    (3) 单例模式可以避免对资源的多重占用，例如一个写文件操作，由于只有一个实例存在内存中，避免对同一个资源文件的同时写操作

    (4) 单例模式可以在系统设置全局的访问点，优化和共享资源访问，例如，可以设计一个单例类，负责所有数据表的映射处理。
    
    缺点：
    (1) 单例模式没有抽象层，扩展很困难，若要扩展，除了修改代码基本上没有第二种途径可以实现。

    (2) 单例类的职责过重，在一定程度上违背了“单一职责原则”。

    (3) 滥用单例将带来一些负面问题，如：为了节省资源将数据库连接池对象设计为的单例类，可能会导致共享连接池对象的程序过多而出现连接池溢出；


6. 有哪些异步任务
    Events：javascript各种事件的执行都是异步任务
    setTimeout、setInterval 定时器 特别的如果将setTimeout()的第二个参数设为0，就表示当前代码执行完（执行栈清空）以后，立即执行（0毫秒间隔）指定的回调函
    queueMicrotask 执行微任务
    XMLHttpRequest（也就是 Ajax）
    requestAnimationFrame 类似于定时器，但是是以每一帧为单位
    fetch Fetch API 提供了一个 JavaScript 接口,用于访问和操纵 HTTP 管道的一些具体部分
    MutationObserver 创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。
    Promise
    async function

7. setTimeout与setInterval的区别
    setInterval：
    setInterval()方法可按照指定的周期来调用函数或者计算表达式（以毫秒为单位）
    setInterval(函数表达式，毫秒数)；
    setInterval()会不停的调用函数，直到clearInterval()被调用或者窗口被关闭，由 setInterval()返回的ID值可用作clearInterval()方法的参数。

    setTimeout
    setTimeout()方法用于在指定毫秒数后再调用函数或者计算表达式（以毫秒为单位）
    setTimeout(函数表达式，毫秒数)；
    setTimeout()只执行函数一次，如果需要多次调用可以使用setInterval(),或者在函数体内再次调用setTimeout()

    通过以上分析可以看出，setTimeout与setInterval的主要区别是:
　　setTimeout()方法只运行一次，也就是说当达到设定的时间后就出发运行指定的代码，运行完后就结束了，如果还想再次执行同样的函数，可以在函数体内再次调用       setTimeout()，可以达到循环调用的效果。setInterval()是循环执行的，即每达到指定的时间间隔就执行相应的函数或者表达式，是真正的定时器。

8. setTimeout的执行时间是准确的吗？为什么
    不是
    浏览器中的所有JavaScript都在单线程上执行，所以异步事件（比如鼠标点击和定时器）仅在线程空闲时才会被调度运行。
    为了控制要执行的代码， JavaScript 配置了一个任务队列，这些异步事件任务会按照将它们添加到队列的顺序执行。
    而setTimeout() 的第二个参数（延时时间）只是告诉 JavaScript 再过多长时间把当前任务添加到队列中。如果队列是空的，那么添加的代码会立即执行；如果队列不是空的，那么它就要等前面的代码执行完了以后再执行


