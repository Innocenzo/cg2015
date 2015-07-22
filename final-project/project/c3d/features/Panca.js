var Feature = require('./Feature.js');

Feature.inherits(Panca, Feature);

function Panca(feature) {
	Feature.call(this, feature);
}

Panca.prototype.style = {
			    			prefix: "fa",
	    					icon: "plus",
	    					zIndex: 3
						};

Panca.prototype.in_graph = true;

Panca.prototype.in_2D_map = false;

Panca.prototype.get3DModel = function() {
		
      function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        var mat = new THREE.MeshBasicMaterial();
        var mat = new THREE.MeshLambertMaterial();
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }

      //colori
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var black = new THREE.MeshLambertMaterial({color: 0x00000});

      // assi 
      var panca = new THREE.Mesh(new THREE.BoxGeometry(10,0.5,0.5),gray);
      panca.position.set(0,0,0);
      scene.add(panca);

      var l2 = new THREE.Mesh(new THREE.BoxGeometry(10,0.5,0.5),gray);
      l2.position.set(0,0,3);
      panca.add(l2);

      // travi
      var lx;

      for(lx=-5;lx<=5;lx+=5)
      {
            var l1 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,3.5),gray);
            l1.position.set(lx,0,1.5);
            panca.add(l1);
      }

      
      // gambe
      var gx;
      var gz;

      for(gx=-5;gx<=5;gx+=5)
      {
            for(gz=0;gz<=3;gz+=3)
            {
                var g1 = new THREE.Mesh(new THREE.BoxGeometry(3,0.5,0.5),gray);
                g1.rotation.z=0.5*Math.PI;
                g1.position.set(gx,-1.5,gz);
                panca.add(g1);     
            }
      }

      
      // piede
      var py;
      var pz;
     
      for(py=0;py<=10;py+=5)
      {
            for(pz=-3;pz<=0;pz+=3)
            {

              var p1 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.25,0.5),black);
              p1.rotation.z=0.5*Math.PI;
              p1.position.set(-1.625,py,pz);
              g1.add(p1); 

             

            }
      }      

      var dy

      // listelli legno
      for(z=0;z<=3;z+=0.75)
      {
          var c1 = createMesh(new THREE.BoxGeometry(12,0.25,0.5),"wood-2.jpg");
          c1.position.set(0,0.5,z);
          panca.add(c1);

              //dadi
              for(dy=0;dy<=11;dy+=5)
              {     
                  var d1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.8,6),black); 
                  d1.rotation.z=0.5*Math.PI;
                  d1.position.set(1.75,dy,-z);
                  g1.add(d1);
              }
      }

      panca.scale.set(0.1,0.1,0.1);
	    panca.feature = this;
      panca.name = this.id;
  	  var model = Feature.packageModel(panca);

	    return model;
};

module.exports = Panca;