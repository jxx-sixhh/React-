1. 更改this的指向有哪些方案
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

2. bind,call,apply区别是什么
    bind返回对应函数, 便于稍后调用； apply, call则是立即调用
    用法上：apply与call相似，两者的第一个参数都是this重新指向的参数，不过call是后面传入的是一个参数列表，而apply后面传入的是一个参数数组
    bind与call相似，第一个参数也是this指向，后面传入的也是参数列表，但是它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。

3. 什么是原型
    原型：一个可以被复制（或者叫克隆）的一个类，通过复制原型可以创建一个一模一样的新对象，也可以说原型就是一个模板，在设计语言中更准确的说是一个对象模板
          原型是定义了一些公用的属性和方法，利用原型创建出来的新对象实例会共享原型的所有属性和方法

4. 什么是原型链
    原型链：原型链是原型对象创建过程的历史记录，当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构

5. instanceof判断变量类型的原理是什么
    instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false
    ```js
    const a = 'abc';
    console.log(a instanceof String); // false
 
    const b = new String('abc');
    console.log(b instanceof String);//  true
    ```

6. 如何实现对象(构造函数)的继承
    使用call或apply方法:
    ```js
    function Animal(){
         this.species = "动物";
    }
    function Cat(name,color){
        this.name = name;
        this.color = color;
    }
    function Cat(name,color){
        Animal.apply(this,arguments);
        this.name=name;
        this.color = color;
    }
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ```

    使用prototype属性
    ```js
    function Animal(){
         this.species = "动物";
    }
    function Cat(name,color){
        this.name = name;
        this.color = color;
    }
    Cat.prototype = new Animal();
    Cat.prototype.constructor = Cat;
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ```

    直接继承prototype:
    ```js
    function Animal(){
         this.species = "动物";
    }
    function Cat(name,color){
        this.name = name;
        this.color = color;
    }
    function Animal(){ }
    Animal.prototype.species = "动物";
    Cat.prototype = Animal.prototype;
    Cat.prototype.constructor = Cat;
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ```

    利用空对象作为中介:
    ```js
    var F= function(){};
    F.prototype = Animal.prototype;
    Cat.prototype = new F();
    Cat.prototype.constructor = Cat;
    alert(Animal.prototype.constructor); // Animal
    　function extend(Child, Parent) {
        var F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    　}
    extend(Cat,Animal);
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ```
    拷贝继承:
    ```js
    function Animal(){}
    Animal.prototype.species = "动物";
    function extend2(Child, Parent) {
        var p = Parent.prototype;
        
  　　　　var c = Child.prototype;
  for (var i in p) {
      c[i] = p[i];
      }
      　c.uber = p;
    }
    　extend2(Cat, Animal);
    var cat1 = new Cat("大毛","黄色");
    alert(cat1.species); // 动物
    ```