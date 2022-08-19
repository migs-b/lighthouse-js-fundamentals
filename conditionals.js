/* The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

The function returns one of the following strings, based on the value of age:

Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
Tips
Work incrementally, by writing and testing each scenario individually, instead of writing out the entire logic.
Use the automatic test results (when you click Evaluate) to do your testing. Combine that with the console.log approach if/as needed
That said, you can also add console.log statements outside (below) the function definition to call the function and see what it returns. Example code below: */

/* 
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
*/
/*
const whichSchool  = function (age) {
  // Your code in here ...
}
*/


var age = 21;

function whichSchool(age) {
  return (age < 13) ? "Elementary School"
       : (age >= 13 && age <= 18) ? "Secondary School"
       : "University"
}

console.log(whichSchool(age))