1. Javascript原始值类型有哪些（ES5）

   * Number
   * String
   * Boolean
   * Null
   * Undefined

2. 为什么 0.1 + 0.2 !== 0.3

   JavaScript 遵循的是 IEE754 双精度标准 , 0.1 和 0.2 属于浮点数 , 在计算时二者被转化为二进制来存储 , 相加之后再转化成十进制 , 最终会造成精度损失 , 只能得到一个近似值 , 即 0.30000000000000004

3. 判断数据类型的方法有哪几种

   * typeof

     ````js
     console.log(typeof("Hello")); // string
     console.log(typeof(123));  // number
     console.log(typeof(true));  // boolean
     console.log(typeof([1,2,3])); // object
     console.log(typeof({name:"Jim",age:18})); // object 数组本身也是对象
     console.log(typeof(function(){}));  // function
     ````

   * constructor

     ````js
     // 根据对象的constructor判断类型
     var a = [1,2,3];
     function b(){};
     var d = new Date();
     console.log(a.constructor === Array); // true
     console.log(b.constructor === Function); // true
     console.log(d.constructor === Date); // true
     ````

   * instanceof

     ````js
     var a = [1,2,3];
     console.log(a instanceof Array);  // true
     function b(){};
     console.log(b instanceof Function);  // true
     var d = new Date();
     console.log(d instanceof Date);  // true
     ````

   * jquery.type( )

     ````js
     var a = [1,2,3];
     function b(){};
     var c = true;
     console.log(jQuery.type(a) === Array); // true
     console.log(jQuery.type(b) === Function); // true
     console.log(jQuery.type(c) === Boolean); // true
     ````

   * Object.prototype.toString.call( )

     ````js
     var a = [1,2,3];
     function b(){};
     var c = true;
     var d = new Date();
     console.log(Object.prototype.toString.call(a) === '[object Array]'); // true
     console.log(Object.prototype.toString.call(b) === '[object Function]'); // true
     console.log(Object.prototype.toString.call(c) === '[object Boolean]'); // true
     console.log(Object.prototype.toString.call(d) === '[object Date]'); // true
     ````

4. null是对象吗，为什么typeof null === 'object'

   null 不是对象

   typeof null === 'object' 是一个历史遗留问题 , 在最初的 JS 版本中 , 为了性能考虑使用了低位存储变量的类型信息 , 000 开头的代表是对象 , 而 null 表示全零 , 所以 JA 将它错误的判断为 object , 现在内部类型判断代码已经改变 , 但是这个问题一直遗存了下来

5. == 与 === 有什么区别

   == 代表相同 , === 代表绝对相同,即类型和值都相等

   ````js
   var a = 5;
   console.log(a == '5'); // true
   console.log(a === '5'); // false
   console.log(null == undefined); // true
   console.log(null === undefined); // false
   ````

   当用 "==" 进行比较时 , 会先将两个数据转化成相同的数据类型再进行比较 , 即只要二者的值相等就返回 true

   ````js
   var a = 5;
   console.log(a == '5'); // true
   ````

   当用 "===" 进行比较时 , 会比较两个数据的类型和值 , 只要有一个不相同 , 就会返回 false

6. 什么是类数组,如何将类数组转换为数组

   类数组一般是含有 length 属性的 JSON 对象或 DOM 方法返回的结果 , 函数的参数arguments , 它按照索引的方式存储数据 , 但并不具有数组的一些方法 . 如 :

   ````js
   function args(a, b, c) {
   	console.log(arguments)
   	console.log(typeof arguments)
   	console.log({}.toString.call(arguments))
   }
   args('a', 'b', 'c')
   ````

   ````html
   <div>你好</div>
   <div>Hello</div>
   <div>World</div>
   <div>今天是晴天</div>
   <div>8月30日</div>
   <script>
       var divList = document.getElementsByTagName('div');
       console.log(divList);
       console.log(typeof divList); // object
   </script>
   ````

   将类数组转化成数组的方法

   * Array.from( )

     ````js
     var arrLike = {"0":"a","1":"b","2":"c",length:3};
     var arr = Array.from(arrLike);
     console.log(arr);
     ````

   * Array.prototype.slice.call( )

     ````js
     var arrLike = {"0":"a","1":"b","2":"c",length:3};
     var arr = Array.prototype.slice.call(arrLike);
     console.log(arr);
     ````

   * ES6 [...] 拓展符

     ````html
     <div>Hello</div>
     <div>World</div>
     <div>你好,世界</div>
     <div>今天是晴天</div>
     <script>
         const divList = document.querySelectorAll('div');
         const divArr = [...divList];
         console.log(divList);
         console.log(divArr);
     </script>
     ````

     

   



























