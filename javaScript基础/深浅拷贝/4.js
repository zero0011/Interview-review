function shallowClone(source) {
    const targetObj = Array.isArray(source) ? [] : {};
    for(let key in source) {
        if(source.hasOwnProperty(key)) {
            targetObj[key] = source[key];
        }
    }
    return targetObj;
}