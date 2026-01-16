<template>
  <section id="cta" class="cta-dark scroll-animate">
    <div class="container">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-title text-white">
          ГОТОВЫ К СЛЕДУЮЩЕМУ УРОВНЮ<br />
          ВАШЕГО БРЕНДА
        </h2>
        <p class="max-w-[700px] mx-auto text-center text-white/70 px-4">
          Мы поможем превратить идею в сильный визуальный продукт. С нами ваш
          бренд будет привести вам свою пользу.
        </p>
      </div>

      <div
        class="cta-content-grid"
      >
        <!-- Form Column -->
        <div class="pr-0 md:pr-8">
          <h3 class="text-lg md:text-xl font-bold mb-2">
            Короткая заявка — первый шаг к проекту
          </h3>
          <p
            class="text-sm text-white/60 mb-6 md:mb-8 font-[family-name:var(--font-secondary)]"
          >
            Этого достаточно, чтобы мы поняли задачу и связались с вами.
          </p>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div class="form-group-dark flex-1">
                <label>Имя</label>
                <input
                  type="text"
                  placeholder="Имя"
                  required
                  v-model="form.firstName"
                />
              </div>
              <div class="form-group-dark flex-1">
                <label>Фамилия</label>
                <input
                  type="text"
                  placeholder="Фамилия"
                  required
                  v-model="form.lastName"
                />
              </div>
            </div>
            <div class="form-group-dark">
              <label>Тип услуги</label>
              <input
                type="text"
                placeholder="Тип услуги"
                required
                v-model="form.serviceType"
              />
            </div>
            <div class="form-group-dark">
              <label>Номер телефона</label>
              <input
                type="tel"
                placeholder="Номер +998"
                required
                v-model="form.phone"
              />
            </div>
            <button
              type="submit"
              class="btn btn-green w-full py-4 md:py-4.5 mt-4"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Отправлено!" : "Начать проект" }}
            </button>
          </form>
        </div>

        <!-- Brand Card -->
        <div
          class="cta-brand-card"
        >
          <div class="flex items-center justify-center mb-auto mt-auto">
            <img
              src="https://stately-travesseiro-8aedf9.netlify.app/assets/images/logo-full.png"
              alt="VEZRA STUDIO"
              class="brand-logo"
            >
          </div>
          <div
            class="w-full border-t border-white/10 pt-4 md:pt-6 text-sm text-white/70 leading-[1.5]"
          >
            <p>
              Мы переосмысливаем бренды, создавая визуальные решения для новой
              digital-эры.
            </p>
            <span class="block mt-2 font-bold text-white">Vezra Studio</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const form = ref({
  firstName: "",
  lastName: "",
  serviceType: "",
  phone: "",
})

const isSubmitting = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate form submission
  setTimeout(() => {
    alert("Спасибо! Мы свяжемся с вами.")
    form.value = {
      firstName: "",
      lastName: "",
      serviceType: "",
      phone: "",
    }
    isSubmitting.value = false
  }, 1500)
}
</script>
