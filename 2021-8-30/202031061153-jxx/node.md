今天复习了ESMAScript有关数据类型的基本知识。用react state的知识做了个小练习。

我发现直接写setInterval会报错。

 `setInterval(() => {`

​      `const { year, month, day } = *this*.state;`

​      `*this*.setState({ year, month, day: year, month, day });`

​     `}, 1000);`

然后我在外面加了个组件装载完毕的钩子就不报错了

`componentDidMount() {`

​     `setInterval(() => {`

​      `const { year, month, day } = *this*.state;`

​      `*this*.setState({ year, month, day: year, month, day });`

​     `}, 1000);`

​    `}`

神奇。今天没时间卷了 明天研究一下

