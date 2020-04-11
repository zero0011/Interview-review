// for (var i = 0; i < 5; i++) {
//     setTimeout(function(i) {
//         console.log(new Date, i);
//     }, 1000,i);
// }

// console.log(new Date, i);

const sleep = (timeoutMS) => new Promise((resolve) => {
    setTimeout(resolve, timeoutMS);
});


(async () => {
    console.log(1);
    await sleep(1000);
    console.log(2)
})()