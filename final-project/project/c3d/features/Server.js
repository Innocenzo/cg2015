var Feature = require('./Feature.js');

Feature.inherits(Server, Feature);

function Server(feature) {
	Feature.call(this, feature);
}

Server.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

Server.prototype.in_graph = true;
Server.prototype.in_2D_map = true;

Server.prototype.get3DModel = function() {

	
	var server = new THREE.Object3D();
	
	var serverX = this.geometry.coordinates[0][1][0];
	var serverY = this.geometry.coordinates[0][2][1];
	var serverZ = this.properties.height;	

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }
    /**
    * STRUCTURE SERVER
    */
    
  	//server plane right
      
      planeServerLeft = new THREE.Object3D();      
     
      var plane = createMesh(new THREE.BoxGeometry(serverX/2, serverZ, 0.02  ), "metal-grill.jpg");
      plane.name = "plane_" + this.id;      
      
      plane.position.y = serverZ/2;      
      plane.position.x = serverX/2;

      planeServerLeft.add(plane);

      geometry = new THREE.BoxGeometry(serverX/4, serverZ, 0.02);
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var plane = new THREE.Mesh( geometry, material );

      plane.name = "plane_" + this.id;      
      plane.position.y = serverZ/2;      
      plane.position.x = serverX/8;
      
      planeServerLeft.add(plane);

      plane1 = plane.clone();
      plane.position.y = serverZ/2;      
      plane.position.x = serverX -serverX/8;

      planeServerLeft.add(plane1);      
      server.add(planeServerLeft);

      //server plane right

      planeServerRight = new THREE.Object3D();      

      var plane = createMesh(new THREE.BoxGeometry(serverX/2, serverZ, 0.02  ), "metal-grill.jpg");
      plane.name = "plane_" + this.id;      
      
      plane.position.y = serverZ/2;      
      plane.position.x = serverX/2;
      plane.position.z = serverX;
      planeServerRight.add(plane);

      geometry = new THREE.BoxGeometry(serverX/4, serverZ, 0.02);
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var plane = new THREE.Mesh( geometry, material );
      plane.name = "plane_" + this.id;      
      plane.position.y = serverZ/2;      
      plane.position.x = serverX/8;
      plane.position.z = serverX;
      
      planeServerRight.add(plane);

      plane1 = plane.clone();
      plane.position.y = serverZ/2;      
      plane.position.x = serverX -serverX/8;
      plane.position.z = serverX;

      planeServerRight.add(plane1);      

      server.add(planeServerRight);

      //server plane up 
      geometry = new THREE.BoxGeometry( serverX, serverY, 0.02 );
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var planeServerUp = new THREE.Mesh( geometry, material );
      planeServerUp.name = "planeServerUp_" + this.id;      
      planeServerUp.position.y = serverZ;
      planeServerUp.position.x = serverX/2;
      planeServerUp.position.z = serverY/2;
      planeServerUp.rotation.x = -0.5*Math.PI;

      server.add(planeServerUp);

      //server plane  back
      geometry = new THREE.BoxGeometry( 0.02, 2, 1 );
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var planeServerBack = new THREE.Mesh( geometry, material );
      planeServerBack.name = "plane_" + this.id;            
      planeServerBack.position.x = 1;
      planeServerBack.position.z = 0.5;   
      planeServerBack.position.y = 1;
      server.add(planeServerBack);  

      //server plane down
      geometry = new THREE.BoxGeometry( 0.02, 1, 1 );
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var planeServerDown = new THREE.Mesh( geometry, material );
      planeServerDown.name = "plane_" + this.id;            
      
      planeServerDown.position.z = 0.5;  
      planeServerDown.position.x = 0.5;   
      planeServerDown.rotation.z = -0.5*Math.PI;
      server.add(planeServerDown);  

      // server glass
      
      planeServerGlass = new THREE.Object3D();      
     
      geometry = new THREE.BoxGeometry(serverX-0.1, serverZ-0.1	, 0.02);
      material = new THREE.MeshLambertMaterial( {color: 0x0000FF, transparent : true, opacity: 0.2} );
      var plane = new THREE.Mesh( geometry, material );
      
      plane.position.y = serverZ/2;      
      plane.position.z = serverX/2;
      plane.rotation.y= Math.PI*0.5;

      planeServerGlass.add(plane);
      server.add(planeServerGlass);


      /**
       * [slot processor]
       * @type {THREE}
       */
      var slot = new THREE.Object3D();

      geometry = new THREE.BoxGeometry( 0.02, 0.35, 1 );
      material = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
      slot = createMesh(new THREE.BoxGeometry(0.02, 0.35, 0.92 ), "server_flat.jpg");
      slot.name = "plane_" + this.id;      
      slot.position.y = 0.175;
      slot.position.x = 0.02;
      slot.position.z = 0.51;  

      server.add(slot) ; 

      var slot2 = slot.clone();
       slot.position.y = 0.575;
      server.add(slot2); 

      var slot3 = slot.clone();
      slot.position.y = 0.975;
      server.add(slot3);

      /**
       * [geometry container slot]
       * @type {THREE}
       */
      geometry = new THREE.BoxGeometry( 0.02, 0.97, 0.05 );
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var plane = new THREE.Mesh( geometry, material );
      //plane.name = "plane_" + this.id;      
      plane.position.y = 0.38;
      plane.position.x = 0.02;
      plane.position.z = 0.52;
      plane.rotation.x = -0.5*Math.PI;
      server.add(plane);

      s20 = plane.clone();

      s20.position.y = 0.78;
      s20.position.x = 0.02;
      s20.position.z = 0.52;
      s20.rotation.x = -0.5*Math.PI;
      server.add(s20);

      s21 = plane.clone();

      s21.position.y = 1.18 ;
      s21.position.x = 0.02;
      s21.position.z = 0.52;
      s21.rotation.x = -0.5*Math.PI;
      server.add(s21);


      
      geometry = new THREE.BoxGeometry( 0.02, 0.35, 1 );
      material = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
      var s50 = createMesh(new THREE.BoxGeometry(0.02, 0.35, 0.92 ), "server-comp.jpg");
      s50.name = "plane_" + this.id;      
      s50.position.y = 1.38;
      s50.position.x = 0.02;
      s50.position.z = 0.51;  

      server.add(s50) ; 

      geometry = new THREE.BoxGeometry( 0.02, 0.2, 0.92 );
      material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
      var s40 = createMesh(new THREE.BoxGeometry(0.02, 0.2, 0.92 ), "server-comp.jpg");
      s40.name = "plane_" + this.id;      
      s40.position.y = 1.67;
      s40.position.x = 0.02;
      s40.position.z = 0.51;    
           
      material = new THREE.MeshBasicMaterial( {color: 0x0000FF} );
      geometry = new THREE.CylinderGeometry(0.05,0.05,0.01,32);
      var l1 = new THREE.Mesh( geometry, material );
      l1.name = "plane_" + this.id;      
      
      l1.position.z = -0.4;
      l1.position.y = 0;
      l1.position.x = -0.02;      
      l1.rotation.z = -0.5*Math.PI;

      s40.add(l1);

      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      geometry = new THREE.CylinderGeometry(0.03,0.03,0.01,32);
      var l2 = new THREE.Mesh( geometry, material );
      l2.name = "plane_" + this.id;      
      
      l2.position.z = -0.4;
      l2.position.y = 0;
      l2.position.x = -0.03;      
      l2.rotation.z = -0.5*Math.PI;

      s40.add(l2);

      server.add(s40);

      geometry = new THREE.BoxGeometry( 0.02, 0.2, 1 );
      material = new THREE.MeshBasicMaterial( {color: 0x000000} );
      var s30 = new THREE.Mesh( geometry, material );
      s30.name = "plane_" + this.id;      
      s30.position.y = 1.89;
      s30.position.x = 0.02;
      s30.position.z = 0.5;      
      //s30.rotation.x = -0.5*Math.PI;
      
      material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
      geometry = new THREE.BoxGeometry(0.01,0.01,0.01);
      var l3 = new THREE.Mesh( geometry, material );
      l3.name = "plane_" + this.id;      
      
      l3.position.z = -0.4;
      l3.position.y = 0.08;
      l3.position.x = -0.02;      
      l3.rotation.z = -0.5*Math.PI;

      s30.add(l3);

      l4 = l3.clone();
      l4.position.z = -0.4;
      l4.position.y = 0.04;
      l4.position.x = -0.02;      
      l4.rotation.z = -0.5*Math.PI;

      s30.add(l4);

      l5 = l3.clone();
      l5.position.z = -0.4;
      l5.position.y = 0;
      l5.position.x = -0.02;      
      l5.rotation.z = -0.5*Math.PI;

      s30.add(l5);

      material = new THREE.MeshBasicMaterial( {color: 0x0000FF} );
      geometry = new THREE.BoxGeometry(0.01,0.01,0.01);
      var l3 = new THREE.Mesh( geometry, material );
      l3.name = "plane_" + this.id;      
      
      l3.position.z = -0.35;
      l3.position.y = 0.08;
      l3.position.x = -0.02;      
      l3.rotation.z = -0.5*Math.PI;

      s30.add(l3);

      l4 = l3.clone();
      l4.position.z = -0.35;
      l4.position.y = 0.04;
      l4.position.x = -0.02;      
      l4.rotation.z = -0.5*Math.PI;

      s30.add(l4);

      l5 = l3.clone();
      l5.position.z = -0.35;
      l5.position.y = 0;
      l5.position.x = -0.02;      
      l5.rotation.z = -0.5*Math.PI;

      s30.add(l5);



      material = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
      geometry = new THREE.BoxGeometry(0.01,0.01,0.01);
      var l6 = new THREE.Mesh( geometry, material );
      l6.name = "plane_" + this.id;      
      
      l6.position.z = -0.3;
      l6.position.y = 0.08;
      l6.position.x = -0.02;      
      l6.rotation.z = -0.5*Math.PI;

      //s30.add(l6);

      var l = new Array();

      for (var i = 0; i < 3; i++) {
        l[i] = l6.clone();
        l[i].position.y = 0.08-(i*0.04);
        s30.add(l[i]);
      };

      var l = new Array();

      for (var i = 0; i < 3; i++) {
        l[i] = l6.clone();
        l[i].position.y = 0.08-(i*0.04);
        l[i].position.z = -0.25;
        s30.add(l[i]);
      };

      for (var i = 0; i < 3; i++) {
        l[i] = l6.clone();
        l[i].position.y = 0.08-(i*0.04);
        l[i].position.z = -0.2;
        s30.add(l[i]);
      };

      for (var i = 0; i < 3; i++) {
        l[i] = l6.clone();
        l[i].position.y = 0.08-(i*0.04);
        l[i].position.z = -0.15;
        s30.add(l[i]);
      };

      server.add(s30);    
      
      

      /*var axisHelper = new THREE.AxisHelper( 30 );      
      server.add(axisHelper);*/

      //server.rotation.x=-0.5*Math.PI;
      //add the obj to the scene      
      scene.add(server); 
         

	server.feature = this;
	server.name = this.id;
	server.rotation.x=0.5*Math.PI;
	server.position.z+=0.02
	server.position.y+=1;
	var model = Feature.packageModel(server);

	return model;
};

module.exports = Server;