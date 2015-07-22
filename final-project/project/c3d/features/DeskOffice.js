var Feature = require('./Feature.js');

Feature.inherits(DeskOffice, Feature);

function DeskOffice(feature) {
	Feature.call(this, feature);
}

DeskOffice.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

DeskOffice.prototype.in_graph = true;
DeskOffice.prototype.in_2D_map = true;

DeskOffice.prototype.get3DModel = function() {
	
	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


	var deskOffice = new THREE.Object3D();
	
	var deskOfficeX = this.geometry.coordinates[0][1][0];
	var deskOfficeY = this.geometry.coordinates[0][2][1];
	var deskOfficeZ = this.properties.height;
	var texture = this.properties.texture;


	  var p1 = createMesh(new THREE.BoxGeometry( 0.06, 0.06, deskOfficeZ), texture);
	  p1.name = "p1_" + this.id;
	  //p1.rotation.x += Math.PI/2;
	  p1.position.z += deskOfficeZ/2;
	  p1.position.x += 0.05;
	  p1.position.y += 0.05;

	  var p2 = createMesh(new THREE.BoxGeometry( 0.06, 0.06, deskOfficeZ), texture);
	  p2.name = "p2_" + this.id;
	  //p2.rotation.x += Math.PI/2;
	  p2.position.z += deskOfficeZ/2;
	  p2.position.x += deskOfficeX - 0.05;
	  p2.position.y += 0.05;

	  var p3 = createMesh(new THREE.BoxGeometry( 0.06, 0.06, deskOfficeZ), texture);
	  p3.name = "p3_" + this.id;
	  //p3.rotation.x += Math.PI/2;
	  p3.position.z += deskOfficeZ/2;
	  p3.position.x += deskOfficeX - 0.05;
	  p3.position.y += deskOfficeY - 0.05;

	  var p4 = createMesh(new THREE.BoxGeometry( 0.06, 0.06, deskOfficeZ), texture);
	  p4.name = "p4_" + this.id;
	  //p4.rotation.x += Math.PI/2;
	  p4.position.z += deskOfficeZ/2;
	  p4.position.x += 0.05;
	  p4.position.y += deskOfficeY - 0.05;


	  var plane = createMesh (new THREE.BoxGeometry( deskOfficeX, deskOfficeY, 0.04 ), texture);
	  plane.position.x += deskOfficeX/2;
	  plane.position.y += deskOfficeY/2;
	  plane.position.z += deskOfficeZ;


	  var backPlane = createMesh (new THREE.BoxGeometry( deskOfficeX, (deskOfficeY/2)-0.1, 0.04 ), texture);
	  backPlane.rotation.x += Math.PI/2;
	  backPlane.position.x += deskOfficeX/2;	 
	  backPlane.position.z += deskOfficeZ-deskOfficeY/4;


	  var downPlane = createMesh (new THREE.BoxGeometry( deskOfficeX, (deskOfficeY/20), 0.04 ), texture);
	  downPlane.position.x += deskOfficeX/2;
	  downPlane.position.y += deskOfficeY/2+0.4;
	  downPlane.position.z += deskOfficeZ-0.6;


	  var leftPlane = createMesh (new THREE.BoxGeometry( deskOfficeY, (deskOfficeY/2)-0.1, 0.04 ), texture);
	  leftPlane.rotation.x += Math.PI/2;
	  leftPlane.rotation.y += Math.PI/2;
	  leftPlane.position.x += deskOfficeX;
	  leftPlane.position.y += deskOfficeY/2;
	  leftPlane.position.z += deskOfficeZ-deskOfficeY/4;


	  rightPlane = leftPlane.clone();
	  rightPlane.position.x -= deskOfficeX;


	  var drawer = createMesh (new THREE.BoxGeometry( deskOfficeX/4, deskOfficeY, 0.4 ), texture);
	  drawer.position.x += deskOfficeX/2+deskOfficeX/8;
	  drawer.position.y += deskOfficeY/2;
	  drawer.position.z += deskOfficeZ/2+deskOfficeZ/4;


	  geometry = new THREE.BoxGeometry( 0.1, 0.04, 0.02 );
	  material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF  } );
	  var handle = new THREE.Mesh( geometry, material );
	  handle.position.y += deskOfficeY/2+0.02;

	  geometry = new THREE.BoxGeometry( 0.5, 0.04, 0.3 );
	  material = new THREE.MeshBasicMaterial( {color: 0x000000  } );
	  var p = new THREE.Mesh( geometry, material );
	  p.position.y += deskOfficeY/2;


	  drawer.add(handle);
	  drawer.add(p);


	  var drawer2 = drawer.clone();
	  drawer.position.x += (deskOfficeX/4);


	  deskOffice.add(p1);
	  deskOffice.add(p2);
	  deskOffice.add(p3);
	  deskOffice.add(p4);
	  deskOffice.add(plane);
	  deskOffice.add(drawer);
	  deskOffice.add(backPlane);
	  deskOffice.add(leftPlane);
	  deskOffice.add(rightPlane);
	  deskOffice.add(downPlane);
	  deskOffice.add(drawer2);

	deskOffice.feature = this;
	deskOffice.name = this.id;
	var model = Feature.packageModel(deskOffice);

	return model;
};

module.exports = DeskOffice;