<script>
  import { showFullSize } from '../../stores/toggle';
  import { fullSizeInfo } from '../../stores/images';

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

<div>
  <p on:click="{() => fullSizeToggle()}"><span>X</span></p>
  <img {src} alt="{$fullSizeInfo.name}" title="{$fullSizeInfo.name}" />
</div>
