// video 105 - for each.
// http://webdev.slides.com/eschoppik/advanced-array-methods#/

var arr = [1,2,3,4,5];

arr.forEach(function(value, index, array) {
  console.log(value);
});



function forEach(array, callback) {
  for (var i=0; i<array.length; i++) {
    callback(array[i], i, array);
  }
}


/*
-------------------------------------------------
*/


function halfValues(arr) {
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val / 2);
  });
  return newArr;
}

halfValues([2.4,6]);



/*
-------------------------------------------------
*/


function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val * 2);
  });
  return newArr;
}

doubleValues([2,4,6,8]);


/*
-------------------------------------------------
*/


function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function(val){
    if(val % 2 === 0){
      newArr.push(val);
    }
  })
  return newArr;
}



/*
-------------------------------------------------
*/

