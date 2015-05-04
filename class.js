/**
 * Define a sub-"Class " using a constructor function
 * calling the "super" constructor and linking the prototype chain
 */
function Rectangle (x, y, width, height) {
  Shape.call(this, x, y); // call "super" constructor
  this.width = width;
  this.height = height;
}
var rect = new Rectangle(0, 0, 3, 4);
rect.info(); //TypeError: undefined is not a function
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var rect = new Rectangle(0, 0, 3, 4);
rect.info(); //x: 0, y: 0

/**
 * Define the instance methods augmenting the constructor prototype
 */
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

//overriding
Rectangle.prototype.info = function () {
  Shape.prototype.info.call(this);
  console.log('width: ', this.width, ', height: ', this.height);
}

/**
 * Instantiate the defined sub-"class" using the operator 'new'
 */

var rect = new Rectangle(0, 0, 4, 3);

rect instanceof Rectangle; //true
rect instanceof Shape; //true

rect.move(1, 2);
rect.area(); //12
rect.info(); //x: 1, y: 2 width: 4, height: 3

var shape = new Shape();
shape.area(); //TypeError: undefined is not a function

shape instanceof Shape; //true
shape instanceof Rectangle; //false

/**
 * object.create
 */

Object.create = function (obj) {
  function F () {}
  F.prototype = obj;
  return new F();
};