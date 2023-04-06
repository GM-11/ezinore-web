<script>

  
  let selectedOption = 0;
  let electricityCost = 4.0;
  let state = "Select State";
  let customerType = "Select Customer Type";
  let area = 0;
  let areaPercentage = 0;
  let budget = 0;
  let output = {};
  let capacity = 0;

  import states from "$lib/data/states";

  const categories = [
    "Residential",
    "Institutional",
    "Industrial",
    "Commerical",
    "Government",
    "Social Sector",
  ];
  const options = [
    "Rooftop Area",
    "Solar panel capacity to be installed",
    "Budget",
  ];

  async function calculate() {
    console.table({
      electricityCost,
      state,
      capacity,
      customerType,
      selectedOption,
      area,
      areaPercentage,
      budget,
    });

    const res = await fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        electricityCost,
        state,
        capacity,
        customerType,
        selectedOption,
        area,
        areaPercentage,
        budget,
      }),
    });

    if (res.status === 204) {
      output = { message: res.body };
      console.table(output);
    } else {
      var x = await res.json();
      output = x;
    }
  }
</script>

<div class="bg-black py-32 text-white flex flex-col">
  <h1 class="my-2 text-3xl font-semibold md:text-5xl mx-5 md:mx-16">
    Solar Rooftop Calculator
  </h1>

  <form class="md:mx-16 mx-5 my-8">
    <div class="flex flex-col justify-center ">
      <div class="flex flex-row justify-start mb-5 text-xs md:text-lg ">
        <h1>Select any one:</h1>
        <ul class="list-disc flex overflow-scroll no-scrollbar">
          {#each options as val}
            <button
              on:click={() => {
                selectedOption = options.indexOf(val);
              }}
              class={`cursor-pointer duration-75 text xs md:text-lg ease-in ml-16 ${
                options.indexOf(val) === selectedOption
                  ? "text-white"
                  : "text-gray-700"
              } `}
            >
              {val}
            </button>
          {/each}
        </ul>
      </div>

      {#if selectedOption === 0}
        <div>
          <div class="flex items-end">
            <input
              type="number"
              class="bg-white rounded-xl p-2 w-[40%] md:w-[15%] text-black mr-5"
              bind:value={area}
            />

            <p>sq m area available</p>
          </div>
          <h1 class="text-white my-5 ">
            Roof top area available: {areaPercentage}%
          </h1>
          <input
            type="range"
            class="bg-gray appearance-none cursor-pointer rounded-2xl w-full"
            min={0}
            max={100}
            step={1}
            bind:value={areaPercentage}
          />
        </div>
      {:else if selectedOption === 2}
        <div>
          <div class="flex items-end">
            <input
              type="number"
              class="bg-white rounded-xl p-2 w-[40%] md:w-[15%] text-black mr-5"
              bind:value={budget}
            />
            <p>Rupees</p>
          </div>

          <h1 class="text-white my-5 ">Your budget: {budget} Rupees</h1>
          <input
            type="range"
            class="bg-gray appearance-none cursor-pointer rounded-2xl w-full"
            min={100000}
            max={10000000}
            step={50000}
            bind:value={budget}
          />
        </div>
      {:else if selectedOption === 1}
        <div>
          <div class="flex items-end">
            <input
              type="number"
              class="bg-white rounded-xl p-2 w-[40%] md:w-[15%] text-black mr-5"
              bind:value={capacity}
            />
            <p>kW</p>
          </div>

          <h1 class="text-white my-5 ">
            Solar panel capacity to be installed: {capacity} kW
          </h1>
          <input
            type="range"
            class="bg-gray appearance-none cursor-pointer rounded-2xl w-full"
            min={0}
            max={500}
            step={1}
            bind:value={capacity}
          />
        </div>
        <div />
      {/if}
    </div>
    <div class="h-0.5 my-10 w-full bg-white bg-opacity-20" />
    <div class="flex flex-col justify-center">
      <div
        class="flex flex-col justify-around  items-center md:flex-row md:justify-start  "
      >
        <p class="text-xs md:text-lg">Select State and Customer Category</p>
        <select
          class="rounded-lg text-black m-2 md:ml-16 w-[60%]"
          bind:value={state}
        >
          {#each states as val}
            <option class="text-black" value={val.name}>
              {val.name}
            </option>
          {/each}
        </select>
        <select
          class="rounded-lg text-black m-2 md:ml-16 w-[60%]"
          bind:value={customerType}
        >
          {#each categories as val}
            <option class="text-black" value={val}>
              {val}
            </option>
          {/each}
        </select>
      </div>
    </div>
    <div class="h-0.5 my-10 w-full bg-white bg-opacity-20" />
    <div class="flex items-end mt-10">
      <input
        type="number"
        min={4}
        max={20}
        step={0.25}
        class="bg-white rounded-xl p-2 w-[15%] text-black mr-5"
        bind:value={electricityCost}
      />
      <p>kW</p>
    </div>

    <h1 class="text-white my-5 ">
      Your average electricity cost: {electricityCost} Rs/kW
    </h1>
    <input
      type="range"
      class="bg-gray appearance-none cursor-pointer rounded-2xl w-full"
      min={4}
      max={20}
      step={0.25}
      bind:value={electricityCost}
    />

    <div class="flex flex-col justify-center" />
    <div class="h-0.5 my-10 w-full bg-white bg-opacity-20" />
  </form>

  <button
    class="bg-transparent mb-5 px-7 py-2 rounded-full border-white border-2 hover:bg-white hover:text-black ease-in duration-100 mx-[25%]"
    on:click={calculate}
  >
    Calculate
  </button>

  <h1 class="my-5 text-3xl font-semibold md:text-5xl mx-5 md:mx-16">Output:</h1>

  {#if Object.keys(output).length === 0}
    <p />
  {:else}
    <div class="flex justify-evenly ">
      <div>
        <!-- {Object.keys(output).map((val) => ( -->
        {#each Object.keys(output) as val}
          <div>{`${val}`}</div>
        {/each}
        <!-- ))} -->
      </div>
      <div>
        {#each Object.values(output) as val}
          <div>{`${val}`}</div>
        {/each}
        <!-- {Object.values(output).map((val) => (
        <div key={`${val}`}>{`${val}`}</div>
      ))} -->
      </div>
    </div>
  {/if}
</div>
