//alert("Alert"); one time popup
console.log("My first JS program");

age = 24;
fullName = "Ned stark";
isFollow = true;
console.log(age);
console.log(fullName);
console.log(isFollow); // without semicollon in the end is also correct but not a good practice.
price = 99.50;
console.log(price);//also write variable name in inspects/console and get the value at there.
x = null;  //empty
y = undefined;  //undefined: no knowledge of the value
console.log(x); 
console.log(y);

a = "Ned";
console.log(a);

a = 32;
console.log(a); // dynamic langauage. the value and data type both changed. google what is a dynamic language.

/* 4 rules of variable names in javascript
1. case sensitive
2. no space
3. laters, _ & $ can start variable name
4. not reserved keywords

better practice to write "fullName totalPrice"*/

/* var, let & const
  var: we never use var now a days its older. problem: var can be re-declared and updated. var is global
  let: cannot re-declare, can be updated. a block scope variable: let is only acessible in that particular block {code}
  const: cannot be re-declared neither updated. normally write constant with capital laters. a block scope variable.

*/
var newAge = 20;
var newAge = 25;
var newAge = 50;
console.log(newAge); //will print latest value 50

let newPrice = 50;
newPrice = 60;
newPrice = 80.5; //updated the value. not re-declared
console.log(newPrice);

const b = 56;
console.log(b); //

NEWNUM = 111; 
console.log("typeof NEWNUM: ", typeof NEWNUM);

const NEWNUMM = 5;
console.log("typeof NEWNUMM: ", typeof NEWNUMM)

let c; //but cannot initialize a const like that. const needs a value anyhow.
console.log(c);
c = 100;
console.log(c);

//Data types:
/*
Data types:
    primitive data types:
    
*/
console.log(newPrice);
console.log(typeof newPrice); //write typeof newPrice; in inspect/console

console.log(fullName);
console.log(typeof fullName); //write [typeof fullName;]in inspect/console

console.log(isFollow);
console.log(typeof isFollow);

let d;
console.log(d);
console.log(typeof d);

let e = 15;
console.log("e = ",e);
console.log("typeof e: ",typeof e);
e = BigInt(150);
console.log("e =", e);
console.log("typeof e: ",typeof e);
//Bigints don't have a fixed storage size in bits;
e = BigInt("160");// value in "" also gives the same output.
console.log("e =", e);
console.log("typeof e: ",typeof e);

let f = "Hello world";
console.log("f: ",f);
console.log("typeof f:", typeof f);
f = Symbol("hello world");
console.log("f: ",f);
console.log("typeof f:", typeof f);
let ff = Symbol("hell");
console.log("typeof ff:", typeof ff);
ff = BigInt(120);
console.log("typeof ff:", typeof ff); //updated
//whats the use of symbol
//Non primitive datatypes are objects, functions & arrays
//Normally initialize objects with "const", let is also used but less


//Objects
const student = {
  fullName : "RK",
  age : 25,
  CGPA : 3.2,
  isPass : true
};

console.log(student);
console.log(typeof student);
/* two ways to print key from an object. 
object["key"]
object.key
*/
console.log(student["fullName"]);
console.log(student["CGPA"]);
console.log(student.CGPA); //both correct [] & .___
console.log(typeof student['CGPA']); //write typeof student["CGPA"] in inspects

console.log("student.isPass ", student.isPass);
console.log("typeof student.isPass ", typeof student.isPass);

//updating variables in object:

student.age = 27;//but sharda said not this way
console.log("student.age:", student.age);

student.age = student.age + 3;
console.log("student.age:", student.age);

student["fullName"] = "VJ";
console.log(student["fullName"]);
console.log(student);

console.log(120+5);
console.log("125"+5); //string concatinates
console.log('abcd'+123);

const profile = {
  username : "vj",
  isFollow : true,
  followers : 3000,
  following : 12
};

console.log(profile);
console.log("typeof profile.isFollow: ", typeof profile.isFollow);

//Chapter 2: operators, conditions and statements (1:21:00)
let g = 10;
let h = 2;
console.log("g = ", g, " h = ", h);
console.log("g+h = ", g+h);
//g & h are operands, +,- are operators, g+h is an expression
console.log(g-h);
console.log(g*h);
console.log(g/h);
console.log("g%h = ", g%h);

