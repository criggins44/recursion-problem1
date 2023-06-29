//Recursion Problem 1

/*
Write a JavaScript function to calculate the factorial of a number.
*/

function factorial(num) {

	if(num < 0) {
		return 'choose a positive number';
	}
	if(num === 0){
		return 'minimum value is 1';
	}
	return num * factorial(n);
}

console.log(factorial(4));


function factorial(num) { 
  if (num === 0){
    return 1;
  }
  
  return num * factorial(num - 1);       
}

console.log(factorial(5));
