<script setup lang="ts">
import { tsParticles } from 'tsparticles'
import { ref, onMounted } from 'vue'

onMounted(async() => {
  await tsParticles.load('bg', {
    interactivity: {
      detectsOn: 'window',
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        grab: {
          distance: 200,
        },
      },
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
          parallax: {
            enable: true,
            force: 150,
            smooth: 20,
          },
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: {
          value: '#ffffff',
        },
        distance: 60,
        enable: true,
        warp: true,
      },
      move: {
        attract: {
          rotate: {
            x: 50,
            y: 50,
          },
        },
        enable: true,
        outModes: 'out',
        speed: 0.5,
        warp: true,
      },
      number: {
        density: {
          enable: true,
        },
        value: 20,
      },
      opacity: {
        value: 0.5,
        animation: {
          speed: 3,
          minimumValue: 0.1,
        },
      },
      size: {
        random: true,
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          speed: 20,
          minimumValue: 0.1,
        },
      },
    },
  })
})
</script>

<template>
  <NavBar />
  <div class="flex flex-col h-full w-full">
    <Banner />
    <About />
    <Footer />
  </div>
</template>

<style lang="postcss" scoped>

.hero {
  background-image: url('/morphing-diamonds.svg');
}
</style>
