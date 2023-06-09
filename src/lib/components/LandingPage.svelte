<script lang="ts">
  import { onMount } from "svelte";
  import sparkoVId from "$lib/assets/landing-page-vid(1).mp4";
  let video: HTMLVideoElement;

  onMount(() => {
    video.play();
  });
</script>

<div class=" h-screen hidden md:flex">
  <div id="leftbox">
    <h1>Sustainable Energy Solutions for a Brighter Future</h1>
    <h2>
      A comprehensive solution to meet all your energy needs, including
      generation, storage, and management.
    </h2>

    <a href="/about" id="button"> Learn More </a>
  </div>

  <video bind:this={video} autoplay muted loop>
    <track kind="captions" />
    <source src={sparkoVId} type="video/mp4" />
  </video>
</div>

<div
  class="flex md:hidden bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex-col-reverse items-center z-0"
>
  <video bind:this={video} autoplay muted loop>
    <track kind="captions" />
    <source src={sparkoVId} type="video/mp4" />
  </video>

  <div class="overlay">
    <a href="/about" id="button"> Learn More </a>
    <h2>
      We at Ezinore provide solutions for the generation, storage, monitoring
      and intelligent control of clean energy.
    </h2>
  </div>
</div>

<style>
  #button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    color: black;
    border-radius: 100px;
    margin-block: 1.5rem;
    background-color: #f4b931;
    transition: 0.3s;
    font-family: "Supreme";
  }

  #button:hover {
    color: #f4b931;
    background-color: black;
    transition: 0.3s;
  }

  #leftbox {
    position: absolute;

    height: 100vh;
    width: 90vw;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 2rem;
    text-decoration-color: #020b16;
    background: linear-gradient(90deg, #020b16 55.45%, rgba(0, 0, 0, 0) 84.65%);
    /* background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.92) 55.45%,
      rgba(0, 0, 0, 0) 84.65%
    ); */
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    color: white;
    width: 50%;
    margin-top: 1.5rem;
    font-family: "Supreme";
  }

  h1 {
    margin-top: 5rem;
    text-align: left;
    font-weight: 800;
    font-size: 2.75rem;
    color: white;
    width: 50%;
    line-height: 3.375rem;
    font-family: "Aspekta";
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      text-align: center;
      width: 90%;
      margin: 0.2rem;
    }

    h2 {
      font-size: 1.5rem;
      text-align: center;
      width: 90%;
      margin: 0.2rem;
      line-height: 2rem;
    }
  }

  video {
    height: 100%;
    object-fit: cover;
    width: 100vw;
    overflow: hidden;
  }

  .overlay {
    position: absolute;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
