var Feature = require('./Feature.js');

Feature.inherits(TorrePc, Feature);

function TorrePc(feature) {
	Feature.call(this, feature);
}

TorrePc.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

TorrePc.prototype.in_graph = true;
TorrePc.prototype.in_2D_map = false;

TorrePc.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;


var floppy = THREE.ImageUtils.loadTexture("../../assets/textures/floppy.jpg" )
var power=THREE.ImageUtils.loadTexture("../../assets/textures/power.jpg" )
var lettore=THREE.ImageUtils.loadTexture("../../assets/textures/lettorecd2.jpg" )
var bianco=THREE.ImageUtils.loadTexture("../../assets/textures/bn.jpg" )
var usb=THREE.ImageUtils.loadTexture("../../assets/textures/usb.jpg" )
var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )


var cubeGeometryBase = new THREE.BoxGeometry(0.45,0.50,0.25);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.y=0.27;
     o1.add(banco);

     var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:lettore});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.45,0);
     o1.add(banco);

     var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.39,0);
     o1.add(banco);

     var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.33,0);
     o1.add(banco);

     var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.15);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:floppy});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.25,0);
     o1.add(banco);

//power

var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.02,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:power});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.14,0);
      o1.add(banco);

      //usb
var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.12);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.085,0);
      o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.12);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.055,0);
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.03);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,0.06);
      banco.rotation.x=Math.PI/2;
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.03);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,-0.06);
      banco.rotation.x=Math.PI/2;
      o1.add(banco);



var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.02,0.06);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:usb});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.1,-0.03);
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.02,0.01);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,-0.04);
      o1.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,-0.02);
      o1.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,0);
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.015,0.002);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x0000AA});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.07,-0.042);
      o1.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.07,-0.022);
      o1.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.07,-0.002);
      o1.add(banco);

      //jack
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x66CC66});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.176,0.07,0.02);
      o1.add(maniglia);
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xFF6699});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.176,0.07,0.035);
      o1.add(maniglia);
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x3366CC});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.176,0.07,0.05);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0018,0.0018,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.177,0.07,0.02);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.177,0.07,0.035);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.177,0.07,0.05);
      o1.add(maniglia);


	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = TorrePc;