<script>
  import Thumbnail from '../Base/Thumbnail.svelte';
  import FullSize from '../Base/FullSize.svelte';
  import { section } from '../../stores/section';
  import { imagesList } from '../../stores/images';
  import { showFullSize } from '../../stores/toggle';
</script>

<style>
  * {
    border: 1px solid red;
  }
  main {
    @apply flex flex-col flex-nowrap z-10 max-w-3xl min-h-full;
  }
  .thumbDisplay,
  .subThumbDisplay {
    @apply flex flex-row flex-wrap justify-items-center items-center;
  }
  .subGroupDisplay {
    @apply flex flex-col flex-nowrap;
  }
  .holiday {
    @apply mb-14;
  }
</style>

<main>
  <br />
  {#if !($showFullSize)}
  <h1>{$section.name}</h1>
  {/if}
  <br />
  <div class="thumbDisplay">
    {#each $imagesList as imagesGroup}
    <!-- this each block breaks the entire list into sections -->
      {#if $section.path === imagesGroup.title}
      <!-- this if block looks for the correct section -->
        {#if imagesGroup.images[0].sectionName}
        <!-- this if block checks to see if there are subGroups -->
          <div class="subGroupDisplay">
            {#each imagesGroup.images as imagesSub}
            <!-- this each block breaks each subGroup into individual groups -->
            {#if !($showFullSize)}
              <h3>{imagesSub.sectionName}</h3>
              {/if}
              <div class="subThumbDisplay">              
                {#each imagesSub.sectionImages as image, index}
                <!-- this each block finally displays images -->
                  <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" groupTitle="{imagesGroup.title}" {index} />
                {/each}
              </div>
            {/each}
          </div>
        {:else}
        <!-- no subGroups? then we just display the images -->
          {#each imagesGroup.images as image, index}
          <!-- this each block finally displays images -->
          {#if imagesGroup.title === 'holiday'}
          <!-- the holiday art needs a little extra margin at the bottom as it is a smaller group than the others -->
            <div class="holiday">
              <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" groupTitle="{imagesGroup.title}" {index} />
            </div>
          {:else}
            <Thumbnail name="{image.name}" thumb="{image.thumb}" full="{image.full}" groupTitle="{imagesGroup.title}" {index} />
          {/if}            
          {/each}
        {/if}
      {/if}
    {/each}
  </div>

  {#if $showFullSize}
  <FullSize />
  {/if}
  <br />
</main>
