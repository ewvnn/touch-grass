<!-- Footer.vue -->
<template>
  <!-- [Chunk] Main footer container -->
  <footer class="footer-tg border-top pt-5 mt-5">
    <div class="container">

      <!-- [Chunk] Brand + Members columns -->
      <div class="row gy-5 align-items-start">
        <!-- [Chunk] Brand section -->
        <div class="col-12 col-lg-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <!-- Simplified grass SVG logo -->
            <svg class="grass-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Touch Grass logo">
              <rect x="0" y="44" width="64" height="6" fill="#2d5016" />
              <path d="M8 44 q2-10 6-16 q-2 8 2 16 Z" fill="#2d5016" />
              <path d="M16 44 q2-12 8-20 q-3 10 1 20 Z" fill="#2d5016" />
              <path d="M24 44 q3-14 10-24 q-4 12 0 24 Z" fill="#2d5016" />
              <path d="M32 44 q2-12 8-20 q-3 10 0 20 Z" fill="#2d5016" />
              <path d="M40 44 q3-14 10-24 q-4 12 0 24 Z" fill="#2d5016" />
              <path d="M48 44 q2-10 6-16 q-2 8 2 16 Z" fill="#2d5016" />
            </svg>
            <span class="fw-semibold fs-5">Touch Grass</span>
          </div>
          <p class="text-secondary small mb-3">
            Event discovery for the outdoorsy in Singapore — parks, trails, markets, and community fests.
          </p>

          <!-- [Chunk] Social icons -->
          <div class="d-flex align-items-center gap-3 mt-3">
            <a class="btn btn-icon" href="https://www.instagram.com" aria-label="Instagram">
              <i class="bi bi-instagram" aria-hidden="true"></i>
            </a>
            <a class="btn btn-icon" href="https://www.tiktok.com" aria-label="TikTok">
              <i class="bi bi-tiktok" aria-hidden="true"></i>
            </a>
            <a class="btn btn-icon" href="https://www.youtube.com" aria-label="YouTube">
              <i class="bi bi-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <!-- [Chunk] Members section -->
        <div class="col-12 col-lg-6">
          <h6 class="fw-semibold mb-3">Members</h6>
          <ul class="list-unstyled small row row-cols-2 row-cols-sm-3 row-cols-md-3 g-2">
            <li><a class="link-body-emphasis" href="https://github.com/ewvnn/">Ewen</a></li>
            <li><a class="link-body-emphasis" href="#">Jia Le</a></li>
            <li><a class="link-body-emphasis" href="#">Boone</a></li>
            <li><a class="link-body-emphasis" href="#">Xiao Thong</a></li>
            <li><a class="link-body-emphasis" href="#">Fazil</a></li>
            <li><a class="link-body-emphasis" href="#">Wasil</a></li>
          </ul>
        </div>
      </div>

      <!-- [Chunk] Divider -->
      <hr class="my-4 opacity-25">

      <!-- [Chunk] Bottom bar -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 pb-4 small">
        <span class="text-secondary">© {{ year }} Touch Grass. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// [Chunk] Script handles year and smooth scrolling
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>

<style scoped>
/* [Chunk] General styling - clean, flat surface, modern minimalism */
.footer-tg {
  background-color: #ffffff;
  color: #0f172a;
}

/* [Chunk] Links styling */
.footer-tg a.link-body-emphasis {
  color: inherit;
  text-decoration: none;
}
.footer-tg a.link-body-emphasis:hover {
  text-decoration: underline;
}

/* [Chunk] Social icons with consistent shape */
.btn-icon {
  --size: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  transition: background-color 0.2s;
}
.btn-icon:hover {
  background-color: #f5f5f5;
}

/* [Chunk] Logo */
.grass-logo {
  width: 28px;
  height: 28px;
}

/* [Chunk] Text tone */
.footer-tg .text-secondary {
  color: #6b7280 !important;
}
</style>