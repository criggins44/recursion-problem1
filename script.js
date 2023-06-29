//Recursion Problem 1

/*
Write a JavaScript function to calculate the factorial of a number.
*/


function factorial(num) {

  if (num === 0){
    return 1;
/*
makes sure that there is a value capable of being multiplied by increasing the
    minimum value to 1
*/
  }

  return num * factorial(num - 1);
//multiplies the number by the all the numbers that come before it
  
}

console.log(factorial(4));
