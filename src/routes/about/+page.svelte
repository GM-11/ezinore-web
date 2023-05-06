<script lang="ts">
  import k1 from "$lib/assets/k1.png";
  import k2 from "$lib/assets/k2.png";
  import k3 from "$lib/assets/k3.png";
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
</div>

<style>
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
