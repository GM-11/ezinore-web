<script lang="ts">
  import logo from "$lib/assets/ezinore-logo-white.png";
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

<div
  class="bg-transparent w-full md:flex hidden flex-row justify-center absolute p-5 pt-0"
>
  <nav
    class="bg-white text-white items-center w-[90%] bg-opacity-20 backdrop-blur-xl md:flex flex-row justify-between absolute rounded-b-xl p-5"
  >
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element"><img src={logo} width="100" alt="" /> </a>
    {:else}
      <a href="#home" on:click={scrollToElement}>
        <img src={logo} width="100" alt="" class="nav-element cursor-pointer" />
      </a>
    {/if}

    <div class="flex flex-row">
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
      <a href="/calculate" class="nav-element">Calculate</a>
      {#if $page.url.pathname !== "/"}
        <a href="/contact" class="nav-element">Contact Us</a>
      {:else}
        <a
          href="#joinus"
          class="nav-element"
          on:click|preventDefault={scrollToElement}>Contact Us</a
        >
      {/if}
    </div>
  </nav>
</div>

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
      }}>Menu</button
    >

    <div class="nav-bar" class:open={menuOpen}>
      {#if stuffAppear === true}
        <button
          class="my-10"
          on:click={() => {
            stuffAppear = false;
            menuOpen = false;
          }}
        >
          Close
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
          href="/calculate"
          class="nav-element-bar">Calculate</a
        >
        {#if $page.url.pathname !== "/"}
          <a
            on:click={() => {
              stuffAppear = false;
              menuOpen = false;
            }}
            href="/contact"
            class="nav-element-bar">Contact Us</a
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
    font-weight: bold;
    margin-inline: 1em;
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
    height: 100vh;
    border-top-left-radius: 0.75rem /* 12px */;
    border-bottom-left-radius: 0.75rem;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(24px);
  }

  .nav-bar.open {
    width: 40%;
  }

  .nav-element-bar {
    font-weight: bold;
    margin-inline: 1em;
    transition: transform 0.05s ease-in;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
