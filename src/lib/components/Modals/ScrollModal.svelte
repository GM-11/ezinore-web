<script lang="ts">
  export let imagePath: string;
  export let num: number;
  export let list: string[];

  function scrolltoelement(id: string) {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior: "smooth" });
  }
</script>

<div class=" h-screen md:grid md:grid-cols-2 m-2 hidden ">
  {#if num === 1}
    <div class="col-span-1 md:flex justify-center items-center ">
      <img src={imagePath} width="250" alt="" />
    </div>
  {/if}
  <div
    class={`col-span-1 flex flex-col justify-center items-start`}
  >
    <div class=" scrollable-content">
      {#each list as item}
        <p id={list.indexOf(item).toString()}>{item}</p>
      {/each} 
    </div>
  </div>
  {#if num === 2}
    <div class="col-span-1 md:flex justify-center items-center ">
      <img src={imagePath} width="300" alt="" />
    </div>
  {/if}
</div>
<div class=" h-full grid md:grid-cols-1 m-2 md:hidden ">
    <div class="col-span-1 md:flex justify-center items-center p-10 mt-12 ">
      <img src={imagePath} width="200" alt="" />
    </div>
  <div
    class={`col-span-1 flex flex-col justify-center items-start`}
  >
    <div class=" scrollable-content">
      {#each list as item}
        <p id={list.indexOf(item).toString()}>{item}</p>
      {/each} 
    </div>
  </div>
  
</div>

<style>
  .scrollable-content::-webkit-scrollbar-thumb {
    display: none;
  }

  /* Optional: Customize the scrollbar track */
  .scrollable-content::-webkit-scrollbar-track {
    display: none;
    width: 0;
  }
  .scrollable-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.92);
  }
  p {
    margin-block: 1rem;
    font-family: "Supreme";
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin-inline: 5rem;
    color: #b8c0c2f1;
    letter-spacing: -0.035em;
    transition: 0.1s ease-in-out;
  }



  p:hover{
    color: #0c373df1;
    transition: 0.1s ease-in-out;
  }
</style>
