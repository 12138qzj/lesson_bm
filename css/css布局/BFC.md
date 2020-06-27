## 格式化上下文
koa: ctx  === context
token: 泛指

```js
let a = 123;
function foo() {
  return a + 1;
}
foo()
```

## BFC
- 介绍：块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
block-formating-context
隔离的容器

## 新建一个BFC
 创建一个html自动生成一个BFC
 - float 
 - absolute
 - display: inline-blocks || table-cell || table-caption || flex || grid
 - overflow 不为 visiable属性（这个带来的副作用比较小）
 - 根元素默认新建 BFC

## BFC规则
- BFC相当于一个隔离板 将盒子隔离开来
- 盒子在垂直反向上。从上往下布局
- 在垂直方向上的距离 margin 决定，同一个BFC之内。垂直方向上 block-level=box margin 会折叠（塌陷）
同一个 BFC 之内， 垂直方向上 block-level-box margin会折叠 (留白，够了就行)
- 由于有 float 元素，一个盒子大小可能会缩小，除非他新建 一个 BFC(overflow清理浮动)
- BFC 区域 不会 float 重叠 (左侧固定，右边自适应)


## flex 布局
react-native 只支持 flex，RN 已经证明了 只用 flex 是可以很好的完成布局。

## float

文字环绕的
float 用来 布局了，float 清除
clear：both（left,right）


## layout
normal flow：
postion：
float: 文字环绕， 布局：几行几列
flex：