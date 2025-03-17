// #!/usr/bin/env node

'use strict';

const { isNumber } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/* 

I: 
O: 
C: 
E: 

*/

/* 

I: input is a string
O: output should be a number, the length of the input string
C: 
E: return null if string is empty

*/

function length(string) {
    // YOUR CODE BELOW HERE //

    // get string length number and return it
    return string.length;
    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */

/* 

I: input is a string
O: return a string that is all lowercase
C: 
E: return null if string is empty

*/

function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

   // return null if string is empty
    if (string.length === 0){
        return null;
    };
   // assign lower case string to new string
    var lowerCaseString = string.toLowerCase();

    // return new lower case string
    return lowerCaseString;

    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to uppercase.
 */

/* 

I: input is a string
O: will return string forced to uppercase
C: 
E: 

*/

function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // create new string variable to hold upper case string
    var stringUpperCase = string.toUpperCase();

    // return new string
    return stringUpperCase;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/* 

I: takes in string
O: returns inputted string in dash-case
C: 
E: 

*/

function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    // create variable to hold lower case string and lower case it
    var stringLowerCase = string.toLowerCase();
    // variable to identify spaces to replace
    var spaceIdentifier = / /gi;
    // return lowercase string dash-case'd
    return stringLowerCase.replace(spaceIdentifier, '-');

    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/* 

I: input is a string and a single character
O: returns boolean value 
C: 
E: 

*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
  
    // vairable to hold first letter
    var firstLetterString = string.charAt(0)
    
    // variable to hold string first letter lower case
    var firstLetterLower = firstLetterString.toLowerCase();
    
    // variable to hold char lower case
    var charLower = char.toLowerCase();

    // identify first letter of string and compare to char
    if(firstLetterLower == charLower){
      return true;
    } else {
      return false
    }

    // YOUR CODE ABOVE HERE //
}

console.log(beginsWith("Euphi", "e"));

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/* 

I: string and a single character string
O: boolean of compared values
C: 
E: 

*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // variable to hold last letter value
    var stringLastLetter = string.charAt(string.length - 1);
  
    // variable to convert last letter to lower case
    var lastLetterLower = stringLastLetter.toLowerCase();
  
    // variable to convert char to lower case
    var charLowerCase = char.toLowerCase();
  
    // compare last letter to char
    if(lastLetterLower === charLowerCase){
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

console.log(endsWith("euphi", "i"));

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/* 

I: two strings
O: one string concat from both input
C: 
E: 

*/

function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // add two strings together and return
    return stringOne + stringTwo

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/* 

I: strings, multiple
O: one string
C: 
E: 

*/

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

    // variable for new string to return joining all array values
    var joinedString = args.join("");
    return joinedString.toString();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/* 

I: two strings
O: one string, the longer of two inputted strings
C: 
E: 

*/

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // compare length property of each string
    if(stringOne.length > stringTwo.length){
        // return stringOne if it is longest
        return stringOne;
    
    } else {
        //return stringTwo if it is longest
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/* 

I: two strings
O: return locale compare alphabetical result number
C: 
E: 

*/

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // compare strings first letter and return locale value
    return stringTwo.localeCompare(stringOne);

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/* 

I: two strings
O: return locale compare alphabetical result number
C: 
E: 

*/

function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // compare strings first letter and return locale value
    return stringOne.localeCompare(stringTwo);

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}