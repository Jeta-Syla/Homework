/* 
employ bind function that works as shown in usage
do not use ES 6
tip - use arguments, apply, closure  
*/

const user = {
  firstName: "Bill"
};

function add(a, b, c) {
  return this.firstName + " adds " + (a + b + c);
}

function bind(fn, context) {)
  var presetArgs = Array.prototype.slice.call(arguments, 2);

  return function() {
  
    var newArgs = Array.prototype.slice.call(arguments);

    var allArgs = presetArgs.concat(newArgs);

  
    return fn.apply(context, allArgs);
  };
}


// usage
console.log(bind(add, user)(1, 2, 3));           // Bill adds 6
console.log(bind(add, user, 1)(2, 3));           // Bill adds 6
console.log(bind(add, user, 1, 2, 3)());         // Bill adds 6
console.log(bind(add, user, 1, 2, 3)(4, 5, 6));  // Bill adds 6
