<script>
  import Section from "$lib/utils/Section.svelte";
</script>

<Section
  imageSrc="img/flyer.jpg"
  imageAlt="Click for our flyer!"
  headingText="How to give one"
  imageRight
>
  <p>
    There's no need to wrap the token in gift wrapping: just give it along with
    some kind words and our Thank You Token <strong>flyer</strong>, which helps
    explain the concept to those unfamiliar with it and contains a link to the
    web app. Encourage the other to pass it on to someone else as a simple,
    sustainable and spontaneous way to express gratitude.
  </p>
  <a href="/flyer.pdf" target="_blank" class="button float-right">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="inline-block mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      width="20"
      height="20"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
      />
    </svg>
    Download the Flyer
  </a>
</Section>
