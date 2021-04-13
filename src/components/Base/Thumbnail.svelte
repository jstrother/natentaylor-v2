<script>
  import { showFullSize } from '../../stores/toggle';

  export let name;
  export let thumb;
  export let groupTitle;

  let src = `/img/${groupTitle}/thumb/${thumb}`;

  function fullSizeToggle() {
    showFullSize.set(!($showFullSize));
  }
</script>

{#if !($showFullSize)}
  <img {src} alt="{name}" title="{name}" on:click="{() => fullSizeToggle()}" />
{/if}
