<script lang="ts">
  export let content: string;
  export let title: string;
  export let imgPath: string;
</script>

<div class="main">
  <div class="content">
    <h1>{title}</h1>
    <br>
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
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 2.313rem;
    line-height: 2.75rem;
    color: #072125;
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
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: rgba(7, 33, 37, 0.75);
    letter-spacing: -0.035em;
  }

  img {
    translate: 30em -27em;
    scale: 1;
  }

  @media screen and (max-width: 786px) {
    h1 {
      font-size: 1.5em;
    }

    p {
      width: 100%;
    }

    .main {
      min-width: 16em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }

    img {
      translate: 3em -10em;
    }

    .content {
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      width: 100%;
    }
  }
</style>
