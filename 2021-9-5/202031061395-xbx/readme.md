1. 什么是IIFE？如何使用？
     IIFE: Immediately Invoked Function Expression，意为立即调用的函数表达式，也就是说，声明函数的同时立即调用这个函数。
     ```js
     //普通的
     function foo(){
       var a = 10;
       console.log(a);
     }
     foo();
     //采用IIFE
     (function foo(){
      var a = 10;
       console.log(a);
      })();
      ```
2. 什么是闭包?闭包有什么优点
      闭包是指有权访问另外一个函数作用域中的变量的函数

      可以重复使用变量，并且不会造成变量污染
      全局变量可以重复使用，但是容易造成变量污染。局部变量仅在局部作用域内有效，不可以重复使用，不会造成变量污染。闭包结合了全局变量和局部变量的优点。
      可以用来定义私有属性和私有方法。

3.  什么是提升(变量提升/函数提升)？提升规则是什么
       “变量提升”意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。  
       实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。

       规则：var 声明的变量，提升时只声明，不赋值，默认为undefined；不用关键字直接赋值的变量不存在提升

            函数提升会连带函数体一起提升,不执行；
 
            预解析的顺序是从上到下；

            函数的优先级高于变量，函数声明提前到当前作用域最顶端；

            变量重名，提升时不会重复定义；在执行阶段后面赋值的会覆盖上面的赋值；

            函数重名，提升时后面的会覆盖前面；

            函数和变量重名，提升函数，不会重复定义，变量不会覆盖函数；在执行阶段后面赋值的会覆盖上面的赋值;

            用函数表达式声明函数，会按照声明变量规则进行提升；

            函数执行时，函数内部的变量声明和函数声明也按照以上规则进行提升;

            let、const不存在提升;

4.  delete命令的作用是什么？其局限性是什么
      delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。
      ```js
      const Employee = {
            firstname: 'John',
            lastname: 'Doe'
    };

    console.log(Employee.firstname);
    // expected output: "John"

    delete Employee.firstname;

    console.log(Employee.firstname);
    // expected output: undefined
      ```
      delete 操作符会从某个对象上移除指定属性。成功删除的时候会返回 true，否则返回 false

      局限性：
        如果你试图删除的属性不存在，那么delete将不会起任何作用，但仍会返回true
        如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性（也就是说，delete操作只会在自身的属性上起作用）
        任何使用 var 声明的属性不能从全局作用域或函数的作用域中删除。
        这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
        除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。
        任何用let或const声明的属性不能够从它被声明的作用域中删除。
        不可设置的(Non-configurable)属性不能被移除。这意味着像Math, Array, Object内置对象的属性以及使用Object.defineProperty()方法设置为不可设置的属性不能被删除。

5. 如何获取函数预期传入的参数个数
     在JavaScript中，可以使用arguments 对象的 length 属性可以获取函数的实参个数。arguments 对象只能在函数体内可见，因此 arguments.length 也只能在函数体内使用
     ```js
     function fn(a,b)
     {
         console.log(fn.length);
         console.log(arguments.length);
     }
     fn(1,2,3);
     //第一个log  2,定义的参数个数
     //第二个log  3,实际传入的参数个数
     ```

6. eval命令的作用是什么
     eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
     返回通过计算 string 得到的值（如果有的话，无值返回undefined）。只接受原始字符串作为参数，如果 string 参数不是原始字符串，那么该方法将不作任何改变地返回。

     如果参数中没有合法的表达式和语句，则抛出 SyntaxError 异常。

     如果非法调用 eval()，则抛出 EvalError 异常。

     如果传递给 eval() 的 Javascript 代码生成了一个异常，eval() 将把该异常传递给调用者。

7. 遍历数组有哪些方式
      every() 判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回true。当回调函数的返回值为true时，类似于forEach的功能，遍历所有；如果为false，那么停止执行，后面的数据不再遍历，停在第一个返回false的位置。当每个回调函数的返回值都为true时，every的返回值为true，只要有一个回调函数的返回值为false，every的返回值都为false
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
      some() 判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。与every相反，只要有一个回调函数的返回值都为true，some的返回值为true，所有回调函数的返回值为false，some的返回值才为false
      ```js
      function fn(data){
        return data>10;
    }
    var a=[2,4,5,8,10,12];
    var b=[1,2,3,4,5];
    console.log(a.some(fn));//true
    console.log(b.some(fn));//false
    ```
      map() 1.同forEach功能；2.map的回调函数会将执行结果返回，最后map将所有回调函数的返回值组成新数组返回。
      ```js
      var a = [2,3,4,5];
      var b = a.map(function(x) {
        return x - 1;
      });
      console.log(a);//2,3,4,5
      console.log(b);//1,2,3,4
      ```
      forEach() 用来遍历数组，该方法没有返回值。
      ```js
      var a=['a','b','c'];
        var b=[];
        a.forEach(function(item){
            b.push(item);
        })

        console.log(b);//a,b,c;
    ```

      forin
      ```js
      for(let index in arr){
    console.log(arr[index]);
}
     ```
8. forin遍历数组有什么缺点
        某些情况下，会出现随机顺序的遍历，因为里面的值是string类型，所以   
        增加了转换过程，因此开销较大


9. 逗号(",")运算符的作用是什么
        逗号操作符  对它的每个操作数求值（从左到右），并返回最后一个操作数的值。
    ```js
    var x=1;
    x=(x++,x);
    console.log(x);//2;
    x=(2,3);
    console.log(x);//3
    ```
    当你想要在期望一个表达式的位置包含多个表达式时，可以使用逗号操作符。这个操作符最常用的一种情况是：for 循环中提供多个参数。
    ```js
   for (var i = 0, j = 9; i <= 9; i++, j--)
   ```

10. 将字符串转为数字的方法有哪些
    Number():Number() 函数把对象的值转换为数字；如果对象的值无法转换为数字，那么 Number() 函数返回 NaN
    ```js
    var test1= new Boolean(true);

    var test2= new Boolean(false);

    var test3= new String("999");

    var test4= new String("999 888");

    

    document.write(Number(test1)+ "
    ");

    document.write(Number(test2)+ "
    ");

    document.write(Number(test3)+ "
    ");

    document.write(Number(test4)+ "
    ");
    ```
    js变量弱类型转换:利用了js的弱类型的特点，只进行了算术运算，实现了字符串到数字的类型转换
    ```js
    var str= '012.345 ';

    var x = str-0;

    x = x*1;
    ```

    parseInt:把值转换成整数
    ```js
    var a=parseInt("123asdf");
    console.log(a);//123
    ```
    parseFloat:把值转换成浮点数