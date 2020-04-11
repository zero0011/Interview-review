Function.prototype.bind2 = function(context) {
    var self = this;
    return function() {
        self.apply(context);
    }
}

