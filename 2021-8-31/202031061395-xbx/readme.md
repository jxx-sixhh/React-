## 一、ES5中的算法初步

1. 总结js的数组操作方法。(包括添加、删除、过滤、排序等)同样包括举例。
     添加： 
     unshift() 在第一位新增一或多个数据，返回长度
     ```js
     var a=['a','b','c'];
     var len=a.unshift('o');
     console.log(len);//4
     console.log(a);//o,a,b,c
     ```
     push()  在最后一位新增一或多个数据，返回长度
     ```js
     var a=['a','b','c'];
     var len=a.push('o');
     console.log(len);//4
     console.log(a);//a,b,c,o
     ```

     删除：
     pop()  删除最后一位，并返回删除的数据
     ```js
     var a=['a','b','c'];
     var b=a.pop();
     console.log(b);//c
     console.log(a);//a,b
     ```
     shift()  删除第一位，并返回删除的数据
     ```js
     var a=['a','b','c'];
     var b=a.shift();
     console.log(b);//a
     console.log(a);//b,c
     ```
     
     合并：
     concat()  	合并数组，并返回合并之后的数据
     ```js
     var a=['a','b','c'];
     var b=['d','e'];
     var c=a.concat(b);
     console.log(c);//a,b,c,d,e;
     ```

     转换：
     join()  根据指定分隔符将数组中的所有元素放入一个字符串，并返回这个字符串。
     ```js
     var a=['a','b','c'];
     console.log(a.join());//a,b,c;
     console.log(a.join("-"))//a-b-c;
     console.log(a);//[a,b,c]原数组不会改变
     ```

     倒置：
     reverse()  颠倒数组中元素的顺序。
     ```js
     var a=['a','b','c'];
     console.log(a.reverse());//c,b,a
     console.log(a);//c,b,a 原数组也会被改变
     ```

     截取：
     slice()  可从已有的数组中返回选定的元素。该方法接收两个参数slice(start,end)，strat为必选，表示从第几位开始；end为可选，表示到第几位结束(不包含end位)，省略表示到最后一位；start和end都可以为负数，负数时表示从最后一位开始算起，如-1表示最后一位。
     ```js
     var a=['a','b','c','d'];
     console.log(a.slice(1,3));//b,c
     console.log(a.slice(1));//b,c,d
     console.log(a.slice(-4,-2));//a,b
     console.log(a.slice(-3));//b,c,d
     console.log(a);//a,b,c,d  原数组不改变
     ```

     排序：
     sort()  对数组中的元素进行排序，默认是升序。
     ```js
     var a=[5,8,1,3,2,9,4,6,6];
     console.log(a.sort());//1,2,3,4,5,6,6,8,9
     console.log(a);//1,2,3,4,5,6,6,8,9  原数组改变
     ```
     但是在排序前，会先调用数组的toString方法，将每个元素都转成字符之后，再进行排序，此时会按照字符串的排序，逐位比较，进行排序。
     ```js
     var a=[7,1000,338,28456];
     console.log(a.sort());//1000, 28456, 338, 7
     ```
     如果需要按照数值排序，需要传参。
     sort(callback)  callback为回调函数该函数应该具有两个参数，比较这两个参数，然后返回一个用于说明这两个值的相对顺序的数字（a-b）。其返回值如下：
     若 a 小于 b，返回一个小于 0 的值。
     若 a 等于 b，则返回 0。
     若 a 大于 b，则返回一个大于 0 的值。
     ```js
     var a=[7,1000,338,28456];
     console.log(a.sort(fn));//7,338,1000,28456
     function fn(a,b){
         return a-b;
     }
     ```
     添加，删除，替换
     splice()  向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素
     1. 不传参：无操作
     ```js
     var a=['a','b','c','d','e'];
     console.log(a.splice());//[]
     console.log(a);//['a','b','c','d','e']
     ```
     2. 只传入start：表示从索引为start的数据开始删除，直到数组结束
     ```js
     var a=['a','b','c','d','e'];
     console.log(a.splice(2));//['c','d','e']
     console.log(a);//['a','b'] 原数组改变
     ```
     3. 传入start和num：表示从索引为start的数据开始删除，删除num个
     ```js
     var a=['a','b','c','d','e'];
     console.log(a.splice(2,2));//['c','d']
     console.log(a);//['a','b','e'] 原数组改变
     ```
     4. 传入更多：表示从索引为start的数据开始删除，删除num个，并将第三个参数及后面所有参数，插入到start的位置
     ```js
     var a=['a','b','c','d','e'];
     console.log(a.splice(2,2,'g','f'));//['c','d']
     console.log(a);//['a','b','g','f','e'] 原数组改变
     ```
     5. 传入更多：表示从索引为start的数据开始删除，删除num个，并将第三个参数及后面所有参数，插入到start的位置
     ```js
     var a=['a','b','c','d','e'];
     console.log(a.splice(2,0,'g','f'));//[]
     console.log(a);//['a','b','g','f','c','d','e'] 原数组改变
     ```

     转换：
     toString()  转换成字符串，类似于没有参数的join()。该方法会在数据发生隐式类型转换时被自动调用，如果手动调用，就是直接转为字符串。
     ```js
     var a=['a','b','c','d','e'];
     console.log(a.toString());//a,b,c,d,e
     console.log(a);//['a','b','c','d','e'] 原数组不改变
     ```

     查询：
     indexOf()  根据指定的数据，从左向右，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变.
     参数:  indexOf(value, start);value为要查询的数据；start为可选，表示开始查询的位置，当start为负数时，从数组的尾部向前数；如果查询不到value的存在，则方法返回-1
     ```js 
     var a=['h','e','l','l','o'];
     console.log(a.indexOf('l'));//2
     console.log(a.indexOf('l',2));//3
     console.log(a.indexOf('k'))//-1
     console.log(a.indexOf("l",-3));//2
     ```
     lastIndexOf()  根据指定的数据，从右向左，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变。
     参数： lastIndexOf(value, start);value为要查询的数据；start为可选，表示开始查询的位置，当start为负数时，从数组的尾部向前数；如果查询不到value的存在，则方法返回-1
     ```js
     var arr = ["h","e","l","l","o"];
     console.log(a.lastIndexOf("l"));//3
     console.log(a.lastIndexOf("l",3));//3
     console.log(a.lastIndexOf("l",1));//-1
     console.log(a.lastIndexOf("l",-3));//2
     console.log(a.lastIndexOf("l",-4));//-1
     ```
     
     遍历：
     forEach()  用来遍历数组，该方法没有返回值。
     ```js
     var a=['a','b','c'];
     var b=[];
     a.forEach(function(item){
         b.push(item);
     })
     
     console.log(b);//a,b,c;
     
     ```
     map()  1.同forEach功能；2.map的回调函数会将执行结果返回，最后map将所有回调函数的返回值组成新数组返回。
     ```js
     var a = [2,3,4,5];
     var b = a.map(function(x) {
          return x - 1;
     });
     console.log(a);//2,3,4,5
     console.log(b);//1,2,3,4
     ```
     some()  判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。与every相反，只要有一个回调函数的返回值都为true，some的返回值为true，所有回调函数的返回值为false，some的返回值才为false
     ```js
     function fn(data){
         return data>10;
     }
     var a=[2,4,5,8,10,12];
     var b=[1,2,3,4,5];
     console.log(a.some(fn));//true
     console.log(b.some(fn));//false
     ```
     every()  判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回true。当回调函数的返回值为true时，类似于forEach的功能，遍历所有；如果为false，那么停止执行，后面的数据不再遍历，停在第一个返回false的位置。当每个回调函数的返回值都为true时，every的返回值为true，只要有一个回调函数的返回值为false，every的返回值都为false
     ```js
     function fn(data){
         return data>10;
     }
     var a=[2,4,5,8,10,12];
     var b=[1,2,3,4,5];
     var c=[11,12,13,14];
     console.log(a.every(fn));//false
     console.log(b.every(fn));//false
     console.log(c.every(fn));//true
     ```

