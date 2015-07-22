var Feature = require('./Feature.js');

Feature.inherits(Drawers, Feature);

function Drawers(feature) {
	Feature.call(this, feature);
}

Drawers.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Drawers.prototype.in_graph = true;
Drawers.prototype.in_2D_map = true;

Drawers.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }

	var drawers = new THREE.Object3D();
	
	var drawersX = this.geometry.coordinates[0][1][0];
	var drawersY = this.geometry.coordinates[0][2][1];
	var drawersZ = this.properties.height;
	var drawersPlane = this.properties.plane;

	var drawer = new THREE.Object3D();

	var c1 =  createMesh(new THREE.BoxGeometry( drawersX/3, drawersY/2, drawersX), "wood-2.jpg");
	c1.rotation.y = Math.PI/2;
	c1.position.z = drawersZ-drawersX/6;	
	c1.position.y = drawersY-drawersY/4;
	c1.position.x = drawersX/2;

	geometry = new THREE.BoxGeometry(drawersX/30, drawersY/10, drawersX/100);
    material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    var c2 = new THREE.Mesh( geometry, material );   
    c2.rotation.y = Math.PI/2;
    c2.position.z = (drawersZ-drawersX/6);  
    c2.position.y = (drawersY-drawersY/4);
    c2.position.x -= 0.02;

    geometry = new THREE.BoxGeometry((drawersX/3)-0.1, (drawersY/2)-0.1, drawersX/100);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var c3 = new THREE.Mesh( geometry, material );   
    c3.rotation.y = Math.PI/2;
    c3.position.z = drawersZ-drawersX/6;  
    c3.position.y = drawersY-drawersY/4;

    drawer.add(c1);
    drawer.add(c2);
    drawer.add(c3);

    var vetRowDrawers = new Array();

      for (var i = 0; i < 3; i++) {
        vetRowDrawers[i] = drawer.clone();
        vetRowDrawers[i].position.z -= (drawersX/3)*i;
        drawers.add(vetRowDrawers[i]);
      };

    var vetColDrawers = new Array();

      for (var i = 0; i < 3; i++) {
        vetColDrawers[i] = drawer.clone();
        vetColDrawers[i].position.y -= drawersY/2;
        vetColDrawers[i].position.z -= (drawersX/3)*i;
        drawers.add(vetColDrawers[i]);
      };
	

	var plane = createMesh(new THREE.BoxGeometry(drawersX, drawersY, 0.04), "wood-2.jpg");
	plane.name = "plane_" + this.id;
	plane.position.x = drawersX/2;
	plane.position.y = drawersY/2;
	plane.position.z = drawersZ;

	
	var plane_back = createMesh(new THREE.BoxGeometry(drawersZ+0.8, drawersY+1.5, 0.04), "wood-2.jpg");
	plane_back.name = "plane_back_" + this.id;
	plane_back.position.x = (drawersX)+0.02;
	plane_back.position.y = (drawersY/2)+drawersPlane;		
	plane_back.position.z = drawersZ-0.25;
	plane_back.rotation.y = -0.5*Math.PI;


	drawers.add(plane);
	drawers.add(plane_back);


	drawers.feature = this;
	drawers.name = this.id;
	var model = Feature.packageModel(drawers);

	return model;
};

module.exports = Drawers;