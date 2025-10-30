<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { toast } from '@/lib/toast'
import {
    signUpWithEmail,
    signInWithEmail,
    resetPassword,
    resendVerificationEmail,
} from '@/services/auth.js'

const MIN_PASSWORD_LENGTH = 8
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const router = useRouter()
const route = useRoute()

// State
const mode = ref('login') // 'login' | 'register' | 'reset'
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const displayName = ref('')
const agreed = ref(false)
const remember = ref(false)

const showPassword = ref(false)
const showConfirm = ref(false)
const loading = ref(false)

const showUnverified = ref(false)
const resending = ref(false)
const fieldErr = ref({})
const emailEl = ref(null)

const copy = computed(() => ({
    login: { title: 'Welcome back', sub: 'Sign in to continue.', cta: 'Sign in' },
    register: { title: 'Create your account', sub: 'Sign up to get started.', cta: 'Create account' },
    reset: { title: 'Reset your password', sub: 'We’ll email you a reset link.', cta: 'Send reset link' }
}[mode.value]))

// Error messages
const ERR_TEXT = {
    'auth/invalid-email': 'Please enter a valid email.',
    'auth/missing-password': 'Enter your password.',
    'auth/weak-password': `Use at least ${MIN_PASSWORD_LENGTH} characters.`,
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/user-not-found': 'Incorrect email or password.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/invalid-credential': 'Incorrect email or password.',
    'auth/too-many-requests': 'Too many attempts. Try again later.',
    'auth/unverified-email': 'Please verify your email before signing in.',
}
const friendlyError = (code, fb) => ERR_TEXT[code] || fb || 'Something went wrong. Please try again.'

function resetErrors() {
    fieldErr.value = {}
    showUnverified.value = false
}

// Password strength
function scorePassword(pass) {
    let score = 0
    if (!pass) return 0
    if (pass.length >= 8) score++
    if (/[a-z]/.test(pass) || /[A-Z]/.test(pass)) score++
    if (/\d/.test(pass)) score++
    if (/[^A-Za-z0-9]/.test(pass)) score++
    return Math.max(0, Math.min(4, score))
}
const pwScore = computed(() => scorePassword(password.value))
const pwLabel = computed(() => ['Too short', 'Weak', 'Okay', 'Good', 'Strong'][pwScore.value])
const pwClass = computed(() => ['pw-weak', 'pw-weak', 'pw-ok', 'pw-good', 'pw-strong'][pwScore.value])
const pwWidth = computed(() => [0, 25, 50, 75, 100][pwScore.value] + '%')
const pwTextClass = computed(() => (['text-danger', 'text-danger', 'text-warning', 'text-success', 'text-success'][pwScore.value]))

function resetFormState() {
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    displayName.value = ''
    agreed.value = false
    remember.value = false
    showPassword.value = false
    showConfirm.value = false
    loading.value = false
    resending.value = false
    resetErrors()
}

async function switchMode(next) {
    mode.value = next
    resetFormState()
    await nextTick()
    emailEl.value?.focus()
}

