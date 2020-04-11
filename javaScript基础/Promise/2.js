async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

 // 相当于

 async function async1() {
    console.log('async1 start');
    Promise.resolve(async2()).then(() => {
        console.log('async1 end');
    })
 }

 