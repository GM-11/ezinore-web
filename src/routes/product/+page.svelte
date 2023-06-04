<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

  import sparko from "$lib/assets/sparko.png";
  import Form from "$lib/components/Form.svelte";
  // import { scrol } from '$app/stores';

  let video: HTMLVideoElement;

  let scrollDiv1: HTMLDivElement;
  let y1: number = 0;
  let curr1: HTMLDivElement;
  let curr1y: number = 10;

  onMount(() => {
    video.play();
  });
</script>

<div>
  <div class=" flex flex-col p-2 items-center justify-center bg-black main">
    <h1 class="text-center">Coming Soon</h1>
    <div class="md:hidden flex">
      <img class="main-img" src={sparko} width="200" alt="" />
    </div>
    <div class="md:flex hidden">
      <img class="main-img" src={sparko} width="250" alt="" />
    </div>
    <h3>
      An AI powered smart energy control system with integrated inverter system
      and in build liquid cooled energy storage system.
    </h3>
  </div>
  <div class="bg-black">
    <video bind:this={video} autoplay muted loop>
      <track kind="captions" />
      <source src="src/lib/assets/sparko-video.mp4" type="video/mp4" />
    </video>
  </div>

  <section>
    <p>
      Sparko tracks the amount of energy that solar panels produce and
      automatically adjusts the energy flow from grids and solar panels for
      maximum energy consumption. Any excess energy generated is stored in the
      inbuilt battery system further savings.
    </p>
  </section>

  <!-- <div
    bind:this={scrollDiv1}
    on:scroll={() => {
      y1 = scrollDiv1.scrollTop;
      curr1y += y1;
      console.log(curr1y)
    }}
    class="h-[400vh] bg-red-300"
  >
    <img
      bind:this={curr1}
      src={sparko}
      alt=""
      style={`translate: 40vw ${curr1y}rem; position:absolute; z-index:30; transform: rotate(${y1}deg)`}
      width="200"
    />
  </div> -->

  <Form />
</div>


<style>
  /* canvas {
    width: 50%;
    height: 50%;
    border: 2px solid red;
    translate: transform(-50%, -50%);
  } */

  .main {
    background-color: #0e0d0b;
  }

  .main-img {
    translate: 0 -5rem;
  }

  section {
    background: #f1eded;
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    position: absolute;
    translate: 0 -4rem;
    margin: 1rem;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    scale: 0.8;
  }
  h1 {
    font-style: normal;
    font-weight: 650;
    font-size: 8rem;
    width: 100%;

    color: #ddf6a2;
  }

  h3 {
    font-style: normal;
    font-weight: 650;
    font-size: 1.563rem;
    line-height: 2rem;
    text-align: center;
    color: #ddf6a2;
    width: 70%;
    translate: 0 -15rem;
    /* background-color: black; */
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    img {
      translate: 0 0;
    }
    p {
      width: 100%;
      font-size: 1rem;
      translate: 0 -10rem;
      line-height: 1.28rem;
    }

    .main {
      padding: 3rem;
    }
  }
</style>
