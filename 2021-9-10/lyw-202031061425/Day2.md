# ParentNode  ChildNode 

## ParentNode

*`ParentNode`接口表示当前节点是一个父节点，提供一些处理子节点的方法。*

只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有`ParentNode`接口。

**children **

`children`属性返回一个`HTMLCollection`实例，成员是当前节点的所有**元素**子节点。该属性只读。

`HTMLCollection`是动态集合，会实时反映 DOM 的任何变化。

**firstElementChild & lastElementChild **

返回当前节点的第一个/最后一个**元素**子节点。如果没有任何元素子节点，则返回`null`。

`document`节点的第一个元素子节点和最后一个元素子节点都是是`<HTML>`（因为`document`只包含这一个元素子节点）。

**childElementCount**

返回一个整数，表示当前节点的所有**元素**子节点的数目。

**append prepend**

*append*

为当前节点追加一个或多个子节点（后面加多个参数），位置是最后一个元素子节点的后面。

该方法不仅可以添加元素子节点（参数为元素节点），还可以添加文本子节点（参数为字符串）。

没有返回值。

该方法与`Node.prototype.appendChild()`方法有三点不同。

- `append()`允许字符串作为参数，`appendChild()`只允许子节点作为参数。
- `append()`没有返回值，而`appendChild()`返回添加的子节点。
- `append()`可以添加多个子节点和字符串（即允许多个参数），`appendChild()`只能添加一个节点（即只允许一个参数）。

*prepend*

大致同上，只是添加在最前面

## **ChildNode**

如果一个节点有父节点，那么该节点就拥有了`ChildNode`接口。

**remove**

```js
el.remove()
```

**before&after**

`before()`方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。

同样可以传递多个参数

可以传递字符串作为文本节点

`after()`方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。用法与`before`方法完全相同。

**replaceWith**

`replaceWith()`方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。调用者被替换。

# Document

`document`节点对象代表整个文档，每张网页都有自己的`document`对象。

`document`对象继承了`EventTarget`接口和`Node`接口，并且混入（mixin）了`ParentNode`接口。这意味着，这些接口的方法都可以在`document`对象上调用。除此之外，`document`对象还有很多自己的属性和方法。

## 属性

**defaultView**

返回`document`对象所属的`window`对象。如果当前文档不属于`window`对象，该属性返回`null`。

**doctype**

`document.doctype`，指向`<DOCTYPE>`节点，即文档类型（Document Type Declaration，简写DTD）节点。HTML 的文档类型节点，一般写成`<!DOCTYPE html>`。如果网页没有声明 DTD，该属性返回`null`。`document.firstChild`通常就返回这个节点。

**documentElement**

返回当前文档的根元素节点（root）。它通常是`document`节点的第二个子节点，紧跟在`document.doctype`节点后面。HTML网页的该属性，一般是`<html>`节点。

**body head**

`body`属性指向`<body>`节点，`head`属性指向`<head>`节点。

这两个属性总是存在的，如果网页源码里面省略了`<head>`或`<body>`，浏览器会自动创建。如果改写它们的值，相当于移除所有子节点。

### 节点集合

表示文档内部特定元素的集合。这些集合都是动态的，原节点有任何变化，立刻会反映在集合中。

**links**

返回当前文档所有**设定了`href`**属性的`<a>`及`<area>`节点。

**forms** **images**  **scripts**  **styleSheets** 

除了`document.styleSheets`属性，以上的其他集合属性返回的都是`HTMLCollection`实例。`document.styleSheets`属性返回的是`StyleSheetList`实例。

### 文档静态信息属性

**documentURI，document.URL**

`documentURI`继承自`Document`接口，可用于所有文档；`URL`继承自`HTMLDocument`接口，只能用于 HTML 文档。

**domain（域名）** **location** **lastModified** **title** **characterSet**  **referrer** 

### 文档状态属性

**hidden**

