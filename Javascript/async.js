//synchronous programing instruction run in sequence line by line
//asynchronous programming works differently
//need of asynchronous: when some instructions in the middle are time taking then run that instruction parallely and run the other instructions in the mean time 
console.log("HW");
function hello(){
    console.log("hello world");
}
//console.log(hello());
console.log("HW");

setTimeout(hello, 2000);//time in mili seconds. and hello is callback here.

console.log("HW after setTimeout(hello)");

//calling function directly while creation
setTimeout(() => {
    console.log("Hello world - 3 seconds"); 
}, 3000);
console.log("HW after: Hello world - 3 seconds"); 

//callback: a function passed as an argument to another function

function sum(a,b){
    console.log("Sum =",a+b);
}
function mul(a,b){
    console.log("multiplaction: ",a*b);
}
function calculator(a1,b1,funcCallback){
    funcCallback(a1,b1);
}
calculator(2,4,sum);//sum() will be incorrect here.  because this value will be passed in sumCallback and that is parameter not a function
calculator(2,4,mul);//mul is callback here

calculator(19,4, (a,b) => {
    console.log("% equals to:",a%b);
});

//nested loop
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        console.log(i,j);
    }
}
