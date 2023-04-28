<script lang="ts">
  import logo from "$lib/assets/ezinore-logo-coloured.png";
  import { page } from "$app/stores";

  import Icon from "@iconify/svelte";

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
  class="bg-white text-black items-center absolute md:flex flex-row justify-between w-full p-5"
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

<div
  class="md:hidden bg-transparent w-full flex flex-row justify-center absolute p-5 pt-0"
>
  <div
    class="bg-white items-center justify-between w-full bg-opacity-20 backdrop-blur-xl flex flex-row absolute p-5"
  >
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element"><img src={logo} width="100" alt="" /> </a>
    {:else}
      <a href="#home" on:click={scrollToElement}>
        <img src={logo} width="100" alt="" class="nav-element cursor-pointer" />
      </a>
    {/if}

    <button
      class="text-white"
      on:click={() => {
        menuOpen = true;

        setTimeout(() => {
          stuffAppear = true;
        }, 300);
      }}
      ><Icon icon="material-symbols:menu" />
    </button>

    <div class="nav-bar" class:open={menuOpen}>
      {#if stuffAppear === true}
        <button
          class="my-10"
          on:click={() => {
            stuffAppear = false;
            menuOpen = false;
          }}
        >
          <Icon icon="material-symbols:close" />
        </button>

        {#if $page.url.pathname !== "/"}
          <a
            on:click={() => {
              stuffAppear = false;
              menuOpen = false;
            }}
            href="/"
            class="nav-element-bar">Home</a
          >
        {:else}
          <a
            href="#home"
            class="nav-element-bar"
            on:click|preventDefault={scrollToElement}>Home</a
          >
        {/if}
        <a
          on:click={() => {
            stuffAppear = false;
            menuOpen = false;
          }}
          href="/about"
          class="nav-element-bar">About</a
        >
        <a
          on:click={() => {
            stuffAppear = false;
            menuOpen = false;
          }}
          href="/product"
          class="nav-element-bar">Product</a
        >
        {#if $page.url.pathname !== "/"}
          <a
            on:click={() => {
              stuffAppear = false;
              menuOpen = false;
            }}
            href="/contact"
            class="contact">Contact Us</a
          >
        {:else}
          <a
            href="#joinus"
            class="nav-element-bar"
            on:click|preventDefault={scrollToElement}>Contact Us</a
          >
        {/if}
      {/if}
    </div>
  </div>
</div>

<style>
  .nav-element {
    font-weight: 900;
    margin-inline: 2rem;

    transition: transform 0.05s ease-in;
  }

  .nav-element:hover {
    transform: scale(1.1, 1.1);
  }

  .nav-bar {
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
  }

  .nav-bar.open {
    width: 40%;
  }

  .nav-element-bar {
    font-weight: bold;
    margin-inline: 1em;
    transition: transform 0.05s ease-in;
    margin-top: 1em;
  }

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
