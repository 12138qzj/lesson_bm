   decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码。

    decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。

    从W3C的定义和用法来看，两者没有什么区别，但是两者的参数是有区别的：
2.使用中区别用法
    区别：encodeURIComponent和decodeURIComponent可以编码和解码URI特殊字符（如#，/，￥等），而decodeURI则不能。
    可以看出encodeURI和decodeURI对URI的特殊字符是没有编码和解码能力的，实际项目中我们一般需要get请求的方式在地址栏中拼接一些参数，但是参数中如果出现#，/,&这些字符，就必须要用decodeURIComponent了，不然这些特殊字符会导致我们接收参数的错误