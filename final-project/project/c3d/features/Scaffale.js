var Feature = require('./Feature.js');

Feature.inherits(Scaffale, Feature);

function Scaffale(feature) {
      Feature.call(this, feature);
}

Scaffale.prototype.style = {
                                    prefix: "fa",
                                    icon: "plus",
                                    zIndex: 3
                                    };

Scaffale.prototype.in_graph = true;

Scaffale.prototype.in_2D_map = false;

Scaffale.prototype.get3DModel = function() {



      var black = new THREE.MeshLambertMaterial({color: 0x000000});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
  
      
      var scaffale = new THREE.Mesh(new THREE.BoxGeometry(3,0.02,0.01),gray);
      scaffale.position.set(0,0.32,0)
      scene.add(scaffale);

      //ripiani
      var fz;
      var fy
      for(fy=-0.01;fy<=1.8;fy+=0.6)
      {
          for(fz=0;fz<=0.85;fz+=0.05)
          {
              //lato lungo
              var g0 = new THREE.Mesh(new THREE.BoxGeometry(3,0.02,0.01),gray);
              g0.position.set(0,fy,fz)
              scaffale.add(g0);

              for(lz=-1.5;lz<=1.5;lz+=0.15)
              {
                  //lato corto
                  var g0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.02,0.81),gray);
                  g0.position.set(lz,fy,0.4)
                  scaffale.add(g0);
              }
          }
      }

      for(fx=-1.5;fx<=1.5;fx+=1.5)
      {
          for(fz=0;fz<=0.8;fz+=0.8)
          {
              //gambe
              var r1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,2.1,32),gray);
              r1.position.set(fx,0.75,fz);
              scaffale.add(r1);

              //piedi
              var r1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,0.02,32),black);
              r1.position.set(fx,-0.31,fz);
              scaffale.add(r1);

          }
      }

      scaffale.feature = this;
      scaffale.name = this.id;
      var model = Feature.packageModel(scaffale);

      return model;
};

module.exports = Scaffale;
