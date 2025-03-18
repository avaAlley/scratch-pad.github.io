// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*

I: nothing
O: print Fizz for multiples of 3, buzz for multiples of 5, and multiples of both FizzBuzz, others log number
C: 
E: 

*/


function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // declare variable to 1 to increment
    var willFizzBuzz = 1
    // while variable is < 100 loop
    while (willFizzBuzz <= 100){
        
    // conditional statement for multiple of 3 AND 5
      if(willFizzBuzz % 3 === 0 && willFizzBuzz % 5 === 0){
        console.log('FizzBuzz');
        willFizzBuzz++
    // conditional for multiples of 3
      } else if (willFizzBuzz % 3 === 0){
        console.log('Fizz');
        willFizzBuzz++
    // conditional for multiples of 5
      } else if (willFizzBuzz % 5 === 0){
        console.log('Buzz');
        willFizzBuzz++
    // else print number
      } else {
        console.log(willFizzBuzz)
        willFizzBuzz++
      }
    // YOUR CODE GOES ABOVE HERE //

    }
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}