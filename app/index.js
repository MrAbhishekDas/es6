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

// String Manipulation and Number Checking

let str = "butterfly";

console.log(str.startsWith("butter"));
console.log(str.endsWith("fly"));
console.log(str.includes("cat"));

import {fellowship, total} from './fellowship';
console.log(fellowship);
console.log(total);

import {add, multiply} from './math';
console.log(add(10,5));
console.log(multiply(10,5));