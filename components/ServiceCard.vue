<template>
  <div class="service-card" :class="`service-card-${index}`">
    <div class="card-num">{{ number }}</div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-desc">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  number: string
  title: string
  description: string
  index: number
}

const props = defineProps<Props>()
const { index, number, title, description } = toRefs(props)

onMounted(() => {
  // Animate service cards with stagger
  gsap.fromTo(`.service-card-${index.value}`,
    {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: `.service-card-${index.value}`,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>
