class Promise1 {
    constructor(fn) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;

        let resolve = value => {
            if (this.state === 'pending') {
                this.value = value;
                this.state = 'fulfilled'; // 完成
            }
        }

        let reject = reason => {
            if (this.state === 'pending') {
                this.reason = reason;
                this.state = 'rejected'; // 失败
            }
        }

        try {
            fn(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        if(this.state === 'fulfilled') {
            onFulfilled(this.value);
        }
        if(this.state === 'rejected') {
            onFulfilled(this.reason);
        }
    }
}


let p =  new Promise1((resolve,reject) => {
    setTimeout(() => {
        resolve('1')
    },1000)
}).then(value => {
    console.log(value)
})