
1. let el = document.getElementById('app');
    el.style.width = (el.offsetWidth+1) + 'px';
    el.style.width = 1 + 'px'

    回引发几次回流?几次重绘? 

重排/回流：元素位置大小发生改变，当通过  api获取大小位置信息 浏览器会给出实时的数据则会重排（强行重排）一次