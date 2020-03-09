# 基于Element的自适应折叠菜单

## demo

![demo](../../assets/ml-horizontal-menu.gif)

## 实现思路

- 拆解菜单为 `显示区域` 和 `缩放区域`
- 使用 `float + 负margin`，实现 `两栏`布局
- 监听父容器resize事件 （推荐使用 [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)）
- 初次渲染将所有数据统统传给 `显示区域` ，触发首次resize
- 触发resize时，计算当前父元素宽度最大可以容纳多少个子元素 `menuLength`
- 由于数组的长度 `arr.Length` 我们知道，所以将arr拆分`两个`数组
- `showArr` 和 `hideArr` 分别传给 显示区域 和 隐藏区域
- 每次触发resize，重新计算

## 总结

`resize-observer-polyfill` 是一个非常好用的 `ResizeObserver` polyfill，其实现原理也十分有趣。  
使用在元素内部添加滚动元素，然后通过内部元素的 `滚动事件` 触发来模拟 resize，是个鬼才～
