// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

/*

I: two integers
O: an array containing all integers between two paramters inclusively
C: 
E: 

*/

function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    // create holder array for integers
    var rangeArr = [];

    // checks if start is less than end
    if (start <= end){

        // loop through numbers
        while (start <= end){
          
          // push to holder array
          rangeArr.push(start);
          
          // increment start
          start++
        }
    // if start is greater than end
    } else if (start >= end){

        // loop through numbers in reverse
        while (start >= end){
          
          // push to holder array
          rangeArr.push(start);
          
          // increment start
          start--
        }
    }
  return rangeArr;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}