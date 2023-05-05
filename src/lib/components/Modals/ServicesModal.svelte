<script lang="ts">

  export let content:string;
  export let title:string;
  export let imgPath:string;
</script>

<div class="main">
  <div class="content">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
  <img src={imgPath} alt="" style="width:60%" class="md:flex hidden" />
</div>

<style>
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 70%;
  }

  h1 {
    font-size: 2.5em;
    padding-bottom: 0.2em;
    color: black;
    font-weight: bold;
  }
  .main {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    margin-left: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: inline-block;
    justify-content: center;
    min-width: 50rem;
    height: 25rem;
    margin-right: 10rem;
  }
  p {
    font-size: 1em;
    color: #072125d0;
    font-weight: 700;
  }

  img {
    translate: 30em -27em;
    scale: 1;
  }

  @media screen and (max-width: 786px) {
    h1 {
      font-size: 2em;
    }

    .main {
      min-width: 16em;
      /* flex-direction: column; */
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 1rem;
    }

    .content{
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
    }

  }
</style>
