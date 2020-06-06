// http://webdev.slides.com/eschoppik/es2015#/


/*
  const - value that cannnot be reassigned.
  let - can be reassigned.
*/


const carMake = 'Nissan';
const carMake = 'Tesla';

console.log(carMake);   // error ! cant reassign...



/*
-------------------------------------------------
*/


// adding items to an arrany with an const name will work

const myNumbers = [1,2,3,4,5];

myNumbers.push(10);
console.log(myNumbers);



/*
-------------------------------------------------
*/



let name = 'Andy';
let name = 'Becky';

console.log(name);    // will return: Becky



/*
-------------------------------------------------
  template strings
*/


var firstName = 'Joe';
var lastName = 'Bloggs';

console.log(`Hello, I'm ${firstName} ${lastName}, nice to meet you.` );


/*
-------------------------------------------------
  arrow functions
*/


// v1
var add = function(a, b) {
  return a+b;
} 

// v2
var add = (a, b) => {
  return a+b;
}

// v3
var add = (a, b) => a+b;


add(4,5);


//

[1,2,3].map(value => value * 2);    // will return [2,4,6]


// v1
function doubleAndFilter(arr) {
  return arr.map(function(value){
    return value * 2;
  }).filter(function(value){
    return value % 3 === 0;
  })
};


// v2
var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

doubleAndFilter([5,10,15,20]);



/*
-------------------------------------------------
  
*/
