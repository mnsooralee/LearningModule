function api () { //an API
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        },3000)
    })
} 
// async function getWeatherData () {
//     await api(); //1st call
//     await api(); //2nd call
// }
//console.log(getWeatherData()); //write getWeatherData() in console

function getData(dataId){ //removed , getNextData because that will done in then
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log("data: ",dataId);
            resolve("succeed");
        },2000);
    })
}
// async function getAllData() {
//     console.log("getting data 1....");
//     await getData(1);
//     console.log("getting data 2....");
//     await getData(2);
//     console.log("getting data 3....");
//     await getData(3);
//     console.log("getting data 4....");
//     await getData(4);
//     console.log("getting data 5....");
//     await getData(5);
// }
//getAllData(); //we need to call this function so we'll create IFEE that will execute directly when created

//await always works inside an async funciton
//mostly we use async-await.its easier ,better way. then we use ().then .catch()


//IFEE: immediately invoked function expression. function without name no need to call it by name. it's called the moment it's created. however cannot use it again.
//IFEE: normal
(function (){
    console.log("IFEE");
}) ();

//IFEE: arrow function
( () => {
    console.log("IFEE: arrow function");
})();

//IFEE async-await
(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();


//We use IFEE when: function needs to be run only once. 
// no name, no need to call again by name, memory will be cleared after running it, no variable(a function with name) will take memory.
