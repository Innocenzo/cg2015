var Feature = require('./Feature.js');

Feature.inherits(Lavandino, Feature);

function Lavandino(feature) {
	Feature.call(this, feature);
}

Lavandino.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Lavandino.prototype.in_graph = true;
Lavandino.prototype.in_2D_map = false;

Lavandino.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )



var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0.14 ),
    new THREE.Vector3( 0.18, 0, 0.2 ),
    new THREE.Vector3( 0.3, 0, 0.32 ),
    new THREE.Vector3( 0.2, 0, 0.36 ),
    new THREE.Vector3( 0.2, 0, 0.3)
   ]
);


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
lathe.scale.set(0.7,0.8,0.8);
lathe.position.set(0.015,0.405,-0.01);

o1.add( lathe );

//tubo

var torusMaterial = new THREE.MeshPhongMaterial( { color: 0xFF9933 } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.02, 20, 100,Math.PI/2 ), torusMaterial );
      torus.position.set(-0.085,0.53,-0.01);
      torus.rotation.z=-Math.PI/2;
      o1.add( torus ); 

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,0.1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFF9933});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(-0.13,0.43,-0.01);
      o1.add(maniglia);

//rubinetto

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.0125,0.0125,0.15,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.scale.set(0.5,1,1);
      maniglia.position.set(-0.14,0.75,0);
      o1.add(maniglia);   


      var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaioscuro } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.11, 0.013, 30, 30 , Math.PI), torusMaterial );
      torus.scale.set(0.5,1,1);
      torus.position.set(-0.085,0.82,0);   
      o1.add( torus );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.015,0.04,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-0.13,0.7,0.06);
      o1.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0025,0.0025,0.041,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-0.13,0.7,0.06);
      o1.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.015,0.04,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-0.13,0.7,-0.06);
      o1.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0025,0.0025,0.041,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x0000ff});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-0.13,0.7,-0.06);
      o1.add(rubinetto);

//buco
var cylinderGeometry1 = new THREE.CylinderGeometry(0.021,0.021,0.01,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);

      maniglia.position.set(0.016,0.52,-0.01);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.001,0.001,0.04,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.016,0.53,-0.01);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.x=Math.PI/2;
      maniglia.position.set(0.016,0.53,-0.01);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.rotation.y=Math.PI/4;
      maniglia.position.set(0.016,0.53,-0.01);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.rotation.y=-Math.PI/4;
      maniglia.position.set(0.016,0.53,-0.01);
      o1.add(maniglia);
	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Lavandino;