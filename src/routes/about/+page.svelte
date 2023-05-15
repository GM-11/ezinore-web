<script lang="ts">
  import k1 from "$lib/assets/k1.png";
  import k2 from "$lib/assets/k2.png";
  import k3 from "$lib/assets/k3.png";

  import nirmal from "$lib/assets/team/nirmal.png";
  import gopal from "$lib/assets/team/gopal.png";
  import ritwij from "$lib/assets/team/ritwij.png";
  import rohit from "$lib/assets/team/rohit.png";

  let selected: number = 0;

  function handleNext() {
    selected++;
  }
  function handlePrev() {
    selected--;
  }

  const team = [
    { img: nirmal, name: "Nirmal Yadav" },
    { img: ritwij, name: "Ritwij Kashyap" },
    { img: gopal, name: "Gopal Mathur" },
    { img: rohit, name: "Rohit Gorai" },
  ];
</script>

<div
  class={`bg-[url($lib/assets/header-img-2.png)] h-screen bg-cover bg-bottom `}
/>

<div class="p-10">
  <h1>Aim</h1>
  <p class="aim-para">
    Our goal is to revolutionise today's power grid system with the help of an
    all-in-one sustainable solution that seamlessly embeds itself into the
    existing infrastructure.
  </p>

  <div class="flex md:flex-row flex-col justify-evenly">
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

    <div>
      <button class="text-2xl" disabled={selected == 0} on:click={handlePrev}
        >{"<"}</button
      >
      <button
        class="text-2xl"
        disabled={selected == team.length - 1}
        on:click={handleNext}>{">"}</button
      >
    </div>
  </div>

  <ul class="slider">
    {#each team as member}
      <li class="px-10">
        {#if selected == team.indexOf(member)}
          <img src={member.img} alt="" />
        {:else}
          <img src={member.img} alt="" />
        {/if}
        <h2>{member.name}</h2>
      </li>
    {/each}
  </ul>
</div>

<style>
  .slider ::-webkit-scrollbar {
    display: none;
  }

  img {
    min-width: 15rem;
    padding: 1rem;
    transition: transform 0.3s ease;
  }

  .slider {
    height: 30rem;
    background-color: cornsilk;
    align-items: center;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-inline: 2.5rem;
    overflow-y: visible;
  }
  h1 {
    color: black;
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: bold;
  }

  .ans {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 20em;
    padding-bottom: 2rem;
  }

  .aim-para {
    margin-left: 1rem;
    margin-right: 20rem;
    color: #072125;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
  }
</style>
