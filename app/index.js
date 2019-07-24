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