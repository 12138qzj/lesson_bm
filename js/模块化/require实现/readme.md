### 7.分析实现步骤

1. 导入相关模块，创建一个Require方法。

2. 抽离通过Module._load方法，用于加载模块。

3. Module.resolveFilename 根据相对路径，转换成绝对路径。

4. 缓存模块 Module._cache，同一个模块不要重复加载，提升性能。

5. 创建模块 id: 保存的内容是 exports = {}相当于this。

6. 利用tryModuleLoad(module, filename) 尝试加载模块。

7. Module._extensions使用读取文件。

8. Module.wrap: 把读取到的js包裹一个函数。

9. 将拿到的字符串使用runInThisContext运行字符串。

10. 让字符串执行并将this改编成exports。