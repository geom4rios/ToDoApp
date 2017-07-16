/*
 function add (a, b) {
 return a + b;
 }

 console.log(add(3, 1));

 var toAdd = [9, 5];
 //add(toAdd[0], toAdd[1]);

 console.log(add(...toAdd));

 */
/*

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];

var final = [...groupB, 3, ...groupA];

console.log(final);*/

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function helloThere(name, age){
    console.log('Hell ' + name + ' you are ' + age + ' years old');
}

helloThere(...person);
helloThere(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
    console.log('Hi ' + name);
});


