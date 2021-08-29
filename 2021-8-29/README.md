## 提交一次PR

### 任务

1.按照首页的README格式提交一个PR

### 所需准备

- 安装git
- 默认会git基本操作，不会的[快速学习](https://www.liaoxuefeng.com/wiki/896043488029600)一下

### 提交PR步骤

1.fork本仓库

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDIzNDMwMTgwNw==630234301807)

2.clone到本地

```
git clone 你fork仓库后的地址
```

3.创建+切换一个新分支

> 建议每天的任务单独的一个分支

分支规范  feature/20210829/wcy

```
git checkout -b feature/20210829/wcy
```

4.开始书写你的内容

5.提交到暂存区

```
git add .      #提交本地所有改动
git add 文件名 #提交指定文件
```

6.提交到本地仓库

```
git commit -m "feat:本次提交的描述信息"
```

7.提交到远程仓库

```
git push -u origin 分支名  # 新分支的首次提交
git push				# 之后提交
```

8.提取PR

> 此步骤在github上面操作

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDIzNTIxNzQ5NQ==630235217495)

选择目标分支 与待合并的分支

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDIzNTMxODI5OQ==630235318299)

然后点击`create pull request`

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDIzNTM3OTkxOA==630235379918)

确认创建PR

![图片](https://img.cdn.sugarat.top/mdImg/MTYzMDIzNTQzMjM0OQ==630235432349)

完成