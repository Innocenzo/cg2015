var Feature = require('./Feature.js');

Feature.inherits(Records, Feature);

function Records(feature) {
	Feature.call(this, feature);
}

Records.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Records.prototype.in_graph = true;
Records.prototype.in_2D_map = true;

Records.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


	var records = new THREE.Object3D();
	var record = new THREE.Object3D();

	
	var recordsX = this.geometry.coordinates[0][1][0];
	var recordsY = 0.6;
	var recordsZ = this.geometry.coordinates[0][2][1];
   

    var rack = createMesh(new THREE.BoxGeometry( recordsX, recordsY, recordsZ), "acciaio.jpg"); 


    geometry = new THREE.BoxGeometry(recordsX-0.1, recordsY-0.2, 0.01);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var drawer = new THREE.Mesh( geometry, material );     
    drawer.position.z =  recordsY-0.1; 


    geometry = new THREE.BoxGeometry(0.3, 0.05, 0.01);
    material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
    var handle = new THREE.Mesh( geometry, material );     
    handle.position.z =  recordsY-0.09;   

     
    record.add(rack);
    record.add(drawer);
    record.add(handle);

      
    var vetRowRack = new Array();


      for (var i = 0; i < 4; i++) {
        vetRowRack[i] = record.clone();
        vetRowRack[i].position.y += recordsY*i;
        records.add(vetRowRack[i]);
      };
      

	records.feature = this;
	records.name = this.id;
	records.rotation.x=0.5*Math.PI;
	records.rotation.y=Math.PI;

	records.position.z+=recordsY/2;
	records.position.y+=recordsY/2;
	records.position.x+=recordsX/2;
	
	var model = Feature.packageModel(records);

	return model;
};

module.exports = Records;