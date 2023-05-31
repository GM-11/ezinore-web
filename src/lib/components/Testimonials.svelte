<script lang="ts">
  import { onMount } from "svelte";

  import residentialImage from "$lib/assets/residential-icon.png";
  import commercialImage from "$lib/assets/commercial-icon.png";

  import x1 from "$lib/assets/x1.png";
  import AnswerModal from "./Modals/AnswerModal.svelte";

  import leftArrow from "$lib/assets/left-arrow.png";
  import rightArrow from "$lib/assets/right-arrow.png";

  let sliderWrapper: any;
  let currentIndex = 0;

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      currentIndex--;
      const element = document.getElementById(`item-${currentIndex}`);
      element!.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < list.length - 1) {
      currentIndex++;
      const element = document.getElementById(`item-${currentIndex}`);
      element!.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  onMount(() => {
    sliderWrapper = document.querySelector(".slider-wrapper");
  });

  const list = [
    {
      index: 0,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      index: 1,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      index: 2,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      index: 3,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      index: 4,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      index: 5,
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
  ];
</script>

<div id="sellingto">
  <div>
    <h1>Who are we selling to?</h1>
    <h2>
      We are catering to both the sectors and provide customized solutions to
      everyone.
    </h2>
  </div>
  <div class="flex flex-row">
    <div class="flex flex-col items-center justify-center">
      <img src={residentialImage} alt="" />
      <h2>Residential</h2>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img src={commercialImage} alt="" />
      <h2>Commercial</h2>
    </div>
  </div>
</div>

<div id="slider-root">
  <div class="flex flex-row justify-between">
    <h1>Testimonials</h1>
    <div class="flex flex-row justify-end w-[30%]">
      <button on:click={handleScrollLeft}>
        <img class="handleScroll" src={leftArrow} alt="" />
      </button>
      <button on:click={handleScrollRight}>
        <img class="handleScroll" src={rightArrow} alt="" />
      </button>
    </div>
  </div>

  <div>
    <div class="slider">
      <div class="slider-wrapper">
        {#each list as val}
          <AnswerModal
            title={val.title}
            imgPath={val.imgPath}
            content={val.content}
            index={val.index}
          />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  h2 {
    font-style: normal;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  .handleScroll {
    display: flex;
    justify-self: center;
    align-items: center;
    border-radius: 150px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    margin: 0 0.5rem;
    transition: 0.3s;
  }

  .slider-wrapper {
    display: flex;
    flex-direction: row;
  }
  .slider {
    display: flex;
    overflow-x: scroll;
    flex-direction: row;
    width: 100%;
    margin: 3rem 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: scroll;
  }
  .slider div {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  .handleScroll:hover {
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.7);
    transition: 0.3s;
  }

  #slider-root {
    margin: 3rem;
  }

  img {
    width: 50%;
    min-width: 50%;
  }

  h1 {
    text-align: left;
    font-weight: 800;
    font-size: 2.75rem;
    line-height: 54px;
  }

  #sellingto {
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 24px;
    padding: 3rem;
    margin: 2 rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(240, 240, 240);
  }

  @media (max-width: 768px) {
    #sellingto {
      display: flex;
      flex-direction: column;
    }
  }
</style>
