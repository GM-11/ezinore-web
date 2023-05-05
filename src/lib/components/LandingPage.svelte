<script>
  import commercialImage from "$lib/assets/commercial-icon.png";
  import residentialImage from "$lib/assets/residential-icon.png";
</script>

<div>
  <div
    class={`bg-[url($lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex flex-col-reverse items-center `}
  >
    <div
      class=" text-center flex flex-col justify-between items-center text-xl md:text-2xl w-full md:w-[60%] p-5 text-white"
    >
      <p>
        We at Ezinore provide solutions for the generation, storage, monitoring
        and intelligent control of clean energy.
      </p>

      <a
        href="/about"
        class="bg-primary-yellow text-black hover:text-whiteF mt-5 px-7 py-4 rounded-full hover:text-white hover:bg-black ease-in duration-100 text-sm"
      >
        Learn More
      </a>
    </div>
  </div>
  <div class="p-10">
    <h1>
      Who are we selling to?
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 flex justify-center flex-col items-center">
        <img src={residentialImage} alt="" />
        <h2 class="font-semibold text-2xl">Residential</h2>
      </div>
      <div class="col-span-1 flex justify-center flex-col items-center">
        <img src={commercialImage} alt="" />
        <h2 class="font-semibold text-2xl">Commerical</h2>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    text-align: center;
    font-weight: 800; 
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  @media screen and (max-width: 768px){
    h1{
      font-size: 1.5rem;
    }

    p{
      font-size: 1rem;
    }
  }
</style>
