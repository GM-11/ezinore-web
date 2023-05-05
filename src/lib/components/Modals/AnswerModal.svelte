<script lang="ts">
  export let title: string;
  export let imgPath: string;
  export let content: string;
</script>

<div class="flex flex-col min-w-[10em] md:min-w-[25em] mx-20 my-4">
  <img src={imgPath} alt="" />
  <h1>{title}</h1>
  <p>{content}</p>
</div>

<style>
  p {
    color: #072125;
  }

  h1 {
    color: black;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 700;
  }

  /* img{
    width: fit-content;
  } */

  @media screen and (max-width: 786px) {
    p {
        font-size: 0.75em;
    }
  }
</style>