2. 用js实现几种排序方法(冒泡、插入、快排等)。
     冒泡排序：
     ```js
     var a=[3,4,1,2,5];
     for(var i=0;i<a.length-1;i++)
     {
         for(var j=0;j<a.length-1-i;j++)
     {
         if(a[j]>a[j+1])
         {
             var temp=a[j];
             a[j]=a[j+1];
             a[j+1]=temp;
         }
     }
     }
     
     console.log(a);//1,2,3,4,5
     ```
     插入排序：
     ```js
     var a=[3,4,1,2,5];
     for(var i=1;i<a.length;i++)
     {
         for(var j=i;j>0;j--)
         {
             if(a[j]<a[j-1]>)
             {
                 var temp=a[j];
                 a[j]=a[j-1];
                 a[j-1]=temp;
             }
         }
     }
     console.log(a);
     ```
     
     快速排序：
     ```js
     var a=[7,1000,338,28456];
     console.log(a.sort(fn));//7,338,1000,28456
     function fn(a,b){
         return a-b;
     }
     ```

     选择排序：
     ```js
     var a=[2,5,9,4,8,3,5,1];
     function selectSort(a){
         var temp;
         for (var i=0; i < arr.length-1; i++)
     	{
     		for (var j=i+1; j<arr.length; j++)
     			if (a[i] > a[j])
     			{
     				temp = a[j];
     				a[j] = a[i];
     				a[i] = temp;
     			}
     	}
         return a;
     }
     console.log(selectSort(a));
     ```
