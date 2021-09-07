@[TOC](20210902)

# 一、算法(大数相加)

给定两个字符串形式的非负整数 num1 和 num2 计算他们的和

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 特判
    if (num1 === '0')
        return num2;
    if (num2 === '0')
        return num1;
    let len1 = num1.length - 1, len2 = num2.length - 1;
    let result = '', up = 0, current;
    while (len1 >= 0 || len2 >= 0) {
        const a = len1 >= 0 ? num1[len1--] - '0' : 0;
        const b = len2 >= 0 ? num2[len2--] - '0' : 0;
        current = a + b + up;
        up = Math.floor(current / 10);
        result = current % 10 + result;
    }
    if (up === 1) {
        result += up;
    }
    return result;
};
```

# 二、js

## 1.更改this的指向有哪些方案
### 1.1 改变函数的调用方式
##### 1.1.1普通函数调用，此时 this 指向 window

```javascript
function fn() {
      console.log(this);
    }
    fn(); //Window
```
##### 1.1.2 构造函数调用， 此时 this 指向 实例对象

```javascript
    function demo(name, age) {
      this.age = age;
      this.name = name;
      console.log(this);// 分别指向实例对象p1和实例对象p2
    }
    var p1=new demo('jxx','19');
    var p2=new demo('hahha','100');
```

##### 1.1.3 对象方法调用， 此时 this 指向 该方法所属的对象

```javascript
 var obj = {
       fn: function () {
         console.log(this); // obj
       }
     }
    obj.fn();
```

##### 1.1.4 通过事件绑定的方法， 此时 this 指向 绑定事件的对象

```javascript
<body>
    <button id="btn">hh</button>
<script>
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function() {
        console.log(this); // btn
    }
</script>
</body>
```

##### 1.1.5定时器函数的 this 指向 window

```javascript
 setInterval(function () {
       console.log(this); // window
     }, 1000);
```
###  2.call() 方法

```javascript
  var person={
    age:10,
    name:'EmbeddedStudio'
  }
  function fn(x){
    console.log(this);//person
    console.log(this.name);
    console.log(this.age);
  }
  fn.call(person);
```
### 3.apply方法
```javascript
  var person={
    age:10,
    name:'EmbeddedStudio'
  }
  function fn(x,y){
    console.log(x+','+y);
    console.log(this);//window
    console.log(this.name);
    console.log(this.age);
  }
  fn.call(person,20,'2000');
  fn.apply(person,[20,4]);
```
### 4.bind方法

```javascript
  var person={
    age:10,
    name:'EmbeddedStudio'
  }
  function fn(x,y){
    console.log(x+','+y);
    console.log(this);//window
    console.log(this.name);
    console.log(this.age);
  }
  fn.call(person,20,'2000');
  fn.apply(person,[20,4]);
  fn.bind(person,4,5)();
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ec5ba8e2392248df9960daeaa20fb8de.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAc2l4KuOAgg==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 2.bind,call,apply区别是什么
bind() 方法创建一个新的函数。 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。

```javascript
  fn.call(person,20,'2000');
  fn.apply(person,[20,4]);
  fn.bind(person,4,5)();
```
## 3.什么是原型
js中的每个函数都有一个特殊的属性叫做原型(prototype),它是继承成员被定义的地方，
![在这里插入图片描述](https://img-blog.csdnimg.cn/d5f60928b6a74f249721443c6c15f84a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAc2l4KuOAgg==,size_20,color_FFFFFF,t_70,g_se,x_16)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c398ff90434a4b3a861603e9688f6aa2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAc2l4KuOAgg==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 4.什么是原型链
在 JavaScript 中，实例对象在读取属性时总是先检查私有属性。如果存在，则会返回私有属性值；否则就会检索 prototype 原型；如果找到同名属性，则返回 prototype 原型的属性值。
prototype 原型允许引用其他对象。如果在 prototype 原型中没有找到指定的属性，则 JavaScript 将会根据引用关系，继续检索 prototype 原型对象的 prototype 原型，以此类推。

```javascript
function a (x) {  //构造函数a
    this.x = x;
}
a.prototype.x = 0;  //原型属性x的值为0
function b (x) {  //构造函数b
    this.x = x;
}
b.prototype = new a (1);  //原型对象为构造函数a的实例
function c (x) {  //构造函数c
    this.x = x;
}
c.prototype = new b (2);  //原型对象为构造函数b的实例
var d = new c (3);  //实例化构造函数c
console.log(d.x);  //调用实例对象d的属性x，返回值为3
delete d.x;  //删除实例对象的私有属性x
console.log(d.x);  //调用实例对象d的属性x，返回值为2
delete c.prototype.x;  //删除c类的原型属性x
console.log(d.x);  //调用实例对象d的属性x，返回值为1
delete b.prototype.x;  //删除b类的原型属性x
console.log(d.x);  //调用实例对象d的属性x，返回值为0
delete a.prototype.x;  //删除a类的原型属性x
console.log(d.x);  //调用实例对象d的属性x，返回值为undefined
```

## 5.instanceof判断变量类型的原理是什么
查看左边在不在右边的原型链上

## 6.如何实现对象(构造函数)的继承

```javascript
function A (x) {  //A类
    this.x1 = x;  //A的私有属性x1
    this.get1 = function () {  //A的私有方法get1()
        return this.x1;
    };
}
function B(x) {  //B类
    this.x2 = x;  //B的私有属性x2
    this.get2 = function () {  //B的私有方法get2()
        return this.x2 + this.x2;
    };
}
B.prototype = new A (1);  //原型对象继承A的实例
function C (x) {  //C类
    this.x3 = x;  //C的私有属性x3
    this.get3 = function () {  //C的私有方法get3()
        return this.x3 * this.x3;
    };
}
C.prototype = new B (2);  //原型对象继承B的实例
```
通过原型链把abc串在一起，，这样c就能继承ab的成员，而b能继承a的成员。

```javascript
var b = new B (2);  //实例化B
var c = new C (3);  //实例化C
console.log(b.x1);  //在实例对象b中调用A的属性x1，返回1
console.log(c.x1);  //在实例对象c中调用A的属性x1，返回1
console.log(c.get3());  //在实例对象c中调用C的方法get3()，返回9
console.log(c.get2());  //在实例对象c中调用B的方法get2()，返回4
```