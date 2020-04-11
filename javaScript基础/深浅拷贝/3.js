function deepClone(source) {
    let targetObj = Array.isArray(source) ? [] : {};
    for(let key in source) {
        if(source.hasOwnProperty(key)) {
            if(source[key] && typeof source[key] === 'object') {
                targetObj[key] = Array.isArray(source[key]) ? [] : {};
                targetObj[key]= deepClone(source[key])
            } else {
                targetObj[key] = source[key]
            }
        }
    }
    return targetObj;
}

function deepClone(source) {
    let targetObj = Array.isArray(source) ? [] : {} ;
    for(let key in source) {
        if(source[key] && typeof source[key] === 'object') {
            targetObj[key] = Array.isArray(source[key]) ? [] : {};
            targetObj[key] = deepClone(source[key]);
        } else {
            targetObj[key] = source[key];
        }
    }
    return targetObj;
}