返回一个布尔值，表示当前页面是否可见。如果窗口最小化、浏览器切换了 Tab，都会导致导致页面不可见，使得`document.hidden`返回`true`。

**visibilityState**

- `visible`：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
- `hidden`：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
- `prerender`：页面处于正在渲染状态，对于用户来说，该页面不可见。
- `unloaded`：页面从内存里面卸载了。

**readyState**

`document.readyState`属性返回当前文档的状态，共有三种可能的值。

- `loading`：加载 HTML 代码阶段（尚未完成解析）
- `interactive`：加载外部资源阶段
- `complete`：加载完成

## 方法

**document.write()，document.writeln()**

`document.write`会当作 HTML 代码解析，不会转义。如果页面已经解析完成，再调用`write`方法，它会先调用`open`方法，擦除当前文档所有内容，然后再写入。

`document.writeln`方法与`write`方法完全一致，除了会在输出内容的尾部添加换行符。

**querySelector querySelectorAll**

`document.querySelector`方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回**第一个**匹配的节点。如果没有发现匹配的节点，则返回`null`。

`document.querySelectorAll`方法与`querySelector`用法类似，区别是返回一个`NodeList`对象，包含所有匹配给定选择器的节点。返回的结果是静态集合。

但是，它们不支持 CSS 伪元素的选择器（比如`:first-line`和`:first-letter`）和伪类的选择器（比如`:link`和`:visited`），即无法选中伪元素和伪类。

这两个方法除了定义在`document`对象上，还定义在元素节点上，即在元素节点上也可以调用。

**getElementsByTagName**

搜索 HTML 标签名，返回符合条件的元素。它的返回值是一个类似数组对象，可以实时反映 HTML 文档的变化。

返回结果中，各个成员的顺序就是它们在文档中出现的顺序。

元素节点本身也定义了`getElementsByTagName`方法，返回该元素的后代元素中符合条件的元素。也就是说，这个方法不仅可以在`document`对象上调用，也可以在任何元素节点上调用。

**getElementsByClassName**

回一个类似数组的对象，元素的变化实时反映

参数可以是多个`class`，它们之间使用空格分隔。

不仅可以在`document`对象上调用，也可以在任何元素节点上调用。

**getElementsByName**

拥有`name`属性的 HTML 元素（比如`<form>`、`<radio>`、`<img>`、`<frame>`、`<embed>`和`<object>`等

**elementFromPoint  elementsFromPoint**

`elementFromPoint()`方法返回位于页面指定位置最上层的元素节点。

里面写坐标，两个参数，依次是相对于当前视口左上角的横坐标和纵坐标，单位是像素

`document.elementsFromPoint()`返回一个数组，成员是位于指定坐标（相对于视口）的所有元素。

**createElement**

生成元素节点，并返回该节点。

注意，`document.createElement`的参数可以是自定义的标签名。

**createAttribute**

生成一个新的属性节点（`Attr`实例），并返回它。

**createEvent**

生成一个事件对象（`Event`实例），该对象可以被`element.dispatchEvent`方法使用，触发指定事件。

**addEventListener  removeEventListener  dispatchEvent**

添加事件监听函数 移除事件监听函数 触发事件

**hasFocus**

方法返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。

有焦点的文档必定被激活），反之不成立，激活的文档未必有焦点。比如，用户点击按钮，从当前窗口跳出一个新窗口，该新窗口就是激活的，但是不拥有焦点。

# Element

`Element`节点对象对应网页的 HTML 元素。每一个 HTML 元素，在 DOM 树上都会转化成一个`Element`节点对象（简称元素节点）。

### 属性

**id**

返回指定元素的`id`属性，该属性可读写。

**tagName**

返回指定元素的大写标签名，与`nodeName`属性的值相等。

**title**

读写当前元素的 HTML 属性`title`。该属性通常用来指定，鼠标悬浮时弹出的文字提示框。

**hidden**

返回一个布尔值，表示当前元素的`hidden`属性，用来控制当前元素是否可见。

该属性与 CSS 设置是互相独立的

