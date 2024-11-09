//for loop
for (let i = 1; i<=10; i+=2){
    console.log("Iteration value: ", i);
}
//console.log(i); error because let uses only in block, if there was var then it could be used globally.
for (let i = 0; i<=150; i+=15) {
    if(i==0) continue;
    console.log(i);
}

for (var i=0;i<5;i++) {
    console.log(i);
}
console.log("out of loop", i);


//while loop
let j = 0;
while(j<5){
    console.log("j = ", j);
    j++;
}
console.log("out of loop j: ", j);

j = 0;
while (j<=150) {
    j+=15;
    console.log(j);
} 

console.log("do-while loop");
i=10;
do {
    console.log("i = ",i);
    i++;
}while(i<=15);

console.log("do-while loop with false condition.");
do{
    console.log("i = ", i);
    i++;
}while(i<=10);

//for-of loop
//No initialization(value), no stopping condition no updat
//use with strings and arrays, not for objects
console.log("for-of loop");//basic code of for-of
let str = "JavaScript";
for(let i of str) {
    console.log("i: ", i);
}

let count = 1;
for (let i of str) {
    console.log("i: ", i, " &  count: ", count);
    count++;
}

for(let i of "value"){
    console.log(i);
}

//for-of loop, use with objects
let student = {
    name : "RK",
    age : 25,
    CGPA : 2.75,
    isPass : true,
};
for(let i in student) {//basic code of for-in
    console.log(i);
}
count = 0;
for (let i in student) {
    count++;
    console.log("student key:", i, " & key count: ", count);
}
for (let key in student){
    console.log("key: ", key, "key value:", student[key]);
}
for (let key in student) {
    console.log("Key:", key, "value: ", student[key], "default key: name", student['name']);
}


let numm = 25; 
let userNum = prompt("Guess the number: "); 
while (userNum != numm) {//prompt takes string input, so do not use !==. can use !== when make num=="25" as string.
    userNum = prompt("try again");
}
console.log("Correct number.");

