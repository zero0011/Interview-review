var sym = Symbol(123);

// console.log(sym.constructor);

let num = 10;
num.constructor = 10;
console.log(num.constructor)

let obj = {
    x : 1
}
obj.constructor = 1
console.log(obj.constructor)
