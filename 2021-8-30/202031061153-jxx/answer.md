1. javascript原始值类型有哪些（ES5）

基本/值类型

- Undefined
- String
- Number null
- Boolean

（u are so nb）

对象(引用)类型

- Function
- Array
- Object

2.为什么 0.1 + 0.2 !== 0.3

计算机在进行计算时还是要通过二进制来计算，所有的数都要转化为二进制数。有些小数转换成二进制数的时候会除不尽，然后就只能取近似值进行计算，导致计算结果不准确。

3.判断数据类型的方法有哪几种

1. typeof：它返回数据类型的字符串表达，可以区分Number、String、Boolean、Undefined、function.但是区别不了null和object，以及一般object和array

​       用法：直接输出typeof 变量或者输出 typeof 变量 === '类型的字符串形式'

2. instanceof:只能用来判断对象数据的类型(Function,Array,Object)

​       用法：变量 instanceof 类型

3. ===

   可以判断Undefined和null

4.null是对象吗，为什么typeof null === 'object'

null不是对象。

> 参考mdn：js诞生来就产生了这个bug。在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 `null` 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，`typeof null` 也因此返回 `"object"`

5.== 与 === 有什么区别

==判断值是否相等

===是严格判断，判断值和类型

6.什么是类数组,如何将类数组转换为数组

具有length属性。其他属性为非负整数。（对象中的索引会被当作字符串来处理）

不具有数组所具有的方法。

转换：args = Array.prototype.slice.call(arguments)





