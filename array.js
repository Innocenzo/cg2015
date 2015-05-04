/**
 * ARRAY
 * ITERACTIVE METHODS: 
 * every,filter,forEach,map,some
 * Each of the iterative methodos accepts two arguments:
 * - a function to run on each item
 * - an optinonal scope object in which to run the
 *   function (affecting the value of this)
 *   The function pased into one fo these method
 *   will riceive three arguments:
 *   1. the array item value
 *   2. the position of the item in the array
 *   3. the array object itself
 */

/**
 * every(iterators,thisArg)
 * Runs the given function on every item in the array
 * and return true if the function returns true
 * for every item.
 */

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function  (item,index,array) {
	return (item > 2);
});

everyResult;   //false

var everyResult = numbers.every(function(item) {
 return (item > 2);
});

everyResult;   //true

/**
 * some(iterator,thisArg)
 * Runs the given function on every item in the
 * array and returns true if the function returns 
 * true for at least one item
 */

var numbers = [1,2,3,4,5,4,3,2,1];

var someResult = numbers.some(function(item, index, array) {
 return (item > 2);
});

someResult;   //true
var numbers = [1,2,3,4,5,4,3,2,1];

var someResult = numbers.some(function(item, index, array) {
 return (item > 5);
});

someResult;   //false

/**
 * filter(iterator,thisArg)
 * Runs the given function on every item in the array
 * and returns an array of all items for which the function
 * return true
 */

var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array){
 return (item > 2);
});

filterResult;   //[3,4,5,4,3]

/**
 * forEach(iterator,thisArg)
 * Runs the given function on every item in the array.
 * This method has no return value
 */

var numbers = [1,2,3,4,5,4,3,2,1];

numbers.forEach(function(item, index, array){
   //do something here
});

/**
 * map(iterator,thisArg)
 * Runs the given function every item in the array
 * and returns the result of each function call in an array
 */

var numbers = [1,2,3,4,5,4,3,2,1];

var mapResult = numbers.map(function(item, index, array){
   return item * 2;
});

mapResult;   // [2,4,6,8,10,8,6,4,2]

/**
 * REDUCTION METHODS:
 * reduce,reduceRight
 * Both methods accept two arguments:
 * - a function to call on each item
 * - an optional initial value upon which the reduction is based
 * The passed function accepts four arguments:
 * 1. the previus value
 * 2. the current value
 * 3. the item's index
 * 4. the array object
 * Any value returned from the function is automatically passed in as the
 * first argument for the next item
 */

/**
 * reduce(iterator,initVal)
 * Perform reduction in left-to-tight order
 */

var values = [1,2,3,4,5];

var sum = values.reduce(function(prev, cur, index, array){
 return prev + cur;
});

sum; // 15

/**
 * reduceRight(iterator,initVal)
 * Perform reduction in right-to-left order.
 */

var values = [1,2,3,4,5,15];

var diff = values.reduceRight(function(prev, cur, index, array){
 return prev - cur;
});

diff; // 0