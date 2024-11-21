console.log("HW");
window.console.log("HWw");//console.log and all these objects are window objects but we donot usually write window.___ because its by default understood by browser
//window object is automatically created by browser not JavaScript. all code is window object
//window has all the properties and functions that we run
console.log("window");
console.log(window);//or write only window in console

console.log("console.dir(window)");
console.dir(window);


//DOM: Document object model
//console/window/document: see all: and there are html tags that used

//see html code in JavaScript
console.log("window.document");
console.log(window.document);//type window.document in the console

console.log("console.dir(window.document)");
//see the properties of document. 
console.dir(window.document);//type same in console
//console.dir() is used to see properties & methods

console.log("console.dir(document)")
console.dir(document); //same as console.dir(window.document); because window in bydefult

// console.dir(): Primarily used to display an interactive list of the properties of an object.
// Outputs a more detailed, navigable view of objects, showing their properties and methods in a tree-like structure.
//In summary, console.log() is more general-purpose, while console.dir() is specifically designed for inspecting objects in detail.

console.dir(document.body);//propertise, see children nodes in body
console.log(document.body);//html code/   se difference
console.dir(document.head);
console.log(document.head);
console.dir(document.body.childNodes[1]);
console.log(document.body.childNodes[1]);
//on run time html does not changes but javascript can make changes dynamic changes that's what the use of it
//code <document.body.style.background = "black";> in console
document.body.style.background = "black";
document.body.style.background = "green"; //it comes later so it is running instead of black
document.body.childNodes[3].innerText = "abc";//this replaces <h>This is heading 1 with id: headingId</h>
document.body.childNodes[3].style.color = "aqua";

//Dom
//dynamic changes
//dynamic manipulation
//if we put <script> in <head> then Dom won't run because before the start of <body> all things of body are "null"
//When the script is in the <head>, it might run before the DOM is fully built, causing errors or issues because elements you're trying to manipulate may not exist yet.

console.log("document.getElementById('headingId')");
let heading = document.getElementById('headingId');
console.log(heading); //prints heading
console.dir(heading); //shows heading properties

//id: getElementById() is used for same tag with different ids.
//class: getElementByClassName()

console.log("document.getElementsByClassName('headingClass')")
headings = document.getElementsByClassName('headingClass');
console.dir(headings);
console.log(headings);

console.log("document.getElementById('buttonId')");
let buttons = document.getElementById('buttonId');
console.dir(buttons);
console.log(buttons);

//accessing by TagNames
console.log("document.getElementsByTagName('p')")
let paras = document.getElementsByTagName('p');
console.dir(paras);
console.log(paras);

//accessing with querySelector (selects first element)
console.log("document.querySelector('p')");
let firstElement = document.querySelector('p');
console.dir(firstElement);
console.log(firstElement);

//accessing tag with querySelectorAll (selects all elements with the name). gives the node list
console.log("document.querySelectorAll('p')");
let allElements = document.querySelectorAll('p');
console.dir(allElements);
console.log(allElements);

//accessing id with querySelector (id does not make sense with selectorAll, said sharda, but it gives output donot understand what)
//one id is only given to one element on the same page. btw one class can be assigned to more than 1 elements
let elementId = document.querySelector("#headingId");//querySelector uses #id whereas getElementById uses id name without#
console.dir(elementId);
console.log(elementId);


// let allElementId = document.querySelectorAll("#headingId");//querySelector uses #id whereas getElementById uses id name without#
// console.dir(allElementId);
// console.log(allElementId);

console.log("accessing tag names");
console.log(elementId.tagName);
console.log(heading.tagName);
console.log(firstElement.tagName);
//console.log(allElementId.tagName);//does not show tag names of multiple elements variable
//console.log(allElements.tagName);
//console.log(headings.tagName);
//console.log(buttons.tagNames); do not understand why
//console.log(paras.tagNames);

//tagName to an element

//parent node --> child node --> descendant nodes
// siblings: on same level, having same parents

console.log(document.body.firstChild);//shows text
//in DOM 1st child is text, 2nd is comment third are elements/nodes

//accessing tags in querySelector
console.log("document.querySelector('div')");
console.log(document.querySelector('div'));//shows first div

console.log("document.querySelector('div').children");
console.log(document.querySelector('div').children);

//homework: firstChild, lastChild, children,--.
//          text node, comment node and element node

//whats difference b/w queryselectorAll(".classes") and getElementsByClassName("classes)"
