# 属性

**attributes **

返回一个类似数组的动态对象，成员是该元素标签的所有属性节点对象（并非属性值

属性节点对象有`name`和`value`属性，对应该属性的属性名和属性值

其他类型的节点对象返回的都是`null`

**标准属性**

HTML 元素的属性**名**是大小写不敏感的，但是 JavaScript 对象的属性名是大小写敏感的。转换规则是，转为 JavaScript 属性名时，一律采用小写。如果属性名包括多个单词，则采用骆驼拼写法，即从第二个单词开始，每个单词的首字母采用大写，比如`onClick`。

同时：

- `for`属性改为`htmlFor`

- `class`属性改为`className`

  

  另外，HTML 属性**值**一般都是字符串，但是 JavaScript 属性会自动转换类型。比如，将字符串`true`转为布尔值，将`onClick`的值转为一个函数，将`style`属性的值转为一个`CSSStyleDeclaration`对象。因此，可以对这些属性赋予各种类型的值。

## 方法

这些方法只接受属性的标准名称，不用改写保留字，比如`for`和`class`都可以直接使用。另外，这些方法对于属性名是大小写不敏感。

- `getAttribute()`

  返回当前元素节点的指定属性值。属性不存在返回`null`。

  只返回字符串，不会返回其他类型的值。

- `getAttributeNames()`

  返回一个数组，成员是当前元素的所有属性名。使用`Element.attributes`属性，也可以拿到同样的结果，唯一的区别是它返回的是类似数组的对象。

- `setAttribute()`

  用于为当前元素节点新增属性。如果同名属性已存在，则相当于编辑已存在的属性。该方法没有返回值。

- `hasAttribute()`

  返回一个布尔值，表示当前元素节点是否包含指定属性。

- `hasAttributes()`

- 返回一个布尔值，表示当前元素是否有属性

- `removeAttribute()`

  移除一个属性

- dataset 

  提取date-xxx时只用dataset.xxx就行

  删除一个`data-*`属性，可以直接使用`delete`命令：delete document.getElementById('myDiv').dataset.foo;

  但是，`data-`后面的属性名有限制，属性名不应该使用`A`到`Z`的大写字母，比如不能有`data-helloWorld`这样的属性名，而要写成`data-hello-world`。

  转成`dataset`的键名时，连词线后面如果跟着一个小写字母，那么连词线会被移除，该小写字母转为大写字母，其他不变。反过来，`dataset`的键名转成属性名时，所有大写字母都会被转成连词线+该字母的小写形式，其他字符不变。比如，`dataset.helloWorld`会转成`data-hello-world`。

# Text 和 DocumentFragment

## Text 

元素节点（`Element`）和属性节点（`Attribute`）的文本内容。

空格也是一个字符，所以哪怕只有一个空格，也会形成文本节点。

### 属性

**data**

等同于`nodeValue`属性，用来设置或读取文本节点的内容。

**nextElementSibling，previousElementSibling** 

都取的是元素节点！

返回紧跟在当前文本节点后面的那个**同级**元素节点/返回当前文本节点前面最近的**同级**元素节点，

取不到元素节点，则返回`null`。

### 方法：

- `appendData()`：尾部追加字符串。

- `deleteData()`：删除`Text`节点内部的子字符串，第一个参数为子字符串开始位置，第二个参数为子字符串长度。

- `insertData()`：在`Text`节点插入字符串，第一个参数为插入位置，第二个参数为插入的子字符串。

- `replaceData()`：用于替换文本，第一个参数为替换开始位置，第二个参数为需要被替换掉的长度，第三个参数为新加入的字符串。

- `subStringData()`：用于获取子字符串，第一个参数为子字符串在`Text`节点中的开始位置，第二个参数为子字符串长度。

-  remove: 移除当前`Text`节点。

-  splitText:参数就是分割位置（从零开始），分割到该位置的字符前结束。如果分割位置不存在，将报错。分割后，该方法返回分割位置后方的字符串，而原`Text`节点变成只包含分割位置前方的字符串。

  父元素节点的`normalize`方法可以将毗邻的两个`Text`节点合并。

## DocumentFragment 

文档片段节点 

没有父节点，`parentNode`返回`null`，但是可以插入任意数量的子节点。它不属于当前文档，操作`DocumentFragment`节点，要比直接操作 DOM 树快得多。

使用：

```js
var docFrag = document.createDocumentFragment();
// 等同于
var docFrag = new DocumentFragment();

var li = document.createElement('li');
li.textContent = 'Hello World';
docFrag.appendChild(li);

document.querySelector('ul').appendChild(docFrag);
```

`DocumentFragment`节点本身不能被插入当前文档。当它作为`appendChild()`、`insertBefore()`、`replaceChild()`等方法的参数时，是它的所有子节点插入当前文档，而不是它自身。一旦`DocumentFragment`节点被添加进当前文档，它自身就变成了空节点（`textContent`属性为空字符串），可以被再次使用。如果想要保存`DocumentFragment`节点的内容，可以使用`cloneNode`方法。

# CSS

## 属性

**style**

```js
e.style.fontSize = '18px';
e.style.color = 'black';
```

设置时必须包括单位

名字需要改写，比如`background-color`写成`backgroundColor`。改写的规则是将横杠从 CSS 属性名中去除，然后将横杠后的第一个字母大写。如果 CSS 属性名是 JavaScript 保留字，则规则名之前需要加上字符串`css`，比如`float`写成`cssFloat`。

