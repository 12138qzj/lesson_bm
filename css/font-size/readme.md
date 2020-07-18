## 尺寸单位
    - em : 相对于自己的font-size, （相于父元素的 font-size X）4
    - rem :html 的font-size 

设计稿的font-size


DPR ： decive piex ratio 设备的真实像素 /1px
        DPR = 设备像素 / CSS像素(某一方向上)

        以iphone8为例，iphone8的CSS像素为375px*677px，DPR是2，所以其设备像素为750px*1354px

        在html中meta标签作用：让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放
DPR计算
  750(px) / 375(px)  = 2
  1354(px) / 677(px) = 2
  750(px)*1354(px) /  375(px)*677(px) = 4


等比缩放
 屏幕划分10等分
  750/10=75
  1125/10=112.5
  一份就是 1rem html:font-size 75px 或者是



css中 ipx在不同设备上 渲染出来的数据真实像素是不一样的 2px(ip6) 3px(ipx)