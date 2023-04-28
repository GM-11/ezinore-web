<script>
  let message = "";
  let email = "";
</script>

<div class="h-screen p-20 grid grid-cols-2 gap-10">
  <div class="span-cols-1 w-[100%] flex flex-col">
    <h1>How can we help you?</h1>
    <input type="text" bind:value={email} placeholder="Email" />
    <input
      type="text"
      bind:value={message}
      placeholder="Message"
      class="h-full"
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
          email = "";
          message = "";
        } else {
          alert("Some error occured");
        }
      }}
      class="bg-primary-black text-white bg-black border-2 border-black mt-5 px-7 py-4 rounded-full hover:text-black hover:bg-white ease-in duration-100 text-sm"
    >
      Submit
    </button>
  </div>
  <div class="span-cols-1 w-[100%] flex flex-col bg-slate-300 rounded-3xl">
    <div
      class="bg-[url('$lib/assets/join-us.png')] bg-clip-content bg-contain bg-center w-full rounded-t-3xl h-[50%]"
    />
    <div class="flex flex-col justify-evenly p-5">
      <div>
        <h2>Contact Information</h2>

        <p>
          <strong>Phone number:</strong>
          +91 9355482696
        </p>
        <p>
          <strong>Email address:</strong>
          conect@ezinore.com
        </p>
      </div>

      <div>
        <h2>Address</h2>
        <p>DTU,IIF,Delhi</p>
      </div>
    </div>
  </div>
</div>

<style>
  input {
    border: 2px solid black;
    border-radius: 10px;
    padding: 1rem;
    margin-block: 1rem;
  }

  p {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }

  h2 {
    color: black;
    font-weight: bold;
    font-size: 25px;
  }
</style>
