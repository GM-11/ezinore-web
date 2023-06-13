<script>
  import residentialImage from "$lib/assets/residential-icon.png";
  import commercialImage from "$lib/assets/commercial-icon.png";
</script>

<div id="sellingto">
  <div>
    <h1>Who are we selling to?</h1>
    <h3 class="md:flex hidden">
      We are catering to both the sectors and provide customized solutions to
      everyone.
    </h3>
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
    font-weight: 600;
    font-size: 2.75rem;
    font-family: 'Aspekta';

  }
  img{
    width: 60%;
    min-width: 60%;
    background-color: white;
    border-radius: 100%;
    padding: 1rem;
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

  h3 {
    font-style: normal;
    font-weight: 500;
    margin-top: 1.5rem;
    font-family: 'Supreme';
  }
  h2 {
    font-style: normal;
    font-weight: 800;
    margin-top: 1.5rem;
    font-family: 'Aspekta';
  }

  @media (max-width: 768px) {
    #sellingto {
      display: flex;
      flex-direction: column;
    }

    h1{
      font-size: 1.3rem;
      text-align: center;
    }

    h2{
      font-size: 1rem;
      text-align: center;
    }

    img{
      widows: 130%;
      min-width: 130%;
      margin-inline: 1rem;
    }

  }
</style>