这个属性只在 CSS 没有明确设定当前元素的可见性时才有效。

**className&classList** 

`className`属性用来读写当前元素节点的`class`属性。它的值是一个字符串，每个`class`之间用空格分割。

`classList`属性返回一个类似数组的对象，当前元素节点的每个`class`就是这个对象的一个成员。

`classList`对象有下列方法。

- `add()`：增加一个 class。

- `remove()`：移除一个 class。

- `contains()`：检查当前元素是否包含某个 class。

- `toggle()`：将某个 class 移入或移出当前元素。//不存在就加入 否则移除   可以接受一个布尔值，作为第二个参数。如果为`true`，则添加该属性；如果为`false`，则去除该属性。

- `item()`：返回指定索引位置的 class。

  

**dataset** 

网页元素可以自定义`data-`属性，用来添加数据。

`Element.dataset`属性返回一个对象，可以从这个对象读写`data-`属性。

连词线后面跟了一个英文字母，那么连词线会取消，该字母变成大写。

**innerHTML **

如果文本之中含有`<script>`标签，虽然可以生成`script`节点，但是插入的代码不会执行。

如果插入的是文本，最好用`textContent`属性代替`innerHTML`。

**outerHTML** 

返回该元素本身和所有子元素。

如果一个节点没有父节点，设置`outerHTML`属性会报错。

**clientXXX**

***clientLeft、clientHeight、clientWidth、clientHeight***



![图片描述](https://img-blog.csdnimg.cn/img_convert/fd1dfa3fcce901d2c2e0914bad8df59e.png)





![图片描述](https://img-blog.csdnimg.cn/img_convert/7278dca234250d2232fedb6005a11c3f.png)

**scrollxxx**

scrollHeight：在没有滚动条的情况下，元素内容的总高度。（包括隐藏的高度）

scrollWidth：在没有滚动条的情况下，元素内容的总宽度。（包括隐藏的宽度）

scrollLeft：被隐藏在内容区域左侧的像素数。

scrollTop：被隐藏在内容区域上方的像素数。

![img](https://img-blog.csdn.net/20180329171943873?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI3NTUzOTM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)





**offsetXXX**

offsetHeigh  offsetWidth offsetLeft  offsetTop offsetParent

`offsetParent`属性返回最靠近当前元素的、并且 CSS 的`position`属性不等于`static`的上层元素。

如果该元素是不可见的（`display`属性为`none`），或者位置是固定的（`position`属性为`fixed`），则`offsetParent`属性返回`null`。

offsetHeight：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、水平滚动条的高度、上边框高度和下边框的高度。

offsetWidth：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、垂直滚动条的宽度、左边框宽度和右边框宽度。

offsetLeft：元素的左外边框至包含元素的左内边框之间的像素距离。

offsetTop：元素的上外边框至包含元素的上内边框之间的像素距离。



方法![img](https://img-blog.csdn.net/20180329171727747?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTI3NTUzOTM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



### 方法

- `getAttribute()`：读取某个属性的值
- `getAttributeNames()`：返回当前元素的所有属性名
- `setAttribute()`：写入属性值
- `hasAttribute()`：某个属性是否存在
- `hasAttributes()`：当前元素是否有属性
- `removeAttribute()`：删除属性
- closest ：一个 CSS 选择器作为参数，返回匹配该选择器的、最接近当前节点的一个祖先节点（包括当前节点本身）。如果没有任何节点匹配 CSS 选择器，则返回`null`。
- matches ：返回一个布尔值，表示当前元素是否匹配给定的 CSS 选择器。
- `Element.addEventListener()`：添加事件的回调函数
- `Element.removeEventListener()`：移除事件监听函数
- `Element.dispatchEvent()`：触发事件
- scrollIntoView：滚动当前元素，进入浏览器的可见区域
- getBoundingClientRect :返回一个对象，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息。
- focus()，Element.blur():将当前页面的焦点，转移到指定元素上。将焦点从当前元素移除。

