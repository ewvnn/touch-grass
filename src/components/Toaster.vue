<script setup>
import { toasts, toast as api } from '@/lib/toast'

function subtleClasses(type) {
    const map = {
        success: 'bg-success-subtle text-success-emphasis border border-success-subtle',
        error: 'bg-danger-subtle  text-danger-emphasis  border border-danger-subtle',
        warning: 'bg-warning-subtle text-warning-emphasis border border-warning-subtle',
        info: 'bg-primary-subtle text-primary-emphasis border border-primary-subtle',
    }
    return map[type] || map.info
}
</script>

<template>
    <div class="toast-zone position-fixed start-50 translate-middle-x p-3"
        style="z-index:1080; top:1rem; pointer-events:none;" aria-live="polite" aria-atomic="true">
        <div v-for="t in toasts" :key="t.id" class="toast show shadow-lg rounded-3 mb-2" :class="subtleClasses(t.type)"
            role="status" style="pointer-events:auto; min-width:280px; max-width:min(420px, 92vw);"
            >
            <div class="d-flex align-items-center">
                <div class="toast-body fw-medium">{{ t.message }}</div>
                <button type="button" class="btn-close me-2 m-auto" aria-label="Close" @click="api.dismiss(t.id)" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.toast {
    animation: fadeIn .12s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-4px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}
</style>
