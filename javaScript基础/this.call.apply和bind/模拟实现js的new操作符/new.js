
function Test(name,age) {
    this.name = name;
    this.age = age;
}

Test.prototype.sayName = function() {
    console.log(this.name);
}

function create(Con, ...args) {
    let obj = {};
    let result = Con.apply(obj, args);
    obj.__proto__ = Con.prototype;
    return result instanceof Object ? result : obj;
}

const a = create(Test,'hw',12);
console.log(a.name);
a.sayName();