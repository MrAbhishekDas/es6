const emails = ['abhishek@gmail.com','abhi@gmail.com'];
//limit = 10;
//console.log(emails.push('das.a@gmail.com'));
//console.log(emails);

// let limit = 10;

// {
//     //local scope
//     let limit = 100;
//     console.log(limit);
// }
// //global scope
// console.log(limit);


// Here in the var keyword limit is not blocked scope
// var limit = 10;

// {
//     var limit = 100;
//     console.log(limit);
// }

// console.log(limit);

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
let greet = "Good Morning `$Name`";

console.log(greet);



//Destructing objects
let son = {name:'Simba',parents:2};
let name, parents;
({name, parents} = son);
console.log(name,parents);

//Function

//Function Declaration
function cheer(){
    console.log("WhooHoo!");
}

//Function Call
cheer();

//Function Expression
var cheer = function (){
    console.log("WhooHoo! Exp");
}

//Function Call
cheer();


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