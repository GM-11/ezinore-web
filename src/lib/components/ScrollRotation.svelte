<script>
    import { onMount } from 'svelte';
  
    export let rotationAmount = 45; // Default rotation amount in degrees
    export let scrollRange = 1000; // Scroll range in pixels
    // export let rotationAxis = 'X'; // Default rotation axis
    let rotation = 0;
    
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const rotationPercentage = scrollY / scrollRange;
      rotation = rotationPercentage * rotationAmount * 5;
    }
  </script>
  
  <!-- <div class="scroll-rotation" style="rotate: 1 1 0 60deg;"> -->
  <div class="scroll-rotation" style=" rotate: 0 0  1 {rotation}deg;">
    <slot></slot>
  </div>
  
  <style>
    .scroll-rotation {
      perspective: 1000px;
      transition: transform 0.3s ease-in-out;
      position: absolute;
    }
  </style>
  