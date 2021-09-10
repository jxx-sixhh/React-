

# 一

主要思路：

第一个小数和尽量考靠后的大树

```js
/*
 * @param {number} num
 * @return {number}
 */
 var maximumSwap = function (num) {
    let last = new Array(10).fill(-1); //每一项赋值为-1
    num = Array.from(num+''); // 转化成字符数组
    //找到相同值最后出现的位置
    for (let i = 0; i < num.length; i++) {
        last[num[i] - '0'] = i; // 存有每位数字出现的最后索引 索引为每位数字 值为出现的最后下标
    }

    for (let i = 0; i < num.length; i++) { // 从第一位开始
        for (let d = 9; d > (num[i] - '0'); d--) { // 从最大值开始 如果没有比该位数字大 那这一位就不要动了
            if (last[d] > i) {
                let temp = num[last[d]];
                num[last[d]] = num[i];
                num[i] = temp;
                return Number(num.join(""));
            }
        }
    }
    return Number(num.join(""));
};
console.log(maximumSwap(1234)) // 4231
```



# DOM

## 概要

是JS操作网页的接口

可以将网页转化为JS,从而进行各种操作，比如增删内容。

## 节点

DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。

7个节点类型：

- `Document`：整个文档树的顶层节点

- `DocumentType`：文档类型节点`doctype`标签（比如`<!DOCTYPE html>`）

- `Element`：网页的各种HTML标签（比如`<body>`、`<a>`等）

- `Attr`：网页元素的属性（比如`class="right"`）

- `Text`：标签之间或标签包含的 文本

- `Comment`：注释

- `DocumentFragment`：文档的片段 

  注：　javascript提供了一个文档片段DocumentFragment的机制。如果将文档中的节点添加到文档片段中，就会从文档树中移除该节点。把所有要构造的节点都放在文档片段中执行，这样可以不影响文档树，也就不会造成页面渲染。当节点都构造完成后，再将文档片段对象添加到页面中，这时所有的节点都会一次性渲染出来，这样就能减少浏览器负担，提高页面渲染速度



DOM树：

文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，这样层层衍生出一个金字塔结构，又像一棵树。

文档的第一层有两个节点，第一个是文档类型节点（`<!doctype html>`），第二个是 HTML 网页的顶层容器标签`<html>`。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。

除了根节点，其他节点都有三种层级关系。

- 父节点关系（parentNode）：直接的那个上级节点
- 子节点关系（childNodes）：直接的下级节点
- 同级节点关系（sibling）：拥有同一个父节点的节点

## 属性/方法

*属性*

**nodeType**

- 文档节点（document）：9，对应常量`Node.DOCUMENT_NODE`
- 文档类型节点（DocumentType）：10，对应常量`Node.DOCUMENT_TYPE_NODE`
- 元素节点（element）：1，对应常量`Node.ELEMENT_NODE`
- 属性节点（attr）：2，对应常量`Node.ATTRIBUTE_NODE`
- 文本节点（text）：3，对应常量`Node.TEXT_NODE`
- 注释节点（Comment）：8，对应常量`Node.COMMENT_NODE`
- 文档片断节点（DocumentFragment）：11，对应常量`Node.DOCUMENT_FRAGMENT_NODE`

**nodeName**

- 文档节点（document）：`#document`
- 元素节点（element）：大写的标签名
- 属性节点（attr）：属性的名称
- 文本节点（text）：`#text`
- 文档片断节点（DocumentFragment）：`#document-fragment`
- 文档类型节点（DocumentType）：文档的类型
- 注释节点（Comment）：`#comment`

**textContent**

返回当前节点和它的所有后代节点的文本内容。

自动忽略当前节点内部的 HTML 标签，返回所有文本内容。

是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它还有一个好处，就是自动对 HTML 标签转义。

```js
document.getElementById('foo').textContent = '<p>GoodBye!</p>';
```

文档节点（document）和文档类型节点（doctype）的`textContent`属性为`null`。如果要读取整个文档的内容，可以使用`document.documentElement.textContent`。

**nextSibling**

返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回`null`。

该属性还包括文本节点和注释节点。因此如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格。

可以用来遍历所有子节点。

**previousSibling**

返回当前节点前面的、距离最近的一个同级节点。如果当前节点前面没有同级节点，则返回`null`。

**parentNode**

文档节点（document）和文档片段节点（documentfragment）的父节点都是`null`。另外，对于那些生成后还没插入 DOM 树的节点，父节点也是`null`。

**parentElement **

返回当前节点的父元素节点

对象是元素节点

**firstChild  lastChild **

同样也可能为文本节点

**childNodes **

返回一个类似数组的对象（`NodeList`集合），成员包括当前节点的所有子节点。

文档节点（document）就有两个子节点：文档类型节点（docType）和 HTML 根元素节点。

除了元素节点，`childNodes`属性的返回值还包括文本节点和注释节点。如果当前节点不包括任何子节点，则返回一个空的`NodeList`集合。由于`NodeList`对象是一个动态集合，一旦子节点发生变化，立刻会反映在返回结果之中。

**isConnected **

返回一个布尔值，表示当前节点是否在文档之中（光创建不行 需要appendChild

脚本生成的节点，没有插入文档之前，`isConnected`属性返回`false`，插入之后返回`true`。

*方法*

**appendChild**

接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。

