// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */

/*

I: value that may or may not be an array
O: boolean value if the value is an array
C: 
E: 

*/

function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // test if value is array
    if (Array.isArray(value) === true){
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */

/*

I: value that may or may not be an object
O: boolean value if the value tested is an object
C: 
E: 

*/

function isObject(value) {
    // YOUR CODE BELOW HERE //

    // since array will be typeof object, must test for array with Array.isArray
    if (Array.isArray(value) === true){
        return false;

    // null will also give object response, so must test against if it is null
    } else if (value === null){
        return false;

    // date will return object so must check specifically for instanceof Date
    } else if (value instanceof Date){
        return false;

    // finally, with no other object types remaining, we test for object
    } else if (typeof value === 'object'){
        return true;

    // if the value is NOT an object type, it will fail all above and return false
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/*

I: value that may or may not be an array or object
O: boolean value if the value is or is not a collection object
C: 
E: 

*/

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // must first test for null or date types
    if (value === null || value instanceof Date){
        return false;

    // only remaining object types are array and object, so test if true
    } else if (typeof value === 'object'){
        return true;

    // if its NOT an object type, returns false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 

/*

I: value of some datatype
O: string stating what type of value was given
C: 
E: 

*/

function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // if statement to test type string
    if (typeof value === 'string'){
        return typeof value;
    
    // else if to test type undefined
    } else if (typeof value === 'undefined'){
        return typeof value;

    // else if number
    } else if (typeof value === 'number'){
        return typeof value;

    // else if boolean
    } else if (typeof value === 'boolean'){
        return typeof value;

    // else if function
    } else if (typeof value === 'function'){
        return typeof value;

    // else if object
    } else if (typeof value === 'object'){
        // if object is null
        if(value === null){
            return 'null';

        // if object is date
        } else if (value instanceof Date){
            return 'date';
        
        // if object is array
        } else if (Array.isArray(value) === true){
            return 'array';
        
        // otherwise object is object
        } else {
            return 'object';
        }
    }
    // YOUR CODE ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}