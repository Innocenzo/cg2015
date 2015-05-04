/**
 * FUNCTION
 * JavaScript functions are a special kind of object with two
 * important features:
 * - they contain code
 * - they are executable (they can be invoke)
 */

function sum (a,b) {
	var result = a + b;
	return result;
}

function greets (name) {
	alert('Hello' + name + '!');
}

/**
 * PARAMETERS
 * When a function in invoked if passed arguments
 * are fewer than declared parameters
 * the additional parameters are set to undefined
 */



/**
 * ARGUMENTS
 * When a function is invoked 
 * it creates a special object called arguments
 * that hold the passed parameters
 */

function args () {
	return arguments;
}
args(1,"Hello",Math.PI);


function sum_all () {
  var result = 0;
  var n = arguments.length;
  var i;
  for (i = 0; i < n; i += 1) {
    result += arguments[i];
  }
  return result;
}

sum_all(1, 2, 3, 4, 5); //15


function max () {
  var result = Number.NEGATIVE_INFINITY;
  var n = arguments.length;
  var i;
  for (i = 0; i < n; i += 1) {
    if (arguments[i] > result) {
      result = arguments[i];
    }
  }
  return result;
}

max(1, 10, 100, 42, Math.PI, 1.4142135); //100

/**
 * FUNCTION AS VALUES
 * Since JavaScript functions are object:
 * - they can be assigned to variable or object properties
 * - they can be passed to other functions
 * - they can have properties
 * - they can be returned by functions
 */

/**
 * Assigned function to variables
 * JavaScript functions can be assigned to variable or object
 */

function f (name) {
	return "Hello" + name + '!';
}

var greets = f;
var person = {say : greets};
person.say("Enzo");// Hello Enzo
greets("Enzo"); // Hello Enzo

var sum = function (a, b) { return a + b; }

var add = sum;

add(1, 2); //3

/**
 * Pass function to functions
 * JavaScript function can be passed to other function
 */

function add (x,y) { return x + y; }
function sub (x,y) { return x - y; }
function mul (x,y) { return x * y; }
function div (x,y) { return x / y; }

function calc (operator,x,y) {
	return operator(x,y);
}
// ((2+3) + (4*5))
calc(add,calc(add,2,3),calc(mul,4,5));

/**
 * Assign properties to functions
 * JavaScript functions can have properties
 */

function factorial (n) {
	if (!(n in factorial)) {
		factorial[n]=n*factorial(n-1);
	};
	return factorial[n];
}
// Initialize the cache to hold this base case.
factorial[-1] = 1;  
factorial[0] = 1;
factorial(0); // 1
factorial(5); // 120
factorial(6); // 720

/**
 * Return function
 * JavaScript functions can be returned by functions
 */

function greets () {
	console.log("Hello");
	return function  () {
		console.log("Bye");
	};
}

//greets()();
//"Hello!"
//"Bye!"

//greets()()();
//"Hello!"
//"Bye!"
// TypeError: object is not a function

//var f = greets(); //"Hello!"
//f();              //"Bye!"
//f();              //"Bye!"
//f();              //"Bye!"

/**
 * SELF-INVOKING FUNCTIONS
 * JavaScript functions can be called right after they were defined
 */

(function  () {
	//alert('boo');
}());

var message = (function  (nam) {
	return "Hello" + nam + "!";
}("dude"));

message; // Hello dude

/**
 * INNER (PRIVATE) FUNCTIONS
 * JavaScript functions can be defined inside another function 
 * NOTE
 * f2 is defined inside f1 and it is not visible outside f1
 * f1 internally call the local function f2
 */
function f1 (a) {
  function f2 (b) {
    return b * 2;
  }
  return f2(a);
};

f1(2); //4

f2(2); //ReferenceError: f2 is not defined

/**
 * FUNCTION SCOPE
 * JavaScript uses FUNCTION SCOPE
 * variable are visible within the function in which they are defined
 * and within any functions that are nested within that function.
 * A variable defined in a function in not visible outside the function
 * but a variable defined in a code block is visible outside the block
 */

var a = 1;

function f () { 
  var b = 1; 
  return a; 
}

f();

b; //b is not defined

/**
 * NOTE
 * - variable a is in the global space
 * - variable b is in the scope of the function f()
 * - inside function f, both a and b are visible
 * - outside function f, a is visible, but b is not
 */

/**
 * LOCAL AND GLOBAL SCOPE
 * A variable declared within a function has a LOCAL SCOPE,
 * it is definited only within the body of the function.
 *
 * A variable not declared within a function has a GLOBAL SCOPE,
 * it is defined everywhere in the code.
 *
 * A local variable, a variable declared within a function,
 * takes precedence over a global variable with the same name.
 */

