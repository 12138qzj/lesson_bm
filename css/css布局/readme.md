## normal flow(正常流)
1. 行内元素（inline-level-box）：水平从左往右一个接着一个布局，垂直方向默认会以baseLine 对齐
2. 行内元素（inline-level-box）：垂直方向从上到下一个接着一个布局

## baseLine
    英语练习本的倒数第二条线
    inline 没有任何文字的时候

## position

 absolute
 container

 transform / perspective 不是none
 will-change 是 
 ## containing block(包含块)
    在CSS 2.2中，许多框的位置和大小是相对于称为“ 包含块 ”的矩形框的边缘计算的

    盒子大小，尺寸都是根据我们包含块来计算，
    一个元素的包含块：containing block箱子，箱子装着元素，箱子里面的元素放到哪里，大小？
    首先先确定包含块的位置大小。

    ```css
    width: 100%;  // 父级 （x）
    height: 100%;
    ```

## 怎么确定 containing block

确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

- 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块级元素（比如说inline-block, block 或 list-item元素）
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素。
- 如果 position 属性是 fixed，是 viewport,
- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
  - transform / perspective 不是 none
  - will-change 是 transform， perspective
  - filter不是 none 或者 will-change 是 filter(only works on Firefox).
  - contain 是 paint (例如: contain: paint;)