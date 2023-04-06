<script>
  import sow from "$lib/assets/sparko-on-wall.png";
  import gopal from "$lib/assets/team/gopal.png";
  import nirmal from "$lib/assets/team/nirmal.png";
  import ritwij from "$lib/assets/team/ritwij.png";
  import rohit from "$lib/assets/team/rohit.png";

  const team = [
    { id: "1", name: "Nirmal Yadav", position: "Founder and CEO", img: nirmal },
    {
      id: "2",
      name: "Ritwij Kashyap",
      position: "Marketing Head",
      img: ritwij,
    },
    { id: "5", name: "Rohit Gorai", position: "Design Head", img: rohit },
    { id: "3", name: "Gopal Mathur", position: "Head Developer", img: gopal },
  ];
</script>

<div class="bg-black py-32 text-white ">
  <div class="  mx-16">
    <h1 class="my-2 text-3xl font-semibold md:text-5xl md:w-[40%]">About us</h1>

    <h1 class="my-5 text-xl md:text-2xl md:w-[40%]">
      All-in-one solutions for generating, storing, monitoring, and controlling
      clean energy.
    </h1>

    <h1 class="my-16 text-2xl md:text-4xl md:w-[50%]">
      Our vision is to change the way people think about energy, and to create a
      world where clean energy is accessible, affordable, and easy to use.
    </h1>
  </div>

  <div class="  justify-between sm:items-center flex md:flex-row flex-col mx-4">
    <img src={sow} alt="" class="rounded-2xl sm:h-full md:w-[40%] " />

    <div
      class="flex flex-col justify-around md:text-xl text-sm font-thin md:items-center md:px-16 w-full md:leading-10"
    >
      <h1 class="my-3 ">
        We are at the forefront of the clean energy revolution. That's why we've
        designed a solution that seamlessly integrates into existing
        infrastructure, making it easy for everyone to make the switch to clean
        energy.
      </h1>
      <h1 class="my-3">
        We ensure proper installation and maintenance of the system. By
        combining solar energy with smart flow control and a predictive
        algorithm, we produce sustainable energy which is then smartly
        distributed into storage and supply. The algorithm controlling
        distribution takes into account usage patterns, weather forecasts, and
        expected solar irradiance to smartly adjust battery capacity and energy
        flow to maximize solar power utilization.
      </h1>
      <h1 class="my-3">
        Our mobile application gives you compconste visibility into your
        self-powered home. You can monitor your home solar generation, battery
        power flow, household consumption, and monetary savings in real-time
        from anywhere.
      </h1>
    </div>
  </div>

  <h1 class="mx-5 text-3xl mt-10">Our Team</h1>

  <div class="flex w-full p-5 overflow-scroll no-scrollbar">
    {#each team as val}
     <div class="flex flex-col items-center     mx-5">
        <img src={val.img} width="300" class="rounded-lg overflow-scroll" alt="" />
        <h1 class="md:text-xl text-sm font-bold">{val.name}</h1>
        <p class="md:text-sm text-xs">{val.position}</p>
     </div>
    {/each}
    
  </div>
</div>
