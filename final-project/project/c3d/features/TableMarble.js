var Feature = require('./Feature.js');

Feature.inherits(TableMarble, Feature);

function TableMarble(feature) {
	Feature.call(this, feature);
}

TableMarble.prototype.style = 	{
									weight: 0,
								    fillColor: "#9b8c75",
								    fillOpacity: 1,
								    zIndex: 3
								};

TableMarble.prototype.in_graph = true;
TableMarble.prototype.in_2D_map = true;
TableMarble.prototype.get3DModel = function() {
    var tableX = this.geometry.coordinates[0][1][0];
    var tableY = this.geometry.coordinates[0][2][1];
    var texture = this.properties.texture;
    var tableZ = 0.1;

    function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }
    

    var tableMarble = new THREE.Object3D();


    var marble = createMesh(new THREE.BoxGeometry( tableX, tableY, tableZ), texture); 


    var p1 = createMesh(new THREE.CylinderGeometry( 0.5, 0.5, 0.8, 32, 1, false, 0, Math.PI ),texture);  
    p1.name = "p1_" + this.id;
    p1.rotation.x += Math.PI/2;
    p1.position.z = -0.4;
    p1.position.x = 1;

    var p2 = p1.clone();
    p2.position.x = -1;
    p2.rotation.y = Math.PI;


    var p3 = createMesh(new THREE.CylinderGeometry( 0.6, 0.6, 0.1, 32, 1, false, 0, Math.PI ), texture);  
    p3.rotation.x += Math.PI/2;
    p3.position.z = -0.85;
    p3.position.x = 1;

    var p4 = p3.clone();
    p4.position.x = -1;
    p4.rotation.y = Math.PI;


    var base = new createMesh(new THREE.BoxGeometry(1, 2, 0.8), texture);  
    base.position.z = -0.4;
    base.rotation.z = -0.5*Math.PI;


    var base2 = new createMesh( new THREE.BoxGeometry(1.2, 2, 0.1), texture);  
    base2.position.z = -0.85;
    base2.rotation.z = -0.5*Math.PI;

     
    tableMarble.add(marble);
    tableMarble.add(p1);
    tableMarble.add(p2);
    tableMarble.add(p3);
    tableMarble.add(p4);
    tableMarble.add(base);
    tableMarble.add(base2);

   
    
    tableMarble.position.z+=0.05;
    tableMarble.position.y+=tableY/2;
    tableMarble.position.x+=tableX/2;
    
    tableMarble.feature = this;
    tableMarble.name = this.id;
    var model = Feature.packageModel(tableMarble);

    return model;
};

module.exports = TableMarble;