<script lang="ts">

import { onMount } from "svelte";


import x1 from "$lib/assets/x1.png";
  import AnswerModal from "./Modals/AnswerModal.svelte";

  let sliderWrapper: any;
  let currentIndex = 0;

  const handleScrollLeft = () => {
    currentIndex = Math.max(currentIndex - 2, 0);
    const currentImage = sliderWrapper.children[currentIndex];
    const scrollAmount =
      currentImage.offsetLeft -
      sliderWrapper.offsetLeft -
      currentImage.offsetWidth;
    sliderWrapper.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    console.log("fired");

    currentIndex = Math.min(
      currentIndex + 2,
      sliderWrapper.children.length - 1
    );
    const currentImage = sliderWrapper.children[currentIndex];
    const scrollAmount =
      currentImage.offsetLeft -
      sliderWrapper.offsetLeft +
      currentImage.offsetWidth;
    sliderWrapper.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  onMount(() => {
    sliderWrapper = document.querySelector(".slider-wrapper");
  });


    const list = [
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Dictum faucibus arcu at purus ipsum risus. Diam nibh faucibus elit massa vel pellentesque. In in lectus pellentesque iaculis convallis mauris. Dictum sem dolor ultricies eget sed. Eget rhoncus urna dui lectus. Mollis aenean interdum erat tristique. Malesuada sodales habitasse maecenas aliquam leo maecenas sagittis. Pellentesque quisque quisque lorem ut nibh diam congue et.",
      imgPath: x1,
    },
  ];
</script>


<div class="slider-root">
  <button class=" md:mx-5 text-gray-600 p-2" on:click={handleScrollLeft}
    >{"<"}</button
  >

  <div class="slider">
    <div class="slider-wrapper">
      {#each list as val}
        <AnswerModal
          title={val.title}
          imgPath={val.imgPath}
          content={val.content}
        />
      {/each}
    </div>
  </div>
  <button class=" md:mx-5 text-gray-600 p-2" on:click={handleScrollRight}
    >{">"}</button
  >
</div>

<style>
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
  }
  .slider div {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  .slider-root {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
