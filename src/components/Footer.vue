<template>
  <footer class="relative bg">
    <div class="px-12 md:px-48 py-8 flex justify-between items-center z-1 gap-2">
      <h1 class="text-lg">
        Copyright © {{ new Date().getFullYear() }} Team Orion
      </h1>
      <div class="flex gap-4 flex-wrap sm:flex-nowrap">
        <h-btn href="/projects" target="_blank">
          <mdi-robot class="mr-2" /> Projects
        </h-btn>
        <div class="bg-gray-500 w-0.5 transform scale-y-120" />
        <h-btn href="https://twitter.com/home" target="_blank">
          <mdi-twitter class="mr-2" /> Twitter
        </h-btn>
        <h-btn href="https://discord.gg/d566HsK" target="_blank">
          <simple-icons:discord class="mr-2" /> Discord
        </h-btn>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.bg {
  background-image: url('/original-background.svg');
  opacity: 80%;
  background-size: cover;
  @apply bg-no-repeat bg-center;
}
</style>
