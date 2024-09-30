<script lang="ts" type="module">
  import Heading from "$lib/utils/Heading.svelte";
  import { text } from "@sveltejs/kit";

  class InstructionData {
    constructor(
      public title: string,
      public description: string,
      public image: string,
      public color: string
    ) {}
  }

  let howItWorksData: InstructionData[] = [
    new InstructionData(
      "Have a meaningful interaction",
      "A dinner date, a beach day with a friend, or just about anything you're grateful for",
      "img/interact.png",
      "tyt_red"
    ),
    new InstructionData(
      "Give/receive a Thank You Token",
      "Surprise or get surprised with a Thank You Token for/from the other",
      "img/receive.png",
      "tyt_blue"
    ),
    new InstructionData(
      "Keep tokens at home & regift",
      "Put received tokens on display, ready to be given away again at a later event!",
      "img/store.png",
      "tyt_green"
    ),
    new InstructionData(
      "Record the token in our app",
      "Write down the story behind this token in our web app",
      "img/record.png",
      "tyt_yellow"
    ),
  ];
</script>

<section class="flex flex-col items-center">
  <Heading text="How it works" />
  <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
    {#each howItWorksData as data}
      <div
        class="flex flex-col items-center  bg-{data.color} bg-opacity-5 rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img
          src={data.image}
          alt={data.title}
          class="w-full rounded-t-2xl min-h-48"
          style="object-fit: cover;"
        />
        <div class="flex-grow rounded-2xl bg-{data.color} bg-opacity-15 pb-2">
          <h2 class="text-md sm:text-lg md:text-xl px-4 py-4"
            >{data.title}</h2
          >
          <p class="text-center px-4 text-sm sm:text-md md:text-lg"
            >{data.description}</p
          >
        </div>
      </div>
    {/each}
  </div>
</section>
