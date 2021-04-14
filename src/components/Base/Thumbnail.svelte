<script>
  import { showFullSize } from '../../stores/toggle';
  import { fullSizeInfo } from '../../stores/images';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let name;
  export let thumb;
  export let full;
  export let groupTitle;
  export let index;

  const src = `/img/${groupTitle}/thumb/${thumb}`;
  const transitionIn = index > 0 ? index * 2500 : 1500;

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
    @apply m-6 border border-gray-300 rounded-md shadow-xl cursor-pointer;
  }
</style>

{#if !($showFullSize)}
  <img 
    {src} 
    alt="{name}" 
    title="{name}" 
    on:click="{() => fullSizeToggle()}" 
    in:fly="{{ duration: 1800, delay: 1500, x: -transitionIn, easing: quintOut }}"
    out:fly="{{ duration: 800, y: 200, easing: quintOut }}"
  />
{/if}