function validate() {
    const errs = {}
    const clean = email.value.trim().toLowerCase()

    if (!clean) errs.email = 'Email is required.'
    else if (!EMAIL_RE.test(clean)) errs.email = 'Please enter a valid email.'

    if (mode.value !== 'reset' && !password.value) errs.password = 'Password is required.'
    if (mode.value === 'register') {
        if (!displayName.value.trim()) errs.displayName = 'Name is required.'
        if ((password.value || '').length < MIN_PASSWORD_LENGTH) errs.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`
        if (password.value !== confirmPassword.value) errs.confirmPassword = 'Passwords do not match.'
        if (!agreed.value) errs.agree = 'You must agree to the Terms.'
    }

    fieldErr.value = errs
    return Object.keys(errs).length ? null : clean
}

async function submit() {
    resetErrors()
    const cleanEmail = validate()
    if (!cleanEmail) return

    loading.value = true
    try {
        if (mode.value === 'login') {
            await signInWithEmail(cleanEmail, password.value, { remember: remember.value })
            toast.success('Welcome back!')
            const redirect = (route.query.redirect || '/').toString()
            router.replace(redirect)
        } else if (mode.value === 'register') {
            await signUpWithEmail(cleanEmail, password.value, (displayName.value || '').trim())
            toast.success('Account created! Check your email to verify.')
            await switchMode('login')
        } else {
            try {
                await resetPassword(cleanEmail)
            } catch (e) {
                if (e?.code !== 'auth/user-not-found') throw e
            }
            toast.info('If that email exists, a reset link was sent.')
            await switchMode('login')
        }
    } catch (e) {
        if (e?.code === 'auth/unverified-email') {
            showUnverified.value = true
        } else {
            toast.error(friendlyError(e.code, e.message))
        }
    } finally {
        loading.value = false
    }
}

// Resend verification if user has not verified after sign up
async function resendVerification() {
    if (resending.value) return
    resending.value = true
    try {
        const cleanEmail = (email.value || '').trim().toLowerCase()
        await resendVerificationEmail(cleanEmail, password.value)
        toast.success('Verification email resent. Please check your inbox.')
        showUnverified.value = false
    } catch (e) {
        toast.error(friendlyError(e.code, e.message))
    } finally {
        resending.value = false
    }
}

// Back-to-top button
const toTop = () => {
    if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
</script>

<template>
    <section class="auth-shell">
        <div class="container-xl">
            <div class="device-frame rounded-5 shadow-lg mx-auto">
                <div class="row g-0">
                    <!-- LEFT -->
                    <aside class="col-lg-5 brand-pane text-white">
                        <div class="brand-nav">
                            <router-link to="/" class="btn-ghost-light">
                                <i class="bi bi-arrow-left me-1"></i> Back home
                            </router-link>
                        </div>

                        <div class="brand-center text-center">
                            <div class="brand-header">
                                <svg class="brand-logo" viewBox="0 0 64 64" aria-hidden="true">
                                    <rect x="0" y="44" width="64" height="6" />
                                    <path d="M8 44 q2-10 6-16 q-2 8 2 16 Z" />
                                    <path d="M16 44 q2-12 8-20 q-3 10 1 20 Z" />
                                    <path d="M24 44 q3-14 10-24 q-4 12 0 24 Z" />
                                    <path d="M32 44 q2-12 8-20 q-3 10 0 20 Z" />
                                    <path d="M40 44 q3-14 10-24 q-4 12 0 24 Z" />
                                    <path d="M48 44 q2-10 6-16 q-2 8 2 16 Z" />
                                </svg>
                                <div class="brand-name">Touch Grass</div>
                            </div>

                            <div class="brand-divider"></div>

                            <h2 class="brand-title">{{ copy.title }}</h2>
                            <p class="brand-sub">{{ copy.sub }}</p>
                            <p class="brand-tag">Step outside for a minute—fresh air helps.</p>
                        </div>
                    </aside>

                    <!-- RIGHT -->
                    <main class="col-lg-7 form-pane d-flex">
                        <div class="form-wrap">
                            <form @submit.prevent="submit" class="form-stack" novalidate :key="mode">
                                <!-- Name (register only) -->
                                <div v-if="mode === 'register'" class="field-block">
                                    <label class="form-label" for="displayName">Name *</label>
                                    <div class="input-group input-group-lg has-validation">
                                        <span class="input-group-text"><i class="bi bi-person"></i></span>
                                        <input id="displayName" v-model.trim="displayName" type="text"
                                            :class="['form-control', 'tg-input', { 'is-invalid': fieldErr.displayName }]"
                                            placeholder="Your name" autocomplete="name" />
                                        <div class="invalid-feedback">{{ fieldErr.displayName }}</div>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="field-block">
                                    <label class="form-label" for="email">Email Address *</label>
                                    <div class="input-group input-group-lg has-validation">
                                        <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                                        <input id="email" ref="emailEl" v-model.trim="email" type="email"
                                            :class="['form-control', 'tg-input', { 'is-invalid': fieldErr.email }]"
                                            placeholder="you@example.com" autocomplete="username" />
                                        <div class="invalid-feedback">{{ fieldErr.email }}</div>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div v-if="mode !== 'reset'" class="field-block">
                                    <label class="form-label d-flex justify-content-between align-items-center"
                                        for="password">
                                        Password *
                                        <small v-if="mode === 'register' && password"
                                            :class="['fw-semibold', pwTextClass]">
                                            Strength: {{ pwLabel }}
                                        </small>
                                    </label>

                                    <div class="input-group input-group-lg has-validation">
                                        <span class="input-group-text"><i class="bi bi-lock"></i></span>
                                        <input id="password" :type="showPassword ? 'text' : 'password'"
                                            v-model="password"
                                            :class="['form-control', 'tg-input', { 'is-invalid': fieldErr.password }]"
                                            :autocomplete="mode === 'register' ? 'new-password' : 'current-password'"
                                            placeholder="Enter password" />
                                        <button class="btn btn-outline-secondary" type="button"
                                            @click="showPassword = !showPassword" :aria-pressed="showPassword"
                                            :aria-label="showPassword ? 'Hide password' : 'Show password'">
                                            <i :class="['bi', showPassword ? 'bi-eye-slash' : 'bi-eye']"></i>
                                        </button>
                                        <div class="invalid-feedback d-block">{{ fieldErr.password }}</div>
                                    </div>

                                    <!-- Password strength bar -->
                                    <div v-if="mode === 'register' && password" class="pw-meter mt-1"
                                        aria-live="polite">
                                        <div class="pw-bar" :class="pwClass" :style="{ width: pwWidth }"></div>
                                    </div>
                                </div>

                                <!-- Confirm password -->
                                <div v-if="mode === 'register'" class="field-block">
                                    <label class="form-label" for="confirm">Confirm Password *</label>
                                    <div class="input-group input-group-lg has-validation">
                                        <span class="input-group-text"><i class="bi bi-shield-lock"></i></span>
                                        <input id="confirm" :type="showConfirm ? 'text' : 'password'"
                                            v-model="confirmPassword"
                                            :class="['form-control', 'tg-input', { 'is-invalid': fieldErr.confirmPassword }]"
                                            placeholder="Re-enter password" autocomplete="new-password" />
                                        <button class="btn btn-outline-secondary" type="button"
                                            @click="showConfirm = !showConfirm" :aria-pressed="showConfirm"
                                            :aria-label="showConfirm ? 'Hide confirm password' : 'Show confirm password'">
                                            <i :class="['bi', showConfirm ? 'bi-eye-slash' : 'bi-eye']"></i>
                                        </button>
                                        <div class="invalid-feedback">{{ fieldErr.confirmPassword }}</div>
                                    </div>
                                </div>

                                <div v-if="mode === 'login'" class="field-inline">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="remember"
                                            v-model="remember" />
                                        <label class="form-check-label" for="remember">Remember me</label>
                                    </div>
                                    <button class="btn btn-link p-0 small link-deep" type="button"
                                        @click="switchMode('reset')">
                                        Forgot password?
                                    </button>
                                </div>

                                <!-- Terms and Privacy Policy -->
                                <div v-if="mode === 'register'" class="field-block">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="agree" v-model="agreed" />
                                        <label class="form-check-label" for="agree">
                                            I agree to the
                                            <a href="#" class="link-deep" data-bs-toggle="modal"
                                                data-bs-target="#termsModal">Terms of Service</a>
                                            and
                                            <a href="#" class="link-deep" data-bs-toggle="modal"
                                                data-bs-target="#privacyModal">Privacy Policy</a>.
                                        </label>
                                    </div>
                                    <div v-if="fieldErr.agree" class="text-danger small mt-1">{{ fieldErr.agree }}</div>
                                </div>

                                <!-- Unverified email panel -->
                                <div v-if="showUnverified"
                                    class="alert alert-warning d-flex justify-content-between align-items-center mt-1"
                                    role="alert">
                                    <span>Please verify your email before signing in.</span>
                                    <button class="btn btn-sm btn-outline-warning" type="button" :disabled="resending"
                                        @click="resendVerification">
                                        <span v-if="resending" class="spinner-border spinner-border-sm me-1"></span>
                                        Resend verification
                                    </button>
                                </div>

                                <!-- Submit -->
                                <button type="submit" class="btn btn-brand btn-lg w-100" :disabled="loading">
                                    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                                    {{ copy.cta }}
                                </button>

                                <!-- Mode switch links -->
                                <p v-if="mode === 'login'" class="text-center fs-6 mt-2">
                                    Don’t have an account?<br>
                                    <button class="btn btn-link p-0 link-deep" type="button"
                                        @click="switchMode('register')">Create an account</button>
                                </p>
                                <p v-else-if="mode === 'register'" class="text-center small mt-2">
                                    Already have an account?
                                    <button class="btn btn-link p-0 link-deep" type="button"
                                        @click="switchMode('login')">Sign in</button>
                                </p>
                                <p v-else class="text-center fs-6 mt-2">
                                    Remember your password?<br>
                                    <button class="btn btn-link p-0 link-deep" type="button"
                                        @click="switchMode('login')">Sign in</button>
                                </p>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </section>

    <!-- Terms of Service Modal -->
    <div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="termsTitle">Terms of Service</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body subtitle">
                    <h6>1. Overview</h6>
                    <p>These Terms govern your use of Touch Grass. By using the service, you agree to these Terms.</p>
                    <h6>2. Accounts</h6>
                    <p>You’re responsible for the security of your account and any activity under it.</p>
                    <h6>3. Acceptable Use</h6>
                    <p>No illegal activity, spam or abuse. We may suspend accounts that violate these rules.</p>
                    <h6>4. Liability</h6>
                    <p>Service is provided “As-Is.” To the extent permitted by law, we’re not liable for indirect
                        damages.</p>
                    <h6>5. Changes</h6>
                    <p>We may update these Terms. Continued use signifies acceptance of the updated terms.</p>
                </div>
            </div>
        </div>
    </div>


    <!-- Privacy Policy Modal -->
    <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="privacyTitle">Privacy Policy</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body subtitle">
                    <h6>What We Collect</h6>
                    <p>Account info (name, email), usage data and device info to improve the service.</p>
                    <h6>How We Use Data</h6>
                    <p>To provide features, maintain security and enhance performance and experience.</p>
                    <h6>Sharing</h6>
                    <p>No selling of personal data. Limited sharing with processors under strict agreements.</p>
                    <h6>Security & Retention</h6>
                    <p>We use reasonable safeguards and keep data only as long as needed.</p>
                    <h6>Your Rights</h6>
                    <p>Access, correct, delete or export your data where applicable by law.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Page */
.auth-shell {
    min-height: 100svh;
    display: grid;
    place-items: center;
    padding-block: clamp(16px, 4vw, 84px);
    background: #eef3ef;
}

.device-frame {
    --bs-border-radius-xxl: 28px;
    --bs-box-shadow-lg: 0 20px 50px rgba(33, 60, 38, .08);
    max-width: 1100px;
    border: 1px solid rgba(15, 23, 42, .14);
    background: #fff;
    overflow: hidden;
}


.device-frame>.row {
    min-height: clamp(580px, 80vh, 760px);
}

/* LEFT panel */
.brand-pane {
    position: relative;
    display: grid;
    place-items: center;
    background:
        radial-gradient(1100px 600px at 20% -10%, rgba(255, 255, 255, .18), transparent 60%),
        linear-gradient(135deg, #1b6d28 0%, #2f8a3e 50%, #66cc7a 115%);
    padding: 28px;
    border-radius: 28px 0 0 28px;
}

.brand-nav {
    position: absolute;
    top: 16px;
    left: 16px;
}

.btn-ghost-light {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, .7);
    padding: .45rem .7rem;
    border-radius: 999px;
    line-height: 1;
    text-decoration: none;
}

.btn-ghost-light:hover {
    background: rgba(255, 255, 255, .1);
    border-color: #fff;
    color: #fff;
}

.brand-center {
    width: min(560px, 92%);
    text-align: center;
}

.brand-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: .6rem;
}

.brand-logo {
    width: 56px;
    height: 56px;
    fill: #fff;
}

.brand-name {
    font-weight: 700;
    font-size: clamp(1.15rem, .9rem + 1vw, 1.6rem);
    letter-spacing: .2px;
}

.brand-divider {
    width: 160px;
    height: 1px;
    background: rgba(255, 255, 255, .45);
    margin: 1.1rem auto 1.6rem;
}

.brand-title {
    font-weight: 700;
    line-height: 1.12;
    margin: 30px 0 10px 0;
}

.brand-sub {
    margin: 0;
    opacity: .95;
    font-size: clamp(.98rem, .9rem + .3vw, 1.08rem);
    font-weight: 500;
}

.brand-tag {
    margin-top: 2rem;
    opacity: .95;
    font-size: .95rem;
    font-style: italic;
}

/* RIGHT panel */
.form-wrap {
    margin: auto;
    width: min(560px, 92%);
    padding: clamp(12px, 2vw, 28px) 0;
}

/* Form spacing */
.form-stack {
    display: grid;
    row-gap: 1.5rem;
}

.field-block {
    display: block;
}

.field-inline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .1rem;
}

/* Links */
.link-deep {
    color: #206D25;
}

.link-deep:hover {
    color: #1a5a1f;
    text-decoration: underline;
}

/* Inputs */
.input-group-lg .form-control {
    font-size: .95rem;
    padding: .70rem .9rem;
    border-radius: 12px;
}

.input-group-lg .input-group-text {
    padding: .70rem .8rem;
    border-radius: 12px 0 0 12px;
}

.input-group-lg .btn {
    padding: .70rem .75rem;
}

.tg-input:focus {
    border-color: rgba(32, 109, 37, .35);
    box-shadow: 0 0 0 .25rem rgba(32, 109, 37, .1);
}

/* Password meter */
.pw-meter {
    position: relative;
    height: 6px;
    background: #e8efe8;
    border-radius: 999px;
    overflow: hidden;
}

.pw-bar {
    height: 100%;
    transition: width .25s ease;
}

.pw-weak {
    background: #dc3545;
}

.pw-ok {
    background: #fd7e14;
}

.pw-good {
    background: #ffc107;
}

.pw-strong {
    background: #198754;
}

.btn-brand {
    --bs-btn-bg: #206D25;
    --bs-btn-border-color: #206D25;
    --bs-btn-hover-bg: #1a5a1f;
    --bs-btn-hover-border-color: #1a5a1f;
    --bs-btn-active-bg: #184f1b;
    --bs-btn-active-border-color: #184f1b;
    --bs-btn-disabled-bg: #206D25;
    --bs-btn-disabled-border-color: #206D25;
    color: #fff !important;
    border-radius: 12px;
    padding: .9rem 1rem;
}

@media (max-width: 992px) {
    .brand-pane {
        padding: 20px 16px 24px;
        border-radius: 28px 28px 0 0;
    }

    .brand-nav {
        top: 12px;
        left: 12px;
    }

    .brand-title {
        font-size: clamp(1.7rem, 1.2rem + 2.8vw, 2.2rem);
    }

    .form-wrap {
        width: min(620px, 94%);
        padding: 12px 0 22px;
    }

    .form-stack {
        row-gap: 1.25rem;
    }
}

@media (max-width: 576px) {
    .brand-logo {
        width: 48px;
        height: 48px;
    }

    .brand-name {
        font-size: clamp(1rem, .9rem + 2vw, 1.3rem);
    }

    .brand-title {
        font-size: clamp(1.5rem, 1rem + 5vw, 2rem);
    }

    .input-group-lg .form-control,
    .input-group-lg .input-group-text,
    .input-group-lg .btn {
        padding: .6rem .75rem;
        border-radius: 10px;
    }

    .btn-brand {
        border-radius: 10px;
    }
}
</style>
