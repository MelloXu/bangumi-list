---
title: git踩坑之Permission denied
key: 20180416
tags: git github 问题解决
---

<!--more-->

```
Permission denied (publickey)
Please make sure you have the correct access rights and the repository exists.
```

在删除一个git项目的子目录后提交时报了这样的错，为了记的更清楚整理一下解决方法。

搜索得知这个报错极大多数情况是由于github账号没有设置ssh公钥信息所致。

**1. 首先打开.ssh目录**

```
# Mac下
$ open ~/.ssh

# Windows下打开git bash 输入
$ cd ~/.ssh
# 回车 表示跳转到.ssh目录 然后输入pwd，回车，查看当前具体目录
```

**2. 删除该文件夹下的known_hosts文件**

**3. git 输入命令**
```
$ ssh-keygen -t rsa -C "your@email.com"（请填你设置的邮箱地址）

# 回车，然后会出现
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):

# 一路回车到结束
```

系统会自动在.ssh文件夹下生成两个文件，id_rsa和id_rsa.pub，用编辑器打开id_rsa.pub

复制全部内容

**4. 打开[你的github页面](https://github.com/){:target="_blank"}(登录账号）**

点击右上角你的头像

进入Settings > SSH and GPG keys

选择 New SSH Key

Title填写id_rsa.pub或者随意

Key填写你刚刚复制的文本

点击 Add SSH Key

**5. 在git中输入命令**
```
$ ssh -T git@github.com

# 然后会出现一堆内容，之后输入yes确认
yes
```
回车，然后就会提示你成功了。

然后尝试退出git重新提交一下项目就可以了。

