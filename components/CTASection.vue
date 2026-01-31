<template>
  <section id="cta" class="cta-dark scroll-animate">
    <div class="container">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="section-title">
          {{ $t('cta.title') }}
        </h2>
        <p class="max-w-[700px] mx-auto text-center text-black/70 px-4">
          {{ $t('cta.description') }}
        </p>
      </div>

      <div class="cta-content-grid">
        <!-- Form Column -->
        <div class="pr-0 md:pr-8">
          <h3 class="text-lg md:text-xl font-bold mb-2">
            {{ $t('cta.formTitle') }}
          </h3>
          <p class="text-sm text-black/60 mb-6 md:mb-8 font-[family-name:var(--font-secondary)]">
            {{ $t('cta.formDescription') }}
          </p>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 md:gap-6">
            <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div class="form-group-dark flex-1">
                <label>{{ $t('cta.firstName') }}</label>
                <input
                  type="text"
                  :placeholder="$t('cta.firstName')"
                  required
                  v-model="form.firstName"
                />
              </div>
              <div class="form-group-dark flex-1">
                <label>{{ $t('cta.lastName') }}</label>
                <input
                  type="text"
                  :placeholder="$t('cta.lastName')"
                  required
                  v-model="form.lastName"
                />
              </div>
            </div>
            <div class="form-group-dark">
              <label>{{ $t('cta.serviceType') }}</label>
              <input
                type="text"
                :placeholder="$t('cta.serviceType')"
                required
                v-model="form.serviceType"
              />
            </div>
            <div class="form-group-dark">
              <label>{{ $t('cta.phone') }}</label>
              <input
                type="tel"
                :placeholder="$t('cta.phonePlaceholder')"
                required
                v-model="form.phone"
              />
            </div>
            <button
              type="submit"
              class="btn btn-green w-full py-4 md:py-4.5 mt-4"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? $t('cta.submitting') : $t('cta.submit') }}
            </button>

            <!-- Success Message -->
            <p v-if="success" class="text-green-600 text-sm mt-3">
              ✅ {{ $t('cta.success') }}
            </p>

            <!-- Error Message -->
            <p v-if="error" class="text-red-500 text-sm mt-3">
              ❌ {{ $t('cta.error') }}
            </p>
          </form>
        </div>

        <!-- Brand Card -->
        <div class="cta-brand-card">
          <div class="flex items-center justify-center mb-auto mt-auto">
            <img
              src="/images/logo-full.png"
              alt="VEZRA STUDIO"
              class="brand-logo"
            >
          </div>
          <div class="w-full border-t border-white/10 pt-4 md:pt-6 text-sm text-white/70 leading-[1.5]">
            <p>
              {{ $t('cta.brandText') }}
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
import emailjs from 'emailjs-com'

gsap.registerPlugin(ScrollTrigger)

const { $i18n } = useNuxtApp()
const t = (key: string) => $i18n.t(key)
const config = useRuntimeConfig()

const form = ref({
  firstName: "",
  lastName: "",
  serviceType: "",
  phone: "",
})

const isSubmitting = ref(false)
const success = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  success.value = false
  error.value = false

  const payload = {
    name: `${form.value.firstName} ${form.value.lastName}`,
    email: form.value.phone,
    message: form.value.serviceType,
    time: new Date().toLocaleString('ru-RU')
  }

  try {
    await emailjs.send(
      config.public.emailService,
      config.public.emailTemplate,
      payload,
      config.public.emailKey
    )

    success.value = true
    form.value = {
      firstName: "",
      lastName: "",
      serviceType: "",
      phone: "",
    }

    setTimeout(() => {
      success.value = false
    }, 5000)

  } catch (err) {
    console.error('EmailJS error:', err)
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.brand-logo {
  height: 2.5rem;
  width: auto;
  filter: brightness(0) invert(1);
}
</style>
