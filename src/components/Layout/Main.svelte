<script>
  import { section } from '../../stores/section';

  const fullSizePath = `/img/${section.path}/full/`;
  const thumbPath = `/img/${section.path}/thumb/`;
</script>

<style>
  main {
    @apply z-10;
  }
</style>

<main>
  <h1>{$section.name}</h1>
</main>
