// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/* 

I: array
O: all values in array
C: 
E: 

*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // loop to iterate over array
  for(var i = 0; i < array.length; i++){

  // log each array index value
    console.log(array[i]);

  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*

I: array
O: all values in array in reverse
C: 
E: 

*/

function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // loop to iterate over array backwards
  for(var i = array.length - 1; i >= 0; i--){

  // log each array index value
    console.log(array[i]);

  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*

I: object
O: array containing object keys
C: 
E: 

*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  // variable of an empty array to hold object keys

  var objectKeys = [];
  
  // loop to iterate over each object key
  for(var key in object){

  // log the object key eaach iteration
    objectKeys.push(key);
  }

  // return array variable
  return objectKeys;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*

I: object
O: print keys
C: using console log
E:

*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // iterate over object keys
  for(var key in object){

  
  // log object key accessed to console
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*

I: object
O: return an array containing object's values
C: 
E: 

*/


function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

  // declare new variable to hold object values
  var objectValues = [];

  // iterate over object's keys
  for (var key in object){
  
  // push key value to new array
    objectValues.push(object[key])
  };

  // return new array
  return objectValues;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*

I: object
O: print object values
C: using console.log
E: 

*/


function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // iterate over object
  for (var key in object){

  // print key value to console
    console.log(object[key]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*

I: object
O: number of key/value pairs in object
C: 
E: 

*/


function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // create number variable to iterate with 
  var objectCount = 0

  // iterate over object
  for (var key in object){

  // increment objectCount for each key
    objectCount++
  }
  // return objectCount
  return objectCount;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*

I: object
O: print values in reverse to console
C: 
E: 

*/


function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // create array to hold object key values
  var objectValueArray = []
  // iterate over object keys
  for (var key in object){

  // push object key value to array
    objectValueArray.push(object[key]);
  }
  // iterate over array in reverse order
  for (var i = objectValueArray.length - 1; i >= 0; i--){

  // each iteration, print to console
    console.log(objectValueArray[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}