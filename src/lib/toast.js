import { reactive } from 'vue'

let uid = 0
export const toasts = reactive([])

function remove(id) {
    const i = toasts.findIndex(t => t.id === id)
    if (i !== -1) {
        const t = toasts[i]
        if (t.timeoutId) clearTimeout(t.timeoutId)
        toasts.splice(i, 1)
    }
}

// Show a toast
function showToast({ message, type = 'info', duration = 3500 }) {
    const valid = new Set(['success', 'error', 'warning', 'info'])
    const safeType = valid.has(type) ? type : 'info'

    const id = ++uid
    const timeoutId = setTimeout(() => remove(id), duration)
    toasts.push({ id, message, type: safeType, timeoutId })
    return id
}

export const toast = {
    show: (msg, d) => showToast({ message: msg, duration: d }),
    success: (msg, d) => showToast({ message: msg, type: 'success', duration: d }),
    error: (msg, d) => showToast({ message: msg, type: 'error', duration: d }),
    warn: (msg, d) => showToast({ message: msg, type: 'warning', duration: d }),
    info: (msg, d) => showToast({ message: msg, type: 'info', duration: d }),
    dismiss: remove,
}
