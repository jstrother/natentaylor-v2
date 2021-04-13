<script>
  import Thumbnail from '../Base/Thumbnail.svelte';
  import FullSize from '../Base/FullSize.svelte';
  import { section } from '../../stores/section';
  import { imagesList } from '../../stores/images';
  import { showFullSize } from '../../stores/toggle';
</script>

<style>
  main {
    @apply z-10;
  }
</style>

<main>
  <br />
  {#if !($showFullSize)}
  <h1>{$section.name}</h1>
  {/if}
  <br />
  {#each $imagesList as imagesGroup, index1}
  <!-- this each block breaks the entire list into sections -->
    {#if $section.path === imagesGroup.title}
    <!-- this if block looks for the correct section -->
      {#if imagesGroup.images[0].sectionName}
      <!-- this if block checks to see if there are sub-groups -->
        {#each imagesGroup.images as imagesSub}
        <!-- this each block breaks each subGroup into individual groups -->
          {#if !($showFullSize)}
          <h3>{imagesSub.sectionName}</h3>
          {/if}
          {#each imagesSub.sectionImages as image}
          <!-- this each block finally displays images -->
            <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" groupTitle="{imagesGroup.title}" />
          {/each}
        {/each}
      {:else}
      <!-- no subGroups? then we just display the images -->
        {#each imagesGroup.images as image}
        <!-- this each block finally displays images -->
          <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" groupTitle="{imagesGroup.title}" />
        {/each}
      {/if}
    {/if}
  {/each}

  {#if $showFullSize}
  <FullSize />
  {/if}
</main>
