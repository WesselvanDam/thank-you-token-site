<script lang="ts">
  import { fly } from "svelte/transition";
  import Heading from "./Heading.svelte";
  import { onMount } from "svelte";

  export let color = "";
  export let imageSrc = "";
  export let imageAlt = "";
  export let headingText = "";
  export let imageRight = false;

  let isVisible = false;
  let sectionContainer: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      });
    });

    if (sectionContainer) {
      observer.observe(sectionContainer);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

<section
  bind:this={sectionContainer}
  class="flex flex-col-reverse sm:flex-row bg-{color} py-8 md:py-12 lg:py-16 w-full justify-center sm:items-center text-sm md:text-base lg:text-lg"
>
  {#if isVisible}
    <img
      src={imageSrc}
      alt={imageAlt}
      class="m-4 sm:w-1/3 image {imageRight ? 'sm:order-2' : ''}"
      in:fly={{
        x: isVisible ? (imageRight ? 100 : -100) : 0,
        duration: 1000,
        delay: 300,
        opacity: 0,
      }}
    />
  {/if}
  <div class="sm:w-1/2 text-start p-4 text-{color === '' ? 'black' : 'white'}">
    <Heading text={headingText} />
    <slot></slot>
  </div>
</section>
