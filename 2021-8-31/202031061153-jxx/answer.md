@[TOC](8.31复习)

# 一、ES5中的算法初步

## 1.总结js的数组操作方法。(包括添加、删除、过滤、排序等)同样包括举例。

### 1.1判断 Array.isArray()
**isArray() 方法检查对象是否为数组。**
```javascript
var names = ["mom", "amy", "bella"];
      console.log(Array.isArray(names)); //true
      var at = {
        abd: 1,
      };
      console.log(Array.isArray(at));//false
```
### 1.2遍历 Array.forEach()
```
arr.forEach(callback())
```
`forEach()` 方法按升序为数组中含有效值的每一项执行一次 `callback` 函数，那些已删除或者未初始化的项将被跳过

可以向callback可以传三个参数。分别是，数组当前项的值、数组当前项的索引、数组对象本身。

```javascript
function logArrayElements(element, index, array) {

     console.log("a[" + index + "] = " + element);

   }

   //索引 2 被跳过了，因为在数组的这个位置没有项

   [2, 5, , 9].forEach(logArrayElements); 

   // log :a[0]=2,a[1]=5,a[3]=9
```
### 1.3改造重建 Array.map()
map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值

```javascript
const array1 = [1, 4, 9, 16];

   // pass a function to map

   const map1 = array1.map((*x*) => *x* * 2);

   console.log(map1); //2,8,18,32
```
### 1.4过滤重建 Array.filter()
filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
```

### 1.5删除 Array.pop()

**pop()方法返回被弹出的值**

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // 从 fruits 删除最后一个元素（"Mango"）
```

### 1.6添加 Array.push()

push()方法返回新数组的长度

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  向 fruits 添加一个新元素
```
### <font color="red">1.7 Array.reduce()</font>
`reduce()` 方法对数组中的每个元素执行一个我们提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// log: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// log: 15
```

### <font color="red">1.8检查是不是全部通过Array.every()

测试一个数组内的所有元素是否都能通过某个函数的测试，它返回一个Boolean值
**若收到一个空数组，在任何情况下都会返回<font color='red'>true**

```javascript
const compare = (value) => 
        value > 20;
        //   不省花括号的时候，return也不能省。一省都省，不省就都不省
      const arr = [30, 49, 384, 284];
      console.log(arr.every(compare));
```
### <font color='red'>1.9检查有没有一个通过Array.some()
**注意：如果用一个空数组进行测试，在任何情况下它返回的都是<font color='red'>false。**

```javascript
const compare = (value) => value > 20;
const arr = [10, 49, 5, 7];
console.log(arr.some(compare)); //true
```

### 1.10找位置Array.indexOf()
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```javascript
const animals=['rabbit','dog','cat','elephant']
console.log(animals.indexOf('dog')); //output:1
console.log(animals.indexOf('rabbit',2));//表示从index：2开始找
        // output:-1
```

### 1.11Array.lastIndexOf()
`Array.lastIndexOf() `与 `Array.indexOf() `类似，但是从数组结尾处开始检索。

---------
## 2.用js实现几种排序方法(冒泡、插入、快排等)。

### 2.1冒泡排序

```javascript
function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([4, 3, 7, 2, 1]));

```
### 2.2插入排序

```javascript
function insertSort(array) {
    var len = array.length;
    for (var i = 1; i < len; i++) {
        var key = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key;
    }
    return array;
}
console.log(insertSort([4, 3, 7, 2, 1]));
```

### 2.3快速排序

```javascript
function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    var left = [], right = [], mid = arr.splice(Math.floor(arr.length / 2), 1);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}
console.log(quickSort([4, 3, 7, 2, 1]));
```
### 2.4选择排序

```javascript
function selectSort(arr) {
    var min, temp;
    for (var i = 0; i < arr.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

    }
    return arr;
}
console.log(selectSort([6, 1, 2, 4, 3, 5]))
```

## 3.思考js中的排序sort的方法，采用的是哪种排序？
数组长度不超过10时，使用插入排序。长度超过10使用快速排序

# 二、ES5

## 1.总结函数的声明方式。

```javascript
function hello(){
            console.log('hello');
        }
        hello();
```

```javascript
const sum = new Function('a', 'b', 'return a+b');
console.log(sum(2, 5));
```

```javascript
var hello = function () {
   console.log('hello');
  }
hello();
```

## 2.函数变量的提升是如何进行的？

```javascript
console.log(a);
var a = 3; //undefined
// 上述代码相当于
var a;
console.log(a);
a = 3;
```

```javascript
// 对的
hello();
function hello() {
    console.log('hello');
}
//相当于
function hello() {
    console.log('hello');
}
hello();
// 错的
// hello();
// var hello = function () {
//     console.log('hello');
// }
```

## 3.为什么要使用闭包？你是怎么理解闭包的？
why:1 闭包可以延长局部变量的生存周期---->函数内部的变量在函数执行完后，依然存活在内存中
2.让函数外部可以操作（读写）到函数内部的数据（变量/函数）
理解：
闭包是包含被引用变量(函数)的对象

## 4.怎么正确使用立即调用函数表达式
```javascript
    (function () {
        console.log('这是一个块级作用域');
    })();
```
## 5.如何避免eval在函数内部修改外部变量？

```javascript
function test() {
            var x = 2,
                y = 4;
            console.log(eval('x + y')); // 直接调用，使用本地作用域，结果是 6
            var geval = eval; // 等价于在全局作用域调用
            console.log(geval('x + y')); // 间接调用，使用全局作用域，报错 因为`x`未定义
        }
        test();
```



![image-20210905153103795](C:\Users\86183\Desktop\前端相关\web\React-\2021-8-31\202031061153-jxx\image-20210905153103795.png)

![image-20210905153043427](C:\Users\86183\Desktop\前端相关\web\React-\2021-8-31\202031061153-jxx\image-20210905153043427.png)

![image-20210905153005379](C:\Users\86183\Desktop\前端相关\web\React-\2021-8-31\202031061153-jxx\image-20210905153005379.png)
