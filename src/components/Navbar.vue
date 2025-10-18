<template>
  <nav class="navbar navbar-expand-lg navbar-touchgrass" aria-label="Touch Grass main navigation">
    <div class="container">
      <!-- Left: Brand -->
      <a class="navbar-brand d-flex align-items-center gap-2" href="/">
        <!-- Inline grass SVG logo -->
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
        <span class=''>Touch Grass</span>
      </a>

      <!-- Mobile toggler (collapse below lg) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#tgNav"
        aria-controls="tgNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="tgNav">
        <!-- Middle: Search -->
        <form id="eventSearchForm" class="mx-lg-auto my-3 my-lg-0 w-100" role="search" action="/search" method="get">
          <div class="input-group">
            <span class="input-group-text" id="search-addon"><i class="bi bi-search"></i></span>
            <input type="search" class="form-control" name="q" placeholder="Search events" aria-label="Search events"
              aria-describedby="search-addon" />
            <button class="btn btn-tg border border-success-subtle" type="submit">Search</button>
          </div>
        </form>

        <!-- Right: Icons -->
        <ul class="navbar-nav ms-lg-3 align-items-lg-center gap-lg-2 ">
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2" href="/profile" aria-label="Profile" title="Profile">
            <i class="bi bi-person-circle fs-5"></i>
            <span class="d-inline d-lg-none d-xl-inline">Profile</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2" href="/calendar" aria-label="Favourites" title="Favourites">
            <i class="bi bi-calendar fs-5"></i>
            <span class="d-inline d-lg-none d-xl-inline">Calendar</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center gap-2" href="/itinerary" aria-label="Itinerary planner" title="Itinerary planner">
            <i class="bi bi-signpost-2 fs-5"></i>
            <span class="d-inline d-lg-none d-xl-inline">Itinerary</span>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<style>
/* nav bar -- standard for all pages */
    :root {
      --tg-primary: #7bd47b;
      --tg-secondary: #51b058;
      --tg-text: #0f172a; /* dark slate for contrast */
    }

    .navbar-touchgrass {
      background-color: var(--tg-secondary);
      border-bottom: 1px solid rgba(15, 23, 42, 0.06);
    }

    .navbar-touchgrass .navbar-brand {
      font-weight: 700;
      color: var(--tg-text);
      letter-spacing: 0.2px;
    }

    .navbar-touchgrass .nav-link {
      color: var(--tg-text);
      border-radius: .75rem;
      padding: .5rem .6rem;
    }
    .navbar-touchgrass .nav-link:hover,
    .navbar-touchgrass .nav-link:focus {
      background-color: rgba(182, 250, 188, 0.35);
      color: var(--tg-text);
    }

    .btn-tg {
      background-color: var(--tg-primary);
      border-color: var(--tg-primary);
      color: #0a0a0a;
      font-weight: 600;
    }
    .btn-tg:hover,
    .btn-tg:focus {
      filter: brightness(0.95);
      color: #0a0a0a;
    }

    .form-control:focus {
      border-color: var(--tg-primary);
      box-shadow: 0 0 0 .25rem rgba(182, 250, 188, 0.4);
    }

    /* Center search on large screens and keep good widths */
    @media (min-width: 992px) { /* lg */
      #eventSearchForm {
        min-width: 460px;
        max-width: 720px;
        width: 50%;
      }
    }

    /* Simple grass logo sizing */
    .grass-logo {
      width: 28px;
      height: 28px;
    }

</style>