<script lang="ts" setup>
import type { IEntry } from './types'

const props = defineProps<{
  entries: IEntry[]
}>()
const entries = computed(() => props.entries)

const entryClicked = (entry: IEntry) => {
  if (entry.children)
    entry.open = !entry.open
  else
    entry.selected = true
}
</script>

<template>
  <template v-for="entry in entries" :key="entry.name">
    <a v-wave class="list-item" :class="{ selected: entry.selected, open: entry.open }" @click="entryClicked(entry)">
      {{ entry.name }}
      <template v-if="!!entry.children">
        <mdi-chevron-up v-if="entry.open" />
        <mdi-chevron-down v-else />
      </template>
    </a>
    <div v-if="!!entry.children" v-show="entry.open" class="pl-3 flex-col gap-2">
      <sidebar-item :entries="entry.children" />
    </div>
  </template>
</template>

<style lang="postcss" scoped>
.list-item {
  @apply mb-2 block w-full p-2 select-none cursor-pointer flex items-center justify-between rounded-r-md transition-all duration-50 border-l-0 border-blue-400;

  &.selected {
    @apply border-l-4;
  }

  &.open, &.selected {
    @apply bg-opacity-10 bg-white;
  }
}
</style>