3. 思考js中的排序sort的方法，采用的是哪种排序？
    ECMAScript没有定义使用哪种排序算法，各个浏览器的实现方式会有不同。火狐中使用的是归并排序，下面是Chrome的sort排序算法的实现。

## 二、ES5

1. 总结函数的声明方式。
  JS声明函数的三种方式：

    a. 函数表达式： 即上面第一种方式，这种方法使用function操作符创建函数，表达式可以存储在变量或者对象属性里。函数表达式往往被称为

    匿名函数，因为它没有名字。证明这一点你可以 console.log(h.name)； 可以看到打印为空 ""，而h只是对函数的引用，不是函数名。
    ```js
    var fun=funciton()
    ```

    b. 函数声明： 即上面第二种方式，会声明一个具名函数，且函数能在其所在作用域的任意位置被调用，其创建的函数为具名函数，证明这一

    点你可以 console.log(h.name)； 可以看到打印为 "h"。 可在后面的代码中将此函数通过函数名赋值给变量或者对象属性
    ```js
    function fn()
    ```

    c. 构造函数function Fun(){}：不推荐这种用法，容易出问题，通常用于原型链中  
    ```js
    var fn=new Funciton()
    ```
2. 函数变量的提升是如何进行的?
    变量的提升：js 并不是在我们定义一个变量的时候，声明完成之后立即赋值，而是把所有用到的变量全部声明之后，再到变量的定义的地方进行赋值，变量的声明的过程就是变量的提升

    函数的提升：函数的提升和变量的提升类似，都是提升到作用域的最开始的位置，只不过变量的提升是分两步的，第一步是变量声明的提升，第二步是变量的赋值。而函数的提升是直接将整个函数整体提升到作用域的最开始位置，相当于剪切过去的样子。

3. 为什么要使用闭包？你是怎么理解闭包的？
   闭包是拥有独立变量（在封闭空间中定义的可以在本地环境中使用的变量）的函数，换句话说，就是这种函数可以"记住"他们创建的环境。
   简而言之，就是闭包是一个函数，能将创建的变量的值始终保持在内存中，以供本地环境使用。
   
   变量作用域无非就两种：全局作用域和局部作用域。
   在JavaScript（特指ECMAScript5前的版本）语言中具有作用域的仅有函数function。并且有个特点就是：函数内部可以直接访问外部变量，但在函数外部无法访问函数内部变量。这也就是Javascript语言特有的“链式作用域”结构（chain scope）。 
   那么我要是想在函数外部访问函数内部变量怎么办？所以闭包就出现了，简单说，我们使用闭包的主要作用就是间接访问函数的内部数据。

   闭包还可以将创建的变量的值始终保持在内存中，以供本地环境使用。
   例如：
   ```js
   function fn(){
       var num=11;
       function fn2(){
           console.log(++num);
       }
       return fn2;
   }
   var x=fn();
   x();//12
   ```
   一般情况下在函数被调用完后不再被引用时，该函数都会被垃圾回收机制（garbage collection），但是由于上述代码中函数fn2被x引用，而函数fn2又依赖于函数fn，因此函数fn不会被垃圾回收机制回收。

4. 怎么正确使用立即调用函数表达式
   我们只需要用大括弧将代码的代码全部括住就行了，因为JavaScript里括弧()里面不能包含语句，所以在这一点上，解析器在解析function关键字的时候，会将相应的代码解析成function表达式，而不是function声明。
   ```js
   (function () { /* code */ } ());
   或者
   (function () { /* code */ })()；//两个都可以

5. 如何避免eval在函数内部修改外部变量？
   直接放入的变量声明，会有变量声明的提升。
   通过eval放入的，只有当eval函数被调用时此var声明语句才会被调用。变量才会加入到作用域。
   保证eval函数不影响外部作用域的一个简单方法是在一个明确的嵌套作用域中运行它。（这样可以不破坏，外部函数的实际功能）
   ```js
   var y="hello";
   function fn(src){
       (function(){eval(src);})()
       return y;
   }
   ```




   
    
