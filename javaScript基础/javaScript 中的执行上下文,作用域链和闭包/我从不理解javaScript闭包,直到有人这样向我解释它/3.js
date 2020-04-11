function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1;
         return counter
    }
    return myFunction
}
const increment = createCounter()
const c = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c, c2, c3)