var scope = 'global';

function check_scope () {
  var scope = 'local';
  return scope;
}

check_scope(); //"local"

scope;        //"global"

/**
 * Use var for declare local variable
 */

var scope = 'global';

function check_scope () {
  scope = 'local';        // if var is omitted, it refers to global variable
  return scope;
}

check_scope(); //"local"

scope;        //"local"

/**
 * Function parameters count as local variable
 * and are defined only within the body of the fanction.
 */

function check_param_scope (a) {
  a += 1;
  //console.log(a);
}

//console.log(a);     //"undefined"

check_param_scope(1); //2

/**
 * SCOPE CHAIN
 * Each function has its own local scope.
 * It is possible to have several nested layers of local scope
 */

var a = 1;
// code here can see variable a and function f

function f (){
  var b = 1;
  // code here can see variables a and b and function n

  function n () {
    var c = 3;
    // code here can see variables a, b and c
  }
}

var scope = 'global';

function local_scope () {
  var scope = 'local';

  function nested_scope () {
    var scope = 'nested';
    return scope;
  }

  return nested_scope();
}

local_scope(); //"nested"
scope;        //"global"

/**
 * VARIABLE HOISTING
 * Since variables are visible within the function in which they are defined
 * variables are even visible before they are declared.
 * All variable declarations in a function (but not any associated assignment)
 * are "hoisted" to the top the function.
 */

function test (o) {
  //note i is defined throughout function
  var i = 0;                      
  if (typeof o === 'object') {
    //note j is defined everywhere, not just block
    var j = 0;                    
    //note k is defined everywhere, not just loop
    for (var k=0; k<10; k+=1) {   
      //prints k numbers 0 through 9
      console.log(k);             
    }
    //note k is still defined: prints 10
    console.log('k = ' + k);      
  }
  //note j is defined, but may not be initialized
  console.log('j = ' + j);       
}

/**
 * NOTE
 * The variables i,j, and k are declared in different spots,
 * but all have the same scope, all three are defined throughout the body of the function.
 */

var scope = 'global';

function f () {
  console.log(scope);  //prints "undefined", not "local" nor "global"
  var scope = 'local'; //variable scope initialized here, but defined everywhere in f
  console.log(scope);  //prints "local"
}

/**
 * The function above is equivalent to the following :
 */

function f () {
  var scope;          // local variable is declared at the top of the function
  console.log(scope); // local variable exists here, but still has "undefined" value
  scope = 'local';    // local variable is initialized
  console.log(scope); // local variable has the value we expect
}

/**
 * TIP
 * Declare all the variables defined within a function at the top of the function
 */

/**
 * CLOSURES
 */

function f () {
  var b = 'b';
}
b; //b is not defined

function f () {
  var b = 'b';
  return b;
}
b; //b is not defined
b = f();
b; //"b"

function f () {
  var b = 'b';
  return function () {
    return b;
  };
}
getB = f();
b = getB();
b; //"b"

var getB;
function f () {
  var b = 'b';
  getB = function () {
    return b;
  };
}
f();
b = getB();
b; //"b"

function f (arg) {
  return function () {
    return arg;
  };
}
var getArg = f('Hello');
getArg(); //"Hello"

function countdown (from) {
  return function () {
    if (from > 0) {
      return from--;
    }
    return 'Finish!';
  };
}
var c = countdown(3);
c(); //3
c(); //2
c(); //1
c(); //"Finish!"
c(); //"Finish!"

var get
var set;
(function () {
  var secret = 0;
  get = function () {
    return secret;
  };
  set = function (v) {
    secret = v;
  };
})();
get();    //0
set(123);
get();    //123

var get
var set;
(function () {
  var secret = 0;
  get = function () {
    return secret;
  };
  set = function (v) {
    secret = v;
  };
})();
get();    //0
set(123);
get();    //123

/**
 * Let's loop three times, each time creating a new function that return the loop sequence namber.
 * The new function will be added to an array and we'll return the array  at the end.
 */

function f () {
  var a = [];
  var i;

  for (i = 0; i < 3; i++) {
    a[i] = function () {
      return i;
    }
  }

  return a;
}
var a = f();
a[0](); //3
a[1](); //3
a[2](); //3

function f () {
  function getArg (x) {
    return function () {
      return x;
    }
  }

  var a = [];
  var i;

  for (i = 0; i < 3; i++) {
   a[i] = getArg(i);
  }

  return a;
}
var a = f();
a[0](); //0
a[1](); //1
a[2](); //2

var a = 1;
function f() {
  var a = 2;
  function n () {
    alert(a); 
  }
  n(); 
}

f(); //?