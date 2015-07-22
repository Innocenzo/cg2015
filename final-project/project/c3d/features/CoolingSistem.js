var Feature = require('./Feature.js');

Feature.inherits(CoolingSistem, Feature);

function CoolingSistem(feature) {
	Feature.call(this, feature);
}

CoolingSistem.prototype.style =	{
							weight: 0,
						    fillColor: "#9b8c75",
						    fillOpacity: 1,
						    zIndex: 3
						};

CoolingSistem.prototype.in_graph = true;
CoolingSistem.prototype.in_2D_map = true;

CoolingSistem.prototype.get3DModel = function() {
	var coolingSistem = new THREE.Object3D();
	
	var coolingSistemX = 1;
	var coolingSistemY = 1;

	gridCooling = new THREE.Object3D();   

     
      geometry = new THREE.BoxGeometry(coolingSistemX, coolingSistemY/100, 0.001);
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var plane = new THREE.Mesh( geometry, material );
      
      plane.position.y = coolingSistemY/2;      
      plane.position.z = coolingSistemX/2;
      plane.rotation.y= Math.PI*0.5;



      for (var i = 0; i < 25; i++) {
       var p = plane.clone(); 
       p.position.y = 0.04*i ;      
       gridCooling.add(p);
      };
    
      coolingSistem.add(gridCooling);

      geometry = new THREE.BoxGeometry(coolingSistemX-0.1, coolingSistemY/5, 0.05);
      material = new THREE.MeshLambertMaterial( {color: 0xD8D8D8} );
      var fan = new THREE.Mesh( geometry, material );

      fan.position.y = coolingSistemY/2;      
      fan.position.z = coolingSistemX/2;
      fan.position.x = 0.05;
      fan.rotation.y= Math.PI*0.5;


      fan2 = fan.clone();
      fan2.rotation.x= Math.PI*0.5;


      var myVar = setInterval(function(){ setRotation() }, 1.5);

      function setRotation() {
        fan.rotation.x+=0.1;
        fan2.rotation.x+=0.1;
      }  

          
      coolingSistem.add(fan);
      coolingSistem.add(fan2);


      geometry = new THREE.BoxGeometry(coolingSistemX, coolingSistemY, coolingSistemY/2);
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var box = new THREE.Mesh( geometry, material );

      box.position.y = coolingSistemY/2;      
      box.position.z = coolingSistemX/2;
      box.position.x = coolingSistemY/4+0.05;
      box.rotation.y= Math.PI*0.5;

      coolingSistem.add(box);

      geometry = new THREE.BoxGeometry(coolingSistemX/20, coolingSistemY, 0.1);
      material = new THREE.MeshLambertMaterial( {color: 0x000000} );
      var frameLeft = new THREE.Mesh( geometry, material );

      frameLeft.position.y = coolingSistemY/2;      
      
      frameLeft.position.x = 0.05;
      frameLeft.rotation.y= Math.PI*0.5;

      var frameRight = new THREE.Mesh( geometry, material );

      frameRight.position.y = coolingSistemY/2;      
      frameRight.position.z = coolingSistemX;
      frameRight.position.x = 0.05;
      frameRight.rotation.y= Math.PI*0.5;

      var frameDown = new THREE.Mesh( geometry, material );

      
      frameDown.rotation.x= Math.PI*0.5;
      frameDown.rotation.y= Math.PI*0.5;
      frameDown.position.x = 0.05;
      frameDown.position.z = coolingSistemX/2;

      var frameUp = new THREE.Mesh( geometry, material );

      
      frameUp.rotation.x= Math.PI*0.5;
      frameUp.rotation.y= Math.PI*0.5;
      frameUp.position.y= coolingSistemY;
      frameUp.position.x = 0.05;
      frameUp.position.z = coolingSistemX/2;
      

      coolingSistem.add(frameLeft);
      coolingSistem.add(frameRight);
      coolingSistem.add(frameDown);
      coolingSistem.add(frameUp);


	coolingSistem.feature = this;
	coolingSistem.name = this.id;
	var model = Feature.packageModel(coolingSistem);

	return model;
};

module.exports = CoolingSistem;