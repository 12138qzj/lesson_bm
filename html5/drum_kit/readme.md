- 页面先写结构
    类名语义化 .key>.sound
    结构从外到内，
    良好的结构是页面的基础
- 写结构不用考虑样式
- 样式
    - 块级元素——block
        行类元素 
        弹性布局 ——display:flex;
        所有子元素的块级能力被干掉
        min-height:100vh;/*min-height 最小高度*//*100vh相对于对象高度  每个物体的最大高度*/
        justify-content:center;/*调整内容：居中*/
        align-items;center;  /*水平居中*/
- html 默认是字体大小为16px
    rem 和 vh 一样都是相对单位
    rem 是相对于html的字体大小
    0.4rem =16*0.4=6.389px;
    在手机端px 不准确 适配所有的手机
- 盒子模型从外到内
    margin + boder + padding + content