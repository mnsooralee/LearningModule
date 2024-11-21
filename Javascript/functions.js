function printmyName(){
    console.log("VJ");
    console.log("Mansoor");
}

printmyName();
printmyName();

function prnitMsg(msg){//parameters --> input
    console.log(msg);
}
prnitMsg("The message");
let newMsg = "This is new message";
prnitMsg(newMsg);//argument

// let myName = prompt("Enter your name");
// prnitMsg(myName);

function studentScore(std,marks){//write only function name in console it will give function's code/description
    console.log("Student:",std,"Marks:",marks);
}
studentScore("David",67);
studentScore("Michael", 86);

function studentMarks(sid){//parameters are local variables of function: they have block scope
    let stdName;
    if (sid==101){stdName = "Adam", marks = 87};
    if (sid==102){stdName = "Flamming", marks = 67};
    if (sid==103){stdName = "Hussey", marks = 65};
    console.log("Student name:",stdName,"Marks:",marks);
}
studentMarks(101);
studentMarks(102);
studentMarks(102);
studentMarks(103);

//function storeStudentData(sid,stdName,marks){}: create a function that takes parameters and stores in a database(In future)
//error NaN: not a number

function summ(x,y) { //x,y are local variables of the function, cant be accessed out of the funtion
    //return x+y; also correct
    let val = x+y;
    return val;//after return statement in a function no code will be executed in the funuction
    //console.log("Here's your output"); //this will not run as it is after return statement
}
console.log(summ(21,22));//43
let sum1 = summ(67,98);
console.log(sum1);

function sum(x,y){
    console.log(x+y);
}
sum(45,5);
sum(890,20);


//Arrow function
console.log("arrow functions:");
//let arrowsum = (a,b) => {}// let also works
const arrowsum = (a,b) => {
    console.log(a+b);
}
//calling arrow functions is the same as normal function
arrowsum(12,12);

let arrowMul = (a,b) => {
    return a*b;
}
let mul = arrowMul(5,4);
console.log(mul);
//console.log(arrowMul(5,6));

//remember 
//[const arrowMul = ] this part is a variable and storing a value into it
//[arrowMul(5,4); ] only this part is function(arrow function)
//arrowMul is just a variable and can store a value into it if it is not const

arrowMul = 2020;
console.log(arrowMul);
//arrow function is a modern way in JavaScript
//arrow function is prefered in 1-2 line function but not in 5-6 lines functions.

let printHello = () => {
    console.log("Hello");
}
printHello();
let printHelloWorld = () => console.log("Hello World");
printHelloWorld();

function vowelCount(str){
    let count = 0;
    for(let i of str){
        //console.log("iteration: ",i,"string:",str);//for understanding
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            console.log(i,":vowel");
            count++;            
        }
    }
    return count;
}
let counting = vowelCount("margin and padding");
console.log("The number of vowels is:", counting);

let arrowVowelCounting = (str2) => {
    let count = 0;
    for(let i of str2){
        //console.log("iteration: ",i,"string:",str);//for understanding
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            console.log(i,":vowel");
            count++;            
        }
    }
    return count;
}
count = arrowVowelCounting("People and things");
console.log("The number of vowels is: ",count);
//Methods: string.length(), string.toUpperCase() these inbuilts are methods
//functions are that we make, give them input and get output
//functions associated with objects are also methods

//function in JavaScript can also be called to another function as parameters and that function is called as callback funciton
/* learn this 
function hello(){
    console.log("hello");
}
function callHello(hello){
    return hello;
}
*/
console.log("array methods");
console.log("forEach()")
arr = [0,1,2,3,4];
console.log(arr);
arr.forEach(function printValues(value){
    console.log(value);
})
console.log("squares on the numbers");
arr.forEach((val) => {
    console.log(val**2);//(val*val)
})

//creating same in arrow
arr.forEach((val) => {
    console.log(val);
})

cities = ["melbourne", "New york", "Berlin", "Paris", "London"];

cities.forEach(function (city){
    console.log(city);
})
//another way
console.log("Another way for function");
cityNames = function(city){
    console.log(city);
}
cities.forEach(cityNames);

