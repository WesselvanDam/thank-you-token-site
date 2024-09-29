<script lang="ts">
  import { onMount } from 'svelte';

  export let text: string;

  let isVisible = false;
  let headingContainer: HTMLHeadingElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    });

    if (headingContainer) {
      observer.observe(headingContainer);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<div class="flex">
  <h1 bind:this={headingContainer} class="text-3xl md:text-4xl lg:text-5xl pb-8 group heading-container">
    {text}
    <span class="block max-w-0 transition-all duration-500 h-1 bg-tyt_yellow delay-200" class:is-visible={isVisible}></span>
  </h1>
</div>

<style>
  .is-visible {
    max-width: 100%;
  }
</style>
