<script lang="ts">
  import logo from "$lib/assets/ezinore-logo-coloured.png";
  import { page } from "$app/stores";

  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";

  let isOpen: boolean = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<nav
  class=" hidden z-20 text-black items-center md:flex flex-row absolute justify-between w-full md:p-5 p-2"
>
  {#if $page.url.pathname !== "/"}
    <a href="/" class="nav-element"><img src={logo} width="150" alt="" /> </a>
  {:else}
    <a href="#home">
      <img src={logo} width="150" alt="" class="nav-element cursor-pointer" />
    </a>
  {/if}

  <div class="flex flex-row items-center">
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element">Home</a>
    {:else}
      <a href="#home" class="nav-element">Home</a>
    {/if}
    <a href="/about" class="nav-element">About</a>
    <a href="/product" class="nav-element">Product</a>
    <a href="/contact" class="contact">Contact Us</a>
  </div>
</nav>

<nav class="flex md:hidden w-full bg-white z-20 absolute p-2 justify-between">
  {#if $page.url.pathname !== "/"}
    <a href="/" class=" m-0"><img src={logo} width="150" alt="" /> </a>
  {:else}
    <a href="#home">
      <img src={logo} width="150" alt="" class=" cursor-pointer m-0" />
    </a>
  {/if}

  <button on:click={() => toggleSidebar()}>
    <Icon icon="charm:menu-hamburger" color="#12a2ad" width="40" />
  </button>

  {#if isOpen}
    <div
      class="flex flex-col items-center justify-start w-[50%] h-screen bg-white absolute top-0 right-0 z-10"
      in:slide={{ axis: "x" , duration:400 }}
      out:slide={{ axis: "x" , duration:400 }}
    >
      <button class="nav-element-sidebar" on:click={() => toggleSidebar()}
        ><Icon icon="akar-icons:cross" color="#12a2ad" width="40" />
      </button>
      <a on:click={()=>toggleSidebar()} href="/" class="nav-element-sidebar">Home</a>
      <a on:click={()=>toggleSidebar()} href="/about" class="nav-element-sidebar">About</a>
      <a on:click={()=>toggleSidebar()} href="/product" class="nav-element-sidebar">Product</a>
      <a on:click={()=>toggleSidebar()} href="/contact" class="contact">Contact Us</a>
    </div>
  {/if}
</nav>

<style>
  .nav-element {
    font-weight: 900;
    margin-inline: 2rem;

    transition: transform 0.05s ease-in;
  }

  .nav-element-sidebar{
    font-weight: 900;
    margin: 1rem 2rem 1rem 2rem;
    text-align: flex-start;
    transition: transform 0.05s ease-in;
  }

  .nav-element:hover {
    transform: scale(1.1, 1.1);
  }

  nav {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.97),
        rgba(255, 255, 255, 0.97)
      ),
      #072125;
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
    background-color: #f4b931;
  }
</style>
