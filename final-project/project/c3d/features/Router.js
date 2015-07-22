var Feature = require('./Feature.js');

Feature.inherits(Router, Feature);

function Router(feature) {
	Feature.call(this, feature);
}

Router.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Router.prototype.in_graph = true;
Router.prototype.in_2D_map = true;

Router.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


	var router = new THREE.Object3D();

	
	var routerX = this.geometry.coordinates[0][1][0];
	var routerY = this.geometry.coordinates[0][2][1];
	var routerZ = 0.01;    


    var rout = new THREE.Object3D();


    var routerFront = createMesh(new THREE.BoxGeometry( routerX-0.1, routerY-0.2, routerZ), "Router_Front.jpg"); 
    routerFront.position.z =  routerY/2; 
    routerFront.position.y -= 0.05;
      

    geometry = new THREE.BoxGeometry(routerX-0.1, 0.1, routerZ);
    material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var black_line = new THREE.Mesh( geometry, material );
    black_line.position.y = (routerY/2)-0.1;
    black_line.position.z = routerY/2; 

    material = new THREE.MeshLambertMaterial( {color: 0x0000FF} );
      geometry = new THREE.CylinderGeometry(0.03,0.03,0.01,32);
      var l1 = new THREE.Mesh( geometry, material );
      l1.name = "plane_" + this.id;      
      
      l1.position.z = 0.01;
      l1.position.x = 0.4;      
      l1.rotation.x = -0.5*Math.PI;

      black_line.add(l1);

      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      geometry = new THREE.CylinderGeometry(0.015,0.015,0.01,32);
      var l2 = new THREE.Mesh( geometry, material );
      l2.name = "plane_" + this.id;      
      
      l2.position.z = 0.02;
      
      l2.position.x = 0.4;      
      l2.rotation.x = -0.5*Math.PI;
      black_line.add(l2);

      material = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
      geometry = new THREE.BoxGeometry(0.01,0.01,0.01);
      var l3 = new THREE.Mesh( geometry, material );      
      
      l3.position.z = 0.01;
      l3.position.y = -0.02;    
      l3.position.x = -0.4;      

      
      var l = new Array();

      for (var i = 0; i < 8; i++) {
        l[i] = l3.clone();        
        l[i].position.x += 0.1*i;
        black_line.add(l[i]);
      };

      material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
      geometry = new THREE.BoxGeometry(0.01,0.01,0.01);
      var l4 = new THREE.Mesh( geometry, material );      
      
      l4.position.z = 0.01;
      l4.position.y = 0.02;      
      l4.position.x = -0.4;            

      
      var l = new Array();

      for (var i = 0; i < 8; i++) {
        l[i] = l4.clone();        
        l[i].position.x += 0.1*i;
        black_line.add(l[i]);
      };     
           

    var rack = createMesh(new THREE.BoxGeometry( routerX, routerY, routerY), "Router_UP.jpg"); 


    rout.add(routerFront);
    rout.add(black_line);      
    rout.add(rack);

      
    var vetRowRack = new Array();


      for (var i = 0; i < 4; i++) {
        vetRowRack[i] = rout.clone();
        vetRowRack[i].position.y += routerY*i;
        router.add(vetRowRack[i]);
      };
      
    


	router.feature = this;
	router.name = this.id;
	router.rotation.x=0.5*Math.PI;
	router.rotation.y=Math.PI;
	//router.position.
	router.position.z+=routerY/2;
	router.position.y+=routerY/2;
	router.position.x+=routerX/2;
	var model = Feature.packageModel(router);

	return model;
};

module.exports = Router;