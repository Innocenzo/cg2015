/**
 * OBJECT
 */
/**
 * [hero description]
 * @type {Object}
 */
var hero = {
	bread : "Turtle",
	occupation: "Ninja",
	'finger count' : 3, 
};

hero.occupation; // "Ninja"

hero["bread"];// "Turtle"

var key	= "occupation";
hero[key]; // Ninja

hero.height; // Undefined

/**
 * SET PROPERTIES
 */

hero.name="Michelangelo";
hero.name;// Michelangelo

hero["height"]=181;
hero.height;// 181

var key="occupation"
hero[key]="Pizza eater";
hero.occupation;// Pizza eater

/**
 * 	PASSING OBJECT BY REFERENCE
 */

var original={howmany:1};
var copy = original;
copy.howmany; // 1
copy.howmany=100;
original.howmany;// 100

/**
 * COMPARING OBJECT
 * When you compare object you'll get true only if you compare two 
 * references to the same object 
 */
var fido ={breed: 'dog'};
var benji={breed: 'dog'};

benji===fido; // false

var mydog= benji;
mydog===benji; // true
mydog===fido;//false