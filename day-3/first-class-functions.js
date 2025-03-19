// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/*

I: string or number input, base
O: function to test value against base
C: 
E: 

*/

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return a function to test against base
    return function(value){
        return value > base;
    }
   
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */

/*

I: string or number
O: function that tests if value is less than base
C: 
E: 

*/

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //

    // create function that takes in a value to return
    return function(value){
        // return value < base boolean value
        return value < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*

I: parameter that is a single character
O: function that tests if string starts with character given
C: must be case insensitive
E: 

*/

function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    // convert startsWith letter to lower case and give new variable
    var startLetter = startsWith.toLowerCase();
    
    // return a function to test with a string
    return function(str){

        // convert first letter of str to lower case
        var strFirstLetter = str[0].toLowerCase();

        // return finding of if first letter === startsWith new variable
        return strFirstLetter === startLetter;

    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

/*

I: a string of a single character
O: function that tests last letter of a string
C: case insensitive
E: 

*/

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  
    // convert startsWith letter to lower case and give new variable
    var endLetter = endsWith.toLowerCase();
    
    // return a function to test with a string
    return function(str){

        // convert first letter of str to lower case
        var strEndLetter = str[str.length - 1].toLowerCase();

        // return finding of if first letter === startsWith new variable
        return strEndLetter === endLetter;

    };  
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/*

I: array of strings and a modify function
O: array of strings modified
C: 
E: 

*/

function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // create holder array
    var modifiedStringsArray = [];

    // loop over strings array
    for(var i = 0, i < strings.length; i++){

        // pass string through modify function
        modifiedStringsArray.push(modify(strings[i]));

    }
    // return new array
    return modifiedStringsArray;
    
    // YOUR CODE ABOVE HERE //
}

var upperCase = modifyStrings(['a', 'b', 'c'], function(str){ return str.toUpperCase() });
// => ['A', 'B', 'C']

var addExclamation = modifyStrings(['a', 'b'], function(str){ return str + "!" });
// => ['a!', 'b!']


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

var beginsWithA = allStringsPass(['alex', 'aaron'], function(str){ return str[0] === 'a'});
// => true (begins all strings begin with 'a')

var longerThan4 = allStringsPass(['alex', 'aaron'], function(str) { return str.length > 4});
// => false (not all strings have a length greater than 4)


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}