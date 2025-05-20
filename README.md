# Todo List - GitHub协作开发入门项目

[![GitHub license](https://img.shields.io/github/license/Ad02826/todo-list)](https://github.com/你的用户名/todo-list)
[![GitHub stars](https://img.shields.io/github/stars/Ad02826/todo-list)](https://github.com/你的用户名/todo-list/stargazers)

一个用于学习GitHub核心功能的入门级项目，通过开发简单的待办事项列表，掌握仓库管理、分支操作、PR协作等技能。

## 🚀 在线演示
[https://Ad02826.github.io/todo-list/](https://yourusername.github.io/todo-list/)

## 📋 功能特性
- 添加/删除待办事项
- 本地数据持久化（localStorage）
- 响应式界面设计
- GitHub全流程开发实践

## 🛠️ 技术栈
- **前端**：HTML5 / CSS3 / JavaScript
- **工具链**：Git / GitHub Pages
- **代码规范**：Semantic Commit Messages

## 🛠️ 开发指南

### 环境准备
1. 注册 [GitHub账号](https://github.com)
2. 安装 [Git](https://git-scm.com/)
3. 推荐编辑器：VS Code

### 快速开始
```bash
# 克隆项目
git clone https://github.com/你的用户名/todo-list.git
cd todo-list

# 启动本地服务（需要安装Live Server插件）
open index.html
```
## 🛠️ git的四种工作区域

![image](https://github.com/user-attachments/assets/bf2b0b95-87bb-4825-ae71-33f62bbb15b4)

## 🛠️ 基础的git命令

### 📁 仓库管理
```bash
git init                 # 初始化本地 Git 仓库
git clone <url>         # 克隆远程仓库到本地
```
### 📄 查看状态与日志
```bash
git status              # 查看当前工作区状态
git log                 # 查看提交历史
git log --oneline       # 简洁格式查看提交历史
git diff                # 查看文件变更差异
```
### 📝 文件操作
```bash
git add <file>          # 添加指定文件到暂存区
git add .               # 添加所有改动文件到暂存区
git commit -m "msg"     # 提交暂存区到本地仓库，附带提交信息
git rm <file>           # 删除文件并提交删除操作
git mv <old> <new>      # 重命名或移动文件
```
### 🔄 分支管理
```bash
git branch              # 查看本地分支列表
git branch <name>       # 创建新分支
git checkout <name>     # 切换到指定分支
git checkout -b <name>  # 创建并切换到新分支
git merge <name>        # 将指定分支合并到当前分支
git branch -d <name>    # 删除本地分支
```
### ⬆️ 远程仓库
```bash
git remote -v                   # 查看远程仓库地址
git remote add origin <url>    # 添加远程仓库地址（origin 为默认名）
git push origin <branch>       # 推送分支到远程仓库
git pull                       # 拉取远程分支并合并
git fetch                      # 获取远程仓库更新，不自动合并
```
### 🧹 撤销与回退
```bash
git reset <file>               # 撤销暂存区中文件
git checkout -- <file>         # 撤销工作区文件的修改
git reset --soft HEAD^         # 回退上一次提交，保留修改
git reset --hard HEAD^         # 回退上一次提交并丢弃修改
git revert <commit>            # 反做指定提交，生成一个新的提交记录
```
### 🧪 标签操作
```bash
git tag                        # 查看所有标签
git tag <tagname>              # 创建标签
git tag -d <tagname>           # 删除标签
git push origin <tagname>      # 推送指定标签到远程
git push origin --tags         # 推送所有标签到远程
```
### ⚙️ Git 配置与帮助
```bash
git config --global user.name "你的名字"        # 设置全局用户名
git config --global user.email "你的邮箱"        # 设置全局邮箱地址
git config --list                               # 查看当前所有 Git 配置
git help <command>                              # 查看某个命令的帮助说明
```
