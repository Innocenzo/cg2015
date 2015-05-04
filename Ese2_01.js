/**
 * FUNCTION
 */
/**
 * EXERCISE01
 */
function greets () {
 console.log('Hello!');
 greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}

greets();// Hello + greets()

greets()();// Bye + Bye 

greets()()(); // Bye + Bye + Bye + greets()

function greets () {
 console.log('Hello!');
 var greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}

greets(); // Hello + greets()

greets()(); // Hello + Bye + greets()

greets()()(); // hello + Bye + Bye + greets

/**
 * exercise 2
 */

function identity (n) {
		var matrix=[];
	for (var i = 0; i < n; i++) {
		matrix[i]=[];
		for (var j = 0; j < n; j++) {			
			(i===j)? matrix[i][j]=1 : matrix[i][j]=0 ;
		};
	};
return matrix;
}

/**
 * exercise 3
 */

function fibonacci (i) {
	if (!(i in fibonacci)) {
		fibonacci[i]=fibonacci(i-1)+ fibonacci(i-2) ;
	};
	return fibonacci[i];
}