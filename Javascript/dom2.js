console.log("HW");
let div = document.querySelector('div');
console.dir(div);

console.log(div.innerText); //erite div.innerText in console
//console.dir(div.innerText); //dir also prints same do not know what difference

console.log(div.innerHTML);//shows inner html code
console.dir(div.innerHTML);

div.innerText = "new text";//it replaces inner text(present in html code but updated by JavaScript on runtime)

div.innerHTML = "<div>New div created by innerHTML</div>"
console.log(div);//shows updated div

//let heading = document.getElementsByTagName('h3');// this does not works this way
//console.log(heading);
//console.dir(heading);
let heading = document.querySelector('h3');
console.log(heading);
heading.innerText = "New text in heading 3";
heading.innerHTML = "<b><i>Updated bold italic heading 3</i></b>"

let hiddenHeading = document.querySelector('h4');
console.log(hiddenHeading);
console.log(hiddenHeading.innerText);
// type hiddenHeading.innerText in console. output = '' because its text is invisible
//here we'll apply textContent
console.log(hiddenHeading.textContent);//shows invisible/hidden text
//hiddenHeading.textContent in console

//practice question at 6:44:00
//can access element by tag or class or id
let headingh2 = document.querySelector('h2');//by tag
console.log(headingh2);

//append new string here.(with previous)
headingh2.innerText = headingh2.innerText + " :From VJ"; //concatinate

//practice question 2
let divs = document.querySelectorAll('.box');//by class
console.log(divs);
//acces individually write divs[0], divs[1] and so on in console
//divs[0].innerText = divs[0].innerText + " New sentance 1";
//divs[1].innerText = divs[1].innerText + " New sentance 2";
//divs[2].innerText = divs[2].innerText + " New sentance 3";

//performing same thing through loops
let idx = 1;
for (div of divs){
    div.innerText = div.innerText + "\n new sentence" + idx;
    idx++; 
}
//chapter 2: 
//attributes

div = document.querySelector('div');
console.log(div);

let classDiv = div.getAttribute('class');
console.log(classDiv); //first div

let classId = div.getAttribute('id');
console.log(classId);

let className = div.getAttribute('name');
console.log(className);

let para = document.querySelector('p');
console.log(para);

let paraId = para.getAttribute('id');
console.log(paraId);

let paraClass = para.getAttribute('class');
console.log(paraClass);

//change attributes by .setAttribute()
para.setAttribute('class','newParaClass'); //class changed
paraClass = para.getAttribute('class');
console.log(paraClass);

//console.log(para.setAttribute('id','paraNewId')); //shows undefined in console but changes id. check in elements
para.setAttribute('id','paraNewId');
paraId = para.getAttribute('id');
console.log(paraId); //this way shows change in console

//inline style: css applied directly in tag in html exp: <p color:red border 1px solid>Paragraph</p>
//in-line styl has higher priority than .css

console.log(para.style); //shows style(CSS)
para.style.backgroundColor = "green"; //although its red in HTML but on runtime javascript makes it green coz of this code here
para.style.color = "white";

//background-color: "blue" in CSS backgroundColor = "blue" in javascript.
//css coding use camel case in JavaScript
para.style.fontSize = "25px";
//para.style.visibility = "hidden";//will hide them

//create a new element with JavaScript
//.createElement()

let btn = document.createElement('button'); //creating button
btn.innerText = 'click me'; //text in button
console.dir(btn);

div = document.querySelector('div');//accesing div where putting button
console.log(div);

//div.append('btn'); //it just adds text 'btn'
div.append(btn);
//div.prepend(para1);
//div.after(btn);

let para1 = document.createElement('p');
console.log(para1);
para1.innerText = "Inner texr created in JavaScript";
let h2 = document.querySelector('h2');
console.log(h2);
h2.prepend(para1); //ni the start
//h2.append(btn); //in the end
//h2.before(btn); //before start 
//h2.after(para1); //after the end 

let h33 = document.createElement('h3'); //creating tag h3
h33.innerHTML = "<b><i> heading 5 created in JavaScript</i></b>"; //writing text in h3
//let h66 = document.querySelector('h6'); //accessing h6
document.querySelector('h6').before(h33); //placing directly
//h66.after(h33);
//h66.before(h33);//placing h33 in h6

//can access direct without storing in a variale
//document.querySelector('body').prepend(h33);

//removing a node
//para.remove();
//document.querySelector('h6').remove(); removing directly
//h2.remove();

//H.W: appendChild() & removeChild()

//practice question at 7:11:30
let newBtn = document.createElement('button');
newBtn.innerText = "click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector('body').prepend(newBtn);

let hh1 = document.querySelector('h1');
console.log(hh1);
console.log(hh1.getAttribute('class')); //hh1.getAttribute('class') in console

//hh1.setAttribute('class','dark'); //but this will delete previous class
console.log(hh1.classList);
hh1.classList.add('dark');
//hh1.classList.remove('dark'); //removes class dark
//hh1.classList.remove('amazom'); //removes class amazom
