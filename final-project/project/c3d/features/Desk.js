var Feature = require('./Feature.js');

Feature.inherits(Desk, Feature);

function Desk(feature) {
	Feature.call(this, feature);
}

Desk.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Desk.prototype.in_graph = true;
Desk.prototype.in_2D_map = true;

Desk.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }

	var desk = new THREE.Object3D();
	
	var deskX = this.geometry.coordinates[0][1][0];
	var deskY = this.geometry.coordinates[0][2][1];
	var deskZ = this.properties.height;


	var plane = createMesh(new THREE.BoxGeometry( deskX, deskY, 0.04 ), "wood-2.jpg");
	plane.name = "plane_" + this.id;
	plane.position.x = deskX/2;
	plane.position.y = deskY/2;
	plane.position.z = deskZ;


	var plane_back = createMesh(new THREE.BoxGeometry( deskX, deskY+0.4, 0.04 ), "wood-2.jpg");
	plane_back.name = "plane_back_" + this.id;
	plane_back.position.x = deskX/2;
	plane_back.position.y = deskY;		
	plane_back.position.z = deskZ/2+0.2;
	plane_back.rotation.x = -0.5*Math.PI;


	desk.add(plane);
	desk.add(plane_back);


	desk.feature = this;
	desk.name = this.id;
	var model = Feature.packageModel(desk);

	return model;
};

module.exports = Desk;