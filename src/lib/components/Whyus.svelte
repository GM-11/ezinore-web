<script lang="ts">
  import k1 from "$lib/assets/k1.png";
  import k2 from "$lib/assets/k2.png";
  import k3 from "$lib/assets/k3.png";

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

<div class="main h-screen bg-white p-10">
  <h1>Why choose us?</h1>

  <div class="answers">
    <div class="ans">
      <img src={k1} alt="" />
      <p>
        With SPARKO, consumers can generate and store their own energy, making
        them less reliant on the grid and grants them greater control over their
        energy
      </p>
    </div>
    <div class="ans">
      <img src={k2} alt="" />
      <p>
        The unparalleled efficiency of the SPARKO allows the user to
        significantly reduce their electricity costs and carbon footprint
      </p>
    </div>
    <div class="ans">
      <img src={k3} alt="" />
      <p>
        Through the state of the art SPARKO companion app, the user is granted
        transparency to monitor their energy usage and savings in real-time, and
        make adjustments to optimize their system as needed
      </p>
    </div>
  </div>

  <div class="mx-20 bg-gray-400 h-[0.05em]" />

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

  .ans {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 20em;
    padding-bottom: 2rem;
    margin: 3rem  ;
  }

  .answers {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    color: #072125;
    font-size: 0.875rem;
  }
  h1 {
    color: black;
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: bold;
  }

  img {
    width: fit-content;
  }

  .answers {
    display: flex;
  }

  @media screen and (max-width: 786px) {
    .answers {
      flex-direction: column;
    }
    h1 {
      font-size: 2em;
    }
  }
</style>
