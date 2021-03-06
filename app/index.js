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

// setTimeout(function() {
//     console.log("In Annonymous Function")},
//     3000);

// //Converting to Arrow function

// setTimeout( () => console.log("In Arrow Fuction"),5000);

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

//Classes in Javascript
/*Here the animal class can be moved to a seperate file and then export it*/
class Animal {
    constructor(name,height){
        this.name=name;
        this.height=height;
    }

    hello(){
        return `I'm ${this.name} and my height is ${this.height}`;
    }
}

let lionKing = new Animal("Mufasa",3);
console.log(lionKing);
console.log(lionKing.hello());

/*Inheriting classes*/
class Tiger extends Animal {
    constructor(name,height,place){
        super(name,height);
        this.place=place;
    }

    hello(){
        return `I'm ${this.name}, my height is ${this.height} and my place is ${this.place}`;
    }
}

let tigerSon = new Tiger("Sourav",4,"Bengal");
console.log(tigerSon);
console.log(tigerSon.hello());

//static classes

class Calculation {
    static mul(a,b) {
        return a*b;
    }
}

console.log("Static Method " + Calculation.mul(3,2));

//Data Structure in JS
//The Set - This stores only unique value

let setArray = ['4','5','9'];
let setData = new Set(setArray);
console.log(setData);

let mapObj = new Map();
let key_1 = "String Key";
mapObj.set(key_1,"Value for String");

let key_2 = {a:"key"};
mapObj.set(key_2,"Value for Object");

let key_3 = function () {
    console.log("In Map Func");
};
mapObj.set(key_3,"Value for func");

console.log(mapObj);
console.log(mapObj.size);
console.log(mapObj.values(key_3));//Find all the method here

//Counting the letters in thestring via map

let string = 'superaaaaaacalifragilisticexpialidocious';

let letters = new Map();
for (let i=0; i<string.length; i++) {
    let letter = string[i];
    if (!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}
console.log(letters);

//Closures

let call = () => {
    let secret = 'ES6 Rocks!';
    let reveal = () => {
        console.log(secret);
    }
    reveal();
}

//console.log(secret); //Here is secret is undefined
call();

//Function factories
const addSuffix = (x) => {
    const concat = (y) => {
        return y+x;
    }
    return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);

const multiplyFuncFactories = (x) => {
    return (y) => {
        console.log("x is " + x);
        return y*x;
    }
}

let mulData = multiplyFuncFactories(8);
console.log("Closures: "+ mulData);
console.log("Closures: "+ mulData(3));

//shortening it

const mult = x => y => y*x;
let m = mult(7);

console.log("sortening fuction factories "+m);
console.log(m(4));

//Generators

function* letterMaker() {
    // let count = 0;
    // while(count < 3) {
        yield 'a';
        yield 'b';
        yield 'c';
        
    //}
}

let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker() {
    let count = 0;
    while(count < 3) {
        yield count +=1;
    }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);

function* evens() {
    let count = 0;
    while(true) {
        count +=2;
        console.log("Before Yield");
        let reset = yield count;
        console.log(reset);
        if(reset){
            count = 0;
        }
        console.log("After if")
    }
}

let sequence = evens();
console.log("Generators");
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

console.log("Value Reset");
console.log(sequence.next(true).value);// Need to explore more
console.log(sequence.next().value);

// Iterators
console.log("Iterators");

function* arrayIterator() {
    yield* arguments;
}

let it = arrayIterator(1,2,3);
//console.log(it.next()); // Has two parameters value and done
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//Promise

let p = new Promise((resolve, reject) => {
    //lets say Below is the data received from Rest Apis
    //whichever data is it receives it proceses it as we will receive either of the data
    setTimeout(() => {
        resolve("Resolved Promise Data");
        reject("Rejected Promise Data");
    },5000);
});

p.then(response => console.log(response))
 .catch(error => console.log(error));

 //Implementing the promise

 const restApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

 fetch(restApiUrl, {method: "GET"})
 .then(response => response.json()) /*here we are returning the response data in the form of respose.json*/
 .then(json => console.log(json))
 .catch(error => console.log(error));

 //example of google apis

 
 const restApiUrlGoogle = 'https://www.googleapis.com./books/v1/volumes?q=isbn:0747532699';

 fetch(restApiUrlGoogle, {method: "GET"})
 .then(response => response.json()) /*here we are returning the response data in the form of respose.json*/
 .then(json => console.log(json))
 .catch(error => console.log(error));