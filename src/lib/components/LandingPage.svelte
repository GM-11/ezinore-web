<div class="h-screen grid grid-cols-2">
  <div id="leftbox">
    <h1>Sustainable Energy Solutions for a Brighter Future</h1>
    <h2>
      A comprehensive solution to meet all your energy needs, including
      generation, storage, and management.
    </h2>

    <a href="/about" id="button"> Learn More </a>
  </div>
  <div
    class={`bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex flex-col-reverse items-center z-0`}
  />
</div>

<style>
  #button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    color: black;
    border-radius: 100px;
    margin-block: 1.5rem;
    background-color: #f4b931;
    transition: 0.3s;
  }

  #button:hover {
    color: #f4b931;
    background-color: black;
    transition: 0.3s;
  }

  #leftbox {
    width: 90vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 2rem;
    background: linear-gradient(90deg, #020b16 55.45%, rgba(0, 0, 0, 0) 84.65%);
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    color: white;
    width: 50%;
    margin-top: 1.5rem;
  }

  h1 {
    margin-top: 5rem;

    text-align: left;
    font-weight: 800;
    font-size: 2.75rem;
    color: white;
    width: 50%;
    line-height: 54px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
</style>
