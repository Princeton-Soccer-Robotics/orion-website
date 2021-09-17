<template>
  <a v-wave class="btn">
    <slot />
  </a>
</template>

<style lang="postcss" scoped>
.btn {
  @apply rounded-md rounded-tl-none rounded-br-none select-none inline-flex text-center items-center px-3 py-2
    border-white border-2 cursor-pointer transition duration-200
    hover:bg-white hover:text-black;

  &:hover {
    @apply shadow-white shadow-xl transform -translate-y-0.3;
  }
}
</style>
