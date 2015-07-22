
 var Feature = require('./Feature.js');

Feature.inherits(SediaScrivania, Feature);

function SediaScrivania(feature) {
    Feature.call(this, feature);
}

SediaScrivania.prototype.style = {
                            prefix: "fa",
                            icon: "minus",
                            zIndex: 3
                        };

SediaScrivania.prototype.in_graph = true;

SediaScrivania.prototype.in_2D_map = true;

SediaScrivania.prototype.get3DModel = function() {

      var grigio = new THREE.MeshBasicMaterial({color : 0x98AFC7});
      var grigioChiaro = new THREE.MeshBasicMaterial({color : 0xD3D3D3});
      var grigioMetallico = new THREE.MeshBasicMaterial({color : 0x98AFC7});
      var celesteMetallo = new THREE.MeshBasicMaterial({color : 0xFFFFFF});
      var bianco = new THREE.MeshBasicMaterial({color : 0x000000});
      var nero = new THREE.MeshBasicMaterial({color : 0x000000});


      var sediaScrivania = new THREE.Object3D();
      var baseSedia = creaBase();
      var corpoSedia = creaCorpo();
      var schienaleSedia = creaSchienale();
      baseSedia.position.y = 0.1 +0.07;
      corpoSedia.position.y = 0.1 +0.14;
      schienaleSedia.position.y = 0.06;
      schienaleSedia.position.x =-0.25;
      corpoSedia.add(schienaleSedia);
      baseSedia.add(corpoSedia);
      sediaScrivania.add(baseSedia);




      function creaSchienale(){
        var schienale = new THREE.Object3D();
        var geometriaReggiSchienale = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.18 , 32 );
        var geometriaReggiSchienale1 = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.04 , 32 );
        var geometriaNodo = new THREE.SphereGeometry( 0.01 , 32 , 32 );
        var reggiSchienale1a = new THREE.Mesh( geometriaReggiSchienale , nero );
        var reggiSchienale1b = new THREE.Mesh( geometriaReggiSchienale1 , nero );
        var nodo1 = new THREE.Mesh( geometriaNodo , nero );
        var reggiSchienale2a = new THREE.Mesh( geometriaReggiSchienale , nero );
        var reggiSchienale2b = new THREE.Mesh( geometriaReggiSchienale1 , nero );
        var nodo2 = new THREE.Mesh( geometriaNodo , nero );
        var cuscinoSchienale = creaCuscinoSchienale();
        reggiSchienale1a.rotation.z = Math.PI*(90 +6)/180;
        reggiSchienale1a.position.z = 0.05;
        reggiSchienale1a.position.x = 0.09;
        reggiSchienale1b.rotation.z = -Math.PI*96/180;
        reggiSchienale1b.position.x = 0.02*Math.cos(Math.PI*6/180);
        nodo1.position.y = 0.09;
        reggiSchienale2a.rotation.z = Math.PI*(90 +6)/180;
        reggiSchienale2a.position.z =-0.05;
        reggiSchienale2a.position.x = 0.09;
        reggiSchienale2b.rotation.z =-Math.PI*96/180;
        reggiSchienale2b.position.x = 0.02*Math.cos(Math.PI*6/180);
        nodo2.position.y = 0.09;
        cuscinoSchienale.rotation.y = Math.PI/2;
        cuscinoSchienale.position.y = 0.25 +0.02;
        nodo1.add(reggiSchienale1b);
        reggiSchienale1a.add(nodo1);
        schienale.add(reggiSchienale1a);
        nodo2.add(reggiSchienale2b);
        reggiSchienale2a.add(nodo2);
        schienale.add(reggiSchienale2a);
        schienale.add(cuscinoSchienale);      
        return schienale;
      };

      function creaCuscinoSchienale(){
        var cuscino = new THREE.Object3D();
        var geometriaCentro = new THREE.BoxGeometry( 0.3 , 0.5 , 0.04 );
        var geometriaBordoCorto = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.3 , 32 );
        var geometriaBordoLungo = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.5 , 32 );
        var geometriaAngolo = new THREE.SphereGeometry( 0.02 , 32 , 32 );
        var bordoCorto1 = new THREE.Mesh( geometriaBordoCorto , bianco );
        var bordoCorto2 = new THREE.Mesh( geometriaBordoCorto , bianco );
        var bordoLungo1 = new THREE.Mesh( geometriaBordoLungo , bianco );
        var bordoLungo2 = new THREE.Mesh( geometriaBordoLungo , bianco );
        var angolo1c = new THREE.Mesh( geometriaAngolo , bianco); 
        var angolo2c = new THREE.Mesh( geometriaAngolo , bianco); 
        var angolo1l = new THREE.Mesh( geometriaAngolo , bianco); 
        var angolo2l = new THREE.Mesh( geometriaAngolo , bianco); 
        var centro = new THREE.Mesh( geometriaCentro , bianco );
        bordoCorto1.rotation.z = Math.PI/2;
        bordoCorto1.position.y = 0.25;
        angolo1c.position.y = 0.15;
        bordoCorto2.rotation.z = Math.PI/2;
        bordoCorto2.position.y =-0.25;
        angolo2c.position.y =-0.15;
        bordoLungo1.position.x = 0.15;
        angolo1l.position.y = 0.25;
        bordoLungo2.position.x =-0.15;
        angolo2l.position.y =-0.25;
        bordoLungo2.add(angolo2l);
        cuscino.add(bordoLungo2);
        bordoLungo1.add(angolo1l);
        cuscino.add(bordoLungo1);
        bordoCorto2.add(angolo2c);
        cuscino.add(bordoCorto2);
        bordoCorto1.add(angolo1c);
        cuscino.add(bordoCorto1);
        cuscino.add(centro);
        return cuscino;
      };

      function creaCorpo() {
        var corpo = new THREE.Object3D();
        var geometriaReggiCuscino1 = new THREE.BoxGeometry( 0.28 , 0.06 , 0.07 );
        var geometriaReggiCuscino2 = new THREE.BoxGeometry( 0.3 , 0.04 , 0.09 );
        var geometriaLevaCorta = new THREE.CylinderGeometry( 0.0045 , 0.0045 , 0.07 , 32 );
        var geometriaLevaLunga = new THREE.CylinderGeometry( 0.0045 , 0.0045 , 0.09 , 32 );
        var geometriaManicoLeva = new THREE.CylinderGeometry( 0.007 , 0.005 , 0.06 , 32 );
        var geometriaBaseReggiBraccia = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.2 , 32 ); 
        var reggiCuscino1 = new THREE.Mesh( geometriaReggiCuscino1 , grigio );
        var reggiCuscino2 = new THREE.Mesh( geometriaReggiCuscino2 , grigio );
        var levaLunga = new THREE.Mesh( geometriaLevaLunga , bianco );
        var levaCorta = new THREE.Mesh( geometriaLevaCorta , bianco );
        var manicoLeva1 = new THREE.Mesh( geometriaManicoLeva , nero );
        var manicoLeva2 = new THREE.Mesh( geometriaManicoLeva , nero );
        var baseReggiBraccia1 = new THREE.Mesh( geometriaBaseReggiBraccia , grigio );
        var baseReggiBraccia2 = new THREE.Mesh( geometriaBaseReggiBraccia , grigio );
        var Cuscino = creaCuscino();
        var braccio1 = creaBraccio();
        var braccio2 = creaBraccio();
        reggiCuscino1.position.y = 0.03;
        reggiCuscino2.rotation.z = Math.PI*6/180;
        reggiCuscino2.position.y = 0.06 ;
        levaLunga.rotation.x = Math.PI*80/180;
        levaLunga.position.z = 0.035 + 0.045;
        levaLunga.position.x = 0.1;
        levaCorta.rotation.x =-Math.PI*80/180;
        levaCorta.position.z =-0.035 - 0.035;
        levaCorta.position.x = 0.08;
        manicoLeva2.position.y = 0.035 + 0.03;
        manicoLeva1.position.y  = 0.045 + 0.03;
        Cuscino.position.y = 0.02 + 0.02;
        baseReggiBraccia1.rotation.x = Math.PI/2;
        baseReggiBraccia1.rotation.y = -Math.PI*6/180;
        baseReggiBraccia2.rotation.x = Math.PI/2;
        baseReggiBraccia2.rotation.y = -Math.PI*6/180;
        baseReggiBraccia1.position.z = 0.045 + 0.1;
        baseReggiBraccia2.position.z =-0.045 - 0.1;
        braccio1.position.y = 0.1;
        braccio2.position.y = -0.1;
        reggiCuscino2.add(Cuscino);
        baseReggiBraccia1.add(braccio1);
        baseReggiBraccia2.add(braccio2);
        reggiCuscino2.add(baseReggiBraccia1);
        reggiCuscino2.add(baseReggiBraccia2);
        levaLunga.add(manicoLeva1);
        levaCorta.add(manicoLeva2);
        reggiCuscino1.add(levaLunga)
        reggiCuscino1.add(levaCorta);
        corpo.add(reggiCuscino2);
        corpo.add(reggiCuscino1);
        return corpo;
      };

      function creaBraccio(){
        var braccio = new THREE.Object3D();
        var geometriaNodo = new THREE.SphereGeometry( 0.01 , 32 , 32 );
        var geometriaParteUno = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.24 , 32 );
        var geometriaParteDue = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.04 , 32 );
        var geometriaParteTre = new THREE.CylinderGeometry( 0.02 , 0.025 , 0.2 , 32 );
        var nodo1 = new THREE.Mesh( geometriaNodo , grigio );
        var nodo2 = new THREE.Mesh( geometriaNodo , grigio );
        var parteUno = new THREE.Mesh( geometriaParteUno , grigio );
        var parteDue = new THREE.Mesh( geometriaParteDue , grigio );
        var parteTre = new THREE.Mesh( geometriaParteTre , bianco );
        parteUno.rotation.x = Math.PI/2;
        parteUno.rotation.z = -Math.PI*25/180;
        parteUno.position.set(  0.12*Math.sin(parteUno.rotation.z) , 0 , -0.12*Math.cos(parteUno.rotation.z) );
        parteDue.rotation.z = Math.PI*100/180;
        parteDue.position.x = 0.02;
        parteDue.position.y = 0.0035;
        nodo2.position.y =-0.12;
        parteTre.position.y =-0.1 -0.02;
        parteDue.add(parteTre);
        nodo2.add(parteDue);
        parteUno.add(nodo2);
        nodo1.add(parteUno);
        braccio.add(nodo1);
        return braccio;
      };

      function creaCuscino() {
        var cuscino = new  THREE.Object3D();
        var geometriaCentro = new THREE.BoxGeometry( 0.4 , 0.04 , 0.4 );
        var centroCuscino = new THREE.Mesh( geometriaCentro , bianco );
        bordo1 = creaBordo();
        bordo2 = creaBordo();
        bordo3 = creaBordo();
        bordo4 = creaBordo();
        bordo1.rotation.x = Math.PI/2;
        bordo1.position.x = 0.2;
        bordo2.rotation.x =-Math.PI/2;
        bordo2.position.x =-0.2;
        bordo3.rotation.z =-Math.PI/2;
        bordo3.position.z =-0.2;
        bordo4.rotation.z = Math.PI/2;
        bordo4.position.z = 0.2;
        centroCuscino.add(bordo1);
        centroCuscino.add(bordo2);
        centroCuscino.add(bordo3);
        centroCuscino.add(bordo4);
        cuscino.add(centroCuscino);
        return cuscino;
      };

      function creaBordo(){
        var geometriaBordo = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.4 , 32 , true );
        var geometriaAngolo = new THREE.SphereGeometry( 0.02 , 32 , 32 );
        var angolo = new THREE.Mesh( geometriaAngolo , bianco );
        var bordo = new  THREE.Mesh( geometriaBordo , bianco )
        bordo.openEnded = 1;
        angolo.position.y = 0.2;
        bordo.add(angolo);
        return bordo;
      };

      function creaBase(){
        var base = new THREE.Object3D();
        var geometriaPrimoCilindro = new THREE.CylinderGeometry( 0.027 , 0.027 , 0.05 , 32 );
        var geometriaSecondoCilindro = new THREE.CylinderGeometry( 0.03 , 0.03 , 0.2 , 32 );
        var geometriaCopriSecondoCilindro = new THREE.CylinderGeometry( 0.04 , 0.04 , 0.06 , 32 );
        var geometriaCopriSecondoCilindro2 = new THREE.TorusGeometry( 0.04 , 0.025 , 32 , 100 );
        var geometriaTerzoCilindro = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.14 , 32 );
        var primoCilindro = new THREE.Mesh( geometriaPrimoCilindro , grigioMetallico );
        var secondoCilindro = new THREE.Mesh( geometriaSecondoCilindro , grigioMetallico );
        var copriSecondoCilindro = new THREE.Mesh( geometriaCopriSecondoCilindro , grigioMetallico );
        var copriSecondoCilindro2 = new THREE.Mesh( geometriaCopriSecondoCilindro2 , grigioMetallico );
        var terzoCilindro = new THREE.Mesh( geometriaTerzoCilindro , grigioMetallico );
        var ruote = creaRuote();
        primoCilindro.position.y =-0.1 - 0.025;
        terzoCilindro.position.y = 0.1 + 0.07;
        ruote.position.y =-0.07;
        copriSecondoCilindro.position.y =-0.05;
        copriSecondoCilindro2.rotation.x = Math.PI/2;
        copriSecondoCilindro2.position.y =-0.05;
        secondoCilindro.add(copriSecondoCilindro);
        secondoCilindro.add(copriSecondoCilindro2);
        secondoCilindro.add(ruote);
        secondoCilindro.add(primoCilindro);
        secondoCilindro.add(terzoCilindro);
        base.add(secondoCilindro);
        return base;
      };

      function creaRuote(){
        var ruote = new THREE.Object3D();
          for (var i = 0; i < 5; i++) {
            var ruota = creaRuota();
            ruota.rotation.y = 2*Math.PI*i*72/360;
            ruote.add(ruota);
          };
        return ruote;
      };


      function creaRuota(){
        var geometriaBraccio = new THREE.CylinderGeometry( 0.027 , 0.02 , 0.3 , 32 );
        var geometriaSostegno = new THREE.CylinderGeometry( 0.02 , 0.01 , 0.02 , 32 );
        var geometriaPerno = new THREE.CylinderGeometry( 0.008 , 0.008 , 0.01 , 32 );
        var geometriaInizioSostegno = new THREE.SphereGeometry( 0.02 , 32 , 32 );
        var geometriaRuota = new THREE.CylinderGeometry( 0.025 , 0.025 , 0.05 , 32 );
        var geometriaInternoRuota = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.051 , 32 );
        var geometriaCopriRuota = new THREE.CylinderGeometry( 0.026 , 0.026 , 0.045 , 32 );
        var braccio = new THREE.Mesh( geometriaBraccio , grigioMetallico );
        var sostegno = new THREE.Mesh( geometriaSostegno , grigioMetallico );
        var perno = new THREE.Mesh( geometriaPerno , grigioChiaro );
        var inizioSostegno = new THREE.Mesh( geometriaInizioSostegno , grigioMetallico );
        var ruota = new THREE.Mesh( geometriaRuota , nero );
        var copriRuota = new THREE.Mesh( geometriaCopriRuota , grigioMetallico );
        var internoRuota = new THREE.Mesh( geometriaInternoRuota , grigio );
        var fineBraccio = new THREE.Object3D();
        var inizioBraccio = new THREE.Object3D();
        braccio.rotation.z = Math.PI*80/180;
        braccio.position.x = 0.01 + 0.15;
        fineBraccio.rotation.z =-Math.PI*80/180;
        fineBraccio.position.y =-Math.sin(Math.PI*80/180)*0.15;
        sostegno.position.y =-0.01;
        perno.position.y =-0.01 - 0.005;
        ruota.rotation.x = Math.PI/2;
        ruota.position.y =-0.005 -0.02;
        copriRuota.position.z =-0.003;
        ruota.add(internoRuota);
        ruota.add(copriRuota);
        perno.add(ruota);
        sostegno.add(perno);
        fineBraccio.add(sostegno);
        fineBraccio.add(inizioSostegno);
        braccio.add(fineBraccio);
        inizioBraccio.add(braccio);
        return inizioBraccio;
      };


    sediaScrivania.rotation.x= 0.5*Math.PI;
    sediaScrivania.rotation.y= -0.5*Math.PI;
    sediaScrivania.position.z-= 0.02;

    sediaScrivania.name = this.id;
    sediaScrivania.feature = this;
    var model = Feature.packageModel(sediaScrivania);
    return model;
};

module.exports = SediaScrivania;

