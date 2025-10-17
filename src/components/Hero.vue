<!-- Hero.vue -->
<template>
  <section class="py-5 py-md-6 text-center bg-body">
    <div class="container">
      <h1 class="display-5 fw-bold text-dark mb-3">
        Find Affordable Events in Singapore
      </h1>

      <p class="lead text-secondary mx-auto" style="max-width: 48rem;">
        Discover budget-friendly activities that won't break the bank but will make memories!
      </p>

      <form class="mt-4 mt-md-5 mx-auto" role="search" style="max-width: 42rem;" @submit.prevent="onSubmit">
        <div class="d-flex gap-2">
          <label for="heroSearchInput" class="visually-hidden">Search for events</label>
          <input
            id="heroSearchInput"
            v-model.trim="query"
            type="text"
            class="form-control form-control-lg rounded-pill ps-4"
            placeholder="Search for events..."
            autocomplete="off"
            aria-label="Search for events"
          />
          <button
            type="submit"
            class="btn btn-success btn-lg rounded-pill px-4"
            :disabled="!query"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Two integration options:
// 1) Emit 'search' so parent can handle results rendering
// 2) If no listener, fall back to navigate to /search?q=...
const emit = defineEmits(['search'])

const query = ref('')

function onSubmit () {
  if (!query.value) return

  // Option 1: parent handles the search
  const handled = emit('search', query.value)

  // Option 2: simple navigation fallback if no parent listener
  // If your router is available, prefer router.push:
  //   router.push({ name: 'search', query: { q: query.value } })
  if (!handled?.length) {
    const target = '/search?q=' + encodeURIComponent(query.value)
    window.location.assign(target)
  }
}
</script>

<style scoped>
/* Minor responsive polish */
@media (min-width: 768px) {
  .py-md-6 { padding-top: 4.5rem; padding-bottom: 4.5rem; }
}


</style>