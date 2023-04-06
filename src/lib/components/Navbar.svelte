<script lang="ts">
  import logo from "$lib/assets/ezinore-logo-white.png";
  import { page } from "$app/stores";

  function scrollToElement({ target }: { target: any }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<div
  class="bg-transparent w-full flex flex-row justify-center absolute p-5 pt-0"
>
  <nav
    class="bg-white text-white items-center w-[90%] bg-opacity-20 backdrop-blur-xl flex flex-row justify-between  absolute rounded-b-xl p-5"
  >
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element"><img src={logo} width="100" alt="" /> </a>
    {:else}
      <img src={logo} width="100" alt="" class="nav-element cursor-pointer" />
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

<style>
  .nav-element {
    font-weight: bold;
    margin-inline: 1em;
    transition: transform 0.05s ease-in;
  }

  .nav-element:hover {
    transform: scale(1.1, 1.1);
  }

  @media only screen and (max-width: 600px) {
    .nav-element {
      font-size: x-small;
      /* temporary */
    }
  }
</style>
