<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte';
    import { createScene } from '$lib/scene';
    import Footer from '$lib/Footer.svelte'
    
    let el:HTMLCanvasElement;

    onMount(() => {
      createScene(el);
    });
</script>
  
  <div class="overflow-none flex flex-col w-screen h-screen">
      <canvas class="absolute" bind:this={el} />
      <main class="p-3 flex-1 relative overflow-auto">
      <slot></slot>
      <Footer />
      </main>
  </div>