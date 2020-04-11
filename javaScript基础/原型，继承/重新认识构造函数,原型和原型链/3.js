function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method : function() {}
}

function Bar() {}

Bar.prototype = new Foo();
Bar.prototype.foo = 'hello'

Bar.prototype.constructor === Object