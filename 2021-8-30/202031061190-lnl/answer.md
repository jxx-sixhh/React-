1.

Number,string,null,boolean,undefined

2.

原因在于在JS中采用的时IEEE 754的双精度标准,计算机内部存储数据的编码的时候,0.1在计算机内部根部就不是精确的0.1,而是一个又舍入误差的0.1,当代码被编译或解释后,0.1已经被四舍五入成了一个与之很接近的计算机内部数字,以至于计算还没有开始,一个很小的舍入错误就已经产生了

3.

​	typeof:

​		-对于基本类型,除了null以外,均可返回正确的结果

​		-对于引用类型,除function以外,一律返回object类型

​		-对于null,返回object类型

​		-对于function,返回function类型

​	instanceof

​	constructor

4.

​	null 有属于自己的数据类型 Null ， 引用类型中的 数组、日期、正则 也都有属于自己的具体类型，而 typeof 对于这些类型的处理，只返回了处于其原型链最顶端的 Object 类型

5.

​	==相等,可以允许进行类型转化

​	===严格相等,不能进行转化

6.

​	像数组(有下标)但实则是object

​	slice()

​	Array.from()

​	[...类数组]

​	$.makeArray()

