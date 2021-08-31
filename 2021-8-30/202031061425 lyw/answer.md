1.

Number、String、Boolean、Null、Undefined

2.

JS 采用双精度版本，存在精度问题

该版本的 JS 采用的是浮点数标准需要对无限循环的二进制进行截取，从而导致了精度丢失，造成了0.1不再是0.1，截取之后0.1变成了 0.100…001，0.2变成了0.200…002。所以两者相加的数大于0.3。

3.

<u>typeof方法</u>

​    typeof 666, //"number"
​    typeof 'abc', //"string"
​    typeof false, //"boolean"
​    typeof undefined, //"undefined"
​    typeof null, //"object"
​    typeof [1,2,3], //"object"
​    typeof {a:1,b:2,c:3}, //"object"
​    typeof function(){console.log('aaa');}, //"function"
​    typeof new Date(), //"object"

<u>用instanceof判断实例是否属于某种类型</u>

​    666 instanceof Number, //false
​    'lyw' instanceof String, //false
​    false instanceof Boolean, //false
​    undefined instanceof Object, //false
​    null instanceof Object, //false
​    [1,2,3] instanceof Array, //true
​    {a:1,b:2,c:3} instanceof Object, //true
​    function(){console.log('aaa');} instanceof Function, //true

<u>Object.prototype.toString 返回其调用者的具体类型</u>

Object.prototype.toString.call(123); //"[object Number]"
Object.prototype.toString.call('abcdef'); //"[object String]"
Object.prototype.toString.call(true); //"[object Boolean]"
Object.prototype.toString.call([1, 2, 3, 4]); //"[object Array]"
Object.prototype.toString.call({name:'wenzi', age:25}); //"[object Object]"
Object.prototype.toString.call(function(){ console.log('function'); }); //"[object Function]"
Object.prototype.toString.call(undefined); //"[object Undefined]"
Object.prototype.toString.call(null); //"[object Null]"
Object.prototype.toString.call(new Date()); //"[object Date]"

<u>constructor（不稳定） 指向其引用者。</u>

var num = 1;
num.constructor
ƒ Number() { [native code] }


true.constructor
ƒ Boolean() { [native code] }


"".constructor
ƒ String() { [native code] }


var func = function(){}
func.constructor
ƒ Function() { [native code] }


[].constructor
ƒ Array() { [native code] }


var obj = {}
obj.constructor
ƒ Object() { [native code] }

4.

不是

javascript中不同对象在底层都表示为二进制，而javascript 中会把二进制前三位都为0的判断为object类型，而null的二进制表示全都是0，自然前三位也是0，所以执行typeof时会返回 ‘object’。

5.

==：相等定义的非常宽松，可以允许进行类型转换
===：用来检测两个操作数是否严格相等

对于基础类型 两者是有区别的

而对于高级类型的比较 两者没有区别

基础类型和高级类型 有区别 会将高级转化为低级

6.

类数组是指在写法上跟数组一样，比如实参列表，函数的第一个参数是argument[0]，写法上跟数组一样，但是不是数组，他的原型是Object，数组能调用的方法它都不能调用，且其数据结构也和数组不同。

转化：

遍历类数组，依次将元素放入一个空数组

用扩展运算符(...)或者Array.from()

用apply展开