<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { signUpWithEmail, signInWithEmail, resetPassword } from '../services/auth'

const router = useRouter()
const route = useRoute()

// modes: 'login' | 'register' | 'reset'
const mode = ref('login')

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const displayName = ref('')

const showPassword = ref(false)
const loading = ref(false)
const notice = ref({ type: '', text: '' })
const fieldErr = ref({ email: '', password: '', confirmPassword: '' })

const title = computed(() =>
    mode.value === 'login'
        ? 'Welcome back'
        : mode.value === 'register'
            ? 'Create your account'
            : 'Reset your password'
)

const cta = computed(() =>
    mode.value === 'login'
        ? 'Sign in'
        : mode.value === 'register'
            ? 'Create account'
            : 'Send reset email'
)

function friendlyError(code, fallback) {
    switch (code) {
        case 'auth/invalid-email': return 'Please enter a valid email.'
        case 'auth/missing-password': return 'Enter your password.'
        case 'auth/weak-password': return 'Use at least 8 characters.'
        case 'auth/email-already-in-use': return 'This email is already registered.'
        case 'auth/user-not-found': return 'No account found with that email.'
        case 'auth/wrong-password': return 'Incorrect password.'
        case 'auth/too-many-requests': return 'Too many attempts. Try again in a minute.'
        default: return fallback || 'Something went wrong. Please try again.'
    }
}

function resetErrors() {
    notice.value = { type: '', text: '' }
    fieldErr.value = { email: '', password: '', confirmPassword: '' }
}

function switchMode(next) {
    mode.value = next
    resetErrors()
    if (next === 'reset') { password.value = ''; confirmPassword.value = '' }
}

