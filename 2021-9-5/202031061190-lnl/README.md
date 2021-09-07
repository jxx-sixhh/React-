1. #### 链表中倒数第K个节点

   ````js
   let fast = head, slow = head ;
       
       while (fast && k > 0) {
           fast = fast.next;
           k = k-1;
       }
       while (fast) {
           fast = fast.next;
           slow = slow.next;
       }
       return slow;
   
   ````

   

2. #### 复习前面的内容

   1. 什么是LIFE?如何使用

   2. 什么是闭包?闭包有什么优点

      ````js
      闭包就是函数内部的函数,作用就是让全局可以获取到函数内局部的变量
      优点:1.变量长期存在于内存中2.避免全局变量的污染3. 私有成员的存在
      缺点:常驻内存,会增大内存的使用量,使用不当会造成内存泄漏
      ````

      

   3. 什么是提升(变量提升/函数提升)?提升的规则是什么

      ````js
      变量提升:(var定义的变量会在全部代码之前定义)
      函数提升:(函数表达式只会提升函数的名字,没有函数的内容)
      		(函数声明的函数,会在全部代码之前定义)
      ````

      

   4. delete命令的作用是什么?其局限性是什么

      ````js
      作用:删除对象的属性,并不会删除对象的属性值
      局限:不可以删除一般的变量,或者是函数
      ````

      

   5. 如何获取函数预期传入的参数个数

      ````js
      arguments.length
      ````

      

   6. eval命令的作用是什么

      ````js
      eval()可以接收一个字符串str作为参数,并把这个参数作为脚本代码来执行
      	eval("var a = 1")//声明一个a变量并且赋值1
      	eval("2+3")//5
      	eval("function()")//执行function函数
      	eval("{b:2}")//声明一个对象
      	eval("({b:2})")//声明并且返回一个对象
      ````

      

   7. 遍历数组有哪些方式

      1. forEach

         ````js
         arr.forEach(function(element,index){
             
         })
         ````

      2. for循环

      3. for in

         ````js
         for(var i in arr)
         ````

      4. for of

         ````js
         for (var item of arr)
         ````

      5. map

         ````js
         arr.map((item)=>{
             
         })
         ````

      6. filter

         ````js
         arr.filter((item)=>{})
         ````

   8. forin遍历数组有什么缺点

      ````js
      使用for in会遍历数组所有的可枚举属性,包括原型
      遍历顺序有可能不是按照实际数组的内部顺序
      index索引为字符串类型数字,不能直接进行几何运算
      ````

      

   9. 逗号(",")运算符的作用是什么

      ````js
      
      var a = 20;
      var b = (++a,10);
      alert(b);//10
      alert(a);//21
      逗号运算符:先自左向右进行运算,再将最右边的值赋值给变量
      ````

      

   10. 将字符串转为数字的方法有哪些

       1. +str
       2. 进行算术运算
       3. Number(str)
       4. parseIn(str,进制)
       5. parseFloat(str)

3. #### React

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
   
           //登录按钮
           function ButOn(props){
               return (
                   <button onClick={props.onClick}>登录</button>
               )
           }
   
           //退出按钮
           function BtnOff(props){
               return <button onClick={props.onClick}>退出</button>
           }
   
           //登录时展示
           function ShowOn(props){
               return <h1>欢迎光临</h1>
           }
   
           //退出时展示
           function ShowOff(props){
               return <h1>拜拜喽</h1>
           }
   
           //判断状态展示组件
           function Show(props){
               const {IsLoggin}=props
               return props.IsLoggin?<ShowOff/>:<ShowOn/>
           }
   
           class Change extends React.Component{
   
               state={IsLoggin:false}
   
               IN=()=>{
                   this.setState({
                       IsLoggin:!this.state.IsLoggin
                   })
               }
               OFF=()=>{
                   this.setState({
                       IsLoggin:!this.state.IsLoggin
                   })
               }
   
               render(){
                   const {IsLoggin}=this.state
                   let button = null
                   if(IsLoggin){
                       button=<ButOn onClick={this.IN}/>
                   }else{
                       button=<BtnOff onClick={this.OFF}/>
                   }
   
                   return (
                   <div>
                       <Show IsLoggin={IsLoggin}/>    
                       {button}
                   </div>
                   
                   )
               }
           }
   
               
   
           ReactDOM.render(<Change/>,document.getElementById('test'))
       </script>
   
   </body>
   
   </html>
   ````

   ![](C:\Users\mushroomm\Desktop\图片\Snipaste_2021-09-05_12-43-01.png)

![](C:\Users\mushroomm\Desktop\图片\Snipaste_2021-09-05_12-43-08.png)

