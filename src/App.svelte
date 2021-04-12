<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import Header from './components/Layout/Header.svelte';
  import MenuList from './components/Base/MenuList.svelte';
  import Main from './components/Layout/Main.svelte';
  import Footer from './components/Layout/Footer.svelte';
  import { showMenu } from './stores/toggle';
</script>

<style>
  div {
    @apply flex flex-col flex-nowrap justify-items-center items-center;
  }
</style>

<Tailwind />

<div>
  <Header />

  {#if $showMenu}
  <MenuList />
  {/if}

  <Main />
  <Footer />
</div>