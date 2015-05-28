var camera, scene, renderer;
var geometry, material, mesh;
var light;
var controls;

function init() {

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xffffff, 0, 750);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  controls = new THREE.PointerLockControls(camera);
  scene.add(controls.getObject());

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize, false);

  createScene();
  //createMaze(10,0,0xffffff);
  display(maze(8,8)); 

  animate();
}

function createScene () {
  light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
  light.position.set(0.5, 1, 0.75);
  scene.add(light);

  geometry = new THREE.PlaneGeometry(500, 500, 50, 50);
  material = new THREE.MeshBasicMaterial({ color: 0x555555, wireframe: true });
  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI / 2;
  scene.add(mesh);
}
function createMaze(x,z,color){
  var obj1 = new THREE.Object3D();
  var axisHelper = new THREE.AxisHelper( 50 );
  obj1.add( axisHelper );
  var gridHelper = new THREE.GridHelper( 10, 1 );    
  obj1.add( gridHelper );
  scene.add(obj1);

  //create cube  
  var CubeMaterial = new THREE.MeshLambertMaterial({color: color});
  var geometry = new THREE.BoxGeometry( 10, 30, 30  );
  var cube = new THREE.Mesh( geometry, CubeMaterial );
  obj1.add(cube);  
  cube.position.y += 15;
  cube.position.x = x;
  cube.position.z = z;
  //var axisHelper = new THREE.AxisHelper( 50 );
  //cube.add( axisHelper );
  obj1.position.x = 20;
  //obj1.position.z = -235;
  obj1.rotation.y = Math.PI;
  scene.add(obj1);

}
function maze(x,y) {
  var n=x*y-1;
  if (n<0) {alert("illegal maze dimensions");return;}
  var horiz =[]; for (var j= 0; j<x+1; j++) horiz[j]= [],
      verti =[]; for (var j= 0; j<x+1; j++) verti[j]= [],
      here = [Math.floor(Math.random()*x), Math.floor(Math.random()*y)],
      path = [here],
      unvisited = [];
  for (var j = 0; j<x+2; j++) {
    unvisited[j] = [];
    for (var k= 0; k<y+1; k++)
      unvisited[j].push(j>0 && j<x+1 && k>0 && (j != here[0]+1 || k != here[1]+1));
  }
  while (0<n) {
    var potential = [[here[0]+1, here[1]], [here[0],here[1]+1],
        [here[0]-1, here[1]], [here[0],here[1]-1]];
    var neighbors = [];
    for (var j = 0; j < 4; j++)
      if (unvisited[potential[j][0]+1][potential[j][1]+1])
        neighbors.push(potential[j]);
    if (neighbors.length) {
      n = n-1;
      next= neighbors[Math.floor(Math.random()*neighbors.length)];
      unvisited[next[0]+1][next[1]+1]= false;
      if (next[0] == here[0])
        horiz[next[0]][(next[1]+here[1]-1)/2]= true;
      else 
        verti[(next[0]+here[0]-1)/2][next[1]]= true;
      path.push(here = next);
    } else 
      here = path.pop();
  }
  return {x: x, y: y, horiz: horiz, verti: verti};
}
 


function display(m) {
  var text= [];
  for (var j= 0; j<m.x*2+1; j++) {
    var line= [];
    if (0 == j%2)
      for (var k=0; k<m.y*4+1; k++)
        if (0 == k%4) 
          line[k]= '+';
        else
          if (j>0 && m.verti[j/2-1][Math.floor(k/4)])
            line[k]= ' ';
          else
            line[k]= '-';
    else
      for (var k=0; k<m.y*4+1; k++)
        if (0 == k%4)
          if (k>0 && m.horiz[(j-1)/2][k/4-1])
            line[k]= ' ';
          else
            line[k]= '|';
        else
          line[k]= ' ';
    if (0 == j) line[1]= line[2]= line[3]= ' ';
    if (m.x*2-1 == j) line[4*m.y]= ' ';
    text.push(line.join('')+'\r\n');
  }
  
   console.log(text.length);
   console.log(text.join(''));
   var  x=0,z=0;
   for (var i = 0; i < text.length; i++) {

      for (var j = 0; j < text.length*m.y; j++) {
        if (text[i][j]=="+") {
            createMaze(x,z,0xff0000);
            //console.log("+++++",x,z);
            x+=10
        } if (text[i][j]==" ") {
          
          x+=10;

        } if (text[i][j]=="|") {
          //console.log("|||||||",x,z);
          createMaze(x,z,0x00ff00);
          x+=10;
        } if (text[i][j]=="-") {
          //console.log("-----",x,z);
          
          createMaze(x,z,0x0000ff);
          x+=10;
        }
       
       
       //console.log(text[i][j]);
      }
   x=0;
   z+=30;
   }
}


function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate () {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

init();