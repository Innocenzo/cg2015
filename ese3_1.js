/**
 * exercise 1
 */

(function(x,y) {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

  larger(x, y);    
}({size:6},{size:8}));

/**
 * exercise 2
 */

(function() {
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };

  var music = [
  				{played : 5},
  				{played : 8},
  				{played : 2}
  			  ];  				

  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
  console.log( fav );
}());

/**
 * exercise 3
 */

(function () {
  function Summer () {
  	this.sum=0;
  	// return { add : function  (namber) {
  	// 			   return sum+=namber;
  	// 	          },
  	// 	     getCurrentSum : function  () {
  	// 			   return sum;
  	// 	          }};
  }
  Summer.prototype.add = function(namber) {  	
  	return this.sum+=namber;  	
  };
  Summer.prototype.getCurrentSum = function() {
  	return this.sum;
  };
  var s1 = new Summer();
  var s2 = new Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());