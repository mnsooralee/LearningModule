
//alert("Alert");
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

e = BigInt("160");// value in "" also gives the same output.
console.log("e =", e);
console.log("typeof e: ",typeof e);

let f = "Hello";
console.log("f: ",f);
console.log("typeof f:", typeof f);
f = Symbol("hello world");
console.log("f: ",f);
console.log("typeof f:", typeof f);

