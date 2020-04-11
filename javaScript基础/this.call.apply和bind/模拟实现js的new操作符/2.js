function Test(name) {
    this.name = name;
    return Symbol('1');
}
Test.prototype.sayName = function() {
    console.log(this.name);
}

Test.prototype.a = 1;

const t = new Test('hw');
console.log(t.name);
t.sayName();
console.log(t.a)