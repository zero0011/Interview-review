// 第一版
Function.prototype.call2 = function(conetext) {
    // 首先要获取调用 call 的函数 , 用 this 可以获取
    conetext.fn = this;
    conetext.fn();
    delete conetext.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call2(foo)