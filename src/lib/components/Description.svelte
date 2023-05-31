<script>
  import product from "$lib/assets/product.png";
</script>

<div id="main">
  <div class="col-span-1 flex justify-center items-center">
    <img width="400" src={product} alt="" />
  </div>
  <div class="col-span-1 content">
    <h1>What is the solution?</h1>
    <p>
      'Sparko' is an all-in-one solution to store and manage energy. It
      seamlessly integrates with solar panels and the grid, using artificial
      intelligence algorithms to analyze energy consumption patterns and weather
      conditions of the future to save your energy. It comes with an app that
      allows you to monitor and control the flow of energy.
    </p>
    <a href="/about" id="button"> Learn More </a>
  </div>
</div>

<style>
  h1 {
    font-style: normal;
    font-weight: 650;
    font-size: 44px;
    line-height: 54px;
    color: black;
    margin-block: 1rem;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.7rem;
    color: #072125cc;
    letter-spacing: -0.035em;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 3rem;
    margin: 1rem;
  }
  #main {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 100vh;
    background-color: white;
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

  @media screen and (max-width: 786px) {
    #main {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
