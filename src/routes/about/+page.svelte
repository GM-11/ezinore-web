<script lang="ts">
  import k1 from "$lib/assets/aim/a1.png";
  import k2 from "$lib/assets/aim/a2.png";
  import k3 from "$lib/assets/aim/a3.png";

  import gopal from "$lib/assets/team/gopal.png";
  import rohit from "$lib/assets/team/rohit.png";
  import saumya from "$lib/assets/team/saumya.jpg";
  import anshu from "$lib/assets/team/anshu.jpg";
  import keshav from "$lib/assets/team/keshav.jpg";
  import nirmal from "$lib/assets/team/nirmal.png";
  import nirmal1 from "$lib/assets/team/1.png";

  import rightArrow from "$lib/assets/right-arrow.png";
  import leftArrow from "$lib/assets/left-arrow.png";
  import Testimonials from "$lib/components/Testimonials.svelte";

  let selected: number = 0;

  function handleNext() {
    if (selected < team.length - 1) {
      selected++;
      scrollIntoView();
    }
  }
  function handlePrev() {
    if (selected > 0) {
      selected--;
      scrollIntoView();
    }
  }

  function scrollIntoView() {
    const element = document.getElementById(`${selected}`);
    element!.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  const team = [
    { img: nirmal1, name: "Nirmal Yadav", position: "Founder/CEO", id: 0 },
    { img: gopal, name: "Gopal Mathur", position: "Full Stack Developer", id: 2 },
    { img: rohit, name: "Rohit Gorai", position: "Design Head", id: 3 },
    { img: saumya, name: "Saumya Garg", position: "UI/UX Designer", id: 1 },
    { img: anshu, name: "Anshu", position: "3D Designer", id: 4 },
    { img: keshav, name: "Keshav Singhal", position: "AI/ML Engineer", id: 5 },
  ];
</script>

<div class=" hidden md:grid grid-cols-1">
  <!-- <div id="leftbox">
    <h1>Sustainable Energy Solutions for a Brighter Future</h1>
    <h5>
      A comprehensive solution to meet all your energy needs, including
      generation, storage, and management.
    </h5>

    <a href="/about" id="button"> Learn More </a>
  </div> -->
  <div
    class={`bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex flex-col-reverse items-center z-0`}
  />
</div>

<div
  class="flex md:hidden bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex-col-reverse items-center z-0"
>
<a href="/about" id="button"> Learn More </a>
<h6>
  We at Ezinore provide solutions for the generation, storage, monitoring and intelligent control of clean energy.</h6>
</div>

<div class="py-10 px-14">
  <h2>Aim</h2>
  <p class="aim-para">
    Our goal is to revolutionise today's power grid system with the help of an
    all-in-one sustainable solution that seamlessly embeds itself into the
    existing infrastructure.
  </p>

  <div class="flex md:flex-row flex-col mt-10 justify-between">
    <div class="ans">
      <img src={k1} alt="" />
      <p>
        Sustainable electricity with minimal environmental impact, powered by
        renewable energy sources.
      </p>
    </div>
    <div class="ans">
      <img src={k2} alt="" />
      <p>
        A future where every building is a net-zero energy building, enabled by
        renewable energy and smart grid technologies optimized by AI.
      </p>
    </div>
    <div class="ans">
      <img src={k3} alt="" />
      <p>
        An efficient and resilient electricity grid, powered by sustainable
        energy and fine-tuned to minimize waste and emissions.
      </p>
    </div>
  </div>

  <div class="flex flex-row justify-between">
    <h2>Team</h2>

    <div class="md:flex hidden">
      <button class="text-2xl" disabled={selected == 0} on:click={handlePrev}>
        <img class="handleScroll" alt="" src={leftArrow} />
      </button>
      <button
        class="text-2xl"
        disabled={selected == team.length - 1}
        on:click={handleNext}
      >
        <img class="handleScroll" alt="" src={rightArrow} />
      </button>
    </div>
  </div>

  <ul class="slider h-full">
    {#each team as member}
      <li
        id={`${member.id}`}
        class=" element"
        style={`background-image: url('${member.img}'); background-size: cover; background-position: center;`}
      >
        <div class=" w-full p-3 bg-white">
          <h3>{member.name}</h3>
          <h4>{member.position}</h4>
        </div>
      </li>
    {/each}
  </ul>
</div>

<!-- <Testimonials /> -->

<style>
  li {
    height: 30rem;
    min-width: 20rem;
    margin: 1rem;
    display: flex;
    flex-direction: column-reverse;
    transition: transform 0.3s ease;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: 0.3s;
  }
  #button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    color: black;
    border-radius: 100px;
    margin-block: 1.5rem;
    background-color: #f4b931;
    transition: 0.3s;
  }

  #button:hover {
    color: #f4b931;
    background-color: black;
    transition: 0.3s;
  }

  .handleScroll {
    display: flex;
    justify-self: center;
    align-items: center;
    border-radius: 150px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    margin: 0 0.5rem;
    transition: 0.3s;
    width: 3rem;
  }

  #leftbox {
    width: 90vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 2rem;
    background:  transparent;
    /* background: linear-gradient(90deg, #020b16 55.45%, rgba(0, 0, 0, 0) 84.65%); */
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    font-family:'Aspekta';
  }
  h6 {
    font-style: normal;
    font-weight: 500;
    text-align: center;
    font-size: 1.5rem;
    color: white;
    font-family:'Supreme';
  }
  h5 {
    font-style: normal;
    font-weight: 500;
    color: white;
    width: 50%;
    margin-top: 1.5rem;
    font-family:'Supreme';
  }

  h1 {
    margin-top: 5rem;
    text-align: left;
    font-weight: 800;
    font-size: 2.75rem;
    color: white;
    width: 50%;
    line-height: 3.375rem;
    font-family: 'Aspekta';
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 21px;
    color: #072125cc;
    font-family:'Supreme';
  }

  h3 {
    font-style: normal;
    font-weight: 650;
    font-size: 1.6rem;
    padding-block: 0.5rem;
    line-height: 32px;
    font-family:'Supreme';
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 2rem;
      text-align: center;
    }
    .aim-para {
      width: 100%;
      margin-bottom: 1rem;
    }
    .ans {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20em;
    padding-bottom: 2rem;
  }

    p{
      text-align: center;
    }
    img{
      width: 30%;
      margin: 1rem;
    }
  }

  p {
    text-align: flex-start;
    color: #072125cc;
  }

  .slider {
    scrollbar-width: 0em;
    scrollbar-color: transparent transparent;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    height: 35rem;
  }

  .slider::-webkit-scrollbar {
    width: 0em;
  }

  .slider::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .ans {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20em;
    padding-bottom: 2rem;
  }

  .aim-para {
    margin-right: 20rem;
    margin-top: 2rem;
    color: #072125;
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
</style>
