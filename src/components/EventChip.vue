<script setup>
import { computed } from 'vue'
import { tagStyles, badgeStyles } from '@/lib/tagColors'

const props = defineProps({
    label: { type: String, required: true },
    kind: { type: String, default: 'tag' },
    dense: Boolean
})

const styleObj = computed(() => {
    const { bg, fg } =
        props.kind === 'badge' ? badgeStyles(props.label) : tagStyles(props.label)
    return { '--chip-bg': bg, '--chip-fg': fg }
})
</script>

<template>
    <span class="event-chip" :class="[{ dense }, kind]" :style="styleObj"
        :aria-label="`${kind === 'badge' ? 'Badge' : 'Tag'}: ${label}`">
        {{ label }}
    </span>
</template>

<style scoped>
.event-chip {
    display: inline-flex;
    align-items: center;
    padding: .25rem .55rem;
    border-radius: 9999px;
    font-size: 11.5px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    background: var(--chip-bg);
    color: var(--chip-fg);
}

.event-chip.dense {
    padding: .2rem .45rem;
    font-size: 10.5px
}

.event-chip.badge {
    font-size: 12px
}
</style>
