<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="h-full w-full flex flex-col gap-4 items-center justify-center">
    <div class="p-24 rounded-full bg-dark-400 flex justify-center flex-col items-center gap-5">
      <mdi-alert class="text-4xl" />
      {{ t('not-found') }}
    </div>
  </div>
</template>
