<template>
  <div class="mobile-menu" :class="{ 'active': isMobileMenuOpen }">
    <!-- Top Bar with Logo and Close Button -->
    <div class="mobile-menu-top">
      <span class="mobile-menu-logo">VEZRA STUDIO</span>
      <button class="mobile-menu-close" @click="closeMenu" aria-label="Close menu">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Language Switcher (Mobile) -->
    <div class="mobile-lang-switcher">
      <button
        v-for="locale in locales"
        :key="locale.code"
        @click="switchLocale(locale.code as 'ru' | 'uz' | 'en')"
        :class="{ active: $i18n.locale.value === locale.code }"
        class="lang-btn"
      >
        {{ locale.name }}
      </button>
    </div>

    <!-- Menu Items with GSAP animation -->
    <div class="mobile-menu-items" ref="menuItemsRef">
      <a href="#about" class="mobile-nav-link" @click.prevent="handleLinkClick">{{ $t('nav.about') }}</a>
      <a href="#services" class="mobile-nav-link" @click.prevent="handleLinkClick">{{ $t('nav.services') }}</a>
      <a href="#cases" class="mobile-nav-link" @click.prevent="handleLinkClick">{{ $t('nav.portfolio') }}</a>
      <a href="#cta" class="mobile-nav-link" @click.prevent="handleLinkClick">{{ $t('nav.contact') }}</a>
      <a href="#cta" class="btn btn-primary mt-8 mobile-nav-link" @click.prevent="handleLinkClick">{{ $t('nav.becomeClient') }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { $i18n } = useNuxtApp()

const locales = [
  { code: 'ru', name: 'Русский' },
  { code: 'uz', name: 'O\'zbek' },
  { code: 'en', name: 'English' },
]

const switchLocale = (code: string) => {
  $i18n.locale.value = code
}

const isMobileMenuOpen = useState('mobileMenuOpen', () => false)
const menuItemsRef = ref<HTMLElement | null>(null)
let gsapCtx: gsap.Context | null = null

const animateIn = () => {
  nextTick(() => {
    if (!menuItemsRef.value) return

    // Create GSAP context for cleanup
    gsapCtx = gsap.context(() => {
      const items = menuItemsRef.value?.querySelectorAll('.mobile-nav-link')
      if (!items) return

      // Animate items in with stagger
      gsap.fromTo(items,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        }
      )

      // Animate logo
      gsap.fromTo('.mobile-menu-logo',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      )

      // Animate close button
      gsap.fromTo('.mobile-menu-close',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', delay: 0.1 }
      )
    }, menuItemsRef.value)
  })
}

const animateOut = (callback?: () => void) => {
  if (!menuItemsRef.value) {
    callback?.()
    return
  }

  const items = menuItemsRef.value.querySelectorAll('.mobile-nav-link')
  if (!items || items.length === 0) {
    callback?.()
    return
  }

  // Animate items out
  gsap.to(items, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    stagger: 0.05,
    ease: 'power2.in',
    onComplete: () => {
      if (gsapCtx) {
        gsapCtx.revert()
        gsapCtx = null
      }
      callback?.()
    }
  })
}

const closeMenu = () => {
  animateOut(() => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
  })
}

const handleLinkClick = (e: Event) => {
  const target = (e.currentTarget as HTMLElement)?.getAttribute('href')
  animateOut(() => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''

    if (target) {
      setTimeout(() => {
        const element = document.querySelector(target)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  })
}

watch(isMobileMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    animateIn()
  } else {
    document.body.style.overflow = ''
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (gsapCtx) {
    gsapCtx.revert()
  }
})
</script>

<style scoped>
.mobile-menu-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  z-index: 10;
}

.mobile-menu-logo {
  color: #000;
  font-weight: 700;
  font-family: 'Manrope', sans-serif;
  font-size: 1.125rem;
}

.mobile-menu-close {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  color: #000;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.mobile-menu-close:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.mobile-lang-switcher {
  display: flex;
  gap: 0.5rem;
  margin-top: 5rem;
}

.mobile-lang-switcher .lang-btn {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s;
}

.mobile-lang-switcher .lang-btn.active {
  background-color: #5485E8;
  color: white;
}

.mobile-menu-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .mobile-menu-items {
    gap: 2rem;
  }
}
</style>
