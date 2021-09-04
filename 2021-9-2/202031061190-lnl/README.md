#### 算法(大数相加)

````js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello_react</title>
</head>

<body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>


    <!-- 引入react核心库 -->
    <script src="../js/17.0.1/react.development.js"></script>
    <!-- 引入react-dom,用于支持react操作DOM -->
    <script src="../js/17.0.1/react-dom.development.js"></script>
    <!-- 引入babel,用于将jsx转为js -->
    <script src="../js/17.0.1/babel.min.js"></script>


    <script type="text/babel">
        class Add extends React.Component {
            
            state = {
                num1: "",
                num2: ""
            }

            show = () => {
                const { num1, num2 } = this.state
                if (num1 === '0') return num2
                if (num2 === '0') return num1
                let len1 = num1.length - 1, len2 = num2.length - 1
                let ans = '', up = 0
                while (len1 >= 0 || len2 >= 0) {
                    const m = len1 >= 0 ? num1[len1--] - '0' : 0
                    const n = len2 >= 0 ? num2[len2--] - '0' : 0
                    const temp = m + n + up
                    up = Math.floor(temp / 10)
                    ans = temp % 10 + ans
                }
                if (up === 1) {
                    ans = up + ans
                }
                console.log(ans)
            }


            savenum = (date) => {
                return (event) => {
                    this.setState({ [date]: event.target.value })
                }
            }


            render() {
                return (
                    <div>
                        <input type="text" onChange={this.savenum('num1')} />
                        <input type="text" onChange={this.savenum("num2")} />
                        <button onClick={this.show}>点击计算两数之和</button>
                    </div>
                )
            }
        }
        ReactDOM.render(<Add />, document.getElementById('test'))
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

      

````js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello_react</title>

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
        class Time extends React.Component {
            constructor(props) {
                super(props)
                let date = new Date().getDate();
                let month = new Date().getMonth() + 1;
                let year = new Date().getFullYear();
                let now1 = new Date().toLocaleTimeString()
                this.state = {
                    year: year,
                    month: month,
                    date: date,
                    now1: now1
                }
            }

            componentDidMount() {
                this.timer = setInterval(() => {
                    //获取原状态
                    const { year, month, date, now1 } = this.state
                    let date2 = new Date().getDate();
                    let now2 = new Date().toLocaleTimeString()
                    this.setState({now1:now2})
                }, 1000)
            }

            render() {
                const { year, month, date, now1 } = this.state
                return (
                    <div>
                        <div>显示时间</div>
                        <div>{year}-{month}-{date}{now1}</div>
                    </div>
                )
            }
        }
        ReactDOM.render(<Time />, document.getElementById('test'))
    </script>

</body>

</html>
````

