// //To understand callback hell
// function getData1(dataId){
//     console.log("data:", dataId);
// }
// getData1("1010");
// setTimeout(getData1,2000);//same function but different delay
// setTimeout(getData1,4000);

// function getData2(dataId) {
//     setTimeout(()=>{
//         console.log("data:", dataId,"delay:2 sec");
//     },2000);
// }
// getData2("1020");
// getData2("1030");
// getData2(1040);//all the 3 running in paralel


// //what if we want sequence? first username then search password
// //step 1
// function getData(dataId){
//     setTimeout(() => {
//         console.log("id:",dataId);
//     }, 3000);
    
// }
// getData(1);
// getData(2);
// getData(3);

// //step 2
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data: ",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);

// }
// getData(1, () => {//getData(1, getData(2));// incorrect
//     getData(2);
// });


// // step3
//callback hell/ nested callback
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data: ",dataId);
        if (getNextData){
            getNextData();
        }
    },2000);
    
}
getData(1, ()=> {
    getData(2, () => {
        getData(3, () => {
            getData(4, ()=> {
                getData(5);
            })
        })
    });
});

// function getId (id, password){
//     setTimeout(() => {
//         console.log(id);
//         if (password) {
//             password();
//         }
//     },3000);
    
// }
// getId(1010, () => {
//     getId("Password: 123abc")
// });