//Chapter 4: Arrays (3:43:30)
let info = ['str1', 'str2', 64]; 
console.log(info);//okay but not good practice
//usually store same type of information in an array
let marks = [67,87,56,93,54];
console.log(marks);
console.log(marks.length); //property(not a method)
console.log(typeof marks); //object. 
//arrays are objects in JavaScript. but arrays use index:value unlike objects (key:value)
console.log(marks[0]);//just write marks[0] in console
console.log(marks[3]);//but this is not possible in strings
marks[3] = 75;
console.log(marks);
console.log("loops");
//loops --> iterable (strings, objects, arrays)
for (let i = 0;i<marks.length;i++){ //i<array.length not <=
    console.log(marks[i]);
}
//accessing arrays with loops:
//usually access with for-of but for-in also possible.
console.log("accessing array with for-of loop");
for (let mark of marks){
    console.log(mark); //prints mark(1 index's value)
    //console.log("btw iteration value: ",mark); 
}
for (let mark of marks) {
    console.log("iteration value: ",mark, "marks(full array):",marks);
}

let cities = ["melbourne", "New york", "Berlin", "Paris", "London"];
for (let city of cities) {
    console.log(city);
}
for (let city of cities) {
    console.log(city.toUpperCase());
}
console.log("Using usual for loop");
for (let i = 0;i<cities.length;i++) {
    console.log(cities[i])
}
console.log("Finding average marks from the marks array:");
let sum = 0;
for (mark of marks) {
    //sum = sum+mark;
    sum+=mark;
    console.log("mark:",mark,"sum:",sum);
}
let average = sum/(marks.length);
console.log("average =",average);

let prices = [250,645,300,900,50];
console.log(prices);
//practice question 4:8:0 
//give 10% disscount to all prices
//for-of loop gives output of updated value in loop but does not update the array out of loop.
for (let i = 0;i<prices.length;i++){
    prices[i]=prices[i]-prices[i]*0.1;
}
console.log("Updated prices after 10% discount");
console.log(prices);

//Array methods:
//push(): adds in the end
let fruits = ["apple","orange","banana","mango"];
console.log(fruits);
fruits.push("strawberry")
console.log(fruits);
fruits.push("cherry","pinapple","red apple")
console.log(fruits);
//push() changes original array


//pop(): delete from the end: updates the oriignal array
console.log("pop()");
fruits.pop();
console.log(fruits);
let deletedItem = fruits.pop();
console.log("deleted item:",deletedItem);
console.log(fruits);
console.log("deleted item in console.log is: ",fruits.pop());//also


//toString(): Converts array to string: but it does not change original array
console.log(fruits);
console.log("fruits.toString():");
console.log(fruits.toString());//does not change original array
console.log(fruits);
console.log(marks);
console.log(marks.toString());
console.log(marks);

//Concatinate: concat();
let foods = ["potatos", "tomatos", "rice", "chicken"];
console.log(fruits.concat(foods));//does not change original arrays
console.log(fruits);//original arrays the same
console.log(foods);
let mixItems = foods.concat(fruits);
console.log("mixItems:",mixItems);

//unshift(): adds new item to array but in the start
fruits.unshift("red grapes");
console.log(fruits);

//shift(): delets first i.e 0th index item 
deletedItem = foods.shift();
console.log(foods);
console.log("deleted item from foods:",deletedItem);


//slice()
console.log(fruits);
console.log("fruits.slice(2,5):",fruits.slice(2,5));//ending index not included
console.log(fruits.slice(3));//from index 3 till the end.


//splice() : Updates the original array
console.log("splice()");
let arr = [0,1,2,3,4,5,6,7,8];
console.log(arr);
arr.splice(3,4,103,104,105,106);//starts removing from index:3, removes 4 items(index:3 to 6), adds new items 103,104,105,106
console.log("arr.splice(3,4,103,104,105,106)", arr);
//console.log(arr);
arr.splice(2,2,1022,1033);//starts removing from index:2, removes 2 indices, then adds 101,102 in those indices
console.log("arr.splice(2,2,1022,1033)",arr);
arr.splice(2,3);//starts removing from index: 2, removes 3 items
console.log("arr.splice(2,3)",arr);
arr.splice(3,0); //starts deketing from index: and delets 0 items means deletes nothing
console.log("arr.splice(3,0)",arr);
arr.splice(2,2,202);
console.log("arr.splice(2,2,202)",arr);
arr.splice(2,2,301,302,303,304);//starts removing from index:2 removes 2 (index:2-3), then adds 4 numbers 301,302,303,304
console.log("arr.splice(2,2,301,302,303,304)",arr);
// arr.splice(2,3);//starts removing from index: 2, removes 3 items
// console.log("arr.splice(2,3)",arr);
arr.splice(2);//starts from index 2 and delets all the items
console.log("arr.splice(2)",arr);
//what if we do not remove any value only add.
arr.splice(1,0,401,402,403,404);//starts from index:1 removes 0 items(nothing) then adds items from index 1 then remaining item '1' in the end
console.log("arr.splice(1,0,401,402,403,404)",arr);
arr.splice();//no changes

//practice question: 4:34:12
let companies = ["Bloolberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
// companies.shift();
// console.log(companies);
companies.splice(0,1);
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazom");
console.log(companies);

console.log([0,1,2].push(4));

console.log("2d Arrays");
let arr2d = [[0,1,2,3],[10,11,12,13],[20,21,22,23],[30,31,32,33]];
console.log(arr2d);
