new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1)
    },1000)
}).then(value => {
    console.log(value)
})
