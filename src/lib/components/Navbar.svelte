<script lang="ts">
  import logo from "$lib/assets/ezinore-logo-coloured.png";
  import { page } from "$app/stores";

  let menuOpen = false;
  let stuffAppear = false;

  function scrollToElement({ target }: { target: any }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    stuffAppear = false;
    menuOpen = false;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<nav
  class="bg-white hidden text-black items-center md:flex flex-row justify-between w-full p-5"
>
  {#if $page.url.pathname !== "/"}
    <a href="/" class="nav-element"><img src={logo} width="100" alt="" /> </a>
  {:else}
    <a href="#home" on:click={scrollToElement}>
      <img src={logo} width="130" alt="" class="nav-element cursor-pointer" />
    </a>
  {/if}

  <div class="flex flex-row items-center">
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element">Home</a>
    {:else}
      <a
        href="#home"
        class="nav-element"
        on:click|preventDefault={scrollToElement}>Home</a
      >
    {/if}
    <a href="/about" class="nav-element">About</a>
    <a href="/product" class="nav-element">Product</a>
    <!-- {#if $page.url.pathname !== "/"} -->
      <a href="/contact" class="contact">Contact Us</a>
    <!-- {:else}
      <a
        href="#joinus"
        class="contact"
        on:click|preventDefault={scrollToElement}>Contact Us</a
      >
    {/if} -->
  </div>
</nav>


<style>
  .nav-element {
    font-weight: 900;
    margin-inline: 2rem;

    transition: transform 0.05s ease-in;
  }

  .nav-element:hover {
    transform: scale(1.1, 1.1);
  }

  /* .nav-bar {
    width: 0px;
    top: 0;
    right: 0;
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    position: relative;
    height: 100vh;
  } */

  /* .nav-bar.open {
    width: 40%;
  }

  .nav-element-bar {
    font-weight: bold;
    margin-inline: 1em;
    transition: transform 0.05s ease-in;
    margin-top: 1em;
  } */

  .contact {
    margin-inline: 2rem;
    border-radius: 30px;
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    justify-content: center;
    display: flex;
    background-color: #F4B931;;
  }
</style>
