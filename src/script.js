import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */

// 1. AMBIENT LIGHT

// const ambientLight = new THREE.AmbientLight()
// ambientLight.color = new THREE.Color('white')
// ambientLight.intensity = 0.05

// scene.add(ambientLight)

// const debug_ambientLight = gui.addFolder('ambientLight')
// debug_ambientLight.add(ambientLight, 'intensity').min(0).max(4).step(0.001)
// debug_ambientLight.addColor(ambientLight, 'color')
// debug_ambientLight.close()

// 2. DIRECTIONAL LIGHT

const directionalLight = new THREE.DirectionalLight()
directionalLight.color = new THREE.Color('red')
directionalLight.intensity = 4
directionalLight.position.x = 0
directionalLight.position.y = 1
directionalLight.position.z = 0

scene.add(directionalLight)

const debug_directionalLight = gui.addFolder('directionalLight')
debug_directionalLight.add(directionalLight, 'intensity').min(0).max(4).step(0.001)
debug_directionalLight.addColor(directionalLight, 'color')
debug_directionalLight.add(directionalLight.position, 'x').min(-10).max(10).step(0.001)
debug_directionalLight.add(directionalLight.position, 'y').min(-10).max(10).step(0.001)
debug_directionalLight.add(directionalLight.position, 'z').min(-10).max(10).step(0.001)
debug_directionalLight.close()

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)

// 3. HEMISPHERE LIGHT

const hemisphereLight = new THREE.HemisphereLight()
hemisphereLight.color = new THREE.Color('#ae00ff')
hemisphereLight.groundColor = new THREE.Color('#002aff')
hemisphereLight.intensity = 0.5
hemisphereLight.position.x = 1
hemisphereLight.position.y = 1
hemisphereLight.position.z = 0

scene.add(hemisphereLight)

const debug_hemisphereLight = gui.addFolder('hemisphereLight')
debug_hemisphereLight.addColor(hemisphereLight, 'color')
debug_hemisphereLight.addColor(hemisphereLight, 'groundColor')
debug_hemisphereLight.add(hemisphereLight, 'intensity').min(0).max(4).step(0.001)
debug_hemisphereLight.add(hemisphereLight.position, 'x').min(-10).max(10).step(0.001)
debug_hemisphereLight.add(hemisphereLight.position, 'y').min(-10).max(10).step(0.001)
debug_hemisphereLight.add(hemisphereLight.position, 'z').min(-10).max(10).step(0.001)
debug_hemisphereLight.close()

const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
scene.add(hemisphereLightHelper)

// 4. POINT LIGHT

const pointLight = new THREE.PointLight()
pointLight.color = new THREE.Color('yellow')
pointLight.intensity = 4
pointLight.distance = 8.5
pointLight.decay = 2
pointLight.position.x = 2
pointLight.position.y = 1
pointLight.position.z = 0

scene.add(pointLight)

const debug_pointLight = gui.addFolder('pointLight')
debug_pointLight.addColor(pointLight, 'color')
debug_pointLight.add(pointLight, 'intensity').min(0).max(4).step(0.001)
debug_pointLight.add(pointLight.position, 'x').min(-10).max(10).step(0.001)
debug_pointLight.add(pointLight.position, 'y').min(-10).max(10).step(0.001)
debug_pointLight.add(pointLight.position, 'z').min(-10).max(10).step(0.001)
debug_pointLight.add(pointLight, 'distance').min(0).max(40).step(0.001)
debug_pointLight.add(pointLight, 'decay').min(0).max(4).step(0.001)
debug_pointLight.close()

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
scene.add(pointLightHelper)

// 5. RECT AREA LIGHT

/*
Esta luz solo funciona para MeshStandardMaterial y MeshPhysicalMaterial


son como las luces de un escenario de fotografia
*/

