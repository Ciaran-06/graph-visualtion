import * as three from '../build/three.module.js';

let camera, scene, renderer;
let geometry, material, mesh;

let clock = new three.Clock();
let speed = 0.5;
let delta = 0;

init();

function init() {
    camera = new three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    scene = new three.Scene();

    geometry = new three.BoxGeometry(0.5, 0.5, 0.5);
    material = new three.MeshNormalMaterial();

    mesh = new three.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new three.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);
}

function animation() {
    requestAnimationFrame(animation);

    delta = clock.getDelta();

    mesh.rotation.x += speed * delta;
    mesh.rotation.y += speed * delta;

    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    animation()
}