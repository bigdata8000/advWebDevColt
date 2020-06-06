/*  video 062 - callback function.
*/


function callback() {
  console.log('Coming from callback');
}


function higherOrder(fn) {
  console.log('About to call callback');
  fn();
  console.log('Callback has been invoked');
}


higherOrder(callback);


/*
-------------------------------------------------
*/


function greet(name, formatter) {
  return 'Hello ' + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet('Tim', upperCaseName);


/*
-------------------------------------------------
*/

