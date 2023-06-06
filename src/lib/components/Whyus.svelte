<script lang="ts">
  import ans1 from "$lib/assets/ans/ans1.png";
  import ans2 from "$lib/assets/ans/ans2.png";
  import ans3 from "$lib/assets/ans/ans3.png";
  import ans4 from "$lib/assets/ans/ans4.png";
  import ans5 from "$lib/assets/ans/ans5.png";
  import ans6 from "$lib/assets/ans/ans6.png";
</script>

<div class="main h-full bg-white p-10">
  <h1>Why choose us?</h1>

  <div class="answers">
    <div class="ans">
      <img src={ans1} alt="" />
      <h2>All in one solution</h2>
      <p>
        A single platform for generation, storage and management of the energy.
      </p>
    </div>
    <div class="ans">
      <img src={ans2} alt="" />
      <h2>Realtime monitoring and Analytics</h2>
      <p>
        Customer satisfaction is at the core of everything we do. We are
        committed to providing exceptional service and building long-term
        relationships with our clients.
      </p>
    </div>
    <div class="ans">
      <img src={ans3} alt="" />
      <h2>Quality and realiability</h2>
      <p>
        Partnered with reputable suppliers and manufacturers to get High-quality
        components.
      </p>
    </div>
    <div class="ans">
      <img src={ans4} alt="" />
      <h2>End to end solution</h2>
      <p>
        Handle every aspect of your solar project, from initial project planning
        and engineering design to procurement, installation, and ongoing
        maintenance.
      </p>
    </div>
    <div class="ans">
      <img src={ans5} alt="" />
      <h2>Extra savings</h2>
      <p>30% to 40% more saving from regular solar inverter systems.</p>
    </div>
    <div class="ans">
      <img src={ans6} alt="" />
      <h2>Experience and support</h2>
      <p>
        Customer satisfaction is at the core of everything we do. We are
        committed to providing exceptional service and building long-term
        relationships with our clients.
      </p>
    </div>
  </div>
</div>

<style>
  h2 {
    font-weight: 650;
    margin: 1rem 1rem;
    font-family: 'Aspekta';
    font-size: 1.5rem;
  }

  .ans {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: center;
    text-align: center;
  }

  .answers {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: minmax(100px, auto);
  }
  p {
    color: #072125;
    font-size: 0.875rem;
    font-family: 'Supreme';
    font-weight: 550;
  }
  h1 {
    color: black;
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: bold;
    font-family: 'Aspekta';
  }

  img {
    width: fit-content;
  }

  @media screen and  (max-width: 768px) {
    .answers {
      display: flex;
      flex-direction: column;
    }

    h1{
      font-size: 2rem;
      text-align: center;
    }

    h2{
      font-size: 1.2rem;
    }
  }
</style>
