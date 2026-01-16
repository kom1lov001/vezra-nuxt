<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="container navbar-inner">
      <a href="#" class="logo">
        <img src="https://stately-travesseiro-8aedf9.netlify.app/assets/images/logo-full.png" alt="VEZRA STUDIO" class="logo-img">
      </a>

      <!-- Desktop Menu -->
      <div class="nav-pill">
        <a href="#about">О нас</a>
        <a href="#services">Услуги</a>
        <a href="#cases">Портфолио</a>
        <a href="#cta">Контакт</a>
      </div>

      <a href="#cta" class="btn-header">
        Стать клиентом
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
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = useState('mobileMenuOpen', () => false)

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
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href') || '')
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
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
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
    @apply text-white font-medium opacity-90;
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
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @apply text-white rounded-full;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;
  padding: 0.625rem 1rem;
  font-size: 0.75rem;

  @media (min-width: 640px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  &:hover {
    background-color: #fff;
    @apply text-black;
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
  @apply w-full h-0.5 bg-white rounded;
  transition: 0.3s;
}
</style>
