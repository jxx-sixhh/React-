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
