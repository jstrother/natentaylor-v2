<script>
  import Thumbnail from '../Base/Thumbnail.svelte';
  import { showFullSize } from '../../stores/toggle';
  import { fade } from 'svelte/transition';
  import { linear } from 'svelte/easing';

  export let sectionName;
  export let sectionImages;
  export let groupTitle;
</script>

<style>
  h3 {
    @apply justify-self-center text-lg text-center text-gray-500 mt-6;
  }
  .thumbDisplay {
    @apply flex flex-row flex-wrap place-content-evenly mb-6;
  }
</style>

{#if !($showFullSize)}
  <h3 
    in:fade={{ delay: 1000, duration: 1000 }}
    out:fade={{ duration: 200, easing: linear }}
  >
    {sectionName}
  </h3>
  <div class="thumbDisplay">              
    {#each sectionImages as image, index}
      <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" {groupTitle} {index} />
    {/each}
  </div>
{/if}
