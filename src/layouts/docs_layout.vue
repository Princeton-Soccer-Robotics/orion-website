<script lang="ts" setup>
import type { IEntry } from '~/components/Sidebar/types'

const pages = reactive<IEntry[]>([
  { name: 'Home', path: '' },
  { name: 'Hello', path: 'hello' },
  {
    name: 'Robocup 2021',
    children: [
      { name: 'Introduction', path: 'robocup/introduction' },
    ],
  },
])
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
