/**
 * CONSTRUCTOR FUNCTIONS
 * Instantiate objects
 * Function can be used to instantiate object
 * using the 'new' operator.
 */

function Hero () {
  this.occupation = "Ninja";
}

var hero = new Hero();
hero.occupation; // "Ninja"

/**
 * 'this' special value
 * IN a constructor function (a function called via
 * the 'new' operator)
 * 'this' refers to the new object instatiated.
 */

function Cat (name) {
  this.name = name;
}

var felix = new Cat("Felix");
felix.name;      // "Felix"

/**
 * 'this' special value
 * In general, 'this' is the contex where the function is invoked,
 * and correspond to the object the function belong to.
 */

var o = {
  f: function () {
    return this;
  }
};

o.f();      // Object o

var cat = {
  name: "Tom",
  greets: function () {
    return "Hi! I'm " + this.name + "!";
  }
};

cat.name;     // "Tom"
cat.greets(); // "Hi! I'm Tom!"

/**
 * 'this' special value
 * If a constructor function is called without 'new'
 * 'this' refers to the object the function belongs to (windows)
 */
function Hero (name) {
  this.name = name;
  this.occupation = "Ninja";
}

// invoking Hero without new
var h = Hero("Leonardo");
typeof h;          // "undefifined"
h.name;            // TypeError: Cannot read property "name" of undefined

window.name;       // "Leonardo"
window.occupation; // "Ninja"

function f () {
  return this;
}

f();                // Object window

/**
 * INSTANCEOF OPERATOR
 * instanceof operator tests if an object is created by a constructor function.
 */
function Hero () {}

var h = new Hero();
var o = {};

h instanceof Hero;   //true
h instanceof Object; //true
o instanceof Object; //true
o instanceof Hero;   //false

/**
 * PROTOTYPE
 * prototype special property
 * Every function has a special property called prototype
 * prototype is an object shared by every object instantiated by the function
 * prototype is initially an empty object
 */

function Circle (r) { 
  this.r = r; 
}

Circle.prototype; // {}

/**
 * prototype special property
 * prototype object can be argumented with properties and methods
 */

function Circle (r) {
  this.r = r;
}

Circle.prototype.name = "circle";
Circle.prototype.area = function () {
  return Math.PI * this.r * this.r;
};
/**
 * Properties and methods added to the prototype of a function
 * are available to every object instantied by that function
 */

var c1 = new Circle(4);
c1.r;       //4
c1.name;    // "circle"
c1.area();  //50.26548245743669

var c2 = new Circle(2);
c2.r;       //2
c2.name;    //"circle"
c2.area();  //12.566370614359172

/**
 * prototype special property
 * Objects are passed by reference:
 * the prototype is not copied with every new object instance
 */

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.r;
};

c2.circumference();   //25.132741228718345

/**
 * CONSTRUCTOR PROPERTY
 * Every prototype object has a special property called constructor
 * that refers to constructor function.
 */

function Cat (name) { 
  this.name = name; 
}

Cat.prototype.constructor; // function Cat(name) { ... }

Cat.prototype.constructor === Cat; // true

/**
 * THE PROTOTYPE CHAIN
 * Every function 'f' has a prototype property:
 * the object shared by instances created by the function 'f'
 * Every prototype object 'o' has a constructor property:
 * the function which creates objects with 'o' as prototype
 */

function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.name = "circle";
Circle.prototype;         // { name: "circle" }
typeof Circle.ptototype;  // "object"

Circle.prototype.constructor; // Circle
Circle.prototype.constructor === Circle; // true

/**
 * Accessing a property of an object
 * When accessing a property p of an object JavaScript:
 * 1. looks for 'p' in the properties of 'o'
 * 2. if it finds p the returns its value
 * 3. else it looks in the prototype of 'o'
 * 4. if it finds 'p' then it returns its value
 * 5. else it looks in the prototype of the prototype of 'o'
 * 6. ....
 */

function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.name = "circle";

c = new Circle(4);

c.radius;        // 4 - found in the properties of c
c.name;     // "circle" - found in the prototype of c
c.constructor; // Circle - found in the prototype of c

/**
 * Overwriting prototype's property
 * The object property takes precedence over the prototype's
 */

function Circle (radius) {
  this.radius = radius;
  this.color = "red";
}

Circle.prototype.name = "circle";
Circle.prototype.color = "green";
var c = new Circle(4);

c.color;                       // "red"
c.constructor.prototype.color; // "green"

delete c.color;
c.color;                       // "green"

c.color = 'blue';
c.color;                       // "blue"
c.constructor.prototype.color; // "green"

/**
 * hasOwnProperty(prop)
 * A for-in loop iterates over all properties including those of the prototype
 */
function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.color = 'green';
var c = new Circle(3);

for (var p in c) {
  console.log(p);
}

// radius
// color

/**
 * Use hasOwnProperty() to test if a property belongs to an object.
 */
var c = new Circle(3);

for (var p in c) {
  if (c.hasOwnProperty(p)) {
    console.log(p);
  }
}

// radius

/**
 * isPrototypeOf(obj)
 * This method tells whether that specific object used
 * as a prototype of another object
 */

function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.color = 'green';
var c = new Circle(4);
Circle.prototype.isPrototypeOf(c); //true
Object.prototype.isPrototypeOf(c); //true
Array.prototype.isPrototypeOf(c);  //false

/**
 * __proto__ special property
 * constructor.prototype is not reliable since it could be overwritten
 * __proto__ is a special property of an object that refers to its prototype
 * __proto__ is not in the JavaScript standar so don't use
 */

function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.color = 'green';
var c = new Circle(4);

c.constructor = 'junk';
c.constructor.prototype // undefined
c.color;                //"green"
// JavaScript uses immutable __proto__ secret link :)

/**
 * __proto__ special property
 * __proto__ and prototype refer to the same object but
 * __proto__ is a property of the instances 
 * prototype is a property of the constructor function
 */

function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.color = 'green';
var c = new Circle(4);

typeof c.__proto__;               // "object"
typeof c.prototype;               // "undefifined"
Circle.prototype === c.__proto__; // true

