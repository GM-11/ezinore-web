<script>
  import joinus from "$lib/assets/join-us.png";

  let message = "";
  let email = "";
</script>

<div
  class=" text-white bg-black flex flex-col md:flex md:flex-row justify-center font-poppins p-12 h-screen"
  id="joinus"
>
  <div
    class=" p-3 flex flex-col bg-graybg top-24 rounded-l-lg w-full md:w-[80%]"
  >
    <p class="ml-5 my-2 text-2xl md:text-5xl font-semibold">
      Wanna join us in this
    </p>
    <p class="ml-5 my-2 text-2xl md:text-5xl font-semibold mb-12">
      incredible journey
    </p>
    <form on:submit={() => {}} class="w-full flex flex-col h-full">
      <input
        bind:value={email}
        type="email"
        placeholder="Email"
        class="text-white m-2 border-2 placeholder-slate-300 border-white rounded-xl bg-transparent p-2 md:p-5 text-sm md:text-md"
      />

      <input
        bind:value={message}
        type="text"
        placeholder="Message"
        class="text-white m-2 border-2 placeholder-slate-300 border-white rounded-xl bg-transparent p-2 md:p-5 text-sm md:text-mdtext-justify h-[40%]"
      />
      <button
        on:click={async (e) => {
          e.preventDefault();

          const res = await fetch("/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, message }),
          });

          var response = await res.json();
          if (res.status == 200) {
            alert(
              "Email has been sent sucessfully. Our team will respond shortly."
            );
            email = ""  
            message = ""

          } else {
            alert("Some error occured");
          }
        }}
        class="border-2 m-2 border-white rounded-full bg-transparent p-1 md:p-3 w-[30%] hover:bg-white hover:text-graybg ease-in duration-100 hover:font-bold text-xs md:text-lg"
      >
        Submit
      </button>
    </form>
  </div>
  <div class="hidden md:flex">
    <img class=" w-[120wh]" src={joinus} alt="" />
  </div>
</div>
