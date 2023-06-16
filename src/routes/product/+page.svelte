<script lang="ts">
  import { onMount } from "svelte";

  import sparko from "$lib/assets/sparko.png";
  import ScrollModal from "$lib/components/Modals/ScrollModal.svelte";
  import sparkoVideo from "$lib/assets/sparkoVid.mp4";
  import moblieApp from "$lib/assets/mobile-app.png";

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
  <div class=" flex flex-col items-center justify-center main">
    <h1 class="text-center">Coming Soon</h1>
    <div class="md:hidden flex">
      <img
        class="main-img"
        src={sparko}
        width="170"
        alt=""
        style="margin-top: 5rem;"
      />
    </div>
    <div class="md:flex hidden">
      <img class="main-img" src={sparko} width="250" alt="" />
    </div>
    <h3>
      An AI powered smart energy control system with integrated inverter system
      and in build liquid cooled energy storage system.
    </h3>
  </div>
  <div class="bg-white">
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

  <ScrollModal list={list1} imagePath={sparko} num={1} />
  <ScrollModal list={list2} imagePath={moblieApp} num={2} />
</div>

<svelte:head>
  <title>Our Products</title>
</svelte:head>

<style>
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

  p {
    color: #0c373df1;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    scale: 0.8;
  }
  h1 {
    margin-top: 5rem;
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
    position: absolute;
    width: 60%;
    translate: 0 15rem;
    /* background-co0 lor: black; */
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
      width: 90%;
      font-size: 1rem;
      translate: 0 10rem;
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
