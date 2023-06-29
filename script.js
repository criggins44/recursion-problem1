//Recursion Problem 1

/*
Write a JavaScript function to calculate the factorial of a number.
*/


function factorial(num) {
  if (num === 0){
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(4));


/*
function factorial(num) { 
  if (num === 0){
    return 1;
  }
  
  return num * factorial(num - 1);       
}

console.log(factorial(3));
*/