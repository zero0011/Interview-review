function myNew(Con, ...args) {
    var obj = {};
    // 核心
    obj.__proto__ = Con.prototype;
    console.log(args)
    let result =  Con.call(obj,...args);
    return result instanceof Object ? result : obj;
}

function Person(name,sex) {
    this.name = name;
    this.sex = sex;
    return {
        a : 1
    }
}

var p = new Person('hw','na');
console.log(p.name,p.sex,p)