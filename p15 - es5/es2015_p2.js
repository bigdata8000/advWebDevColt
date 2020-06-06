/*
-------------------------------------------------
  arrow functions fo not get their own 'this' keyword
*/


// pass in arr, x3 and return new numbers that what could be divided by 5.
let tripleAndFilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);

tripleAndFilter([2,3,4,5,6,7,8,9,10]);



// 


// pass in arr, double and only show new odd numbers.
let doubleAndOdd = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);

doubleAndOdd('5,6,7,8,9,10,11,12');


//


/*
-------------------------------------------------
  default parameters
*/

function add(a, b) {
  return a+b;
}

//

function add(a=10, b=20) {
  return a+b;
}

add(20);  // will return 40



/*
-------------------------------------------------
  for...of loop    
*/

var arr = [2,3,4,5,6,7];

for (let val of arr ) {
  console.log('Hello ' + val);
}



/*
-------------------------------------------------
  ... rest     
*/


function printRest(a,b,...c){
  console.log(a);
  console.log(b);
  console.log(c);
}

printRest(1,2,3,4,5);


/*
-------------------------------------------------
  ... spread     
*/


var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

var combined2 = [...arr1, ...arr2, ...arr3];

// es2015


var yearSales = [3500, 1500, 3000, 4500, 2500, 4800];

var biggestSale = Math.max(...yearSales);
console.log('Your highest sale is: £ ' + biggestSale);


// one more time:


function sumValues(a,b,c){
  return a+b+c;
}


var nums = [12,15,20];

// es5
sumValues.apply(this, nums);  // 47

// es2015
sumValues(...nums);           // 47


