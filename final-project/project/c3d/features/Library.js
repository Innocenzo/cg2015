var Feature = require('./Feature.js');

Feature.inherits(Library, Feature);

function Library(feature) {
	Feature.call(this, feature);
}

Library.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Library.prototype.in_graph = true;
Library.prototype.in_2D_map = true;

Library.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


	var library = new THREE.Object3D();

	
	var libraryX = this.geometry.coordinates[0][1][0];
	var libraryY = this.geometry.coordinates[0][2][1];
	var libraryZ = 0.01;
    var texture = this.properties.texture;


    var lib = new THREE.Object3D();


    var books = createMesh(new THREE.BoxGeometry( libraryX-0.1, libraryY-0.2, libraryZ), texture); 
    books.position.z =  libraryY/2; 
    books.position.y -= 0.05;
      

    geometry = new THREE.BoxGeometry(libraryX-0.1, 0.1, libraryZ);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var black_line = new THREE.Mesh( geometry, material );
    black_line.position.y = (libraryY/2)-0.1;
    black_line.position.z = libraryY/2; 
           

    var rack = createMesh(new THREE.BoxGeometry( libraryX, libraryY, libraryY), "wood-2.jpg"); 


    lib.add(books);
    lib.add(black_line);      
    lib.add(rack);

      
    var vetRowRack = new Array();


      for (var i = 0; i < 4; i++) {
        vetRowRack[i] = lib.clone();
        vetRowRack[i].position.y += libraryY*i;
        library.add(vetRowRack[i]);
      };
      
    


	library.feature = this;
	library.name = this.id;
	library.rotation.x=0.5*Math.PI;
	library.rotation.y=Math.PI;
	//library.position.
	library.position.z+=libraryY/2;
	library.position.y+=libraryY/2;
	library.position.x+=libraryX/2;
	var model = Feature.packageModel(library);

	return model;
};

module.exports = Library;