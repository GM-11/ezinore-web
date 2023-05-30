<script lang="ts">
  import * as THREE from "three";

  import { browser } from "$app/environment";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

  let y: number;

  if (browser) {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 1.2, window.innerHeight / 1.2);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(3, 5, 6, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    torus.rotation.y += 0.5;

    const pointLight = new THREE.PointLight(0xffffff);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    const pointHelper = new THREE.PointLightHelper(pointLight);
    pointLight.position.set(15, 0, 6);
    scene.add(pointLight);
    scene.add(pointHelper);

    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.z += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  }
</script>

<!-- <div class="bg-red-500 h-[300vh] flex justify-center items-start">
  <canvas id="bg" style="height: 66vh; width: 66vw">h</canvas>
</div>
<svelte:window bind:scrollY={y} /> -->

<style>
  #bg {
    /* left: 30; */
    /* height: 30rem; */
    /* width: 30rem; */
    border: solid 2px blue;
    position: fixed;
  }
</style>
