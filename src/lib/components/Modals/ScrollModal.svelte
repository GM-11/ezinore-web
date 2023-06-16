<script lang="ts">
  export let list: string[];
  export let num: number;
  export let imagePath: string;
  export let heading: string;

  import rightArrow from "$lib/assets/right-arrow.png";
  import leftArrow from "$lib/assets/left-arrow.png";

  let selected: number = 0;

  function handleNext() {
    if (selected < list.length - 1) {
      selected++;
      scrolltoView();
    } else {
      selected = 0;
      scrolltoView();
    }
  }
  function handlePrev() {
    if (selected > 0) {
      selected--;
      scrolltoView();
    } else {
      selected = list.length - 1;
      scrolltoView();
    }
  }

  function scrolltoView() {
    const element =
      num === 1
        ? document.getElementById(`id1-${selected}`)
        : document.getElementById(`id2-${selected}`);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }
</script>

<h1>{heading}</h1>

<div class="main">
  <div class="flex md:hidden justify-center items-center">
    <img width="150" src={imagePath} alt="" />
  </div>
  <div class="md:flex hidden justify-center items-center">
    <img width="250" src={imagePath} alt="" />
  </div>
  <div>
    <ul>
      {#each list as item}
        {#if num === 1}
          <li
            id={`id1-${list.indexOf(item)}`}
            style={`${
              selected === list.indexOf(item)
                ? "color:rgba(7,33,37,0.75);"
                : "color:rgba(7,33,37,0.2);"
            } transition:0.5s;`}
          >
            {item}
          </li>
        {/if}
        {#if num === 2}
          <li
            id={`id2-${list.indexOf(item)}`}
            style={`${
              selected === list.indexOf(item)
                ? "color:rgba(7,33,37,0.75);"
                : "color:rgba(7,33,37,0.2);"
            } transition:0.5s;`}
          >
            {item}
          </li>
        {/if}
      {/each}
    </ul>
    <div class="md:flex hidden">
      <button class="text-2xl" on:click={handlePrev}>
        <img width="75" class="handleScroll" alt="" src={leftArrow} />
      </button>
      <button class="text-2xl" on:click={handleNext}>
        <img width="75" class="handleScroll" alt="" src={rightArrow} />
      </button>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: "Supreme";
    src: url("/fonts/Supreme-Variable.ttf");
  }
  @font-face {
    font-family: "Aspekta";
    src: url("/fonts/Aspekta-500.ttf");
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  ul {
    height: 50vh;
    overflow-y: scroll;
    padding: 2rem;
  }

  ul::-webkit-scrollbar {
    width: 0;
  }

  li {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    margin: 3rem 0;
    letter-spacing: -0.035em;
  }

  h1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: rgba(7, 33, 37, 0.75);
    width: 80%;
    margin: 5rem auto;
    text-align: center;
  }


  @media (max-width: 768px) {
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    ul {
      height: 50vh;
      overflow-y: scroll;
      padding: 2rem;
    }

    h1 {
      font-size: 1rem;
      line-height: 1.3rem;
      color: rgba(7, 33, 37, 0.75);
      width: 80%;
      margin: 5rem auto;
      text-align: center;
    }
  }

</style>
