# call 和 apply 的模拟实现,带你揭开 call 和 apply 改变 this 的真相

## call


一句话介绍 call :
call() 方法在使用一个指定的 this 值和 若干个指定的参数值的前提下调用某个函数或方法

```js
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); // 1
```

注意两点 :
1. call改变了 this 的指向 , 指向到 foo
2. bar 函数执行了

### 模拟实现第一步
那么我们该怎么模拟实现这两个效果呢?
试想当调用 call 的时候 , 把 foo 对象改造成如下 :

```js
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
};

foo.bar(); // 1
```

**模拟的步骤可以分为**
1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数

以上的例子为例 : 就是
```js
// 第一步
foo.fn = bar
// 第二步
foo.fn()
// 第三步
delete foo.fn
```
fn 是对象的属性名 , 反正最后也要删除它 , 所以起什么名字都行

### 模拟实现第二步
最一开始也讲了 , call 函数还能给定参数执行函数 , 举个例子

```js
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call(foo, 'kevin', 18);
// kevin
// 18
// 1
```

注意 : 传入的参数并不确定 , 这可咋办?
不急 , 我们可以从 Arguments 对象中取值 , 取出第二个到最后一个参数 , 然后放到一个数组里

```js
Function.prototype.call2 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length ; i < len ; i ++) {
        args.push(Array.from(arguments)[i])
    }
    context.fn(...args)
    delete context.fn;
}
```

### 模拟实现第三步
1. this 参数可以传 null , 当为 null 的时候 , 视为指向 window

2. 函数是可以有返回值的

```js
var obj = {
    value: 1
}

function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
}

console.log(bar.call(obj, 'kevin', 18));
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

## apply的模拟实现
apply 的实现跟 call 类似 , 在这里直接给代码 

```js
Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
```

## bind 的模拟实现
    一句话介绍 bind
    bind()方法会创建一个新函数。当这个新函数被调用时 , bind()的第一个参数将作为它运行时的 this , 之后的一系列参数将会在传递的实参前传入作为它的参数
由此我们可以首先得出 bind 函数的两个特点
1. 返回一个函数
2. 可以传入参数

### 返回函数的模拟实现

```js
Function.prototype.bind2 = function(context) {
    var self = this;
    return function() {
        self.apply(context);
    }
}
```

### 传参的模拟实现
接下来看第二点 , 可以传入参数.这个就有点让人费解了。
我在 bind 的时候 , 是否可以传入参数呢 ? 我在执行 bind 返回的函数的时候 , 可不可以传参数呢 ?

函数需要传入 name 和 age 两个参数 , 竟然还可以在 bind 的时候 , 只传入一个 name ， 在执行返回的函数的时候 , 再传另一个参数 age

### 构造函数效果的模拟实现
完成了这两点 , 最难的部分到了。因为 bind 还有一个特点 , 就是
    一个绑定函数也能使用 new 操作符创建对象 : 这种行为就像把原函数当做构造器 .提供的 this 值被忽略 , 同时调用时的参数被提供给模拟函数

也就是说当 bind 返回的函数作为构造函数时 , bind 时指定的 this 值会失效 , 但传入的参数依然生效 , 举个例子