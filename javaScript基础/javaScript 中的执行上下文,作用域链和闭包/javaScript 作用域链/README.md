# 作用域链

当 JavaScript 代码执行一段可执行代码时 , 会创建对应的执行上下文
对应每个执行上下文 , 都有三个主要属性:
- 变量对象
- 作用域链
- this

## 作用域链
当查找变量的时候 , 会先从当前上下文的变量对象中查找 , 如果没有找到 , 就会从父级(词法层面上的父级)执行上下文的变量对象中查找 , 一直找到全局上下文的变量对象 , 也就是全局对象。
这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

## 函数创建
函数的作用域在函数定义的时候就决定了

这是因为函数有一个 内部属性 [[scope]] , 当函数创建的时候 , 就会保存所有父变量对象到其中 , 你可以理解[[scope]]就是所有父变量对象的层级链 , 但是注意 [[scope]] 并不代表完整的作用域链！