const student = {
    fullName: "Adam gilchrist",
    marks: 76, //properties
    printMarks: function () { 
        console.log("marks:",this.marks); //this.marks means student.marks
    }       //function
}
//write student.printMarks() in console
//write student.toString in console
//prototype is an object created automatically inside an object we create
//prototype has many properties and functions
//like array  is an object and arr.push() pop() are the functions created automatically in arraay(object).
//these functions come from prototype object

let employee = {
    calcTax1() { 
        console.log("tax rate = 20%");
    },
    calcTax2 : function () { //both same thing. but mostly used above method
        console.log("tax rate = 40%"); 
    },
};
console.log(employee);
console.log(employee.calcTax1());
console.log(employee.calcTax2());

let david = {
    salary : 10000,
    calcTax1() { 
        console.log("tax rate = 30%");//same name function thats in employee and prototype of that is used here. but david will use this function.
    },
}
console.log(david);
david.__proto__ = employee; //store functions of employee into david
console.log(david);
//write david.calcTax1() in console. calcTax1 works on david  even not created into it
//when 2 same named function in an object and its's prototype then the function inside the object will be called. priority.

//Classes
console.log("Classes");
//Class is blueprints for its objects

class car {
    start() {
        console.log("start");
    }
    stop(){
        console.log("stop!");
    }
    setBrand(brand) {
        //this.brandName = brand;//this.brandName is an property of the object.
        this.brand = brand;// both brands are diferent variables. can give same and also different names
    }
    product = "car"; //access by porsche.product 
}
let phortuner = new car; //new keyword searches for constructor
let porsche = new car;//constructor initializes the object
console.log(phortuner);
console.log(porsche);
phortuner.start();
porsche.stop();

phortuner.setBrand("phortuner");
//porsche.setBrand("porsche");
porsche.brand = "porsche";
console.log("product: ",porsche.product);
console.log("brand:",porsche.brand);

//constructor is created by javascript if we do not create it at the time of creating class

//another way better way
class toyotaCar {
    //constructor() //also correct. this way just does not take parameters
    constructor(brand,milage){
        console.log("new object created. brand ",brand,"milage: ",milage);
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
console.log(toyotaCar);
let car1 = new toyotaCar("car1",10);
let car2 = new toyotaCar();
car2.brand = "car2"; // can asign name here too
car2.milage = 12;
console.log(car2.brand,car2.milage);
let car3 = new toyotaCar("car3",15);

console.log(car1);
console.log(car2);
console.log(car3);

//inheritance
class parent {
    hello() {
        console.log("hello");
    }
}
class child extends parent{}

let obj = new child;
console.log(obj);//object of child class, but runs function of parent class
obj.hello();
//method overriding: same method by parent and child class then it will run method of child class

class human {
    constructor(){
        this.species = "homo sepian";
        console.log("Curruntly in parent class");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing");
    }
}
class engineer extends human {
    constructor(branch){
        console.log("curruntly in child class");
        super();//to invoke super constructor(from parent class)
        this.branch = branch;        
        console.log("curruntly in child class");
    }
    work(){
        console.log("engineer");
    }
}


let vj = new engineer("Networking engineer");
let penny = new human;//see in console
vj.work();//method overriding
penny.work();
vj.sleep();
console.log("Penny species:",penny.species);
console.log("VJ species:",vj.species);

let p1 = new human; //can write this in console
let e1 = new engineer;
//super class & derived(child) class
let adam = new engineer("chemical");
console.log(adam);
console.log("adam.species", adam.species);
console.log("adam.branch", adam.branch);
//write in console: adam.work(), adam.sleep()

class doctor extends human {
    constructor(name){
        super(name); //specify constructor exactly.
        this.name = name;
    }
    work(){
        super.eat();
        super.sleep();//accessing method from super class anytime
        console.log("doctor");
    }
}
let cooper = new doctor("cooper"); //access it in console

//practice question
let data = "This is an encrypted data";
class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data: ",data);
    }
}
let std1 = new user("std1","std1@example.com");
let std2 = new user("std2","std2@example.com");
let teacher1 = new user("teacher1", "teacher1@example.com");
std1.viewData();

//scripting language: 1. that runs on runtime. 2. can work by connecting with another language.
class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editData() {
        data = "new updated data";
    }
}
let adm1 = new admin("admin1","admin@abc.com");
console.log("now:",data);
adm1.editData();
console.log(data);

//error handling
let a=10;
let b=20;
console.log(a+b);

try{
    console.log(a+c);//error
}catch(er) {//could be any variable for error
    console.log(er);
}
console.log(a+b);
console.log(a+b);