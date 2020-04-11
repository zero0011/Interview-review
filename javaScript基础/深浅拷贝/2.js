function deepClone(source) {
    const targetObj = Array.isArray(source) ? [] : {};
    for (let keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = Array.isArray(source[keys]) ? [] : {};
                targetObj[keys] = deepClone(source[keys]);
            } else {
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}


const originObj = {
    name: 'axuebin',
    sayHello: function () {
        console.log('Hello World');
    }
}


console.log(originObj);
const cloneObj = deepClone(originObj);
console.log(cloneObj);