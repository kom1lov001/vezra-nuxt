<template>
  <section id="services" class="services-dark">
    <div class="container">
      <div class="services-header mb-8 md:mb-12 relative z-[1] px-4 scroll-animate">
        <span class="tag-pill tag-pill-dark">{{ $t('services.tag') }}</span>
        <h2 class="section-title">
          {{ $t('services.title') }}
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

const { $i18n } = useNuxtApp()
const t = (key: string) => $i18n.t(key)

interface Service {
  title: string
  description: string
}

const services = computed<Service[]>(() => [
  {
    title: t('services.items.branding.title'),
    description: t('services.items.branding.description')
  },
  {
    title: t('services.items.uiux.title'),
    description: t('services.items.uiux.description')
  },
  {
    title: t('services.items.logo.title'),
    description: t('services.items.logo.description')
  },
  {
    title: t('services.items.web.title'),
    description: t('services.items.web.description')
  },
  {
    title: t('services.items.packaging.title'),
    description: t('services.items.packaging.description')
  },
  {
    title: t('services.items.ai.title'),
    description: t('services.items.ai.description')
  }
])
</script>
