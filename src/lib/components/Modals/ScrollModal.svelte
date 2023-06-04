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
      window.addEventListener("scroll", handleScroll);
    });

    onDestroy(() => {
      scrollPosition = 0;
      window.removeEventListener("scroll", handleScroll);
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

<div id="second-page" class="h-full p-3">
  <img
    transition:fade
    class={"image"}
    style={`transform: rotateY(${rotation}deg); position:sticky;top: 20%; left:40%;padding:1rem;`}
    src={imagePath}
    width="270"
    alt=""
  />

  <ul class="hidden md:flex flex-col justify-between">
    {#each list as item}
      <li>
        <section
          in:fade
          style={`${list.indexOf(item) % 2 === 0 ? "" : "translate: 250% 0;"}`}
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
  /* img {
    width: 200px;
    height: 200px;
  } */

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

    /* position: absolute; */

    translate: 0 -4rem;
    width: 20rem;
    margin: 5rem;
  }

  @media screen and (max-width: 768px) {
    section {
      background: #f1eded;
      border-radius: 16px;
      padding: 1rem;
      text-align: center;

      font-size: 1rem;
      translate: 0 -4rem;
      width: 10rem;
      margin: 2.5rem;
    }
  }
</style>