const rectAreaLight = new THREE.RectAreaLight('blue', 2, 1, 1)
rectAreaLight.color = new THREE.Color('blue')
rectAreaLight.intensity = 2
rectAreaLight.height = 1
rectAreaLight.width = 5

rectAreaLight.position.x = 0
rectAreaLight.position.y = -0.5
rectAreaLight.position.z = 0

scene.add(rectAreaLight)

const debug_rectAreaLight = gui.addFolder('rectAreaLight')
debug_rectAreaLight.addColor(rectAreaLight, 'color')
debug_rectAreaLight.add(rectAreaLight, 'intensity').min(0).max(4).step(0.001)
debug_rectAreaLight.add(rectAreaLight, 'height').min(0).max(4).step(0.001)
debug_rectAreaLight.add(rectAreaLight, 'width').min(0).max(4).step(0.001)
debug_rectAreaLight.add(rectAreaLight.position, 'x').min(-10).max(10).step(0.001)
debug_rectAreaLight.add(rectAreaLight.position, 'y').min(-10).max(10).step(0.001)
debug_rectAreaLight.add(rectAreaLight.position, 'z').min(-10).max(10).step(0.001)
debug_rectAreaLight.close()

const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
scene.add(rectAreaLightHelper)

// 6. SPOT LIGHT

/* 
Es como una linterna
*/

const spotLight = new THREE.SpotLight()
spotLight.color = new THREE.Color('yellow')
spotLight.intensity = 3
spotLight.distance = 8.5
spotLight.angle = Math.PI * 0.065
spotLight.penumbra = 0.25
spotLight.decay = 0

// mover la direcion de donde mira la linterna - es extraño -podemos usar lookAt para que mire un objeto
spotLight.position.x = 2
spotLight.position.y = 3
spotLight.position.z = 4

// mover la linterna
spotLight.target.position.x = -1.5
spotLight.target.position.y = 0
spotLight.target.position.z = 0

scene.add(spotLight.target) // no olvidar agregar esto, porque si no no funciona el "spotLight.target"

scene.add(spotLight)

const debug_spotLight = gui.addFolder('spotLight')
debug_spotLight.addColor(spotLight, 'color')
debug_spotLight.add(spotLight, 'intensity').min(0).max(4).step(0.001)
debug_spotLight.add(spotLight, 'distance').min(0).max(40).step(0.001)
debug_spotLight
  .add(spotLight, 'angle')
  .min(0)
  .max(Math.PI * 0.5)
  .step(0.001)
debug_spotLight.add(spotLight, 'penumbra').min(0).max(1).step(0.001)
debug_spotLight.add(spotLight, 'decay').min(0).max(4).step(0.001)
debug_spotLight.add(spotLight.position, 'x').min(-10).max(10).step(0.001)
debug_spotLight.add(spotLight.position, 'y').min(-10).max(10).step(0.001)
debug_spotLight.add(spotLight.position, 'z').min(-10).max(10).step(0.001)
debug_spotLight.add(spotLight.target.position, 'x').min(-10).max(10).step(0.001)
debug_spotLight.add(spotLight.target.position, 'y').min(-10).max(10).step(0.001)
debug_spotLight.add(spotLight.target.position, 'z').min(-10).max(10).step(0.001)
debug_spotLight.close()

const spotLightHelper = new THREE.SpotLightHelper(spotLight, 'red')
scene.add(spotLightHelper)

/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material)
sphere.position.x = -1.5

const cube = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), material)

const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 32, 64), material)
torus.position.x = 1.5

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material)
plane.rotation.x = -Math.PI * 0.5
plane.position.y = -0.65

scene.add(sphere, cube, torus, plane)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  sphere.rotation.y = 0.1 * elapsedTime
  cube.rotation.y = 0.1 * elapsedTime
  torus.rotation.y = 0.1 * elapsedTime

  sphere.rotation.x = 0.15 * elapsedTime
  cube.rotation.x = 0.15 * elapsedTime
  torus.rotation.x = 0.15 * elapsedTime

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
