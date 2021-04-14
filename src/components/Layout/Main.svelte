<script>
  import Thumbnail from '../Base/Thumbnail.svelte';
  import FullSize from '../Base/FullSize.svelte';
  import SubGroupDisplay from '../Base/SubGroupDisplay.svelte';
  import { section } from '../../stores/section';
  import { imagesList } from '../../stores/images';
  import { showFullSize } from '../../stores/toggle';
</script>

<style>
  main {
    @apply flex flex-col flex-nowrap z-10 max-w-5xl min-h-full;
  }
  h1 {
    @apply self-center text-2xl md:text-4xl text-center text-gray-500;
  }
  .imageDisplay {
    @apply flex flex-row flex-wrap place-content-evenly;
  }
  .subGroupDisplay {
    @apply flex flex-col flex-nowrap;
  }
</style>

<main>
  <br />
  {#if !($showFullSize)}
    <h1>{$section.name}</h1>
  {/if}
  <br />
  <div class="imageDisplay">
    {#each $imagesList as imagesGroup}
    <!-- this each block breaks the entire list into sections -->
      {#if $section.path === imagesGroup.title}
      <!-- this if block looks for the correct section (does not have else block) -->
        {#if imagesGroup.images[0].sectionName}
        <!-- this if block checks to see if there are subGroups (has else block #1) -->
          <div class="subGroupDisplay">
            {#each imagesGroup.images as imagesSub}
            <!-- this each block breaks each subGroup into individual groups -->
              <SubGroupDisplay
                sectionName="{imagesSub.sectionName}"
                sectionImages="{imagesSub.sectionImages}"
                groupTitle="{imagesGroup.title}"
              />
            {/each}
          </div>
        {:else}
        <!-- no subGroups? then we just display the images (else block #1) -->
          {#each imagesGroup.images as image, index}
          <!-- this each block finally displays images -->
            <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" groupTitle="{imagesGroup.title}" {index} />
          {/each}
        {/if}
      {/if}
    {/each}
    {#if $showFullSize}
      <FullSize />
    {/if}
  </div>
  <br />
</main>
