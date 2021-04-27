<script>
  import { showMenu } from '../../stores/toggle';

  function menuToggle() {
    showMenu.set(!($showMenu));
  }
</script>

<style>
  nav {
    @apply flex flex-row flex-nowrap text-gray-500 justify-items-center items-center mt-1 cursor-pointer;
  }
  p {
    @apply pr-1;
  }
</style>

<nav on:click={() => menuToggle()}>
  <p>Menu</p>
  {#if !($showMenu)}
  <i class="fas fa-arrow-alt-circle-down"></i>
  {:else}
  <i class="fas fa-arrow-alt-circle-up"></i>
  {/if}
</nav>
