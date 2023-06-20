<script lang="ts">
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import { onMount } from "svelte";
  import sparko3d from "$lib/assets/3d/sparko3d.fbx";

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    // set background color to white
    scene.background = new THREE.Color(0xffffff);
    // scene.add(cube);

    // load gltf model and add to scene
    const loader = new GLTFLoader();

    // loader.load(
    //   nirmal,
    //   function (gltf) {
    //     scene.add(gltf.scene);
    //   },
    //   undefined,
    //   function (error) {
    //     console.error(error);
    //   }
    // );

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  });
</script>

<div />

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: aq;
  }
</style>
