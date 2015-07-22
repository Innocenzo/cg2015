var Feature = require('./Feature.js');

Feature.inherits(Archivio, Feature);

function Archivio(feature) {
	Feature.call(this, feature);
}

Archivio.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Archivio.prototype.in_graph = true;
Archivio.prototype.in_2D_map = true;

Archivio.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
   var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )

   var archivioX = this.geometry.coordinates[0][1][0];
   var archivioY = this.geometry.coordinates[0][2][1];

var cubeGeometryBase = new THREE.BoxGeometry(archivioX,1.81,archivioY);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0,0.9,0);
     o1.add(Archivio);

     var cubeGeometryBase = new THREE.BoxGeometry(0.7,0.31,0.55);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.015,0.19,0);
     o1.add(Archivio);


      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.015,0.53,0);
     o1.add(Archivio);

      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.015,0.87,0);
     o1.add(Archivio);

      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.015,1.21,0);
     o1.add(Archivio);

      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.015,1.55,0);
     o1.add(Archivio);

//etichette

var cubeGeometryBase = new THREE.BoxGeometry(0.7,0.06,0.1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.0151,0.19,0);
     o1.add(Archivio);


      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.0151,0.53,0);
     o1.add(Archivio);

      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.0151,0.87,0);
     o1.add(Archivio);

      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.0151,1.21,0);
     o1.add(Archivio);

      var Archivio = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      Archivio.position.set(0.0151,1.55,0);
     o1.add(Archivio);
  
  //manici

var torusMaterial = new THREE.MeshPhongMaterial( {map:acciaio } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
      torus.rotation.z =  -Math.PI/2;
      torus.rotation.x =  -Math.PI/2;
      torus.position.set(0.35,0.25,0);
      torus.scale.set(1,0.5,1);
      o1.add( torus );

            var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
      torus.rotation.z =  -Math.PI/2;
      torus.rotation.x =  -Math.PI/2;
      torus.position.set(0.35,0.59,0);
      torus.scale.set(1,0.5,1);
      o1.add( torus );

            var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
      torus.rotation.z =  -Math.PI/2;
      torus.rotation.x =  -Math.PI/2;
      torus.position.set(0.35,0.93,0);
      torus.scale.set(1,0.5,1);
      o1.add( torus );

            var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
      torus.rotation.z =  -Math.PI/2;
      torus.rotation.x =  -Math.PI/2;
      torus.position.set(0.35,1.27,0);
      torus.scale.set(1,0.5,1);
      o1.add( torus );

            var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
      torus.rotation.z =  -Math.PI/2;
      torus.rotation.x =  -Math.PI/2;
      torus.position.set(0.35,1.61,0);
      torus.scale.set(1,0.5,1);
      o1.add( torus );

      o1.rotation.y=0.5*Math.PI;
     
	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Archivio;