Function.prototype.bind2 = function(context) {
    var self = this;
    // 获取 bind2 函数从 第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        // 这个时候的 arguments 是指 bind 返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context,args.concat(bindArgs));
    }
}