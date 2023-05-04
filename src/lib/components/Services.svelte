<script>
  import ServicesModal from "./ServicesModal.svelte";
  import l1 from "$lib/assets/l1.png";
</script>

<div class="main h-full py-10">
  <h1 class="px-10">Our Services</h1>
  <div class="scrollbar-hide px-10">
    <ServicesModal
      content={"We visit the site of installation and inspect the infrastructure to estimate the system configuration that would be suitable for installation."}
      title={"Inspection"}
      imgPath={l1}
    />

    <ServicesModal
      content={"We visit the site of installation and inspect the infrastructure to estimate the system configuration that would be suitable for installation."}
      title={"3D Modelling"}
      imgPath={l1}
    />

    <ServicesModal
      content={"We visit the site of installation and inspect the infrastructure to estimate the system configuration that would be suitable for installation."}
      title={"Inspection"}
      imgPath={l1}
    />

    <ServicesModal
      content={"We visit the site of installation and inspect the infrastructure to estimate the system configuration that would be suitable for installation."}
      title={"Inspection"}
      imgPath={l1}
    />
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    width: 100%;
  }
  .main {
    background-color: #072125;
  }

  h1 {
    color: white;
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }
</style>
