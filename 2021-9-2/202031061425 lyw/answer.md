# 一

**思路：**

将两字符串倒置，转变为数字数组的形式存储，依次对应每一位次相加，其中用tem存有由前一位次相加是否存在进位（0或1），同时注意最后一次相加后若有进位要额外在前补1。每轮（对应位次相加结束后）用字符串相加的形式存储，形成新的“数字”（实际也为字符串）。

```js
<script>
    var addStrings = function(num1, num2) {
	      var tem=0;
	      if(num1.length<num2.length){ // 交换 长的在前
	          var a=num1;
	          num1=num2;
	          num2=a;
	      }
	      num1=num1.split('').reverse().map(Number); // 将字符数组转化数字数组
	      num2=num2.split('').reverse().map(Number);
	      var str='',b=0;
	      for(var i=0;i<num1.length;i++){
	          if(i<num2.length){ // tem保留进的位数 同位数相加
	              b=num1[i]+tem+num2[i];
	          }else{ // 位数比其大 加0
	              b=num1[i]+tem;
	          }
	          if(b>9){
	              str=(b-10)+str;
	              tem=1;
	          }else{
	              str=b+str;
	              tem=0;
	          }
	      }
	      //最后一下 进一
	      if(tem==1){
	          return 1+str;
	      }else{
	          return str
	      }
	  }; 
    console.log(addStrings('233','666'))  // 899
</script>
```



# 二

## 1.

1) call()

*第一个参数为 this指向
若要传参，后面为该函数需要的参数，例：*

```JS

    function fn(x,y){
            console.log(this);  
        }
        var obj = {
            age:19
        }
        fn(1,2); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
        fn.call(obj,1,2); // {age: 19}
```

2)apply()

*与第一种方法不同的是用数组的形式表示参数*

```JS
function fn(x,y){
            console.log(this);  
        }
        var obj = {
            age:19
        }
        fn(1,2);
        fn.apply(obj,[1,2]); //结果和上面一样
```



3）bind()

*只改变this指向 需要手动调用*  *就是后面还要加个括号*

```JS
function fn(x,y){
            console.log(this);  
        }
        var obj = {
            age:19
        }
        fn(1,2);
        fn.bind(obj,1,2)();// 结果同上
```



## 2.

call 和apply的区别在于语法不同，后者需要用数组表示参数

而bind和前两者的区别在于它不会立即执行，需要手动调用

## 3.

原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。

在js中，每个构造函数内部都有一个prototype属性，该属性的值是个对象，该对象包含了该构造函数所有实例共享的属性和方法。也就是说js中的对象都有一个特殊的[[Prototype]]内置属性，其实这就是原型。

利用原型，可以提取共有属性

```JS
function Person(age) {
    this.age = age       
}
Person.prototype.name = 'zs'
var person1 = new Person(11)
var person2 = new Person()
console.log(person1.name) // zs
console.log(person1.age) // 11
console.log(person2.name)  // zs
```

上述例子中，函数的prototype指向了一个对象，而这个对象正是调用构造函数时创建的实例的原型，也就是person1和person2的原型。

**__proto__**

这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。

```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```



关系图：

![img](https://img-blog.csdnimg.cn/img_convert/36560a20db839da905c83dcad59db841.png)

**constructor**

每个原型都有一个constructor属性，指向该关联的构造函数。

```js
function Person() {

}
console.log(Person===Person.prototype.constructor)  //true
```

![img](https://img-blog.csdnimg.cn/img_convert/034540907b74a433109ce75f7df96bd2.png)

**原型的原型**

原型对象就是通过 Object 构造函数生成的，所以存在

![img](https://img-blog.csdnimg.cn/img_convert/0decc1dc3d15a90bcee6b0482d379dc9.png)

```js
console.log(Object.prototype.__proto__ === null) // true
```



## 4.

构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的**原型链**的基本概念。——摘自《javascript高级程序设计》

其实就是图：

![img](https://img-blog.csdnimg.cn/img_convert/299538c0ccebfa03ece5254ae0e958c2.png)

## 5.

instanceof 主要的作用就是判断一个实例是否属于某种类型，也可以判断一个实例是否是其父类型或者祖先类型的实例

```js
let person = function () {
}
let programmer = function () {
}
programmer.prototype = new person()
let nicole = new programmer()
nicole instanceof person // true
nicole instanceof programmer // true
```

其原理就是查看左边在不在右边的原型链上，代码大致如下：

```js
function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}
```

*instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false*

## 6.

示例：我们需要 cat 继承 animal

```js
function Animal(){
　　　　this.species = "动物";
}

function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
}
```

*1）用call或apply*

```js
function Cat(name,color){
　　Animal.call(this);
    //劫持另外一个对象的方法，继承另外一个对象的属性.
　　this.name = name;
　　this.color = color;
　　}
　　var cat1 = new Cat("猫猫","黄色");
　　alert(cat1.species); // 动物
```

*2)用prototype*

如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了

```js
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;// 改过来 不然就是Animal了
var cat1 = new Cat("猫猫","黄色");
alert(cat1.species); // 动物
```



*3）改进 直接继承prototype*  让Cat()跳过 Animal()，直接继承Animal.prototype。

```js
// 将Animal对象改写：
function Animal(){}
Animal.prototype.species = "动物";
// 将Cat的prototype对象，然后指向Animal的prototype对象，这样就完成了继承
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("猫猫","黄色");
alert(cat1.species); // 动物
//但是！ Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype 所以Cat.prototype.constructor = Cat这行代码 其实也是把Animal.prototype对象的constructor属性也改了
```

*4）再改进：用空对象作中介*

由于"直接继承prototype"存在上述的缺点，所以咱们利用一个空对象作为中介

```js
var T = function(){};
T.prototype = Animal.prototype;
Cat.prototype = new T();
Cat.prototype.constructor = Cat;
//T 是空对象，修改Cat的prototype对象，就不会影响到Animal的prototype对象。
```



封装成一个函数使用：

```js
　function extend(Child, Parent) {
　　　var T = function(){};
　　　T.prototype = Parent.prototype;

　　　Child.prototype = new T();
　　　Child.prototype.constructor = Child;
　　　Child.uber = Parent.prototype; //这里为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
　　}
```

使用的时候：

```js
extend(Cat,Animal);
var cat1 = new Cat("猫猫","黄色");
alert(cat1.species); // 动物
```

5)*拷贝继承*

把父对象的所有属性和方法，拷贝进子对象

```js
// 还是把Animal的所有不变属性，都放到它的prototype对象上。
　function Animal(){}
　Animal.prototype.species = "动物";
//然后，再写一个函数，实现属性拷贝的目的
function extend2(Child, Parent) {
　var p = Parent.prototype;
　var c = Child.prototype;
  for (var i in p) {
  c[i] = p[i];
  }
 c.uber = p;
}
//使用的时候：
extend2(Cat, Animal);
var cat1 = new Cat("猫猫","黄色");
alert(cat1.species); // 动物
```

