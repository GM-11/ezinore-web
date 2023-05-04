<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  // const path = $page;

  // if (path === "/") console.log(true);
</script>

<div class="main">
  <!-- {#if $page.url.pathname !== "/"} -->
    <Navbar/>
  <!-- {/if} -->
  <slot />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  .main {
    font-family: "Poppins", sans-serif;
    src: url('/fonts/Aspekta-100.ttf');
  }
</style>