返回的只是行内样式，并不是该元素的全部样式。通过样式表设置的样式，或者从父元素继承的样式，无法通过这个属性得到。元素的全部样式要通过`window.getComputedStyle()`得到。

**cssText**

读写当前规则的所有样式声明文本。也为行内样式。

```js
var divStyle = document.querySelector('div').style;

divStyle.cssText = 'background-color: red;'
  + 'border: 1px solid black;'
  + 'height: 100px;'
  + 'width: 100px;';
```

不用改写 CSS 属性名。

## 方法

**item**

接受一个整数值作为参数，返回该位置的 CSS 属性名。

如果没有提供参数，这个方法会报错。如果参数值超过实际的属性数目，这个方法返回一个空字符值。

**setProperty**

- 第一个参数：属性名，该参数是必需的。
- 第二个参数：属性值，该参数可选。如果省略，则参数值默认为空字符串。
- 第三个参数：优先级，该参数可选。如果设置，唯一的合法值是`important`，表示 CSS 规则里面的`!important`。

### 模块侦测

不管 CSS 属性名的写法带不带连词线，`style`属性上都能反映出该属性是否存在。

### css对象

**getComputedStyle**

接受一个节点对象作为参数，返回一个 CSSStyleDeclaration 实例，包含了指定节点的最终样式信息。同时也是动态的。

，只读的

- CSSStyleDeclaration 实例返回的 CSS 值都是绝对单位。比如，长度都是像素单位（返回值包括`px`后缀），颜色是`rgb(#, #, #)`或`rgba(#, #, #, #)`格式。
- CSS 规则的简写形式无效。比如，想读取`margin`属性的值，不能直接读，只能读`marginLeft`、`marginTop`等属性；再比如，`font`属性也是不能直接读的，只能读`font-size`等单个属性。

获取伪元素：

```js
var test = document.querySelector('#test');

var result = window.getComputedStyle(test, ':before').content;
var color = window.getComputedStyle(test, ':before').color;
```

### StyleSheet 

**styleSheets**

返回当前页面的所有`StyleSheet`实例（即所有样式表）。它是一个类似数组的对象。

**sheet**

如果是`<style>`元素嵌入的样式表，还有另一种获取`StyleSheet`实例的方法，就是这个节点元素的`sheet`属性。

### **CSSRule **

一条 CSS 规则包括两个部分：CSS 选择器和样式声明。

### matchMedia

将 CSS 的[`MediaQuery`](https://developer.mozilla.org/en-US/docs/DOM/Using_media_queries_from_code)条件语句，转换成一个 MediaQueryList 实例。

# Mutation Observer API

 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。

它与事件有一个本质不同：事件是同步触发，也就是说，DOM 的变动立刻会触发相应的事件；Mutation Observer 则是异步触发，DOM 的变动并不会马上触发，而是要等到当前所有 DOM 操作都结束才触发。

- 它等待所有脚本任务完成后，才会运行（即异步触发方式）。
- 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
- 它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。

## 使用

### 构造

新建一个观察器实例，同时指定这个实例的回调函数。

```js
var observer = new MutationObserver(callback);
```

回调函数，会在每次 DOM 变动后调用。该回调函数接受两个参数，第一个是变动数组，第二个是观察器实例，下面是一个例子。

## 方法

### **observe**

启动监听，它接受两个参数。

- 第一个参数：所要观察的 DOM 节点
- 第二个参数：一个配置对象，指定所要观察的特定变动

```js
var article = document.querySelector('article');

var  options = {
  'childList': true,
  'attributes':true
} ;//childList：子节点的变动（指新增，删除或者更改）。attributes：属性的变动。characterData：节点内容或节点文本的变动。必须同时指定这三种观察的一种，若均未指定将报错。
//还可以subtree：布尔值，表示是否将该观察器应用于该节点的所有后代节点。
//attributeOldValue：布尔值，表示观察attributes变动时，是否需要记录变动前的属性值。
//characterDataOldValue：布尔值，表示观察characterData变动时，是否需要记录变动前的值。
//attributeFilter：数组，表示需要观察的特定属性（比如['class','src']）。

observer.observe(article, options);//所要观察的DOM元素是article，第二个是所要观察的变动类型（子节点变动和属性变动）。
```

对一个节点添加观察器，就像使用`addEventListener()`方法一样，多次添加同一个观察器是无效的，回调函数依然只会触发一次。如果指定不同的`options`对象，以后面添加的那个为准，类似覆盖。

### disconnect()，takeRecords()

**disconnect()**

停止观察。DOM 再发生变动，也不会触发观察器。.

**takeRecords()**

清除变动记录，即不再处理未处理的变动。

## MutationRecord 变动记录

DOM 每次发生变化，就会生成一条变动记录

`MutationRecord`对象包含了DOM的相关信息，有如下属性：

- `type`：观察的变动类型（`attributes`、`characterData`或者`childList`）。
- `target`：发生变动的DOM节点。
- `addedNodes`：新增的DOM节点。
- `removedNodes`：删除的DOM节点。
- `previousSibling`：前一个同级节点，如果没有则返回`null`。
- `nextSibling`：下一个同级节点，如果没有则返回`null`。
- `attributeName`：发生变动的属性。如果设置了`attributeFilter`，则只返回预先指定的属性。
- `oldValue`：变动前的值。这个属性只对`attribute`和`characterData`变动有效，如果发生`childList`变动，则返回`null`。