# es6

#Setting up the project

#Prerequisite 

npm and angular cli

Install Globally
npm install -g @angular/cli
Install Locally
npm install @angular/cli

npm init -y //To Skip Interactive questions

#Commands for actual js lib and webpack on cmd line but change package.json file "scripts": "start":"webpack --mode development"

npm i webpack@4.12.0 webpack-cli@3.0.3 --save-dev

#Installing server which contiously runs the code but change the package.json to "scripts": "start":"webpack-dev-server --mode development"

npm i webpack-dev-server@3.1.4 --save-dev 

#Transpiler -> Downloading the Transpilers ie babel so that our js will run properly in the old browsers

npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev

#Issues Faced

If the Server is not exited properly

Find process id -

    ~ Windows - >netstat -aon | findstr 3000
    ~ Kill the porcess > taskkill /pid 8884

#npm start 

#Notes

Methods and Modules | Section Overview
Section Overview/Coding Break: Methods and Modules

You made it to the end of the ES6 essentials overview! Woohoo! Now we can move on to some new material in ES6. Before you race onward, here you have a pitstop for an optional coding break. We’ll briefly review the vital topics that came up in this section. But you can use this time to grab coffee or whatever you need to keep learning :)

ES6 introduces the arrow function and a whole lot of helper methods to simplify manipulating arrays, objects, strings, and numbers.

The arrow function works just like a normal function expression, but with reduced syntax: ( ) => { … }

By default, arrow functions are anonymous because we declare them with an operator rather than the ‘function’ keyword.

The map helper method creates arrays by calling functions on each individual element of an initial array.

The filter helper method creates arrays based on the same elements of an original array depending on a certain test.

String.repeat() creates large strings by concatenating a string a certain number of times.

The search methods for strings include .startsWith, .endsWith, .includes, and more.

Number type checking can occur through the Number.isFinite method.

Number safety checking can occur through the Number.isSafeInteger method.

Modules refer to reusable pieces of code within an application. Most often, they exist independently within separate files, which come in handy when having to split up a large application.

The export keyword sends primitive values, objects, or functions from one module to another.

The import keyword receives primitive values, objects, or functions from another module.

Using the default keyword gives a module a fallback function when exporting multiple values and methods.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Classes and Prototypes | Section Overview

We just thoroughly explored classes and prototypes in JavaScript. Many of the concepts we discussed span even beyond the realm of ES6 and JS, so these lessons will translate to most programming languages you come across.

We covered a lot of ground though. It may feel nice to take an optional coding break. Grab some coffee, tea, or whatever you need - the usual!

Ok, let’s review the important topics we went over:

Classes in JavaScript construct structures of data based off of the state and behavior of real world objects and introduce a system of inheritance.

The constructor keyword initializes an object for a class.

The extends keyword creates subclasses and children of parent classes.

Static methods in classes can be called even outside the context of class.

Object-oriented programming models objects to create programs centered around the interactions of these objects with each other. Major programming languages like C, Java, and Ruby contain heavy support for object-oriented programming.

JavaScript is not based on object-oriented programming, but a prototypal-inheritance model.

A prototype is a characteristic in every JavaScript object that reveals its parent and the properties that it inherits.

All JavaScript objects contain a prototype and can trace their chain of prototypal inheritance all the way back to the base level Object prototype.

Arrow functions don’t create their own local ‘this’ object like a normal function prototype, but instead refer to the ‘this’ tied to its outer scope.

Classes and prototypes appear everywhere in JavaScript. And every ES6 programmer needs to grasp these fundamental concepts to truly grasp how the language works. Luckily, once you understand that classes are simply prototypes, and prototypes are simply references to an object’s parent, it becomes less abstract.

Ok class (or should I say prototype?), off to the next subject!