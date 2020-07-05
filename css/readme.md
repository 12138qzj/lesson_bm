面试题： W3C 标准属性有多少？

    获取css的属性值，css渲染是树的渲染
    //CSS的属性是JOSN的结构，则可以获取JSON所有的key 使用object.keys(结点)---所有css属性
- 获取W3C属性 
 // chrome浏览器是带webkit 前缀。
  使用数组的过滤函数filter 过滤掉带有webkit的css属性。
  ```js

  Object.keys(ul.style).filter((item) => {
            return !item.includes("webkit");
            // return !item.match(/^webkit/);
        })
  ```
