<script lang="ts">
  import { onMount, tick, onDestroy } from "svelte";
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";

  import { browser } from "$app/environment";

  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

  export let imagePath: string;
  // export let modelPath: string;
  export let list: string[];

  $: rotation = 0;
  $: scrollPosition = 0;

  let container: { appendChild: (arg0: HTMLCanvasElement) => void };
  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer;

  if (browser) {
    onMount(() => {
      // Initialize the three.js scene
      // initScene();

      window.addEventListener("scroll", handleScroll);

      // Load the glTF model
      // loadModel(modelPath);
    });

    function initScene() {
      // Create the camera
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Create the scene
      scene = new THREE.Scene();

      // Create the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // Start the render loop
      requestAnimationFrame(render);
    }

    function loadModel(url: string) {
      const loader = new GLTFLoader();
      loader.load(url, function (gltf) {
        scene.add(gltf.scene);
      });
    }

    function render() {
      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    onDestroy(() => {
      window.removeEventListener("scroll", () => {
        scrollPosition = 0;
      });
    });

    afterUpdate(() => {
      tick().then(() => {
        scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
      });
    });

    function handleScroll() {
      rotation = scrollPosition / 5;
    }
  }
</script>

<div id="second-page" class=" p-3">
  <img
    transition:fade
    class={"image"}
    style={`transform: rotateY(${rotation}deg); z-index:1; position:sticky;top: 20%; left:40%;padding:1rem;`}
    src={imagePath}
    width="270"
    alt=""
  />


  <!-- <div
    bind:this={container}
    style={`transform: rotateY(${rotation}deg); z-index:1; position:sticky;top: 20%; left:40%;padding:1rem;`}
  /> -->

  <ul class="hidden md:flex flex-col justify-between">
    {#each list as item}
      <li>
        <section
          in:fade
          style={`${
            list.indexOf(item) % 2 === 0
              ? "translate: 20% 0;"
              : "translate: 230% 0;"
          }`}
        >
          {item}
        </section>
      </li>
    {/each}
  </ul>
  <ul class="flex md:hidden flex-col justify-between">
    {#each list as item}
      <li>
        <section in:fade>
          {item}
        </section>
      </li>
    {/each}
  </ul>
</div>

<style>
  #second-page {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.97),
        rgba(255, 255, 255, 0.97)
      ),
      #072125;
  }

  section {
    background: #f1eded;
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    scroll-snap-align: start;
    font-size: 1.2rem;
    width: 20rem;
    margin: 5rem;
    font-weight: 550;
    font-family: "Supreme";
  }
  li {
    height: 80vh;
    scroll-snap-stop: always;

    scroll-snap-align: start;
  }

  ul {
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    height: max-content;
    scroll-snap-points-y: repeat(100%);
    scroll-snap-type: mandatory;
    /* height: 100vh; */
    scroll-snap-destination: 0% 0%;
  }

  @media screen and (max-width: 768px) {
    section {
      background: #f1eded;
      border-radius: 16px;
      padding: 1rem;
      text-align: center;
      z-index: 10;
      font-size: 1rem;
      width: 10rem;
      margin: 2.5rem;
    }
  }
</style>
