<template>
  <div>
    <TheNavbar />
    <TheMobileMenu />

    <main>
      <!-- Hero Section -->
      <header class="hero">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <h1 class="hero-title">
            VEZRA - СОЗДАЁМ ДИЗАЙН<br />
            КОТОРЫЙ РАБОТАЕТ
          </h1>
          <p class="hero-subtitle">
            Мы — студия полного цикла, предоставляющая услуги в области
            стратегии, дизайна и креатива, которая помогает как начинающим, так
            и уже состоявшимся брендам расти быстрее.
          </p>
          <div class="hero-buttons">
            <a href="#cta" class="btn btn-primary">Обсудить проект</a>
            <a href="#cases" class="btn btn-white">
              Наши кейсы
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                class="ml-1.5"
              >
                <path
                  d="M6 1L6 11M6 11L1 6M6 11L11 6"
                  stroke="#333"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section id="cases" class="py-16 sm:py-20 md:py-24 lg:py-32">
        <div class="container">
          <div class="mt-12 sm:mt-16 flex justify-center w-full">
            <img
              src="https://stately-travesseiro-8aedf9.netlify.app/assets/images/clients-grid.png"
              alt="Наши клиенты - Vezra Studio работает с компаниями по всему миру"
              class="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 sm:py-20 md:py-24 lg:py-32">
        <div class="container">
          <div class="flex flex-col items-center mb-8 sm:mb-12 text-center">
            <span class="tag-pill">O Vezra Studio</span>
            <h2 class="section-title">
              МЫ ДАЁМ ВАМ РЕЗУЛЬТАТ<br />
              ВЫ ПОЛУЧИТЕ ПОВЫШЕННОСТЬ
            </h2>
            <p class="max-w-[700px] mx-auto text-center leading-[1.6] px-4">
              Vezra — мы создаём дизайн, который формирует впечатление о бренде
              и помогает бизнесу расти. Наш подход основан на технологичности,
              минимализме и внимании к деталям.
            </p>
          </div>

          <!-- Metrics Strip -->
          <div ref="metricsStrip" class="metrics-strip mx-auto">
            <div class="metric-item">
              <span class="metric-label">Клиенты в разных странах</span>
              <span class="metric-val"><span ref="metric1">0</span>+</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="metric-label">Успешных проектов за год</span>
              <span class="metric-val"><span ref="metric2">0</span>+</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="metric-label">Клиенты по рекомендации</span>
              <span class="metric-val"><span ref="metric3">0</span>%</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <span class="metric-label">Отзывы от покупатели</span>
              <span class="metric-val"><span ref="metric4">0.0</span>/5.0</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <ServicesSection />

      <!-- FAQ Section -->
      <FAQSection />

      <!-- CTA Section -->
      <CTASection />

      <!-- Footer -->
      <TheFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const metricsStrip = ref<HTMLElement | null>(null);
const metric1 = ref<HTMLElement | null>(null);
const metric2 = ref<HTMLElement | null>(null);
const metric3 = ref<HTMLElement | null>(null);
const metric4 = ref<HTMLElement | null>(null);

const animateCounter = (
  element: HTMLElement | null,
  target: number,
  duration: number = 2,
  suffix: string = ""
) => {
  if (!element) return;

  gsap.to(
    { val: 0 },
    {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate: function () {
        const value = (this.targets()[0] as any).val;
        if (target % 1 !== 0) {
          element.textContent = value.toFixed(1);
        } else {
          element.textContent = Math.round(value) + suffix;
        }
      },
    }
  );
};

onMounted(() => {
  if (!import.meta.client) return;

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLElement)
        .getAttribute("href")
        ?.slice(1);
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  const runAnimations = () => {
    animateCounter(metric1.value, 5, 2);
    animateCounter(metric2.value, 20, 2);
    animateCounter(metric3.value, 92, 2);
    animateCounter(metric4.value, 4.9, 2);
  };

  ScrollTrigger.create({
    trigger: metricsStrip.value,
    start: "top 80%",
    onEnter: runAnimations,
    onEnterBack: runAnimations,
  });
});

useHead({
  htmlAttrs: { lang: "ru" },
  title:
    "Vezra Studio — Создаём дизайн, который работает | Дизайн-студия полного цикла",
  meta: [
    {
      name: "description",
      content:
        "Vezra Studio — профессиональная дизайн-студия полного цикла. Создаём дизайн, который формирует впечатление о бренде и помогает бизнесу расти. Услуги: брендинг, веб-дизайн, UI/UX, графический дизайн.",
    },
    {
      name: "keywords",
      content:
        "Vezra Studio, дизайн студия, веб дизайн, UI UX дизайн, брендинг, графический дизайн, дизайн агентство, Ташкент, Узбекистан",
    },
    { name: "author", content: "Vezra Studio" },
    { name: "robots", content: "index, follow" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://vezra-studio.netlify.app/" },
    {
      property: "og:title",
      content: "Vezra Studio — Создаём дизайн, который работает",
    },
    {
      property: "og:description",
      content:
        "Мы — студия полного цикла, предоставляющая услуги в области стратегии, дизайна и креатива. Помогаем брендам расти быстрее.",
    },
    {
      property: "og:image",
      content: "https://vezra-studio.netlify.app/images/og-image.jpg",
    },
    { property: "og:site_name", content: "Vezra Studio" },
    { property: "og:locale", content: "ru_RU" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://vezra-studio.netlify.app/" },
    {
      name: "twitter:title",
      content: "Vezra Studio — Создаём дизайн, который работает",
    },
    {
      name: "twitter:description",
      content:
        "Мы — студия полного цикла, предоставляющая услуги в области стратегии, дизайна и креатива.",
    },
    {
      name: "twitter:image",
      content: "https://vezra-studio.netlify.app/images/og-image.jpg",
    },

    // Additional SEO
    { name: "theme-color", content: "#000000" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/images/logo-full.png",
    },
    { rel: "canonical", href: "https://vezra-studio.netlify.app/" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vezra Studio",
        url: "https://vezra-studio.netlify.app/",
        logo: "https://vezra-studio.netlify.app/images/logo-full.png",
        description:
          "Vezra Studio — профессиональная дизайн-студия полного цикла. Создаём дизайн, который формирует впечатление о бренде и помогает бизнесу расти.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: "Russian",
        },
        sameAs: ["https://instagram.com/vezrastudio"],
      }),
    },
  ],
});
</script>
