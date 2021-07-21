<script lang="ts" setup>
import type { IEntry } from './types'

const props = defineProps<{
  entries: IEntry[]
}>()
const entries = computed(() => props.entries)
</script>

<template>
  <div class="w-64  bg-dark-900 p-2">
    <SidebarItem :entries="entries" />
  </div>
</template>
