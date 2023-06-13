<script lang="ts">
  import { onMount } from "svelte";

  import sparko from "$lib/assets/sparko.png";
  import ScrollModal from "$lib/components/Modals/ScrollModal.svelte";
  import sparkoVideo from "$lib/assets/sparkoVideo.mp4";
  import moblieApp from "$lib/assets/mobile-app.png";
  // import sparko3d from "$lib/assets/sparko-3d.gltf";

  let video: HTMLVideoElement;

  onMount(() => {
    video.play();
  });

  let list1 = [
    "Utilizing artificial intelligence algorithms to analyse energy consumption patterns, weather patterns and solar irradiance to identify inefficiencies, and provide personalized recommendations for optimal energy usage.",
    "A scalable and modular design, allowing easy integration into existing energy infrastructure and future expansions.",
    "Inbuild battery system with integrated liquid cooling to increase battery life and efficiency.",
  ];
  let list2 = [
    "Provides you with real-time insights into your energy consumption, generation, and storage",
    "Offers detailed analytics and visualizations of your energy usage patterns. You can view historical data, analyse trends, and identify areas where you can optimize your energy consumption.",
    "Allows to monitor and manage energy storage effectively. You can check the state of charge, set charging and discharging schedules, and receive notifications about the performance of your energy storage system.",
    "Get notified about high energy usage, low battery levels, system malfunctions, or any other critical updates.",
    "The app offers easy access to our customer care and after sales services.",
  ];
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
      <source src={sparkoVideo} type="video/mp4" />
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

  <ScrollModal list={list1} imagePath={sparko} num={1} />
  <!-- <ScrollModal list={list1} modelPath={sparko3d} imagePath={sparko} /> -->
  <!-- <ScrollModal list={list2} modelPath={sparko3d} imagePath={moblieApp} /> -->
  <ScrollModal list={list2} imagePath={moblieApp} num={2} />

  <!-- <Form /> -->
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

    padding-inline: 10rem;
    padding-block: 2.5rem;
    text-align: center;
    font-family: "Aspekta";
    font-weight: 700;
    font-size: 21px;
    line-height: 28px;
    text-decoration-color: #0c373df1;
  }

  p{
    color: #0c373df1;
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
    font-family: "Aspekta";
    color: #ddf6a2;
  }

  h3 {
    font-family: "Supreme";
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
    h3 {
      width: 100%;
      font-size: 1rem;
      translate: 0 -10rem;
      line-height: 1.28rem;
    }

    .main {
      padding: 3rem;
    }

    section {
      padding: 1rem;
      font-size: smaller;
    }
  }
</style>
