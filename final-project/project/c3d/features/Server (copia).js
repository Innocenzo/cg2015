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

	function drawShape(x,y,z) {
         // Rectangle

        var rectLength = 1, rectWidth = 2;
        // create a basic shape
        var shape = new THREE.Shape();
        shape.moveTo( 0, 0 );
        shape.lineTo( 0, z );
        shape.lineTo( x, z );
        shape.lineTo( x, 0 );
        shape.lineTo( 0, 0 );
        // add
        var hole=new Array(); 
        for (var j = 0; j < z*100; j+=25) {
            for (var i = 0; i < x*80; i+=30) {
             
              /*console.log("riga ="+i+"colonna ="+j);*/
              hole[i,j]=new THREE.Path();          
              hole[i,j].absarc(0.2+i/100, 0.15+j/100, 0.01, 0, 2*Math.PI, true);
              shape.holes.push(hole[i,j]);
        };
        };
        return shape;
      }
       function createMesh(geom) {

        // assign two materials
        var meshMaterial = new THREE.MeshPhongMaterial({color: 0x000000});

        //  meshMaterial.side = THREE.DoubleSide;
        var wireFrameMat = new THREE.MeshBasicMaterial();
        wireFrameMat.wireframe = true;

        // create a multimaterial
        var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

        return mesh;
      }
      function drawShape2(x,y,z) {
         // Rectangle

        var rectLength = 1, rectWidth = 2;
        // create a basic shape
        var shape = new THREE.Shape();
        shape.moveTo( 0, 0 );
        shape.lineTo( 0, z );
        shape.lineTo( x, z );
        shape.lineTo( x, 0 );
        shape.lineTo( 0, 0 );
        // add
        var hole=new Array(); 
        for (var j = 0; j < z*100; j+=13) {
            for (var i = 0; i < x*100; i+=5) {
             
              /*console.log("riga ="+i+"colonna ="+j);*/
              hole[i,j]=new THREE.Path();          
              hole[i,j].absarc(0.03+i/100, 0.05+j/100, 0.01 , 0, 2*Math.PI, true);
              shape.holes.push(hole[i,j]);
        };
        };
        
        return shape;
      }

      function createMesh2(geom) {        

        // assign two materials
        var meshMaterial = new THREE.MeshPhongMaterial({color: 0x7C7C7C});
        //  meshMaterial.side = THREE.DoubleSide;
        var wireFrameMat = new THREE.MeshBasicMaterial();
        wireFrameMat.wireframe = true;

        // create a multimaterial
        var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

        return mesh;
      }

	var server = new THREE.Object3D();
	
	var serverX = this.geometry.coordinates[0][1][0];
	var serverY = this.geometry.coordinates[0][2][1];
	var serverZ = this.properties.height;	

	var options = {
            amount :0.02,
            bevelThickness : 0,
            bevelSize : 0,
            bevelEnabled : true,
            bevelSegments : 0,            
            curveSegments : 12,            
          };
    var shape = createMesh(new THREE.ExtrudeGeometry(drawShape(serverX, serverY, serverZ), options));
    shape.name = "shape_" + this.id;

    var shape2 = createMesh(new THREE.ExtrudeGeometry(drawShape(serverX, serverY, serverZ), options));
    shape2.name = "shape2_" + this.id;

    shape2.position.z=1;

	server.add(shape);
    server.add(shape2);

    //plane
  	geometry = new THREE.BoxGeometry( serverX, serverY, 0.02 );
    material = new THREE.MeshLambertMaterial( {color: 0x000000} );
    var plane = new THREE.Mesh( geometry, material );
    plane.name = "plane_" + this.id;      
    plane.position.y = serverZ;
    plane.position.x = serverX/2;
    plane.position.z = serverY/2;
    plane.rotation.x = -0.5*Math.PI;

    server.add(plane);

          //slot processor
      var slot = new THREE.Object3D();

      geometry = new THREE.BoxGeometry( 0.01, 0.35, 0.2 );
      material = new THREE.MeshLambertMaterial( {color: 0x434343} );

      var s0 = new THREE.Mesh( geometry, material );
      s0.name = "plane_" + this.id;      

      s0.position.z = 0.15;
      s0.position.x = 0.01;
      s0.position.y = 0.175;
      //s0.rotation.x = -0.5*Math.PI;
      slot.add(s0);

      geometry = new THREE.BoxGeometry( 1, 0.35, 0.01 );
      material = new THREE.MeshLambertMaterial( {color: 0x434343} );
      var s1 = new THREE.Mesh( geometry, material );
      s1.name = "plane_" + this.id;      
      
      s1.position.z = 0.05;
      s1.position.x = 0.5;
      s1.position.y = 0.175;      

      slot.add(s1);

      var s2 = new THREE.Mesh( geometry, material );
      s2.name = "plane_" + this.id;      
      
      s2.position.z = 0.25;
      s2.position.x = 0.5;
      s2.position.y = 0.175;

      slot.add(s2);

      geometry = new THREE.BoxGeometry( 1, 0.21, 0.01 );
      var s3 = new THREE.Mesh( geometry, material );
      s3.name = "plane_" + this.id;      
      
      s3.position.z = 0.15;
      s3.position.x = 0.5;
      s3.position.y = 0.35;
      s3.rotation.x = -0.5*Math.PI;

      slot.add(s3);
      
      geometry = new THREE.BoxGeometry( 1, 0.21, 0.01 );
      var s4 = new THREE.Mesh( geometry, material );
      s4.name = "plane_" + this.id;      
      
      s4.position.z = 0.15;
      s4.position.x = 0.5;      
      s4.rotation.x = -0.5*Math.PI;

      slot.add(s4);

      material = new THREE.MeshLambertMaterial( {color: 0xDBDBDB} );
      geometry = new THREE.BoxGeometry( 0.005 , 0.07, 0.005 );
      var s5 = new THREE.Mesh( geometry, material );
      s5.name = "plane_" + this.id;      
      
      s5.position.z = 0.11;      
      s5.rotation.x = -0.5*Math.PI;      

      var s=new Array(); 
      for (var i = 0; i < 23; i++) {
        s[i]=s5.clone();
        s[i].position.y=0.01+(i*0.015);
        slot.add(s[i]);
      };

      geometry = new THREE.BoxGeometry( 0.01, 0.005, 0.35 );
      var s6 = new THREE.Mesh( geometry, material );
      s6.name = "plane_" + this.id;      
      
      s6.position.z = 0.075;
      s6.position.y = 0.175;
      s6.position.x = 0.005;      
      s6.rotation.x = -0.5*Math.PI;

      slot.add(s6);

      s7 = s6.clone();
      s7.position.z = 0.145;
      s7.position.y = 0.175;
      s7.position.x = 0.005;      
      s7.rotation.x = -0.5*Math.PI;

      slot.add(s7);

      material = new THREE.MeshLambertMaterial( {color: 0xF9F509} );
      geometry = new THREE.CylinderGeometry(0.0075,0.0075,0.01,32);
      var s7 = new THREE.Mesh( geometry, material );
      s7.name = "plane_" + this.id;      
      
      s7.position.z = 0.2;
      s7.position.y = 0.175;
      s7.position.x = 0.0095;      
      s7.rotation.z = -0.5*Math.PI;

      slot.add(s7);

      material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
      geometry = new THREE.CylinderGeometry(0.0075,0.0075,0.01,32);
      var s8 = new THREE.Mesh( geometry, material );
      s8.name = "plane_" + this.id;      
      
      s8.position.z = 0.22;
      s8.position.y = 0.175;
      s8.position.x = 0.0095;      
      s8.rotation.z = -0.5*Math.PI;

      slot.add(s8);

      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      geometry = new THREE.BoxGeometry( 0.01, 0.005, 0.1 );
      var s9 = new THREE.Mesh( geometry, material );
      s9.name = "plane_" + this.id;      
      
      s9.position.z = 0.21;
      s9.position.y = 0.1;
      s9.position.x = 0.005;      
      s9.rotation.x = -0.5*Math.PI;

      slot.add(s9);

      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      geometry = new THREE.BoxGeometry( 0.01, 0.005, 0.02 );
      var s10 = new THREE.Mesh( geometry, material );
      s10.name = "plane_" + this.id;      
      
      s10.position.z = 0.21;
      s10.position.y = 0.25;
      s10.position.x = 0.005;      
      s10.rotation.x = -0.5*Math.PI;

      slot.add(s10);

      var s11 = s10.clone();
      s11.position.z = 0.21;
      s11.position.y = 0.30;
      s11.position.x = 0.005;      
      s11.rotation.x = -0.5*Math.PI;
      
      slot.add(s11);
    
      //server.add(slot);

      var slot2 = new Array();
      for (var i = 0; i < 4; i++) {
        slot2[i] = slot.clone();
        slot2[i].position.z=(i*0.2375);
        server.add(slot2[i]);
      };

      for (var i = 0; i < 4; i++) {
        slot2[i] = slot.clone();
        slot2[i].position.z=(i*0.2375);
        slot2[i].position.y= 0.4;
        server.add(slot2[i]);
      };

      for (var i = 0; i < 4; i++) {
        slot2[i] = slot.clone();
        slot2[i].position.z=(i*0.2375);
        slot2[i].position.y= 0.8;
        server.add(slot2[i]);
      };

      //box server
      geometry = new THREE.BoxGeometry( 0.02, 1, 0.05 );
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var plane = new THREE.Mesh( geometry, material );
      plane.name = "plane_" + this.id;      
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


      //#7C7C7C
      //server up
      var shape3 = createMesh2(new THREE.ExtrudeGeometry(drawShape2(1, 0.3, 0.35), options));
      //shape3.position.z = -0.5;
      shape3.rotation.y = -0.5*Math.PI;
      shape3.position.y = 1.21;
      shape3.position.x = 0.03;
      server.add(shape3);

      var shape4 = createMesh2(new THREE.ExtrudeGeometry(drawShape2(1, 0.3, 0.22), options));
      //shape3.position.z = -0.5;
      shape4.rotation.y = -0.5*Math.PI;
      shape4.position.y = 1.57;
      shape4.position.x = 0.03;
      //#0BF8F7
      material = new THREE.MeshLambertMaterial( {color: 0x0000FF} );
      geometry = new THREE.CylinderGeometry(0.05,0.05,0.01,32);
      var l1 = new THREE.Mesh( geometry, material );
      l1.name = "plane_" + this.id;      
      
      l1.position.z = 0.02;
      l1.position.y = 0.115;
      l1.position.x = 0.08;      
      l1.rotation.x = -0.5*Math.PI;

      shape4.add(l1);

      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      geometry = new THREE.CylinderGeometry(0.03,0.03,0.01,32);
      var l2 = new THREE.Mesh( geometry, material );
      l2.name = "plane_" + this.id;      
      
      l2.position.z = 0.03;
      l2.position.y = 0.115;
      l2.position.x = 0.08;      
      l2.rotation.x = -0.5*Math.PI;

      shape4.add(l2);

      server.add(shape4);

      geometry = new THREE.BoxGeometry( 0.02, 0.2, 1 );
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var s30 = new THREE.Mesh( geometry, material );
      s30.name = "plane_" + this.id;      
      s30.position.y = 1.89;
      s30.position.x = 0.02;
      s30.position.z = 0.5;      
      //s30.rotation.x = -0.5*Math.PI;
      
      material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
      geometry = new THREE.CylinderGeometry(0.01,0.01,0.01,32);
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

      material = new THREE.MeshLambertMaterial( {color: 0x0000FF} );
      geometry = new THREE.CylinderGeometry(0.01,0.01,0.01,32);
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

      material = new THREE.MeshLambertMaterial( {color: 0x00FF00} );
      geometry = new THREE.CylinderGeometry(0.01,0.01,0.01,32);
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

      //server dietro
      geometry = new THREE.BoxGeometry( 0.02, 2, 1 );
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var plane11 = new THREE.Mesh( geometry, material );
      plane11.name = "plane_" + this.id;            
      plane11.position.x = 1;
      plane11.position.z = 0.5;   
      plane11.position.y = 1;
      server.add(plane11);  
      //server base
      geometry = new THREE.BoxGeometry( 0.02, 1, 1 );
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var plane12 = new THREE.Mesh( geometry, material );
      plane12.name = "plane_" + this.id;            
      
      plane12.position.z = 0.5;  
      plane12.position.x = 0.5;   
      plane12.rotation.z = -0.5*Math.PI;
      server.add(plane12);  
      



      var axisHelper = new THREE.AxisHelper( 30 );      
      server.add(axisHelper);

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