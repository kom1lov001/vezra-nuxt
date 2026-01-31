<template>
  <section id="faq" class="py-16 sm:py-20 md:py-24 lg:py-32">
    <div class="container">
      <div class="text-center mb-8 md:mb-12 px-4 scroll-animate">
        <span class="tag-pill">{{ $t('faq.tag') }}</span>
        <h2 class="section-title">{{ $t('faq.title') }}</h2>
        <p class="max-w-[700px] mx-auto text-center leading-[1.6]">
          {{ $t('faq.description') }}
        </p>
      </div>

      <div class="max-w-[800px] mx-auto flex flex-col gap-3 md:gap-4 px-4">
        <AccordionItem
          v-for="(faq, index) in faqs"
          :key="index"
          :question="faq.question"
          :answer="faq.answer"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { $i18n } = useNuxtApp()
const t = (key: string) => $i18n.t(key)

interface FAQ {
  question: string
  answer: string
}

const faqs = computed<FAQ[]>(() => [
  {
    question: t('faq.items.q1.question'),
    answer: t('faq.items.q1.answer')
  },
  {
    question: t('faq.items.q2.question'),
    answer: t('faq.items.q2.answer')
  },
  {
    question: t('faq.items.q3.question'),
    answer: t('faq.items.q3.answer')
  },
  {
    question: t('faq.items.q4.question'),
    answer: t('faq.items.q4.answer')
  },
  {
    question: t('faq.items.q5.question'),
    answer: t('faq.items.q5.answer')
  }
])
</script>
