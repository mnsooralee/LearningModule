let btn1 = document.querySelector('#btn1');
btn1.onclick = (evt) => {
    console.log("The button clicked");
    let a = 0;
    a++;
    console.log(a);//see green button below div
    console.log(evt);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
    console.log(evt.target);
}

let div = document.querySelector('div');
div.onmouseover = (e) => {
    console.log("You are inside the div")
    console.log(e);//se details
    console.log("event type:",e.type);
    console.log("event target:", e.target);
    console.log(e.clientX,e.clientY);
}
// target: place(node) where event occurs
// type: onclick or mouseover or etc.
// client x & client: on screen where(x: horizontaly) and (y:vertically) 

//remember: 
// 1. if we write event handler in-line and in javascript then javascript has the priority. js code will run
// 2. if 2 handlers used in javascript then latest handler will run 

//this way we can handle only 1 event for 1 function in 1 time. and this problem solved by eventListners.

//eventListners
//1 event : multiple listners

//many types of events but mostly used onclick, dblclick and mouseover
let btn2 = document.querySelector('#btn2');


btn2.addEventListener('click',() => {
    console.log('The button clicked');
})

// btn2.addEventListener('click',() => {
//     console.log('The button clicked - handler 2');
// })

//add event in a variable then add and remove by it
let btn2Handler2 = () => {
    console.log("the buttone clicked - handler 2");
}
btn2.addEventListener('click',btn2Handler2);//see


// btn2.addEventListener('dblclick', () => {
//     console.log('The button double clicked');
// })
//same button another event handler
btn2.addEventListener('mouseover',(evt) => {
    console.log('Mouseover');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);

})

// btn2.removeEventListener('click',() => {
//     console.log('The button clicked - handler 2');//but this does not remove
// })

//put that eventListner into a variable then remove by mention its variable
btn2.removeEventListener('click',btn2Handler2); //comment it out see changes

let btn3 = document.querySelector('#btn3');
let btn3Handler1 = () => {
    console.log('Button 3 handler 1');
}
let btn3Handler2 = () => {
    console.log('button 3 handler 2');
}
btn3.addEventListener("click",(evt3) => {
    console.log("Button 3 handler.");
})
btn3.addEventListener('click',btn3Handler1);
btn3.addEventListener("mouseover",btn3Handler2);
//btn3.removeEventListener('mouseover',btn3Handler2);
btn3.removeEventListener('click',btn3Handler1);

//creating light and dark theme
//toggle button: changes state from loght to dark & dark to light when clicked

let modeBtn = document.querySelector('#mode');
let currentMode = "light";
modeBtn.addEventListener("click", ()=> {    
    if(currentMode==="light"){
        //console.log("Light theme");
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('body').style.color="white";
        console.log('You changed to dark mode');
        currentMode="dark";
    }
    else {
        //console.log("Dark theme");
        document.querySelector("body").style.backgroundColor="white";
        console.log("you changed to light mode");
        currentMode="light";
    }
})

//creating same by making light and dark them in CSS and accessing them here
let body = document.querySelector('body');
let currentTheme = "light";
let themeButton = document.querySelector("#theme");
themeButton.addEventListener("click", ()=> {
    if(currentTheme==="light"){
        body.classList.add("dark");
        body.classList.remove("light");//must remove the other mode if using classes
        //document.querySelector("body").classList.add("dark");
        //document.querySelector("body").style.backgroundColor="black";
        //body.style.backgroundColor="black";//same thing
        currentTheme="dark;"
    }
    else{
        body.classList.add("light"); 
        body.classList.remove("dark");//must remove the other mode if using classes
        //document.querySelector("body").classList.add("light");
        //document.querySelector("body").style.backgroundColor="white";
        //body.style.backgroundColor="white";//same thing
        currentTheme="light";
    }

})