async function submit() {
    resetErrors()

    // basic client validation
    if (!email.value) fieldErr.value.email = 'Email is required.'
    if (mode.value !== 'reset' && !password.value) fieldErr.value.password = 'Password is required.'
    if (mode.value === 'register' && password.value.length < 6) fieldErr.value.password = 'Use at least 8 characters.'
    if (mode.value === 'register' && password.value !== confirmPassword.value) fieldErr.value.confirmPassword = 'Passwords do not match.'
    if (Object.values(fieldErr.value).some(Boolean)) return

    loading.value = true
    try {
        if (mode.value === 'login') {
            await signInWithEmail(email.value, password.value)
            const redirect = (route.query.redirect || '/').toString()
            router.replace(redirect)
        } else if (mode.value === 'register') {
            await signUpWithEmail(email.value, password.value, displayName.value)
            router.replace('/')
        } else {
            await resetPassword(email.value)
            notice.value = { type: 'success', text: 'We sent a password reset link to your email.' }
            mode.value = 'login'
        }
    } catch (e) {
        notice.value = { type: 'error', text: friendlyError(e.code, e.message) }
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <section class="auth-wrap">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6 col-md-8">
                    <div class="card shadow-sm auth-card">
                        <div class="card-body p-4 p-md-5">
                            <div class="text-center mb-4">
                                <div class="brand d-inline-flex align-items-center gap-2">
                                    <svg class="grass-logo" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                        role="img" aria-label="Touch Grass logo">
                                        <rect x="0" y="44" width="64" height="6" fill="currentColor" />
                                        <path d="M8 44 q2-10 6-16 q-2 8 2 16 Z" fill="currentColor" />
                                        <path d="M16 44 q2-12 8-20 q-3 10 1 20 Z" fill="currentColor" />
                                        <path d="M24 44 q3-14 10-24 q-4 12 0 24 Z" fill="currentColor" />
                                        <path d="M32 44 q2-12 8-20 q-3 10 0 20 Z" fill="currentColor" />
                                        <path d="M40 44 q3-14 10-24 q-4 12 0 24 Z" fill="currentColor" />
                                        <path d="M48 44 q2-10 6-16 q-2 8 2 16 Z" fill="currentColor" />
                                    </svg>
                                    <h1 class="h3 m-0">Touch Grass</h1>
                                </div>
                                <p class="h2 fw-bold mt-3 mb-0">{{ title }}</p>
                            </div>

                            <form @submit.prevent="submit" novalidate>
                                <!-- Name (register only) -->
                                <div v-if="mode === 'register'" class="mb-3">
                                    <label class="form-label" for="displayName">Name</label>
                                    <input id="displayName" v-model.trim="displayName" type="text"
                                        class="form-control form-control-lg" placeholder="Your name" />
                                </div>

                                <!-- Email -->
                                <div class="mb-3">
                                    <label class="form-label" for="email">Email</label>
                                    <input id="email" v-model.trim="email" type="email"
                                        :class="['form-control', 'form-control-lg', { 'is-invalid': fieldErr.email }]"
                                        placeholder="name@example.com" autocomplete="username" />
                                    <div class="invalid-feedback">{{ fieldErr.email }}</div>
                                </div>

                                <!-- Password (hidden on reset) -->
                                <div v-if="mode !== 'reset'" class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <label class="form-label" for="password">Password</label>
                                        <small v-if="mode === 'register'" class="text-muted">min 6 characters</small>
                                    </div>
                                    <div class="input-group input-group-lg has-validation">
                                        <input id="password" :type="showPassword ? 'text' : 'password'"
                                            v-model="password"
                                            :class="['form-control', { 'is-invalid': fieldErr.password }]"
                                            placeholder="Enter password" autocomplete="current-password" />
                                        <button class="btn btn-outline-secondary" type="button"
                                            @click="showPassword = !showPassword" :aria-pressed="showPassword">
                                            <i :class="['bi', showPassword ? 'bi-eye-slash' : 'bi-eye']"></i>
                                        </button>
                                        <div class="invalid-feedback d-block">{{ fieldErr.password }}</div>
                                    </div>
                                </div>

                                <!-- Confirm (register only) -->
                                <div v-if="mode === 'register'" class="mb-3">
                                    <label class="form-label" for="confirm">Confirm password</label>
                                    <input id="confirm" :type="showPassword ? 'text' : 'password'"
                                        v-model="confirmPassword"
                                        :class="['form-control', 'form-control-lg', { 'is-invalid': fieldErr.confirmPassword }]"
                                        placeholder="Re-enter password" autocomplete="new-password" />
                                    <div class="invalid-feedback">{{ fieldErr.confirmPassword }}</div>
                                </div>

                                <!-- Submit -->
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-tg btn-lg" :disabled="loading">
                                        <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status"
                                            aria-hidden="true"></span>
                                        {{ cta }}
                                    </button>
                                </div>

                                <!-- Notice -->
                                <div v-if="notice.text" class="mt-3">
                                    <div :class="['alert', notice.type === 'success' ? 'alert-success' : 'alert-danger']"
                                        role="alert">
                                        {{ notice.text }}
                                    </div>
                                </div>
                            </form>

                            <!-- Links -->
                            <div class="mt-3 d-flex flex-wrap gap-2 justify-content-between">
                                <button v-if="mode !== 'login'" class="btn btn-link px-0" @click="switchMode('login')">
                                    Have an account? Sign in
                                </button>
                                <button v-if="mode !== 'register'" class="btn btn-link px-0"
                                    @click="switchMode('register')">
                                    New here? Register
                                </button>
                                <button v-if="mode !== 'reset'" class="btn btn-link px-0" @click="switchMode('reset')">
                                    Forgot password?
                                </button>
                            </div>
                        </div>
                    </div>

                    <p class="text-center text-muted small mt-3">
                        By continuing you agree to our terms & privacy policy.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.auth-wrap {
    padding: clamp(32px, 6vw, 64px) 0;
    background:
        radial-gradient(1200px 400px at 50% -200px, rgba(32, 109, 37, .14), transparent 70%),
        linear-gradient(to bottom, rgba(32, 109, 37, .03), transparent 200px);
}

.auth-card {
    border: 0;
    border-radius: 1rem;
}

.brand {
    color: var(--tg-secondary);
}

.grass-logo {
    width: 24px;
    height: 24px;
    color: var(--tg-secondary);
}

.btn-tg {
    background-color: var(--tg-primary);
    border-color: var(--tg-primary);
    color: #fff;
    font-weight: 600;
}

.btn-tg:hover {
    filter: brightness(.95);
    color: #0a0a0a;
}

.btn-link {
    color: var(--tg-secondary);
    text-decoration: none;
}

.btn-link:hover {
    text-decoration: underline;
}

.input-group .btn {
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
}

.form-control,
.btn,
.card {
    border-radius: .75rem;
}
</style>
