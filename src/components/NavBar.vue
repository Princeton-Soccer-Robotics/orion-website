<script lang="ts" setup>

</script>
<template>
  <nav class="p-4 z-1 flex md:px-48 sm:px-24 px-5 justify-between w-full items-center">
    <router-link class="flex gap-4 items-center" to="/" draggable="false">
      <img src="/assets/svg/team-orion.svg" class="h-12 fancy" draggable="false" />
      <h1 class="text-xl">
        Team Orion
      </h1>
    </router-link>
    <div class="flex gap-4 flex-wrap justify-end sm:flex-nowrap">
      <router-link to="/docs">
        <h-btn>
          <mdi-book class="mr-2" /> Docs
        </h-btn>
      </router-link>
      <router-link to="/projects">
        <h-btn>
          <mdi-robot class="mr-2" /> Projects
        </h-btn>
      </router-link>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>

</style>
