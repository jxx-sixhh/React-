#### 算法(大数相加)

````js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello_react</title>
    <style>
        .show{
            width: 500px;
            height: 500px;
            background-color: aquamarine;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            line-height: 500px;
        }
        input{
            width: 50px;
        }
    </style>
</head>
<body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>


    <!-- 引入react核心库 -->
    <script src="../js/react.development.js"></script>
    <!-- 引入react-dom,用于支持react操作DOM -->
    <script src="../js/react-dom.development.js"></script>
    <!-- 引入babel,用于将jsx转为js -->
    <script src="../js/babel.min.js"></script>

    
    <script type="text/babel">

        class Add extends React.Component{
            render(){
                return(
                    <div className="show">
                        <input type="text" ref={(c)=>{this.input1=c}}/>
                        <input type="text" ref={(c)=>{this.input2=c}}/>
                        <button onClick={this.add}>输入计算两数之和(字符串形式)</button>
                    </div>
                )
            }
            add=()=>{
                const num1=this.input1.value
                const num2=this.input2.value//这里输入数字之后它们的类型就是string
                alert((+num1+(+num2))+"")
                alert(typeof((+num1+(+num2))+""))//返回的也是string

                /* 
                字符串转化成数字:parseInt(num,进制)
                                parseFloat(num)
                                +num
                                Number(num)
                */
            }
        }
    
        ReactDOM.render(<Add/>,document.getElementById('test'))
    </script>

</body>
</html>
````

#### js

1. 更改this的指向的方案

   1. bind ( 改变this指向 , 实参(实参分别传入) )		
   2. call ( 改变this指向 , 实参(实参分别传入) )           
   3. apply( 改变this指向 , [实参以数组形式传入] )     

2. bind,call,apply的区别

   ​	bind不会自动执行,call和apply会自动执行

   ​	bind和call传入的实参都是依次传入,apply传入的是数组

3. 什么是原型

   ​	创建的函数有一个prototype属性,它的实例对象有一个__ proto ____属性,实例对象可以通过 __ __ proto __来访问函数的prototype,原型就是prototype,原型对象就相当于一个公共的区域,所有同一个类的实例都可以访问到这个原型对象,我们可以将对象共有的内容,统一设置到原型对象中

4. 什么是原型链

   ​	访问一个对象的属性时

   ​        先在自身属性中查找,找到返回

   ​        如果没有,再沿着__proto__原型链向上查找,找到返回

   ​        如果最终没有找到,返回undefined

5. instanceof判断变量类型的原理是什么

   ​	a instanceof b 判断a是不是b的实例,如果b函数的显示原型对象在a对象的原型链上,返回true,反之返回false

6. 如何实现对象构造函数的继承

   ````js
   function A (){
       this.name="不是风动";
   }
   function B (age,gender){
       this.age=age;
       this.gender=gender;
   }
   ````

   

   1. 通过call或者apply实现

      ````js
      function B (age,gender){
          A.apply(this,arguments);
          this.age=age;
          this.gender=gender;
      }
      ````

   2. prototype模式

      ````js
      如果B的prototype对象,指向一个A的实例,那么所有的B的实例,就能继承A了
      B.prototype=new A();
      A.prototype.constructor=B;
      ````

   3. 直接继承prototype

      ````js
      让B直接继承A
      B.prototype = A.prototype
      B.prototype.constructor = B
      ````

      