console.log("Another way for arrow function");
cityNames2 = (city) => {
    //console.log(city.toUpperCase());
    console.log(city);
}
cities.forEach(cityNames2);


cities.forEach((city) => {
    console.log(city.toUpperCase());
})

//3 optional parameters in these callback functions(value,index & array)
console.log(cities);
console.log("applying 3 parameters to the cities array:");

cities.forEach((val,idx,arr) => {
    console.log(val,idx,arr);
})
cities.forEach((val,idx,arr) => {
    console.log("val:",val,"index:",idx,"array:",arr);
})
cities.forEach((val,idx) => {
    console.log("value and index:",val,idx);
})
//Higher order functions/methods: that take another function as parameter or return another function exp: forEach()

console.log("map()");
//forEach() is used for printing or performing an operation to array,values
//map() is used to create a new array from one array.
console.log(cities);

cities.map((city) => {
    console.log(city);
})

citiesNew = cities.map((city) => {
    return (city.toUpperCase());//returns 
})
console.log(citiesNew);

console.log("filter()");
let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);
let evenNums = nums.filter((num) => {
    return num%2===0;
})
console.log("Even numbers:",evenNums);
let oddNums = nums.filter((num) => {
    return num%2!==0;
})
console.log("Odd numbers: ",oddNums);

evenNumsNew = nums.filter(function numberss(num){
    return num%2==0;
})
console.log("Even numbers:",evenNumsNew);
oddNumsNew = nums.filter(function numberss(num) {
    return num%2!==0;
})
console.log("Odd numbers: ",oddNumsNew);
//reduce
console.log("reduce()");
console.log(nums);
let sumNew = nums.reduce((previous,current) => {
    return previous+current;
})
console.log(sumNew);

//finding the biggest number in the array
let bigger = nums.reduce((prev,curr) => {
    return prev>curr ? prev : curr; //condition ? if yes(return prevevious) : if not(perform current);
})
console.log(bigger);

//finding the smallest number in the array
let smaller = nums.reduce((prev,curr) => {
    return prev < curr ? prev : curr;
})
console.log(smaller);

marks = [66,92,87,74,95,63];
//finding marks greater than 90
let toppers = marks.filter((mark) => {
    return mark>=90; //if condition true it will return otherwise do not return
})
console.log("greater than 9:",toppers);
toppers = marks.reduce((prev,curr) => {
    return prev>curr ? prev : curr;
})
console.log("highest marks: ",toppers);

//create an array till number n(input)
//let n = prompt("please enter a number");
let n = 6;
let arrNew = []; 
for (let i = 1; i<=n; i++){
    arrNew[i-1] = i;
}
console.log(arrNew)

//finding summ of numbers till n
let sum2 = arrNew.reduce((prev,curr) => {
    return prev+curr;
})
console.log("sum =",sum2);

//finding factorial of n(or producto of numbers till n)
let fact = arrNew.reduce((prev,curr) => {
    return prev*curr;
})
console.log("factorial =",fact);
 
//Recursion:
console.log("Factorial:");

let factorial = (n) => {
    if(n===1) {
      return 1;
    }
    else {
      let f = factorial(n-1);
      console.log("n = ",n,"(n-1)! = ",f,"n! = ",n*f);
      return n * f;
      // return n * fact(n-1);
    }
  }
  let m = factorial(10);
  console.log(m);
console.log("Fibonacci series:");
  let fibonacci = (n) => {
    if(n<=1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
  }
 n = 10;
 let fib;
 for (let i = 0; i<n; i++) {
    fib = fibonacci(i);
    console.log(fib);
 }
 
 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random()*3); //if we need numbers from 0 to 2.99 I guess
console.log(Math.random()*3);
console.log(Math.random()*3);


console.log(Math.random()*9); //if we need numbers 0 to 8.99
console.log(Math.random()*9);
console.log(Math.random()*9);

//Math.floor() removes decimal
console.log(Math.floor(Math.random()*9)); 
console.log(Math.floor(Math.random()*5));
console.log(Math.floor(Math.random()*3));

 //We can make a function that performs 3-4 tasks but better to make separate functions for all the tasks so that all of the functions must be independent and can be called anytime(small tasks individually)