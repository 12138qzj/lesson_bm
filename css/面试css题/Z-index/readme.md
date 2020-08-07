## 

## 层叠上下文 z-index
    1. position 不为static
    2. filter transform perspective 不为none
    3. will-change
    ## 层级大小等级

    定位的>非定位的(按照 元素在html中的出现顺序，越往后的顺序等级越高 但是不会高于一个层级)>


## 
js->relayout->repaint->composite(合成)->GPU绘制

## layers
    共同点：都是 Z-轴的 顺序
    transfrom: translate3d
    will-change
    video
    backface-visibility:hidden
    css3中 animation
提升为合成层的原因有一下几种
这里我大概罗列了这么多

video
    有 3D transform
    backface-visibility 为 hidden
    对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
    will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）
    重叠原因

### 提升layers好处（性能优化）
    当前这个layers变化不会影响其他layers的布局

    - 对于 transfrom，opacity 产生变化了，不会经过relayout repaint 直接跳到 composite

