<script>
  import { menuList, section } from '../../stores/section';
  import { showMenu } from '../../stores/toggle';

  function setSection(sectionChoice) {
    section.set(sectionChoice);
    showMenu.set(false);
  }
</script>

<style>
  ul {
    @apply flex flex-col flex-nowrap justify-items-center items-center border border-gray-500 rounded-lg mx-3 xs:m-auto absolute z-20 max-w-xs bg-gray-200 shadow-lg mt-28 xs:mt-28 sm:mt-28 md:mt-60 lg:mt-72;
  }
  li {
    @apply m-1 text-gray-500 cursor-pointer text-center;
  }
</style>

<ul>
  {#each $menuList as menuItem}
    <li on:click="{() => setSection(menuItem)}">{menuItem.name}</li>
  {/each}
  <li>
    <a href="https://worldbuildersmarket.com/collections/nate-taylor" target="_blank">
      Store
    </a>
  </li>
</ul>
