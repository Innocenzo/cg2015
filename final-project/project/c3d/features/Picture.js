var Feature = require('./Feature.js');

Feature.inherits(Picture, Feature);

function Picture(feature) {
	Feature.call(this, feature);
}

Picture.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Picture.prototype.in_graph = true;
Picture.prototype.in_2D_map = false;

Picture.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


    var pictureX = this.properties.width;
	var pictureY = this.properties.height;
    var pictureZ = 0.01;
    var texture = this.properties.texture;
    

    var picture = new THREE.Object3D();


    var display = createMesh(new THREE.BoxGeometry( pictureX, pictureY, pictureZ), texture); 


    geometry = new THREE.BoxGeometry(0.03, pictureY, 0.03);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var boxLeft = new THREE.Mesh( geometry, material )
    boxLeft.position.x = -pictureX/2;


    boxRight = boxLeft.clone();
    boxRight.position.x = pictureX/2;


    geometry = new THREE.BoxGeometry(pictureX+0.03, 0.03, 0.03);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var boxDown = new THREE.Mesh( geometry, material )
    boxDown.position.y = -pictureY/2;


    boxUp = boxDown.clone();
    boxUp.position.y = pictureY/2;
    

    picture.add(boxLeft);    
    picture.add(boxRight);
    picture.add(boxUp);
    picture.add(boxDown);
    picture.add(display);
      

	picture.feature = this;
	picture.name = this.id;
	picture.rotation.x=0.5*Math.PI;
	picture.rotation.y=Math.PI;

	picture.position.z-=0.05;
	picture.position.x+=pictureX/2;


	
	var model = Feature.packageModel(picture);

	return model;
};

module.exports = Picture;