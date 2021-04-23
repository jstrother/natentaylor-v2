<script>
  import Nav from '../Base/Nav.svelte';
</script>

<style>
  header {
    @apply flex flex-col flex-nowrap justify-items-center items-center content-center m-auto;
  }
  img {
    @apply border border-black rounded-b-md;
  }
</style>

<header>
  <a href="https://www.natentaylor.com/" >
    <img src="/img/NateTaylor_marketplaceBanner.jpg" alt="Nate Taylor and Art Thereby" title="Nate Taylor and Art Thereby" />
  </a>
  <Nav />
</header>