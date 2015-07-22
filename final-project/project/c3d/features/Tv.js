var Feature = require('./Feature.js');

Feature.inherits(Tv, Feature);

function Tv(feature) {
	Feature.call(this, feature);
}

Tv.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Tv.prototype.in_graph = true;
Tv.prototype.in_2D_map = false;

Tv.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


	var tvX = 2.5;
    var tvY = 1.5;
    var tvZ = 0.01;
    

    var tv = new THREE.Object3D();


    var display = createMesh(new THREE.BoxGeometry( tvX, tvY, tvZ), "tv.jpg"); 


    geometry = new THREE.BoxGeometry(0.1, tvY, 0.1);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var boxLeft = new THREE.Mesh( geometry, material )
    boxLeft.position.x = -tvX/2;


    boxRight = boxLeft.clone();
    boxRight.position.x = tvX/2;


    geometry = new THREE.BoxGeometry(tvX+0.1, 0.1, 0.1);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var boxDown = new THREE.Mesh( geometry, material )
    boxDown.position.y = -tvY/2;


    boxUp = boxDown.clone();
    boxUp.position.y = tvY/2;

    geometry = new THREE.BoxGeometry(0.02, 0.02, 0.02);
    material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    var led = new THREE.Mesh( geometry, material )
    led.position.y = -tvY/2;
    led.position.z = -0.05;
    led.position.x = tvY-0.4;


    var logo = createMesh(new THREE.BoxGeometry(0.2, 0.1, 0.02), "samsung-logo.jpg"); 
    logo.position.y = -tvY/2;
    logo.position.z = -0.05;
    

    tv.add(boxLeft);    
    tv.add(boxRight);
    tv.add(boxUp);
    tv.add(boxDown);
    tv.add(led);    
    tv.add(logo);
    tv.add(display);
      

	tv.feature = this;
	tv.name = this.id;
	tv.rotation.x=0.5*Math.PI;
	tv.rotation.y=Math.PI;

	tv.position.z-=0.05;
	tv.position.x+=tvX/2;


	
	var model = Feature.packageModel(tv);

	return model;
};

module.exports = Tv;