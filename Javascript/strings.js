let str = "My javascript program";
let str2 = "Practice";

console.log(str);
console.log(str.length);
console.log(str2);
console.log(str2.length);
//see str.length works like an object and its key. like obj.key
console.log(str[0]); //individual position
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

//template literals: 
let specialString = "I am a beginner";  //(basic code)
console.log(specialString);
console.log(typeof specialString);

//understanding of use of literals
let obj = {
    item: "pen",
    price : 20,
};
console.log("The price of ",obj.item, "is", obj.price, "rupees."); // here 20 is number

let literalString = `the price of ${obj.item} is ${obj.price} rupees.`; //here 20 is a string
console.log(literalString);
//string interpolation: to create string by doing substitution of placeholders.
let litString = `the sum is ${2+4}`;//This is string interpolation
console.log(litString);

//escape characters: \n, \t

console.log("My name is\nVJ."); // \n for new line. 
// \n counts 1 in str.length  example: Iam\nVJ has length 6

/* \t = tab space */
console.log("This is a\tModule"); 

console.log("String methods:");

str = "this is me";
str.toUpperCase();//wont change original value of str
//Strings in JavaScript are Immutable. means cannot be updated, need anothe string to store new updated value 
console.log("str.toUpperCase()", str.toUpperCase());
console.log("str.toLowerCase()", str.toLowerCase());

console.log(str);
strNew = str.toUpperCase(); //str = str.toUpperCase(); is also correct
console.log(strNew);

str = "      This     is a JS     Program      ";
console.log(str.trim()); //trim removes spaces in beginning and in the end of " " string. 

str = "0123456789";
console.log("str.slice(2,5):",str.slice(2,5));//end index is not included
console.log("str.slice(3,8)", str.slice(3,8));
console.log(str.slice(3)); //starts from index: 3 till the end
console.log(str.slice()); // will print full string but not good/correct practice

str2 = "abcdef";
console.log("str.concat(str2):", str.concat(str2));
console.log("str.concat(str2):", str2.concat(str));

strNew = str + str2;//+ also concatinates
console.log(strNew);
console.log("str + str2 =", str + str2);
console.log("str,str2 =", str,str2);

strNew = "abc" + 123; //123 will be converted to string here
console.log(strNew);

str = "hello";
console.log(str.replace("h","y"));
console.log(str.replace('h','m')); //write str.replace('h','m'); in inspects/console
str = "yelolololow";
console.log(str.replace("lo","mi"));//will only replace first 'lo' and rest will eb the same.

console.log(str.replaceAll("lo","mi"));//will replace all the matching values.

str = "JavaScript";
console.log(str.charAt(0));
console.log(str.charAt(3));
console.log(str[3]);// whats the difference?
console.log(str[0]);
str[0] = 'I';//JavaScript will not updat the string
console.log(str);
str = str.replace('J','I');
console.log(str);

//Practice Question at 3:39:30
let userInp = prompt("Please enter your full name.");
username = "@" + userInp + userInp.length;
console.log(username);

//practice string methods on MDN
//string.includes();
str = "mozila";
let search = "zil";//can also perform prompt here
if(str.includes(search)){//can directy write str.includes("zil")
    console.log("Found ",search,"in",str);
}
else {
    console.log("Did not found",search,"in",str);
}

//string.indexOf();
const sent = "MDN - Resources for developers, by developers";
console.log(sent.indexOf("for"));//finds the index of first char of "for" that is 'f'
//if the substring does not exist then indexOf() will return -1.

const firstTime = sent.indexOf("developers"); //20
const secondTimee = sent.indexOf(firstTime+1); //returns -1. its incorrect
const secondTime = sent.indexOf("developers", firstTime+1); //35. but did not understood how
console.log(firstTime); //20
console.log(secondTime); //35
console.log("abc".toUpperCase());