// calling APIs : fetch API
// API: application programming interface
// find APIs: https://free-apis.github.io/#/browse

// https://cat-fact.herokuapp.com
// Endpoints
// /facts Retrieve and query facts
// /users* Get user data

// our API: api end point: "https://cat-fact.herokuapp.com/facts"
// status:200 means succees

// while response from APIs our page does not reloads and response comes on runtime.
// response is an object

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async() => {
    console.log("Getting data....");
    let response = await fetch(URL); //This is a "get request"
    console.log(response); // but we need JSON format
    // can find status by console.log(response.status);
    let data = await response.json(); //Usable data
    console.log(data); //full data of 5 arrays
    console.log(data[0]); //all data(text,source,status,...etc) on 0th index
    console.log(data[0].text); //0th index -> text
    console.log(data[0].status); //status on 0th index

}
console.log(getFacts());
//let promise = fetch(URL,[option]) //if we do not write [option] then bydefault it will be a "get request"
//mostly we use "get request"
//most of the APIs today use JSON format.
// JSON: also called AJAJ asynchronus javascript and JSON.
//JSON replaces XLM now a days
//first we get response in JSON format
//then we need to conver it into JS object
//JSON() gives 2nd promise (first response given by API)
//JSON() takes JSON form and gives JS object in output

let paraFact = document.querySelector("#fact");
//paraFact.innerText = ("home");
let btn = document.querySelector("#btnFact");
const getFacts2 = async() => {
    console.log("Getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();    
    paraFact.innerText = data[2].text; //write getFacts2() in console and see result on runtime.
}
btn.addEventListener("click", getFacts2);//click on the button

//same function by promise channing
let btn2 = document.querySelector("#btnFact2");
let paraFact2 = document.querySelector("#fact2");

//promise channing
function getFactsPr() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data[2].text);
        paraFact2.innerText = data[2].text;
    })
}
btn2.addEventListener("click", getFactsPr);

//but async-await is easier and mostly used
//get request, delete request, patch request(to update data), post request to send data..learn more on MDN "HTTP request methods"
//status response codes: 200 for success, 404 error and find others on MDN "HTTP response status code"
//API responses also contain headers(contain some additional information).
