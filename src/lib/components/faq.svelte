<script lang="ts">
  const faqs = [
    {
      question: "What are you trying to solve?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies",
    },
    {
      question: "What should we choose ezinore?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies",
    },
    {
      question: "What services does ezinore provide?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies",
    },
    {
      question: "How does SPARKO help in reducing my electricity bill?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies",
    },
    {
      question: "How do I get started with SPARKO?",
      answer:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies",
    },
  ];

  let activeIndex: any = null;

  function toggleFAQ(index: number) {
    if (activeIndex === index) {
      activeIndex = null;
    } else {
      activeIndex = index;
    }
  }
</script>

<h1>Frequently Asked Questions</h1>
{#each faqs as faq, index}
  <div class="faq-container">
    <div class="flex flex-row justify-between">
      <h3>{faq.question}</h3>
      <button class="btn" on:click={() => toggleFAQ(index)}
        >{index === activeIndex ? "-" : "+"}</button
      >
    </div>
    <div
      class={`${
        index === activeIndex ? "h-auto" : "h-1"
      } transition duration-300 p-2`}
    >
      <p>{index === activeIndex ? faq.answer : ""}</p>
    </div>
  </div>
{/each}

<style>
  h1 {
    text-align: center;
    font-size: 2.75rem;
    font-weight: 650;
    font-family: 'Aspekta';
  }

  .btn {
    width: 2.5rem;
    height: 2.5rem;
    background: #072125;
    border-radius: 100px;
    color: white;
    font-size: 1.5rem;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* or 156% */

    letter-spacing: -0.035em;
  }
  .faq-container {
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    overflow: hidden;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.97),
        rgba(255, 255, 255, 0.97)
      ),
      #072125;
    padding: 1rem;
    margin: 1rem;
    border-radius: 8px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 28px;
    font-family: 'Aspekta';
  }

  .faq-answer {
    padding: 1rem;
    /* display: none; */
    background-color: #fff;
    /* transition:  0.3s ease-out; */
    font-family: 'Supreme';
  }
  
  .faq-answer.active {
    font-family: 'Supreme';
    display: block;
    max-height: 1000px; /* Adjust this value to your desired maximum height */
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 768px) {
    .faq-container {
      margin: 0.5rem;
      padding: 1rem;
      width: 90%;
    }

    h1{
      font-size: 1.5rem;
    }

    h3{
      font-size: 1.25rem;
    }

    .btn{
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
    }

  }
</style>
