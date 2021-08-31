1.javascript原始值类型有哪些:
  Number，布尔，String，Null，Undefined

2.为什么 0.1 + 0.2 !== 0.3：
   JavaScript 遵循的是 IEE754 双精度标准 , 0.1 和 0.2 属于浮点数 , 在计算时二者被转化为二进制来存储 , 相加之后再转化成十进制 , 最终会造成精度损失 , 只能得到一个近似值 , 即 0.30000000000000004

3.判断数据类型的方法有哪几种：
  typeof: 例如typeof 5//number
  instanceof： A 是否为 B 的实例
  contructor：数据类型判断 例如：console.log(data.contructor===Date)//true
  Object下的toString.call() 例如：console.log(toString.call(123)); //[object Number]

4.null是对象吗，为什么typeof null === 'object'
  null不是对象，null的数据类型是object
  js 里的Null 是机器码NULL空指针, 所以空指针引用加上对象标记还是0,最终体现的类型还是object

5. == 与 === 有什么区别
  第一个是值相同就true，第二个是绝对相等，类型也要相同

6. 什么是类数组,如何将类数组转换为数组
  类数组：如果一个对象有 length 属性值，则它就是类数组
  拥有length属性，length-0可隐式转换为number类型，并且不大于Math.pow(2,32)（比如：22.33和'022'都满足条件）
  <script>
      let divEle=document.querySelectorAll('div');
      let divArr=[];
      for(let item of divEle){
          divArr.push(item)
      }
  </script>