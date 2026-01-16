<template>
  <section id="services" class="services-dark">
    <div class="container">
      <div class="services-header mb-8 md:mb-12 relative z-[1] px-4 scroll-animate">
        <span class="tag-pill border-white/20 text-white/80">Наши услуги</span>
        <h2 class="section-title text-white">
          РЕШАЕМ ДИЗАЙН-ЗАДАЧИ<br>
          ВАШЕГО БИЗНЕСА
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-[1] px-4">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :number="String(index + 1).padStart(2, '0')"
          :title="service.title"
          :description="service.description"
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

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: 'Бренд-айдентика',
    description: 'Айдентика, формирующая характер бренда и его визуальное отличие. Создаём целостную систему.'
  },
  {
    title: 'Дизайн UI / UX',
    description: 'UI/UX-дизайн, ориентированный на удобство и логику взаимодействия. Мы создаём интерфейсы.'
  },
  {
    title: 'Разработка логотипа',
    description: 'Логотип, отражающий суть и характер бренда. Мы разрабатываем уникальные знаки.'
  },
  {
    title: 'Сайты для бизнеса',
    description: 'Сайты для бизнеса, сочетающие эстетику и функциональность. Мы проектируем digital-решения.'
  },
  {
    title: 'Дизайн упаковки',
    description: 'Упаковка, которая выделяет продукт и передаёт ценности бренда. Привлекает внимание.'
  },
  {
    title: 'AI-решения',
    description: 'AI-решения, которые усиливают бизнес и раскрывают потенциал данных. Умные технологии.'
  }
]
</script>
