# 关键转化

它分为以下几个关键部分：

- Scanner 扫描器（scanner.ts）：
- Parser 解析器（parser.ts）
- Binder 绑定器（binder.ts）
- Checker 检查器（checker.ts）
- Emitter 发射器（emitter.ts）

源码 ~~扫描器~~> Tokens ~~解析器~~> AST ~~发射器~~> JavaScript

** 在代码编译阶段 **
   1. 分词/词法分析阶段：源码 -> 扫描器（Scanner） -> 词法单元（token）
   2. 解析/语法分析阶段：词法单元（token）-> 解析器（Parser）-> 抽象语法树（AST）
   3. AST ~~ 绑定器 ~~> Symbols（符号）
    符号（Symbol）是 TypeScript 语义系统的主要构造块。如上所示，符号是绑定的结果。符号将 AST 中的声明节点与相同实体的其他声明相连。

    符号和 AST 是检查器用来验证源代码语义的

   4. AST + 符号 ~~ 检查器 ~~> 类型验证
    最后，需要输出 JavaScript 时：

   5. AST + 检查器 ~~ 发射器 ~~> JavaScript 代码
