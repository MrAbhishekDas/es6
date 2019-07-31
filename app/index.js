const emails = ['abhishek@gmail.com','abhi@gmail.com'];
//limit = 10;
//console.log(emails.push('das.a@gmail.com'));
//console.log(emails);

let letLimit = 10;

{
    //local scope
    let letLimit = 100;
    console.log(letLimit);
}
//global scope
console.log(letLimit);


// Here in the var keyword limit is not blocked scope
var varLimit = 10;

{
    var varLimit = 100;
    console.log(varLimit);
}

console.log(varLimit);

var message;

function hello(){
    let message = "Hello";
    console.log(message);
}

function greeting(){
    let message = "How are you !";
    console.log(message);
}

hello();
greeting();

let Name = "Abhishek Das";
let balance = 100;
let greet = `Good Morning ${Name}, Balance in account is ${balance}`;

console.log(greet);

let a = [20,30,40];
let b = [10,...a,50];

console.log(b);//Spread Operator(...) -->works on string even

function collect(...a){
    console.log(a);
}

collect(1,2,3);

//Destructing Assignments
let z = [4,5,6];
let [four,five]=z;
console.log(z[0],z[1]);
console.log(four,five);

//Arrays
let animals = ["Simba","Sparow"];
let [lion,bird]=animals;
console.log(lion,bird);

//Objects
let king = {name:"Mufasa",kids:9};
let {name,kids} = king;
console.log(name,kids);

//Destructing objects
let son = {name:'Simba',parents:2};
let name1, parents;
({name1, parents} = son);
console.log(name1,parents);

// String Manipulation and Number Checking

let str = "butterfly";

console.log(str.startsWith("butter"));
console.log(str.endsWith("fly"));
console.log(str.includes("cat"));

//Function

//Function Declaration
function cheer(){
    console.log("WhooHoo!");
}

//Function Call
cheer();

//Function Expression
var cheerExp = function (){
    console.log("WhooHoo! Exp");
}

//Function Call
cheerExp();


//Anonymous Function

setTimeout(function() {
    console.log("In Annonymous Function")},3000
)

//Converting to Arrow function

setTimeout( () => console.log("In Arrow Fuction"),5000);

//Helper Method(Map)

let values = [20,30,40];
let double = (n) => {
    return n*2;
}

let doubled = values.map(double);
console.log(doubled);

//shorting the function

let doubledShort = values.map((n) => {
    return n*2;
});
console.log(doubledShort);

//Shortest
let doubledShortest = values.map((n) => n*2);
console.log(doubledShortest);

//Helper Method(Filter)
let points = [5,8,19,15,89,7,88];

let highsScores = points.filter((n) => {
    return n>15;
});

console.log(highsScores);

//shorting the function

let highsScoresShort = points.filter((n) => n>15);

console.log(highsScoresShort);

//Modules

/*Modules refer to reusable pieces of code within an application. Most often, 
they exist independently within separate files, 
which come in handy when having to split up a large application.*/

/*The export keyword sends primitive values, objects, or functions from one module to another.*/

/*The import keyword receives primitive values, objects, or functions from another module.*/

//import {add, multiply} from './math';
//console.log(add(10,5));
console.log(multiply(10,5));

import {fellowship, total} from './fellowship';
console.log(fellowship);
console.log(total);

//Here we no need to use the multiply within curly braces {} since we have used default keyword in math.js

/*Using the default keyword gives a module a fallback function when exporting multiple values and methods.*/

import multiply from './math';
console.log(multiply(3,4));