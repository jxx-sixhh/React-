用js实现了一个伪react库

```
/*
* React源码学习
*
* 实现一个伪React库
*
* 大致思路就是利用jsx转换后的对象，进行页面的渲染。
* */


/*
* 实现createElement、createTextElement函数方法
*
* 这两个方法主要的作用是将jsx转换后的对象进行节点的创建
* */
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object" ? child : createTextElement(child)
            )
        }
    }
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    };
}


/*
* 实现render方法
*
* 将创建好的节点进行页面的渲染
*
* 主要是通过appendChild方法添加
* */

function render(element, container) {
    const dom = element.type === "TEXT_ELEMENT"
        ? document.createTextNode("") : document.createElement(element.type);

    const isProperty = key => key !== "children";

    // 说明下Object.key(object)  返回的是对象的属性名组成的数组
    Object.keys(element.props).filter(isProperty).forEach(name => {
        dom[name] = element.props[name];
    });


    element.props.children.forEach(child => render(child, dom));
    container.appendChild(dom);

}


const Didact = {
    createElement,
    render
}

/** @jsxRuntime classic*/
/** @jsx Didact.createElement */


const element = (
    <div style="background: salmon">
        <h1>Hello world </h1>
        <h2 style="text-align:right">from Didcat</h2>
    </div>
);
const container = document.getElementById('root');
Didact.render(element, container);

```

大数相加

```
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if (num1 === '0') return num2
    if (num2 === '0') return num1
    let len1 = num1.length - 1,len2 = num2.length-1
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
    return ans
}

```

思路：

> 使用len1和len2两个指针来模仿从个位开始的加法运算 每一次循环都拿到当前位置的字符与0进行计算，隐式转换成num类型，然后使用temp记录当前的两位数与前一位的和，向下取整拿到下一次循环的进位 ，然后temp对10取余，拿到当前位置的数，一次循环即可，特别的，如果最后最后一次循环还是有进位的话，直接用`+`把字符串拼接上

