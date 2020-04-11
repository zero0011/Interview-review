const originObj = {
    name: 'axuebin',
    sayHello: function () {
        console.log('Hello World');
    }
}

console.log(originObj)
const cloneObj = JSON.parse(JSON.stringify(originObj));
console.log(cloneObj); 