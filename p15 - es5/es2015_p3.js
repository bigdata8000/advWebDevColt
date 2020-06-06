// object shorthand notation




// swapping values

function swap(a,b){
  var temp = a;
  a = b;
  b = temp;
  return [a,b];
}

swap(10,5);


// es2015

function swap(a,b){
  return [a,b] = [b,a];
}

swap(20,800);


/*
-------------------------------------------------
       
*/
