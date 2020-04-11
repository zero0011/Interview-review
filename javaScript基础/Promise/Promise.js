class Promise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;

        // 异步
        this.onResolvedCallbacks = [];

        this.onRejectedCallbacks = [];

        let resolve = value => {
            if(this.state === 'pending') {
                this.state = 'fuifilled';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }

        let reject = reason => {
            if(this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        try {
            executor(resolve,reject);
        } catch(err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if(this.state === 'fuifilled') {
            onFulfilled(this.value);
        } 
        if(this.state === 'rejected') {
            onRejected(this.reason);
        }

        if(this.state === 'pending') {
            // onFulfilled 传入到成功数组中
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            })
            // onRejected 传入到失败数组中
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }   
    }
}

Promise.all = function(promises) {
    let arr = [];
    let i = 0;
    function processData(index,data) {
        arr[index] = data;
        i++;
        if(i === promises.length) {
            resolve(arr);
        }
    }
    return new Promise((resolve,reject) => {
        for(let i = 0 ; i < promises.length ; i ++) {
            promises[i].then(data => {
                processData(i,data);
            },reject)
        }
    })
}

Promise.race = function(promises) {
    return new Promise((resolve,reject) => {
        for(let i = 0 ; i < promises.length ; i ++) {
            promises[i].then(resolve,reject);
        }
    })
}


Promise.all = function(promises) {
    let i = 0;
    let arr = [];
    function processData(index, data) {
        arr[index] = data;
        i++;
        if(i === promises.length) {
            resolve(arr);
        }
    }
    return new Promise((resolve,reject)=> {
        for(let i = 0 ; i < promises.length ; i ++) {
            promises[i].then(data => {
                processData(i,data);
            },reject)
        }   
    })
}

Promise.race = function(promises) {
    return new Promise((resolve,reject) => {
        for(var i = 0 ; i < promises.length ; i ++) {
            promises[i].then(resolve,reject);
        }
    })
}