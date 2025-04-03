import * as THREE from 'three';

// 1. Creating the scene
const scene = THREE.scene = new THREE.scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Adding the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Creation of an object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);














