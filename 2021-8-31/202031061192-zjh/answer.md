## 一、ES5中的算法初步

1. 总结js的数组操作方法。(包括添加、删除、过滤、排序等)同样包括举例。

   * `concat()` 连接两个或多个数组

     ````js
     const arr1 = ['a','b','c','d','e'];
     const arr2 = ['f','g','h'];
     const arr = arr1.concat(arr2);
     console.log(arr);
     // 输出结果:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
     ````

   * `join()` 把数组中的元素放入一个字符串 , 元素之间通过指定分隔符进行分割

     > join( ) 不改变原数组

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     var str = arr.join('-');
     console.log(str);
     // 输出结果:a-b-c-d-e-f-g-h
     ````

   * `pop()` 删除并返回数组的最后一个元素

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     var a = arr.pop();
     console.log(a);
     console.log(arr);
     /*
      * 输出结果
      * h
      * ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      */
     ````

   * `push()` 向数组的末尾添加一个或者更多元素 , 并**返回新的长度**

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     const len = arr.push('i');
     console.log(arr);
     console.log(len);
     /*
      * 输出结果:
      * ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
      * 9
      */
     ````

   * `reverse()` 颠倒数组中元素的顺序

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     const arr1 = arr.reverse();
     console.log(arr1);
     // 输出结果: ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
     ````

   * `shift()` 删除并**返回数组中的第一个元素**

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     const a = arr.shift();
     console.log(a);
     console.log(arr);
     /*
      * 输出结果
      * a
      * ['b', 'c', 'd', 'e', 'f', 'g', 'h'] 
      */
     ````

   * `unshift()` 向数组的开头添加一个或者更多元素 , 并**返回长度**

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     let len = arr.unshift('x','y','z');
     console.log(len);
     console.log(arr);
     /*
      * 输出结果
      * 11
      * ['x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
      */
     ````

   * `slice(start,end)` 从某个已有的数组返回选定的元素

     > 该方法不会改变元素数组,而是将截取到的元素封装到一个新数组中返回
     >
     > [start,end)
     >
     > 1. start 截取开始的位置的索引
     >
     > 2. end 截取结束的位置的索引,第二个参数可以省略不写,此时会直接截取到最后
     >
     > 3. 索引可以传递一个负值,如果传递一个负值,则从后往前计算
     >
     >    -1 倒数第一个
     >
     >    -2 倒数第二个
     >
     >    ...

     ````js
     const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
     const arr1 = arr.slice(1,5);
     console.log(arr1);
     // 返回结果: ['b', 'c', 'd', 'e']
     ````

   * `splice()` 删除元素 , 并向数组添加新元素

     >使用splice()会影响到原数组,会将指定的元素删除并作为返回值返回
     >
     >1. 第一个参数:表示开始的位置
     >
     >2. 第二个参数:表示删除的个数
     >
     >3. 第三个及以后的参数:插入新的元素,插入到开始位置的索引前面
     >4. *截取位置包含开始,不包含结束* 

     ````js
     var arr = ["Yi","Er","San","Si","Wu","Liu","Qi","Ba","Jiu"]; 
     var result = arr.splice(1,2); 
     console.log(arr);
     console.log(result);
     /*
      * 返回结果
      * ['Yi', 'Si', 'Wu', 'Liu', 'Qi', 'Ba', 'Jiu']
      * ['Er', 'San']
      */
     ````

   * `toString()` 将数组中的每一个元素转化成字符串 , 输出用逗号分隔的字符串列表

     ````js
     var arr = ["Yi","Er","San","Si","Wu","Liu","Qi","Ba","Jiu"]; 
     var str = arr.toString()
     console.log(str);
     // 返回结果 Yi,Er,San,Si,Wu,Liu,Qi,Ba,Jiu
     ````

   * `forEach()` 遍历数组元素

     > 三个参数 : 数组元素 , 元素索引 , 数组本身

     ````js
     var arr = ["Yi","Er","San","Si","Wu","Liu","Qi","Ba","Jiu"]; 
     arr.forEach(function(value,index,obj){ 
         // 创建一个匿名函数 
         console.log(value);
     })
     // 返回结果 Yi Er San Si Wu Liu Qi Ba Jiu
     ````

   * `sort()` 可以用来对数组进行排序

     >该方法会影响原数组
     >
     >即使对于纯数字的排序,也会使用Unicode编码进行排序
     >
     >我们可以在sort中指定一个回调函数,来指定排序规则
     >
     >回调函数中需要定义两个形参
     >
     >浏览器会分别使用数组中的元素作为实参去调用回调函数
     >
     >使用哪个数组元素不确定,但可以肯定的是a一定在b之前
     >
     >浏览器会根据回调函数的返回值来确定元素的顺序
     >
     >如果返回一个大于0的值,则元素会交换位置
     >
     >如果返回一个小于0的值.则元素的位置不变
     >
     >如果返回值为0,则认为两个元素的值相等,不交换位置

     ````js
     var arr = [11,5,8,9,4,6,7,1,9,3]; 
     arr.sort(function(a,b){
         // 升序
         return a-b;
         // 降序
         // return b-a;
     });
     console.log(arr);
     // 输出结果 [1, 3, 4, 5, 6, 7, 8, 9, 9, 11]
     ````

   * `string.indexOf(searchvalue,start) ` 

     >字符串的方法，数组也可适用，此方法可返回某个指定的字符串值在字符串中首次出现的位置；若一个参数，返回这个参数在数组里面的索引值，如果参数不在操作的数组中，则返回 -1

     ````js
     var arr = [1,2,3,4];
     arr.indexOf(1) // 0
     arr.indexOf(5) // -1 
     ````

   * `array.map(function(currentValue,index,arr), thisValue)` 

     > 数组的遍历，用来接收一个返回值，创建一个新数组，不改变原数组

     ````js
     var arr = [1,2,3,4,5,6];
     arr.map(function(item,index,arr){
     	return item * 2
     })
     //输出结果 [2,4,6,8,10,12]
     ````

   * `array.filter(function(currentValue,index,arr), thisValue)`

     > 过滤出一些符合条件的元素，返回一个新数组

     ````js
     var ages = [32, 33, 16, 40];
     
     function checkAdult(age) {
         return age >= 18;
         //返回数组 ages 中所有元素都大于 18 的元素:
     }
     function myFunction() {
         console.log(ages.filter(checkAdult))
     }
     //输出结果：32,33,40
     ````

   * `array.some(function(currentValue,index,arr),thisValue)`

     > 检测数组中是否含有某一个值，返回一个布尔值，如果数组中有任意一个元素满足给定的条件，结果就为 true否则则为false

     ````js
     var ages = [3, 10, 18, 20];
     function checkAdult(age) {
         return age >= 18;
     }
     function myFunction() {
         console.log(ages.some(checkAdult))
     }
     //输出结果：true
     ````

   * `array.every(function(currentValue,index,arr), thisValue)`

     > 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）,返回一个布尔值,结果为 true或false

     ````js
     var ages = [32, 33, 16, 40];
     
     function checkAdult(age) {
         return age >= 18;
         //检测数组 ages 的所有元素是否都大于等于 18 
     }
     function myFunction() {
         console.log(ages.every(checkAdult))
     }
     //输出结果：false
     ````

   * `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

     > 对数组中的所有元素调用指定的回调函数，该回调函数的返回值为累计结果。并且把返回值在下一次回调函数时作为参数提供

     ````js
     var numbers = [65, 44, 12, 4];
     function getSum(total, num) {
         return total + num;
         //计算数组相加的总和
     }
     function myFunction(item) {
         console.log(numbers.reduce(getSum))
     }
     //输出结果：125
     ````

   * `Array.from(arrayLike[, mapFn[, thisArg]])`

     > 将类数组对象或可迭代对象转化为数组，比如arguments，JS选择器找到DOM集合和对象模拟的数组

     ````js
     // 参数为数组,返回与原数组一样的数组
     console.log(Array.from([1, 2])); // [1, 2] 
     // 参数含空位
     console.log(Array.from([1, , 3])); // [1, undefined, 3]
     ````

   * `Array.of()`

     > 数组创建，将参数中所有值作为元素形成数组，如果参数为空，则返回一个空数组

     ````js
     console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4] 
     // 参数值可为不同类型
     console.log(Array.of(1, '2', true)); // [1, '2', true] 
     // 参数为空时返回空数组
     console.log(Array.of()); // []
     ````

   * `find()`

     > 查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素

     ````js
     let arr = Array.of(1, 2, 3, 4);
     console.log(arr.find(item => item > 2)); // 3 
     // 数组空位处理为 undefined
     console.log([, 1].find(n => true)); // undefined
     ````

   * `findIndex()`

     > 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引

     ````js
     let arr = Array.of(1, 2, 1, 3);
     // 参数1：回调函数
     // 参数2(可选)：指定回调函数中的 this 值
     console.log(arr.findIndex(item => item == 1)); // 0
     // 数组空位处理为 undefined
     console.log([, 1].findIndex(n => true)); //0
     ````

   * `includes() `

     > 检测数组中是否包含一个值。
     >
     > 注意：与 Set 和 Map 的 has 方法区分；Set 的 has 方法用于查找值；Map 的 has 方法用于查找键名``

     ````js
     // 参数1：包含的指定值
     [1, 2, 3].includes(1);    // true
     // 参数2：可选，搜索的起始索引，默认为0
     [1, 2, 3].includes(1, 2); // false
     // NaN 的包含判断
     [1, NaN, 3].includes(NaN); // true
     ````

   * `fill()`

     > 将一定范围索引的数组元素内容填充为单个指定的值。

     ````js
     let arr = Array.of(1, 2, 3, 4);
     // 参数1：用来填充的值
     // 参数2：被填充的起始索引
     // 参数3(可选)：被填充的结束索引，默认为数组末尾
     console.log(arr.fill(0,1,3)); // [1, 0, 0, 4]
     ````

   * `entries()` 

     > 遍历键值对

     ````js
     for(let [key, value] of ['a', 'b'].entries()){
         console.log(key, value);
     }
     // 0 "a"
     // 1 "b" 
     // 不使用 for... of 循环
     let entries = ['a', 'b'].entries();
     console.log(entries.next().value); // [0, "a"]
     console.log(entries.next().value); // [1, "b"]
     // 数组含空位
     console.log([...[,'a'].entries()]); // [[0, undefined], [1, "a"]]
     ````

   * `keys()`

     > 遍历键名

     ````js
     for(let key of ['a', 'b'].keys()){
         console.log(key);
     }
     // 0
     // 1 
     // 数组含空位
     console.log([...[,'a'].keys()]); // [0, 1]
     ````

   * `values()`

     > 遍历键值

     ````js
     for(let value of ['a', 'b'].values()){
         console.log(value);
     }
     // "a"
     // "b"
     // 数组含空位
     console.log([...[,'a'].values()]); // [undefined, "a"]
     ````

   * `flat()`

     > 嵌套数组转一维数组

     ````js
     console.log([1 ,[2, 3]].flat()); // [1, 2, 3] 
     // 指定转换的嵌套层数
     console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]] 
     // 不管嵌套多少层
     console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
     // 自动跳过空位
     console.log([1, [2, , 3]].flat());<p> // [1, 2, 3]
     ````

   * `...` 拓展运算符

     ````js
     let arr = [1, 2],
         arr1 = [...arr];
     console.log(arr1); // [1, 2]
     // 数组含空位
     let arr2 = [1, , 3],
         arr3 = [...arr2];
     console.log(arr3); [1, undefined, 3]
     //合并数组
     console.log([...[1, 2],...[3, 4]]); // [1, 2, 3, 4]
     ````

2. 用 JS 实现几种排序方法(冒泡、插入、快排等)

   * 冒泡排序

     ````js
     var arr = [2,5,9,4,8,3,5,1];
     function bubbleSort(arr){
         let temp;
         for(let i = 0;i < arr.length;i++){
             for(let j = 0;j < arr.length-i;j++){
                 if (arr[j] > arr[j + 1])
     			{
     				temp = arr[j];
     				arr[j] = arr[j + 1];
     				arr[j+1] = temp;
     			}
             }
         }
         return arr;
     }
     arr = bubbleSort(arr);
     console.log(arr);
     // 输出结果: [1, 2, 3, 4, 5, 5, 8, 9]
     ````

   * 选择排序

     ````js
     var arr = [2,5,9,4,8,3,5,1];
     function selectSort(arr){
         let temp;
         for (let i=0; i < arr.length-1; i++)
     	{
     		for (let j=i+1; j<arr.length; j++)
     			if (arr[i] > arr[j])
     			{
     				temp = arr[j];
     				arr[j] = arr[i];
     				arr[i] = temp;
     			}
     	}
         return arr;
     }
     arr = selectSort(arr);
     console.log(arr);
     // 输出结果: [1, 2, 3, 4, 5, 5, 8, 9]
     ````

   * 插入排序

     ````js
     var arr = [2,5,9,4,8,3,5,1];
     function insertSort(arr){
         let temp;
         for(let i=1; i < arr.length; i++){
             let j = i;
             temp = arr[i];
             // 将这个数与前面的局部有序数字进行比较,并将比这个数大的数向后位移
             while(arr[j-1] > temp && j > 0){
                 arr[j] = arr[j-1];
                 j--;
             }
             // 将这个数放置到局部有序数组中选出的位置上去
             arr[j] = temp;
         }
         return arr;
     }
     arr = insertSort(arr);
     console.log(arr);
     ````

   * 希尔排序

     ````js
     var arr = [2,5,9,4,8,3,5,1];
     function shellSort(arr){
         // 初始化间隔
         var gap = Math.floor(arr.length/2);
         // 间隔不断减小
         while(gap >= 1){
             // 以gap作为间隔进行分组,对分组进行插入排序
             for(var i = gap;i < arr.length; i++){
                 var j = i;
                 while(arr[j-gap] > arr[i] && j > gap-1){
                     arr[j]=arr[j-gap];
                     j -= gap;
                 }
                 arr[j] = arr[i];
             }
             gap = Math.floor(gap/2);
         }
         return arr;
     }
     arr = shellSort(arr);
     console.log(arr);
     // 输出结果: [1, 2, 3, 4, 5, 5, 8, 9]
     ````

   * 快速排序

     ````js
     var arr = [2,5,9,4,8,3,5,1];
     function quickSort(arr){
         if (arr.length <= 1) {
             return arr;
         }
         var pivotIndex = Math.floor(arr.length / 2);
         var pivot = arr.splice(pivotIndex, 1)[0];
         var left = [];
         var right = [];
     
         for (var i = 0; i < arr.length; i++) {
             if (arr[i] < pivot) {
             left.push(arr[i]);
             } else {
             right.push(arr[i]);
             }
         }
         return quickSort(left).concat([pivot], quickSort(right));
     }
     arr = quickSort(arr);
     console.log(arr);
     // 输出结果: [1, 2, 3, 4, 5, 5, 8, 9]
     ````

3. 思考 JS 中的排序 sort 的方法，采用的是哪种排序？

   >sort使用的是插入排序和快速排序结合的排序算法
   >
   >数组长度不超过10时，使用插入排序。长度超过10使用快速排序
   >
   >火狐中使用的是归并排序
   >
   >各个浏览器的实现方式会有不同

   Chrome V8 引擎的源码(网上找的)

   ````js
   // sort方法源码
   DEFINE_METHOD(
     GlobalArray.prototype,
     sort(comparefn) {
       CHECK_OBJECT_COERCIBLE(this, "Array.prototype.sort");
   
       if (!IS_UNDEFINED(comparefn) && !IS_CALLABLE(comparefn)) {
         throw %make_type_error(kBadSortComparisonFunction, comparefn);
       }
   
       var array = TO_OBJECT(this);
       var length = TO_LENGTH(array.length);
       return InnerArraySort(array, length, comparefn);
     }
   );
   ````

   >这一步看出sort方法调用了 *InnerArraySort* 方法，参数是数组，数组长度，比较函数。
   >
   >再看看 *InnerArraySort* 方法是如何处理的。

   ````js
   // InnerArraySort方法源码
   function InnerArraySort(array, length, comparefn) {
     // In-place QuickSort algorithm.
     // For short (length <= 10) arrays, insertion sort is used for efficiency.
   
     if (!IS_CALLABLE(comparefn)) {
       comparefn = function (x, y) {
         if (x === y) return 0;
         if (%_IsSmi(x) && %_IsSmi(y)) {
           return %SmiLexicographicCompare(x, y);
         }
         x = TO_STRING(x);
         y = TO_STRING(y);
         if (x == y) return 0;
         else return x < y ? -1 : 1;
       };
     }
     function InsertionSort(a, from, to) {
       ...
     };
    ...
     function QuickSort(a, from, to) {
       var third_index = 0;
       while (true) {
         // Insertion sort is faster for short arrays.
         if (to - from <= 10) {
           InsertionSort(a, from, to);
           return;
         }
         if (to - from > 1000) {
           third_index = GetThirdIndex(a, from, to);
         } else {
           third_index = from + ((to - from) >> 1);
         }
         // Find a pivot as the median of first, last and middle element.
         var v0 = a[from];
         var v1 = a[to - 1];
         var v2 = a[third_index];
         var c01 = comparefn(v0, v1);
         if (c01 > 0) {
           // v1 < v0, so swap them.
           var tmp = v0;
           v0 = v1;
           v1 = tmp;
         } // v0 <= v1.
         var c02 = comparefn(v0, v2);
         if (c02 >= 0) {
           // v2 <= v0 <= v1.
           var tmp = v0;
           v0 = v2;
           v2 = v1;
           v1 = tmp;
         } else {
           // v0 <= v1 && v0 < v2
           var c12 = comparefn(v1, v2);
           if (c12 > 0) {
             // v0 <= v2 < v1
             var tmp = v1;
             v1 = v2;
             v2 = tmp;
           }
         }
         // v0 <= v1 <= v2
         a[from] = v0;
         a[to - 1] = v2;
         var pivot = v1;
         var low_end = from + 1;   // Upper bound of elements lower than pivot.
         var high_start = to - 1;  // Lower bound of elements greater than pivot.
         a[third_index] = a[low_end];
         a[low_end] = pivot;
   
         // From low_end to i are elements equal to pivot.
         // From i to high_start are elements that haven't been compared yet.
         partition: for (var i = low_end + 1; i < high_start; i++) {
           var element = a[i];
           var order = comparefn(element, pivot);
           if (order < 0) {
             a[i] = a[low_end];
             a[low_end] = element;
             low_end++;
           } else if (order > 0) {
             do {
               high_start--;
               if (high_start == i) break partition;
               var top_elem = a[high_start];
               order = comparefn(top_elem, pivot);
             } while (order > 0);
             a[i] = a[high_start];
             a[high_start] = element;
             if (order < 0) {
               element = a[i];
               a[i] = a[low_end];
               a[low_end] = element;
               low_end++;
             }
           }
         }
         if (to - high_start < low_end - from) {
           QuickSort(a, high_start, to);
           to = low_end;
         } else {
           QuickSort(a, from, low_end);
           from = high_start;
         }
       }
     };
   
     ...
   
     QuickSort(array, 0, num_non_undefined);
    ...
     return array;
   }
   ````

## 二、ES5

1. 总结函数的声明方式。

   - 函数式声明

     ````js
     function funName(){
         
     }
     ````

   - 函数表达式

     ````js
     var funName = function(){
     
     }
     ````

   - 函数自调用

     ````js
     (function funName(){
     
     })()
     ````

   - 函数构造法

     ````js
     const sum = new Function('a', 'b', 'return a + b');
     console.log(sum(2, 6));
     // expected output: 8
     ````

   - 方法定义

     ````js
     let function_expression = function [name]([param1[, param2[, ..., paramN]]]) {
        statements
     };
     ````

   - 箭头函数

     ````js
     const materials = [
       'Hydrogen',
       'Helium',
       'Lithium',
       'Beryllium'
     ];
     
     console.log(materials.map(material => material.length));
     // expected output: Array [8, 6, 7, 9]
     ````

   - 函数生成器

     ````js
     function* generator(i) {
       yield i;
       yield i + 10;
     }
     
     const gen = generator(10);
     
     console.log(gen.next().value);
     // expected output: 10
     
     console.log(gen.next().value);
     // expected output: 20
     ````

2. 函数变量的提升是如何进行的？

   ````js
   // 1
   function foo() {
     var a = 1;
     function a() {}
     console.log(a);
   }
   foo();// 1
   
   // 2
   function foo() {
     var a;
     function a() {}
     console.log(a);
   }
   foo();// a()
   ````

   * 变量提升

     > 变量在声明提升的时候，是全部提升到作用域的最前面，一个接着一个的。但是在变量赋值的时候就不是一个接着一个赋值了，而是赋值的位置在变量原本定义的位置。原本js定义变量的地方，在js运行到这里的时候，才会进行赋值操作，而没有运行到的变量，不会进行赋值操作。
     >
     > 所以变量的提升，提升的其实是变量的声明，而不是变量的赋值。

     JS 创建变量 :

     ````js
     var a = 1;
     var b = 2;
     ````

     JS 解析代码时 , 是按照如下方法解析的

     ````js
     var a;
     var b;
     a = 1;
     b = 2;
     ````

     >所以 js 并不是在我们定义一个变量的时候，声明完成之后立即赋值，而是把所有用到的变量全部声明之后，再到变量的定义的地方进行赋值，变量的声明的过程就是变量的提升

     举例如下

     ````js
     function foo() {
       var a = 1;
       console.log(a);
       console.log(b);
       var b = 2;
     }
     foo();
     ````

     在 JS 解析过程中 , 代码是按照下面方法解析的

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

     浏览器在解析过程中 , 先声明了 a 和 b , 然后向 a 赋值 , 然后执行` console.log(a);`语句 , 此时浏览器读取到的 a 的值为 1 , 将其输出 , 而此时并未给 b 赋值 , 所以 b 为 undefined , `console.log(b);`语句读到的 b 的值为undefined , 然后才给 b 赋值

   * 函数的提升

     > 函数的提升和变量的提升类似，都是提升到作用域的最开始的位置，只不过变量的提升是分两步的，第一步是变量声明的提升，第二步是变量的赋值。而函数的提升是直接将整个函数整体提升到作用域的最开始位置，相当于剪切过去的样子 , 但是函数中的语句还是在原来的位置执行
     >
     > 在作用域中，不管是变量还是函数，都会提升到作用域最开始的位置，不同的是，函数的提升后的位置是在变量提升后的位置之后的

     举例如下

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

3. 为什么要使用闭包？你是怎么理解闭包的？

   > 闭包是指那些能够访问独立(自由)变量的函数 (变量在本地使用，但定义在一个封闭的作用域中)。换句话说，这些函数可以“记忆”它被创建时候的环境。

   JS 的特殊处就是函数内部可以读取全局变量 , 一般来说 , 从外部是无法读取到函数内的的值的,但是有时候需要得到函数内的局部变量，但是在正常情况下，这是不能读取到的，只有通过变通方法才能读取到 , 闭包就算是能读取到其他函数内部值的函数 .

   在 JS 中 , 只有函数内部的子函数才能读取到函数中的局部数据 , 所以可以将闭包理解为"定义在一个函数内部的函数" ,本质上 , 闭包就是连通函数外部与函数内部的桥梁

   使用闭包的目的是读取函数内部的变量 , 使变量的值始终保存到内存中

   优点 : 避免变量的污染

   缺点 : 闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露

   闭包可以使我们在内层函数中访问到外层函数的作用域

4. 怎么正确使用立即调用函数表达式

   <img src="https://cache.yisu.com/upload/information/20210322/89/148992.jpg" alt="JavaScript如何立即调用函数表达式" style="zoom:70%;" />

   ````js
   (function(){})()
   ````

   使用立即调用函数时 , 需要用大括号将函数代码全部括起来 , 因为 JS 里`()`内不能包含语句 , 所以在这一点上 , 解析器在解析 Function 关键字时 , 会将相应的代码解析成 function 表达式 , 而不是 function 声明

5. 如何避免eval在函数内部修改外部变量？

   在一个明确的嵌套作用域中运行它 , 不破坏外部函数的实际功能

   避免使用 eval 函数创建的变量污染调用者的作用域

   如果 eval 函数代码可能创建全局变量 , 将此调用封装到签到的函数中以防止作用域污染