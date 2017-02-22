# rnx-ui

[![Build Status](https://travis-ci.org/rnxteam/rnx-ui.svg?branch=master)](https://travis-ci.org/rnxteam/rnx-ui)
[![npm](https://img.shields.io/npm/v/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![npm](https://img.shields.io/npm/dt/rnx-ui.svg?maxAge=60)](https://www.npmjs.com/package/rnx-ui)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rnxteam/rnx-ui/master/LICENSE)

A UI Lib for React Native

## Start

### 1. Install

```
npm install rnx-ui --save
```

### 2. Use

```js
import React, {
  Component,
} from 'react';
import Btn from 'rnx-ui/Btn';

function Demo(props) {
  return <Btn />;
}
```

## Overview

`🖌` designing(8) `🛠` developing(1) `✅` done(25)

### Component

Name       | Description | State
---------- | ----------- | -----
[ActionSheet](https://github.com/rnxteam/rnx-ui/tree/master/ActionSheet)     | 上拉按钮组 | ✅
[AddAndSubtract](https://github.com/rnxteam/rnx-ui/tree/master/AddAndSubtract)      | 加减法动画组件 | ✅
[Alert](https://github.com/rnxteam/rnx-ui/tree/master/Alert)      | 警告弹框 | ✅
[All](https://github.com/rnxteam/rnx-ui/tree/master/All)      | 页面容器 | ✅
[Badge](https://github.com/rnxteam/rnx-ui/tree/master/Badge)      | 角标 | ✅
[Btn](https://github.com/rnxteam/rnx-ui/tree/master/Btn)        | 按钮 | ✅
[Checkbox](https://github.com/rnxteam/rnx-ui/tree/master/Checkbox)  | 选择框 | 🖌
[Confirm](https://github.com/rnxteam/rnx-ui/tree/master/Confirm)  | 确认弹框 | 🖌
[Drop](https://github.com/rnxteam/rnx-ui/tree/master/Drop)        | 掉落动画组件 | ✅
[HeaderedSheet](https://github.com/rnxteam/rnx-ui/tree/master/HeaderedSheet)        | 有标题栏的底部弹层 | ✅
[Icon](https://github.com/rnxteam/rnx-ui/tree/master/Icon)  | 字体图标 | 🖌
[ImgHolder](https://github.com/rnxteam/rnx-ui/tree/master/ImgHolder)  | 带占位的图片 | ✅
[ImgPicker](https://github.com/rnxteam/rnx-ui/tree/master/ImgPicker)  | 图片选择组件 | ✅
[ImgRollView](https://github.com/rnxteam/rnx-ui/tree/master/ImgRollView)  | 图片选择组件 | ✅
[KeyboardAdaptiveView](https://github.com/rnxteam/rnx-ui/tree/master/KeyboardAdaptiveView)        | 适应键盘的容器 | ✅
[Loading](https://github.com/rnxteam/rnx-ui/tree/master/Loading) | 菊花加载中动画 | ✅
[LoadingBtn](https://github.com/rnxteam/rnx-ui/tree/master/LoadingBtn) | 带菊花图的按钮 | 🖌
[NavBar](https://github.com/rnxteam/rnx-ui/tree/master/NavBar)     | 导航栏 | ✅
[Number](https://github.com/rnxteam/rnx-ui/tree/master/Number)     | 数字 | 🛠
[NumericKeyboard](https://github.com/rnxteam/rnx-ui/tree/master/NumericKeyboard)  | 虚拟数字键盘 | ✅
[Overlay](https://github.com/rnxteam/rnx-ui/tree/master/Overlay)     | 遮罩层 | ✅
[PlaceholderText](https://github.com/rnxteam/rnx-ui/tree/master/PlaceholderText)     | 有占位元素的文本显示组件 | ✅
[PlaceholderInput](https://github.com/rnxteam/rnx-ui/tree/master/PlaceholderInput)     | 可以自定义占位元素的输入框 | ✅
[PswdInput](https://github.com/rnxteam/rnx-ui/tree/master/Checkbox)  | 密码输入框（带有用于切换密码显隐的“眼睛”按钮） | 🖌
[PhoneNumInput](https://github.com/rnxteam/rnx-ui/tree/master/PhoneNumInput)     | 手机号码输入框 | ✅
[RefreshView](https://github.com/rnxteam/rnx-ui/tree/master/RefreshView)     | 滚动列表（带下拉刷新、上拉加载） | ✅
[Select](https://github.com/rnxteam/rnx-ui/tree/master/Select)  | 选择器（带有向上弹出和向下隐藏的动画、遮罩、取消确定标题栏） | 🖌
[Sheet](https://github.com/rnxteam/rnx-ui/tree/master/Sheet)     | 底部弹层 | ✅
[SlideMenu](https://github.com/rnxteam/rnx-ui/tree/master/SlideMenu)  | 侧滑菜单 | 🖌
[SmsCaptchaInput](https://github.com/rnxteam/rnx-ui/tree/master/SmsCaptchaInput)        | 短信验证码输入框 | ✅
[TabBar](https://github.com/rnxteam/rnx-ui/tree/master/TabBar)     | 横向点击栏 | ✅
[ToolTip](https://github.com/rnxteam/rnx-ui/tree/master/ToolTip)     | 提示框 | ✅
[VirtualPasswordInput](https://github.com/rnxteam/rnx-ui/tree/master/VirtualPasswordInput)  | 虚拟密码输入框 | ✅
[Web](https://github.com/rnxteam/rnx-ui/tree/master/Web)  | 类微信浏览器 | 🖌

### Util

Name       | Description | State
---------- | ----------- | -----
[transPxToDp](https://github.com/rnxteam/rnx-ui/tree/master/util/transPxToDp)      | 像素（px）转虚拟像素（dp）方法 | ✅
[Validator](https://github.com/rnxteam/rnx-ui/tree/master/util/Validator)      | 表单校验工具 | ✅

## Example

将项目克隆至本地后：

### 1. Install

```
npm install
```

### 2. Run

```
react-native run-ios
```

## Todo

- 修复多个 PlaceholderInput 切换输入时页面滚动错误的 bug
- Loading 可添加文字
- HeaderedSheet 新增按钮禁用属性，类似 NavBar
- ActionSheet 补充 demo 及图片
- ImgPicker 补充 demo 及图片
- PlaceholderInput 补充 demo 及图片
- PlaceholderText 补充 demo 及图片
- All 补充 demo 及图片
- 统一 `underlayColor`
- Validator demo 中把 PlaceholderInput、PlaceholderText 也加进去
- ImgHolder 图片加载完成移除底图
- 补全 Example
- 添加 test 执行脚本，检查 Example 下是否有对应示例
- demo 图片缩小，并迁移至微博图床
- Badge 添加小圆点样式
- 文字走马灯组件（用于 title）

### `*input` 系列组件

- 添加 `required` 属性
- 在 `onChangeText` 中将 `name` 的值作为第二个参数传入
- value 设置默认值为 `''`
