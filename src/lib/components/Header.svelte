<script lang="ts">
  import { asset } from "$app/paths";
</script>

<div class="relative w-full">
  <img src={asset("/img/header.jpg")} alt="Header" class="w-full" />
  <div class="absolute top-1/2 w-2/5 -translate-y-1/2 right-0 -translate-x-1/4">
    <img src={asset("/img/logo.svg")} alt="Logo" class="w-full" />
  </div>
</div>
