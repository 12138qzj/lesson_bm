CSS属性值对大小写敏感吗？
    不敏感的？

    1. 属性名-- color：red; / Color:red; 这两个是一样的效果。
    2. 属性值-- color：Red; / Color:red; 这两个是一样的效果。
    3. CSS的选择器 是对大小写的敏感的。 id="ele" / id="Ele" 这个是不一样的

## 盒子模型
    margin-top,margin-bottom 对行内元素是否有效？

    ***没有效果****

    设置左右外边距和 是有效果的 
        左右上下内边距padding 有效果的 但是不会影响其他元素的位置
    设置上下外边距 是没有效果的 
    
3. 有一个<P>标签是font-size: 10rem， 标签中的文本大小是否会随着窗口尺寸的改变而改变?
答:不会，rem是一个相对html的font-size的单位会随着font-size的改变而改变，不会随着窗口

与之相类似的自适应的单位有：
    rem em：
        根据html的font-size来制定尺寸
            使用蓝湖设计稿 
    vw/vh：
     将可视窗口分成100份 
    、百分比、(media query)、calc

    js babel 
    webpack css .styl .scss -> css-loader stylus-loader stylus css 编译

    postcss 全新的css库 平台 插件系统

    babel-core 使用autoprefixer 完成适配
     加入 浏览器适配 -webkit-box
     postcss-px-to-viewport: 作为vue中vw的适配方案

     postcss 在vue中 内置了
      .postcssrc.js
      将px转换为vw  px-to-vw
      使用插件 postcss-px-to-viewport
 

