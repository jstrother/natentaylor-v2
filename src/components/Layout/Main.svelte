<script>
  import Thumbnail from '../Base/Thumbnail.svelte';
  import { section } from '../../stores/section';
  import { imagesList } from '../../stores/imagesList';

  console.log('imagesList:', $imagesList);
</script>

<style>
  main {
    @apply z-10;
  }
</style>

<main>
  <br />
  <h1>{$section.name}</h1>
  <br />
  {#each $imagesList as imagesGroup, index1}
  <!-- this each block breaks the entire list into sections -->
    {#if $section.path === imagesGroup.title}
    <!-- this if block looks for the correct section -->
      {#if imagesGroup.images[0].sectionName}
      <!-- this if block checks to see if there are sub-groups -->
        {#each imagesGroup.images as imagesSub}
        <!-- this each block breaks each subGroup into individual groups -->
          <h3>{imagesSub.sectionName}</h3>
          {#each imagesSub.sectionImages as image}
          <!-- this each block finally displays images -->
            <Thumbnail name="{image.name}" thumb="{image.thumb}" />
          {/each}
        {/each}
      {:else}
      <!-- no subGroups? then we just display the images -->
        {#each imagesGroup.images as image}
        <!-- this each block finally displays images -->
          <Thumbnail name="{image.name}" thumb="{image.thumb}" groupTitle="{imagesGroup.title}" />
        {/each}
      {/if}
    {/if}
  {/each}
</main>
