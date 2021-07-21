<script lang="ts" setup>
const pages = reactive([{
  name: 'UwU',
  children: [
    { name: 'Home' },
  ],
}])
</script>

<template>
  <div class="flex flex-col h-full">
    <NavBar class="bg-dark-500" />
    <div class="flex flex-1">
      <Sidebar
        :entries="pages"
      />
      <router-view />
    </div>
  </div>
</template>

<style lang="postcss">
html, body, #app {
  @apply w-full h-full dark:text-white;
  font-family: 'Space Mono';
}
</style>
