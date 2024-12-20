//normally we do not create promises. when we deal with APIs we just get promises and handle them, do not create the normally

// skipped creating promisses
// we wont be creating/resolving or rejecting promises
// learn how to use promises from 10:04:40.

//Promise: can perform the tasks in background and will notify results when done

//creating basic promise. this work is done by APIs
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("this is a promise");
//         resolve("success");
//         //reject("rejected..");
//     })
// }

// //using promises
// let promise = getPromise();
// promise.then(() => {
//     console.log("promise resolved");
// })
// promise.catch(() => {
//     console.log("promise rejected")
// })

// let promise2 = getPromise();
// promise2.then((res) => {
//     console.log("promise resolved. result: ", res);
// })
// promise2.catch((err) => {
//     console.log("promise rejected. error:",err);
// })
//promise is an object. it hase states.how to use states, how to use promises. this is what we learnt so far.

//promise chan:

function asyncFunc1() {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("asynfFunc1 | Data 1");
            resolve("succeed");
            //reject("rejected");
        }, 2000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            console.log("asyncFunc2 | data 2");
            resolve("succeed");
        },2000)
    })
}//function -> promise -> timeout -> resolve
// console.log("Fetching data 1....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// })
// console.log("Fetching data 2....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
//}) //probles is that here both("Fetching data 1" & "Fetching data 2") will print first and then wih delay both will give results at same time.
// // so we will do channig. then() in another then(). 

// console.log("Fetching data 1...")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data 2...");
//     let p2 = asyncFunc2();
//     p2.then((err) => {
//         console.log(err);
//     })
// }) // till now same work was possible in callBack hell

//can simplify it

// console.log("Fetching data 1...")
// asyncFunc1().then(() => {
//     console.log("Fetching data 2...");
//     asyncFunc2().then();
// }) //this is promise channing.

//previous function of callBack hell. doing here by channing
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data: ",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
    
// } //converting this callBack hell into chain
function getData(dataId){ //removed , getNextData because that will done in then
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("data: ",dataId);
            resolve("succeed");
        },2000);
    })
}
// getData(12).then((res) => {
//     console.log(res);
//     getData(24).then((res) => {
//         console.log(res);
//         getData(36).then((res) => {
//             console.log(res);
//             getData(48).then((res) => {
//                 console.log(res);
//             })
//         })
//     })
// })

//another way: better way that is actual promise chaining.
// getData(10).then((res) => {
//     return getData(20).then((res) => {
//         return getData(30).then((res) => {
//             return getData(40).then((res) => {
//                 //console.log("Success");
//                 console.log(res);
//             })
//         })
//     })
// })//perfect!


getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    return getData(4);
}).then((res) => {
    console.log(res);
}) //Perfect. promise chain

