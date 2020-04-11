// 第三版
Function.prototype.call2 = function(context) {
    var context = window || context;
    // 核心代码
    context.fn = this;

    var args = [];
    for(var i = 1 ; i < arguments.length ; i ++) {
        args.push(Array.from(arguments)[i]);
    }

    var result = context.fn(...args);
    delete context.fn;
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }

