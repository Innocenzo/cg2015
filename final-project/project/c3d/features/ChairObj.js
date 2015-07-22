var Feature = require('./Feature.js');

Feature.inherits(ChairObj, Feature);

function ChairObj(feature) {
	Feature.call(this, feature);
}

ChairObj.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

ChairObj.prototype.in_graph = true;
ChairObj.prototype.in_2D_map = true;

ChairObj.prototype.get3DModel = function() {

	var loader = new THREE.OBJLoader();
      loader.load('assets/models/OfficeChair.obj', function (obj) {
        var material = new THREE.MeshBasicMaterial( {
							color: 0x000000,
							//specular: 0xee6600,
							shininess: 10,							
							combine: THREE.MixOperation,
							//reflectivity: 0.5
						} );
        var material2 = new THREE.MeshBasicMaterial( {
							color: 0xFFFFFF,
							//specular: 0xee6600,
							//shininess: 10,							
							combine: THREE.MixOperation,
							//reflectivity: 0.5
						} );
        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
          	if(child.name != "Circle.003"){
            child.material = material2;
        	}else{
        		child.material = material;
        	}
            console.log(child.name);
          }
        });
        
        obj.scale.set(0.10, 0.10, 0.10);

        chairObj.add(obj);
	
      

	chairObj.feature = this;
	chairObj.name = this.id;
	/*chairObj.rotation.x=0.5*Math.PI;
	chairObj.rotation.y=Math.PI;

	chairObj.position.z+=chairObjY/2;
	chairObj.position.y+=chairObjY/2;
	chairObj.position.x+=chairObjX/2;
	*/
	var model = Feature.packageModel(chairObj);

	return model;
	});
};

module.exports = ChairObj;