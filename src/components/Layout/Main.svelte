<script>
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
  {#each $imagesList as imagesGroup, key}
    {#if $section.path === imagesGroup.title}
      <p>{imagesGroup.title}</p>
    {/if}
  {/each}
</main>
