<script lang="ts">
  import { onMount, tick, onDestroy } from "svelte";
  import { afterUpdate } from "svelte";
  import { fade } from "svelte/transition";

  import { browser } from "$app/environment";

  export let imagePath: string;
  export let list: string[];

  $: rotation = 0;
  $: scrollPosition = 0;

  if (browser) {
    onMount(() => {
    //   window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    });

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
