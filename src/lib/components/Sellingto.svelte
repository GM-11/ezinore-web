<script>
  import residentialImage from "$lib/assets/residential-icon.png";
  import commercialImage from "$lib/assets/commercial-icon.png";
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

<style>
  h1 {
    text-align: left;
    font-weight: 800;
    font-size: 2.75rem;
    line-height: 54px;
  }
  img{
    width: 50%;
    min-width: 50%;
  }
  #sellingto {
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 24px;
    padding: 3rem;
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(240, 240, 240);
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    #sellingto {
      display: flex;
      flex-direction: column;
    }
  }
</style>
