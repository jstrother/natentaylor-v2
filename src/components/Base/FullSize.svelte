<script>
  import { showFullSize } from '../../stores/toggle';
  import { fullSizeInfo } from '../../stores/images';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const src = `/img/${$fullSizeInfo.groupTitle}/full/${$fullSizeInfo.full}`;

  function fullSizeToggle() {
    showFullSize.set(!($showFullSize));
    fullSizeInfo.set({
      name: '',
      full: '',
      groupTitle: ''
    });
  }
</script>

<style>
  div {
    @apply flex flex-col flex-nowrap;
  }
  p {
    @apply text-right text-lg text-gray-500 p-2;
  }
  span {
    @apply cursor-pointer;
  }
  img {
    @apply border border-gray-300 shadow-xl rounded;
  }
</style>

<div
  in:fly="{{ duration: 1800, delay: 1500, x: -200, easing: quintOut }}"
  out:fly="{{ duration: 800, y: 200, easing: quintOut }}"
>
  <p on:click="{() => fullSizeToggle()}"><span>X</span></p>
  <img {src} alt="{$fullSizeInfo.name}" title="{$fullSizeInfo.name}" />
</div>
