<template>
  <section id="faq" class="py-16 sm:py-20 md:py-24 lg:py-32">
    <div class="container">
      <div class="text-center mb-8 md:mb-12 px-4 scroll-animate">
        <span class="tag-pill">FAQS ?</span>
        <h2 class="section-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        <p class="max-w-[700px] mx-auto text-center leading-[1.6]">
          Ответы на частые вопросы о процессе, сроках и сотрудничестве.
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

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'С чего начинается работа?',
    answer: 'Мы начинаем с анализа вашего бизнеса, аудитории и конкурентов, чтобы создать стратегию.'
  },
  {
    question: 'Сколько времени занимает проект?',
    answer: 'Сроки зависят от сложности. Лендинг заниает от 5-7 дней, корпоративный сайт от 14 дней.'
  },
  {
    question: 'Что я получу в итоге?',
    answer: 'Вы получаете полностью готовый к запуску продукт, файлы дизайна и техническую документацию.'
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Мы работаем по предоплате 50% перед началом работ и 50% после утверждения финала.'
  },
  {
    question: 'Можете ли помочь после завершения проекта?',
    answer: 'Да, мы предлагаем техническую поддержку и развитие проекта по подписке или разовым задачам.'
  }
]
</script>
