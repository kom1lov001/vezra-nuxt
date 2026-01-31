<template>
  <footer class="footer-dark">
    <div class="container footer-content">
      <div class="logo">
        <img
          src="/images/logo-full.png"
          alt="VEZRA STUDIO"
          class="footer-logo"
        >
      </div>
      <div class="footer-links">
        <a href="#cases">{{ $t('footer.portfolio') }}</a>
        <a href="#about">{{ $t('footer.about') }}</a>
        <a href="#contact">{{ $t('footer.contacts') }}</a>
        <a href="mailto:boychiboev19@icloud.com" class="flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          boychiboev19@icloud.com
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-logo {
  height: 1.5rem;
  width: auto;
}
</style>
