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

<span on:click="{() => fullSizeToggle()}">X</span>
<img {src} alt="{$fullSizeInfo.name}" title="{$fullSizeInfo.name}" />
