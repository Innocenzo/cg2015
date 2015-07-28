var Feature = require('./Feature.js');

Feature.inherits(PcMac, Feature);

function PcMac(feature) {
	Feature.call(this, feature);
}

PcMac.prototype.style =	{
							prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

PcMac.prototype.in_graph = true;
PcMac.prototype.in_2D_map = true;

PcMac.prototype.get3DModel = function() {

	function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }


	function drawShape() {

        // create a basic shape
        var shape = new THREE.Shape();

        // startpoint
        shape.moveTo(0, 0);

        shape.lineTo(0, 0.50);
        shape.lineTo(3.90, 0.50);
        shape.lineTo(3.90, 0);

        return shape;
      }

      function createMesh2(geom) {

        var mat = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
        var mesh = new THREE.Mesh(geom, mat);

        return mesh;
      }

      var options = {
            amount: 0,
            bevelThickness: 0.3,
            bevelSize: 4,
            bevelSegments: 32,
            bevelEnabled: true,
            curveSegments: 32,            
          };
     
     var pcMac = new THREE.Object3D();

     shape = createMesh(new THREE.ExtrudeGeometry(drawShape(), options),"acciaio.jpg");

      shape.scale.set(0.1,0.1,0.1);
      shape.rotation.z = -0.5*Math.PI;
      shape.position.x = -0.04;
      shape.position.y = 0.04;
      

      pcMac.add(shape);

    var pictureX = 0.85;
    var pictureY =1.2;
    var pictureZ = 0.001;
    var texture = "apple.jpg";
    

    var picture = new THREE.Object3D();


    var display = createMesh(new THREE.BoxGeometry( pictureX, pictureY, pictureZ), texture); 
    display.position.z = 0.02;


    var boxLeft = createMesh(new THREE.BoxGeometry(0.03, pictureY, 0.03), "acciaio.jpg"); 
    boxLeft.position.x = -pictureX/2;


    boxRight = boxLeft.clone();
    boxRight.position.x = pictureX/2;


    var boxDown = createMesh(new THREE.BoxGeometry(pictureX+0.03, 0.03, 0.03), "acciaio.jpg"); 
    boxDown.position.y = -pictureY/2;


    boxUp = boxDown.clone();
    boxUp.position.y = pictureY/2;
    

    picture.add(boxLeft);    
    picture.add(boxRight);
    picture.add(boxUp);
    picture.add(boxDown);
    picture.add(display);
    picture.position.z = 0.01;
    picture.position.y = -0.15;

      	
      pcMac.add(picture);


  var p1 =createMesh( new THREE.BoxGeometry( 0.55, 0.22, 0.015 ), "acciaio.jpg"); 
  p1.position.y = -0.16;
  p1.position.z = -0.03;
  p1.position.x = -0.28;

  pcMac.add(p1);


  var p2 = createMesh(new THREE.BoxGeometry( 0.3, 0.22, 0.015 ), "acciaio.jpg"); 
  p2.position.y = -0.16;
  p2.position.z = 0.11;
  p2.position.x = -0.56;
  p2.rotation.y = 0.5*Math.PI;

  pcMac.add(p2);

  var keyboard = createMesh(new THREE.BoxGeometry( 0.6, 0.2, 0.015 ), "keyboard.jpg"); 
  keyboard.position.y = -0.16;
  keyboard.position.z = 0.51;
  keyboard.position.x = -0.56;
  keyboard.rotation.y = 0.5*Math.PI;
  keyboard.rotation.x = 0.5*Math.PI;
  keyboard.rotation.z   = Math.PI;

  pcMac.add(keyboard);

  var mac = createMesh(new THREE.BoxGeometry( 0.3, 0.3, 0.055 ), "acciaio.jpg"); 
  mac.position.y = 0.22;
  mac.position.z = 0.11;
  mac.position.x = -0.56;
  mac.rotation.y = 0.5*Math.PI;
  mac.rotation.x = 0.5*Math.PI;
  mac.rotation.z   = Math.PI;

  pcMac.add(mac);

  var logoMac = createMesh(new THREE.BoxGeometry( 0.3, 0.3, 0.01 ), "macmini.jpg"); 
  logoMac.position.y = 0.22;
  logoMac.position.z = 0.11;
  logoMac.position.x = -0.529;
  logoMac.rotation.y = 0.5*Math.PI;
  logoMac.rotation.x = 0.5*Math.PI;
  logoMac.rotation.z   = Math.PI;

  pcMac.add(logoMac);

	pcMac.feature = this;
	pcMac.name = this.id;
	//pcMac.rotation.x=0.5*Math.PI;
	pcMac.rotation.y=0.5*Math.PI;
	pcMac.rotation.y=-0.5*Math.PI;
	pcMac.scale.set(0.65,0.65,0.65);


	
	var model = Feature.packageModel(pcMac);

	return model;
};

module.exports = PcMac;