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
      "img/step1.png",
      "tyt_red"
    ),
    new InstructionData(
      "Give/receive a thank you token",
      "Surprise or get surprised with a Thank You Token for/from the other",
      "img/step2.png",
      "tyt_blue"
    ),
    new InstructionData(
      "Record the token in our app",
      "Write down the story behind this token in our web app",
      "img/step3.png",
      "tyt_green"
    ),
    new InstructionData(
      "Keep tokens at home & regift",
      "Put received tokens on display, ready to be given away again at a later event!",
      "img/step4.png",
      "tyt_yellow"
    ),
  ];
</script>

<section class="py-8">
  <Heading text="How it works" />
  <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 px-4">
    {#each howItWorksData as data}
      <div class="flex flex-col items-center border-2 border-{data.color} rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img
          src={data.image}
          alt={data.title}
          class="bg-slate-200 w-full rounded-t-2xl min-h-48"
        />
        <h2 class="text-lg sm:text-xl md:text-2xl px-4 font-semibold">{data.title}</h2>
        <p class="text-center px-4 text-sm sm:text-base md:text-lg">{data.description}</p>
      </div>
    {/each}
  </div>
</section>
