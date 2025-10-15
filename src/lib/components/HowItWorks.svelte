<script lang="ts" type="module">
  import Heading from "$lib/utils/Heading.svelte";
  import { asset } from "$app/paths";

  interface InstructionData {
    title: string;
    description: string;
    image: string;
    color: string;
  }

  let howItWorksData: InstructionData[] = [
    {
      title: "Have a meaningful interaction",
      description:
        "A dinner date, a beach day with a friend, or just about anything you're grateful for",
      image: asset("/img/interact.png"),
      color: "tyt_red",
    },
    {
      title: "Give or receive a token",
      description:
        "Surprise or get surprised with a Thank You Token for or from the other",
      image: asset("/img/receive.png"),
      color: "tyt_blue",
    },
    {
      title: "Keep tokens at home & regift",
      description:
        "Put received tokens on display, ready to be given away again at a later time",
      image: asset("/img/store.png"),
      color: "tyt_green",
    },
    {
      title: "Record the token in the app",
      description: "Write down the story behind this token in our web app",
      image: asset("/img/record.png"),
      color: "tyt_yellow",
    },
  ];
</script>

<section class="flex flex-col items-center">
  <Heading text="How it works" />
  <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
    {#each howItWorksData as data}
      <div
        class="flex flex-col items-center bg-{data.color} bg-opacity-5 rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img
          src={data.image}
          alt={data.title}
          class="w-full rounded-t-2xl min-h-48"
          style="object-fit: cover;"
        />
        <div
          class="flex-grow rounded-2xl bg-{data.color} bg-opacity-15 pb-2 w-full"
        >
          <h2 class="text-md sm:text-lg md:text-xl px-4 py-4">{data.title}</h2>
          <p class="text-center px-4 text-sm sm:text-md md:text-lg"
            >{data.description}</p
          >
        </div>
      </div>
    {/each}
  </div>
</section>
