<script>
  import { showFullSize } from '../../stores/toggle';
  import { fullSizeInfo } from '../../stores/images';

  export let name;
  export let thumb;
  export let full;
  export let groupTitle;
  export let index;

  const src = `/img/${groupTitle}/thumb/${thumb}`;

  function fullSizeToggle() {
    showFullSize.set(!($showFullSize));
    fullSizeInfo.set({
      name,
      full,
      groupTitle
    })
  }
</script>

<style>
  img {
    @apply m-6 border border-gray-300 rounded-md shadow-xl;
  }
</style>

{#if !($showFullSize)}
  <img {src} alt="{name}" title="{name}" on:click="{() => fullSizeToggle()}" />
{/if}