插入一个已经存在的节点，结果就是该节点会从原来的位置，移动到`document.body`的尾部。

如果`appendChild()`方法的参数是`DocumentFragment`节点，那么插入的是`DocumentFragment`的所有子节点，而不是`DocumentFragment`节点本身。返回值是一个空的`DocumentFragment`节点。

**hasChildNodes**

返回一个布尔值，表示当前节点是否有子节点。

子节点包括所有类型的节点。

判断有无子节点：

```js
node.hasChildNodes()
node.firstChild !== null
node.childNodes && node.childNodes.length > 0
```

**cloneNode**

用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点。

（1）克隆一个节点，会拷贝该节点的所有属性，但是会丧失`addEventListener`方法和`on-`属性（即`node.onclick = fn`），添加在这个节点上的事件回调函数。

（2）该方法返回的节点不在文档之中，即没有任何父节点，必须使用诸如`Node.appendChild`这样的方法添加到文档之中。

（3）克隆一个节点之后，DOM 有可能出现两个有相同`id`属性（即`id="xxx"`）的网页元素，这时应该修改其中一个元素的`id`属性。如果原节点有`name`属性，可能也需要修改。

**insertBefore**

用于将某个节点插入父节点内部的指定位置。

第一个参数是所要插入的节点`newNode`，第二个参数是父节点`parentNode`内部的一个子节点`referenceNode`。`newNode`将插在`referenceNode`这个子节点的前面。返回值是插入的新节点`newNode`。

第二位如果是null，则表示成为内部最后一个子节点，第二个参数不能省略

```js
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

如果所要插入的节点是当前 DOM 现有的节点，则该节点将从原有的位置移除，插入新的位置。

如果要插入的节点是`DocumentFragment`类型，那么插入的将是`DocumentFragment`的所有子节点，而不是`DocumentFragment`节点本身。返回值将是一个空的`DocumentFragment`节点。

**removeChild**

接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。发起者一定要是子节点的父节点！！

被移除的节点依然存在于内存之中，但不再是 DOM 的一部分。所以，一个节点移除以后，依然可以使用它，比如插入到另一个节点下面。

如果参数节点不是当前节点的子节点，`removeChild`方法将报错。

**replaceChild**

一个新的节点，替换当前节点的某一个子节点。

```js
var replacedNode = parentNode.replaceChild(newChild, oldChild);
```

**contains**

返回一个布尔值，表示参数节点是否满足以下三个条件之一。

- 参数节点为当前节点。
- 参数节点为当前节点的子节点。
- 参数节点为当前节点的后代节点。

**compareDocumentPosition**

用法同上

返回一个六个比特位的二进制值，表示参数节点与当前节点的关系。

**isEqualNode  isSameNode**

`isEqualNode`方法返回一个布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。

`isSameNode`方法返回一个布尔值，表示两个节点是否为**同一个**节点。

**normalize**

`normalize`方法用于清理当前节点内部的所有**文本节点**（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。

**getRootNode**

返回当前节点所在文档的根节点`document`，与`ownerDocument`属性的作用相同。

该方法可用于`document`节点自身（null，这一点与`document.ownerDocument`不同。

## **NodeList 接口 **

`NodeList`实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到`NodeList`实例。

通过以下方法可以得到`NodeList`实例。

- `Node.childNodes`
- `document.querySelectorAll()`等节点搜索法

由于很像数组，可以使用`length`属性和`forEach`方法。但它不是数组，不能使用`pop`或`push`之类数组特有的方法。

要使用数组方法，可以将其转为真正的数组。

```js
var children = document.body.childNodes;
var nodeArr = Array.prototype.slice.call(children);//将类数组转化为数组
```

注意，NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有`Node.childNodes`返回的是一个动态集合，其他的 NodeList 都是静态集合。

**item**

`item`方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。

如果参数值大于实际长度，或者索引不合法（比如负数），`item`方法返回`null`。如果省略参数，`item`方法会报错。

所有类似数组的对象，都可以使用方括号运算符取出成员。一般情况下，都是使用方括号运算符，而不使用`item`方法。

**keys，values，entries**

都返回一个 ES6 的遍历器对象，可以通过`for...of`循环遍历获取每一个成员的信息。区别在于，`keys()`返回键名的遍历器，`values()`返回键值的遍历器，`entries()`返回的遍历器同时包含键名和键值的信息。

```js
var children = document.body.childNodes;

for (var key of children.keys()) {
  console.log(key);
}
// 0
// 1
// 2
// ...

for (var value of children.values()) {
  console.log(value);
}
// #text
// <script>
// ...

for (var entry of children.entries()) {
  console.log(entry);
}
// Array [ 0, #text ]
// Array [ 1, <script> ]
// ...
```

## HTMLCollection 接口 

document.xxx

是一个节点对象的集合，只能包含**元素**节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与`NodeList`接口不同，它没有forEach方法，只能使用for循环遍历。

`HTMLCollection`实例都是动态集合，节点的变化会实时反映在集合中。

元素节点有`id`或`name`属性，那么`HTMLCollection`实例上面，可以使用`id`属性或`name`属性引用该节点元素。如果没有对应的节点，则返回`null`。

有**length** **item**

**namedItem**

方法的参数是一个**字符串**，表示`id`属性或`name`属性的值，返回对应的元素节点。如果没有对应的节点，则返回`null`。