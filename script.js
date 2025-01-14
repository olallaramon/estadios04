// Variables principales de Three.js
let scene, camera, renderer;
let stadium, stands = [], lights = [];

// Configuración inicial de Three.js
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Crear un estadio básico (terreno)
  const stadiumGeometry = new THREE.BoxGeometry(10, 0.1, 6);
  const stadiumMaterial = new THREE.MeshBasicMaterial({ color: 0x2e8b57 });
  stadium = new THREE.Mesh(stadiumGeometry, stadiumMaterial);
  stadium.position.set(0, -0.05, 0);
  scene.add(stadium);

  // Crear cámara
  camera.position.z = 20;

  // Agregar controles de movimiento
  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Iniciar renderizado
  animate();
}

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Agregar gradas al estadio
function addStands() {
  const standGeometry = new THREE.BoxGeometry(4, 1, 1);
  const standMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
  const stand = new THREE.Mesh(standGeometry, standMaterial);
  
  // Posicionando las gradas en el estadio
  stand.position.set(Math.random() * 10 - 5, 0.5, Math.random() * 6 - 3);
  
  scene.add(stand);
  stands.push(stand);
}

// Agregar portería al estadio
function addGoal() {
  const goalGeometry = new THREE.BoxGeometry(1.5, 1, 0.1);
  const goalMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const goal = new THREE.Mesh(goalGeometry, goalMaterial);
  
  goal.position.set(0, 0.5, 6);
  scene.add(goal);
}

// Agregar torre de luz
function addLightTower() {
  const towerGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3);
  const towerMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const tower = new THREE.Mesh(towerGeometry, towerMaterial);
  
  tower.position.set(Math.random() * 10 - 5, 1.5, Math.random() * 6 - 3);
  scene.add(tower);
  lights.push(tower);
}

// Reiniciar el estadio
function resetStadium() {
  stands.forEach(stand => scene.remove(stand));
  lights.forEach(light => scene.remove(light));
  stands = [];
  lights = [];
  addStands(); // Reagregar las gradas iniciales si es necesario
}

// Eventos de botones
document.getElementById('addStands').addEventListener('click', addStands);
document.getElementById('addGoal').addEventListener('click', addGoal);
document.getElementById('addLight').addEventListener('click', addLightTower);
document.getElementById('reset').addEventListener('click', resetStadium);

// Inicialización
init();


