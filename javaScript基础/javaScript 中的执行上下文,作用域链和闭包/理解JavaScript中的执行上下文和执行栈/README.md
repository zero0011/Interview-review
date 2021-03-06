# 理解 JavaScript 中的执行上下文 和 执行栈
    如果你是一名 JavaScript 开发者 , 你必须知道 JavaScript 程序内部是如何执行的。理解执行上下文和执行栈对于理解其他 JavaScript 概念(如变量声明提升 , 作用域和 闭包)至关重要

## 什么是执行上下文
间而言之 , 执行上下文是评估和执行 JavaScrpipt 代码的环境的抽象概念。每当 JavaScript 代码在运行的时候 , 它都是在执行上下文中运行

### 执行上下文的类型
JavaScript中有三种执行上下文类型
- 全局执行上下文 : 这是默认或者基础的上下文,任何不在函数内部的代码都在全局上下文中。它会执行两件事情: 创建一个全局的 window 对象(浏览器的情况下) , 并且设置 this 的值等于这个全局对象。一个程序中只有有一个全局执行上下文。
- 函数执行上下文 : 每当一个函数被调用时 , 都会为该函数创建一个新的上下文。每个都有它自己的执行上下文, 不过在是函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建, 它会按**定义**的顺序(将在后文讨论)执行一系列步骤
- Eval 函数执行上下文 : 执行在 eval 函数内部的代码也会有它属于自己的执行上下文 ,但由于 JavaScript 开发者并不经常使用 eval ,所以这里不讨论

## 执行栈
执行栈, 也就是在其他编程语言中所说的 "调用栈" , 是一种拥有 LFIO (先进后出) 数据结构的栈 , 被用来存储代码运行时创建的所有执行上下文。

当 JavaScript 引擎第一次遇到你的脚本时 ,它会创建一个全局的执行上下文并且压入当前执行栈 .每当引擎遇到一个**函数调用** , 它会该函数创建一个新的执行上下文并压入栈的顶部。

引擎会执行那些执行上下文位于栈顶的函数。当该函数执行结束时 , 执行上下文从栈中弹出 , 控制流程到达当前栈中的下一个上下文。

## 怎么创建执行上下文
创建执行上下文有两个阶段 : 
1. 创建阶段
2. 执行阶段

在 JavaScript 代码执行前 , 执行上下文将经历创建阶段。在创建阶段会发生三件事:
1. this 值的决定 , 即我们所熟悉的 this 绑定
2. 创建词法环境组件
3. 创建变量环境组件

### This 绑定
在全局执行上下文中 , this 的值指向全局对象。(在浏览器中 , this 引用 Window 对象)
在函数执行上下文中 , this 的值取决于该函数被如何调用的。如果它被一个引用对象调用 , 那么 this 会被设置成那个对象 , 否则 this 的值被设置为全局对象 或者 undefined (在严格模式下)

### 词法环境
    词法环境是一种规范类型 , 基于 ES 代码的词法嵌套结构来定义标识符 和具体变量和函数的关联。严格词法环境由环境记录器和一个可能的外部词法环境的空值组成。

简单来说词法环境是一种标识符