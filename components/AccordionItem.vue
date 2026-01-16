<template>
  <div class="accordion-item" :class="[`accordion-item-${index}`, { 'active': isOpen }]">
    <button class="accordion-header" @click="toggle">
      {{ question }}
      <span class="accordion-icon" :class="{ 'active': isOpen }">+</span>
    </button>
    <div
      ref="bodyRef"
      class="overflow-hidden transition-all duration-300"
      :style="{ height: isOpen ? bodyHeight + 'px' : '0px' }"
    >
      <p class="px-8 pb-6 text-gray leading-[1.6]">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  question: string
  answer: string
  index: number
}

const props = defineProps<Props>()
const { index, question, answer } = toRefs(props)

const isOpen = ref(false)
const bodyRef = ref<HTMLElement | null>(null)
const bodyHeight = ref(0)

const toggle = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && bodyRef.value) {
    bodyHeight.value = bodyRef.value.scrollHeight
  }
}

onMounted(() => {
  // Animate accordion items on scroll
  gsap.fromTo(`.accordion-item-${index.value}`,
    {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: `.accordion-item-${index.value}`,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>
