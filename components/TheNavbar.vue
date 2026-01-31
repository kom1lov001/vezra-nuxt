<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="container navbar-inner">
      <a href="#" class="logo">
        <img src="/images/logo-full.png" alt="VEZRA STUDIO" class="logo-img">
      </a>

      <!-- Desktop Menu -->
      <div class="nav-pill">
        <a href="#about">{{ $t('nav.about') }}</a>
        <a href="#services">{{ $t('nav.services') }}</a>
        <a href="#cases">{{ $t('nav.portfolio') }}</a>
        <a href="#cta">{{ $t('nav.contact') }}</a>
      </div>

      <a href="#cta" class="btn-header">
        {{ $t('nav.becomeClient') }}
      </a>

      <!-- Mobile Burger -->
      <button
        class="burger-btn"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="burger-line" :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"></span>
        <span class="burger-line" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
        <span class="burger-line" :class="{ '-rotate-45 -translate-y-1.5': isMobileMenuOpen }"></span>
      </button>

      <!-- Language Switcher -->
      <div class="lang-switcher">
        <button
          v-for="locale in locales"
          :key="locale.code"
          @click="switchLocale(locale.code as 'ru' | 'uz' | 'en')"
          :class="{ active: $i18n.locale.value === locale.code }"
          class="lang-btn"
        >
          {{ locale.code.toUpperCase() }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = useState('mobileMenuOpen', () => false)

const { $i18n } = useNuxtApp()

const locales = [
  { code: 'ru', name: 'Русский' },
  { code: 'uz', name: 'O\'zbek' },
  { code: 'en', name: 'English' },
]

const switchLocale = (code: 'ru' | 'uz' | 'en') => {
  $i18n.locale.value = code
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLElement).getAttribute('href') || ''
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease;
}

.navbar.menu-open {
  transform: translateY(-100%);
  opacity: 0;
}

.navbar-inner {
  @apply max-w-[1160px] mx-auto px-4 sm:px-6 flex justify-between items-center;
}

.logo-img {
  height: 2rem;
  width: auto;
  display: block;
}

.nav-pill {
  @apply items-center;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display: none;

  @media (min-width: 769px) {
    display: flex;
    gap: 1.25rem;
    padding: 0.625rem 1.875rem;
  }

  @media (min-width: 1024px) {
    gap: 1.875rem;
    padding: 0.625rem 2rem;
  }

  a {
    @apply text-black font-medium opacity-80;
    font-family: 'Nunito', sans-serif;
    font-size: 0.75rem;

    @media (min-width: 1024px) {
      font-size: 0.875rem;
    }

    &:hover {
      opacity: 1;
    }
  }
}

.btn-header {
  background-color: #5485E8;
  color: white;
  border-radius: 9999px;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;
  padding: 0.625rem 1rem;
  font-size: 0.75rem;

  @media (min-width: 640px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  &:hover {
    background-color: #436bc4;
    transform: translateY(-2px);
  }
}

.burger-btn {
  @apply flex-col justify-between bg-transparent border-0 cursor-pointer z-[1002] p-0;
  display: flex;
  width: 1.5rem;
  height: 1.125rem;

  @media (min-width: 769px) {
    display: none;
  }
}

.burger-line {
  @apply w-full h-0.5 bg-black rounded;
  transition: 0.3s;
}

.lang-switcher {
  @apply flex items-center gap-1;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
}

.lang-btn {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: #5485E8;
    color: white;
  }
}
</style>