//use ** for power
console.log("g**h = ", g**h); // 10 power 2

//unaray operators: which require only 1 operand: ++  & -- 
h++;
console.log(h);
console.log("g++", g++);
console.log("g: ", g)

console.log("++g", ++g);
console.log("g: ", g);

//same for minus
console.log ("--g ", --g);

//assignment operators: =, +=, -=, *=, %=, **=, also /= 

let i = 20;
console.log(i/=2);
console.log(i*=2);
console.log(i+=2);
console.log(i-=2);
console.log(i**=2);
console.log(i%=2);

//Comparison operators
i= 5;
let j = 4;
console.log(i==j);
console.log(i!=j);
console.log(i>j);
console.log(i<j);
console.log(i<=j);
console.log(i>=j);

i = "6";
j = 6;
console.log("i = '6'; typeof i:", typeof i);
console.log(typeof j);
console.log(i==j);
console.log(i>=j);

//== only compares value
//=== stricter version and this also compares data type

console.log("i===j", i===j);
j = 4;
console.log(i>j);
console.log(i<j);

//Logical operators: &&, ||, ! (used when multiple condiitons)
i = 4;
j = 5;
let cond1 = i<j; //true
let cond2 = j===5; //true
console.log("cond1 && cond2", cond1 && cond2);
cond1 = i>j;//False
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);

console.log(!(i>j)); 
console.log(!true);
console.log(!false);

console.log("if statement");
age = 18;
if(age>=18){
  console.log("You can vote");
}
if(age<18) {
  console.log("You cannot vote");
}
//block with false value will not run
// block with true will run
let mode = "light";
let color;
if (mode=="dark"){ 
  color = "black";
}
if (mode=="light") { 
  color = "white";
}
console.log(color);

console.log("if-else statement");

mode = "dark";
if(mode=="light"){
  color = "white";
}
else {
  color = "black";
}
console.log(color);
let num = 11;
if(num%2==0) {
  console.log("even");
}
else {
  console.log("odd");
}
console.log("Creating GPA Calculator");
let marks = 79;
console.log(marks);
console.log("incorrect way");//because first condition goes true then it will not check others and this way first 3-4 conditions all are true so this way is incorrect.
if (marks>=60) console.log("2.0");
else if (marks>=67) console.log("2.5");
else if (marks>=74) console.log("3.0");
else if (marks>=81) console.log("3.5");
else console.log("4.0");

console.log("Incorrect way too");
if (marks <=100) console.log("4.0 GPA"); 
else if (marks <88) console.log("3.5 GPA");
else if (marks <81) console.log("3.0 GPA");
else if (marks <74) console.log("2.5 GPA");
else if (marks <67) console.log("2.0 GPA");
else console.log("0 GPA");

console.log("Correct way: ");
if (marks >=88) console.log("4.0 GPA");
else if (marks >=81) console.log("3.5 GPA");
else if (marks >=74) console.log("3.0 GPA");
else if (marks >=67) console.log("2.5 GPA");
else if (marks >=60) console.log("2.0 GPA");
else console.log("0 GPA");
//prefer write condition in blocks like {} on new line of if 

console.log("Ternary operators");
//Ternary Operators: a?b:c. 
//condition? true output : false output
//We do not usually use ternary statements, very few times and when conditions are simple not big
age = 16;

let _status = age>=18 ? "Adult" : "Not adult";
console.log(_status);
age>=18 ? console.log("Adult") : console.log("Not adult");//this way too

let age2 = 22;
let statusNew;
age2>=18 ? statusNew = "adult" : statusNew = "Not adult" ;
console.log(statusNew);

//https://developer.mozilla.org/en-US/

console.log("Switches");

color = "blue";
switch (color) {
  case 'black':
    console.log("this is black color");
    break;
  case 'red':
    console.log("This is red color");
    break;
  case 'blue':
    console.log("This is blue color");
    break; // If do not use break the switch will also run next case. try it
  case 'orange':
    console.log("This is orange color.");
    break;
  default:
    console.log("Sorry no color available like ",color);    
}

//User input
//prompt("Hello"); // just gives a message like alert but also takes input

//store input of prompt to a veriable
// let yourname = prompt("Name");
// console.log(yourname);