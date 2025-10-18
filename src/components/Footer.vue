  <!-- FOOTER -->
   <template>
  <footer class="footer-tg pt-5 mt-5 border-top">
    <div class="container">
      <div class="row gy-4">
        <div class="col-12 col-lg-4">
          <div class="d-flex align-items-center gap-2 mb-2">
          <svg class="grass-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img"
            aria-label="Touch Grass logo">
            <rect x="0" y="44" width="64" height="6" fill="#2d5016" />
            <path d="M8 44 q2-10 6-16 q-2 8 2 16 Z" fill="#2d5016" />
            <path d="M16 44 q2-12 8-20 q-3 10 1 20 Z" fill="#2d5016" />
            <path d="M24 44 q3-14 10-24 q-4 12 0 24 Z" fill="#2d5016" />
            <path d="M32 44 q2-12 8-20 q-3 10 0 20 Z" fill="#2d5016" />
            <path d="M40 44 q3-14 10-24 q-4 12 0 24 Z" fill="#2d5016" />
            <path d="M48 44 q2-10 6-16 q-2 8 2 16 Z" fill="#2d5016" />
          </svg>
            <span class="fw-semibold">Touch Grass</span>
          </div>
          <p class="text-secondary small mb-0">
            Event discovery for the outdoorsy in Singapore. Parks, trails, farmers’ markets, community fests and more.
          </p>
        </div>

        <div class="col-6 col-lg-2">
          <h6 class="fw-semibold mb-3">Explore</h6>
          <ul class="list-unstyled small">
            <li><a class="link-body-emphasis" href="/collections">Collections</a></li>
            <li><a class="link-body-emphasis" href="/today">Today</a></li>
            <li><a class="link-body-emphasis" href="/weekend">This Weekend</a></li>
            <li><a class="link-body-emphasis" href="/map">Map</a></li>
          </ul>
        </div>

        <div class="col-6 col-lg-2">
          <h6 class="fw-semibold mb-3">Support</h6>
          <ul class="list-unstyled small">
            <li><a class="link-body-emphasis" href="/faq">FAQ</a></li>
            <li><a class="link-body-emphasis" href="/contact">Contact</a></li>
            <li><a class="link-body-emphasis" href="/guidelines">Community Guidelines</a></li>
            <li><a class="link-body-emphasis" href="/privacy">Privacy</a></li>
          </ul>
        </div>

        <div class="col-12 col-lg-4">
          <h6 class="fw-semibold mb-3">Stay updated</h6>
          <form class="newsletter-form" action="/subscribe" method="post">
            <div class="input-group input-group-lg rounded-pill overflow-hidden shadow-sm">
              <span class="input-group-text bg-transparent border-0 ps-3" id="email-addon">
                <i class="bi bi-envelope"></i>
              </span>
              <input type="email" class="form-control border-0" name="email" placeholder="Email address"
                aria-label="Email address" aria-describedby="email-addon" required>
              <button class="btn btn-tg me-1 my-1 px-4 rounded-pill" type="submit">Subscribe</button>
            </div>
            <p class="form-text small mt-2">By subscribing you accept our <a href="/privacy">Privacy Policy</a>.</p>
          </form>
        </div>
      </div>

      <hr class="my-4 opacity-25">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 pb-4 small">
        <span class="text-secondary">© <span id="year"></span> Touch Grass. All rights reserved.</span>
        <div class="d-flex align-items-center gap-3">
          <a class="link-body-emphasis" href="https://www.instagram.com" aria-label="Instagram"><i
              class="bi bi-instagram"></i></a>
          <a class="link-body-emphasis" href="https://www.tiktok.com" aria-label="TikTok"><i
              class="bi bi-tiktok"></i></a>
          <a class="link-body-emphasis" href="https://www.youtube.com" aria-label="YouTube"><i
              class="bi bi-youtube"></i></a>
        </div>
      </div>
    </div>
</footer>
</template>

<style>
/* Footer */
.footer-tg {
  background:
    radial-gradient(800px 120px at 20% -40px, rgba(32,201,151,.10), transparent),
    radial-gradient(1000px 120px at 80% -60px, rgba(32,201,151,.08), transparent),
    var(--tg-soft);
}
.footer-tg a:hover { color: var(--tg-primary); }
.footer-tg .form-text a { text-decoration: underline; }
</style>
