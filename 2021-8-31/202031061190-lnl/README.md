### 一.ES5中的算法初步

1. #### 总结JS的数组操作方法(用以下数组举例)

   ````js
   let arr = [1,2,3]
   ````

   

   1. #### 添加

      1. push()	向数组的末尾添加

         ````js
         arr.push(4,5,6)//1,2,3,4,5,6
         ````

         

      2. unshift()     向数组的开头添加

         ````js
         arr.unshift(0)//0,1,2,3
         ````

         

      3. 通过拓展运算符[...arr1,arr2]

         ````js
         let arr2 = [4,5,6]
         arr = [...arr,...arr2]//1,2,3,4,5,
         ````

      4. splice()

         ````js
         arr.splice(1,0,4,5,6)//1,2,4,5,6,3
         ````

         

   2. #### 删除

      1. pop()	后面删除

         ````js
         arr.pop()//1,2
         ````

      2. shift()     前面删除

         ````js
         arr.shift()//2,3
         ````

      3. splice()      删除指定位置,指定数量的元素(索引值,个数)

         ````js
         arr.splice(1,1)//1,3
         ````

   3. #### 过滤

      - filter(callback)	

        ````js
        arr = arr.filter((value,index)=>{
            return value>2
        })//3
        ````

   4. #### 排序

      - sort()

      ````js
      arr.sort(function(a,b){
        return a-b//升序
        return b-a//降序
      })
               
      ````

   5. #### 反转

      - reverse

      ````js
      arr.reverse()//3,2,1
      ````

   6. #### 截取

      - slice

      ````js
      arr.slice(0,1)//1,2
      ````

   7. #### 遍历

      - forEach

      ````js
      arr.forEach(function(value,index,obj){
          consloe.log(obj)
      })
      ````

   8. #### 迭代

      - reduce

      ````js
      arr.reduce((preValue,currentValule)=>{
          preValue+currentValue
      })//6
      ````

2. #### 用js实现几种排序方法(冒泡、插入、快排等)。

   - 冒泡

     ````js
     var arr = [2,1,3];
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
     
     ````

   - 插入

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

   - 快排

     ````js
     
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
     ````

     

3. #### 思考js中的排序sort的方法，采用的是哪种排序？





## 二.ES5

1. 总结函数的声明方式

   - 函数声明

     ````js
     function 函数名(参数){}
     ````

   - 函数表达式

     ````js
     var 函数名 = function(参数){}
     ````

   - 构造函数

     ````js
     var 变量名 = new Function(参数){}
     ````

     

   

2. 函数变量的提升是如何进行的

   ````js
   用函数声明定义的函数,函数可以在函数声明之前调用,而用函数表达式定义的函数只能在声明之后调用。
   
   【根本原因在于解析器对这两种定义方式读取的顺序不同:解析器会事先读取函数声明，即函数声明放在任意位置都可以被调用；
   
   对于函数表达式，解析器只有在读到函数表达式所在那行的时候才执行】
   ````

   

3. 为什么要使用闭包?你是怎么理解闭包的?

   ````js
   当一个函数的返回值是另外一个函数，而返回的那个函数如果调用了其父函数内部的其它变量，如果返 回的这个函数在外部被执行，就产生了闭包。
   简而言之:使函数外部能够调用函数内部定义的变量。
   ````

   

4. 怎么正确使用立即调用函数表达式

   ````js
   (function(a,b){
               document.write("a + b = "+(a+b));
    })(123,456);//579
   ````

   

5. 如何避免eval在函数内部修改外部变量

   ````js
   如果eval函数代码可能创建全局变量，将此调用封装到嵌套的函数中以防止作用域污染
   ````



## React

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

    <script src="./son.html"></script>


    <script type="text/babel">

        var Child = React.createClass({
            return  ({this.props.message})

        var Father = React.createClass({
            getInitialState: function () {  //设置默认状态值
                return {
                    message: "父组件数据"
                }
            },

            render: function () {
                return (
                    <div>
                        <h1>父组件</h1>
                        <Child name="123" val={this.state.message} />
                    </div>
                )
            }
        })

        ReactDOM.render(<Father />, document.getElementById('test'))

    </script>

</body>

</html>
````



