# git/js/React

## 一、同步fork的仓库

1.git终端中定位到自己的本地仓库目录，并切换到master分支

> git checkout master

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDI5ODE0MzI0NQ==630298143245)

2.添加原仓库路径

>git remote -v   #  查看关联的远程仓库
>
>git remote add latest https://github.com/Cacolet/React-.git    # 是我的仓库不是你们fork的

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDMwMTk2OTQ5MQ==630301969491)

3. 获取latest上的内容

   > git fetch latest

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDMwMjg4OTI2MA==630302889260)

4.合并到本地的master上

>git branch  #  查看当前分支  确保在master上
>
>git merge latest/master

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDMwMzAwNTMyNg==630303005326)

此时通过git log 查看日志

> git log

可以看到已经与原仓库一致了

5.将更新的内容提交到自己的远程仓库

> git push origin master

**注意：切忌不要自己去修改master中的内容，即不要直接在master分之上进行`commit`**

**后续操作（完成今天的任务），请在按照昨天提PR的步骤，切一个新的分支**

**下次同步只需要执行 `git fetch latest/master`即可，后续步骤与上面叙述的一致**

## 二、ES5

```
1. javascript原始值类型有哪些（ES5）
2. 为什么 0.1 + 0.2 !== 0.3
3. 判断数据类型的方法有哪几种
4. null是对象吗，为什么typeof null === 'object'
5. == 与 === 有什么区别
6. 什么是类数组,如何将类数组转换为数组
```

## 三、React

```
提交一个渲染年月日 时间实时更新 的界面
```

***格式****

```
2021-8-30
    - 201931061595-xiaowu
        - README.md         # 介绍自己的目录
        - answer.md         # 自己的做答
        - note.md           # 学习记录的笔记
        - react.js   	    # react 代码
```

