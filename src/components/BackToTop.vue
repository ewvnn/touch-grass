<template>
    <button v-show="visible" type="button" class="btn btn-top" aria-label="Back to top" @click="toTop">
        <i class="bi bi-arrow-up"></i>
    </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)
const THRESHOLD = 160

const onScroll = () => {
    visible.value = window.scrollY > THRESHOLD
}

const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.btn-top {
    position: fixed;
    right: 16px;
    bottom: 20px;
    z-index: 40;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: #206D25;
    color: #fff;
    border: none;
    box-shadow: 0 10px 24px rgba(32, 109, 37, .25);
}

.btn-top:hover {
    filter: brightness(.96);
}
</style>
