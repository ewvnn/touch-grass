import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    updateProfile,
    sendEmailVerification,
    signOut,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    updateDoc,
    serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

/* --- Firebase init --- */
const firebaseConfig = {
    apiKey: "AIzaSyDvJe-P_cND8HtHXSy-2JiE4GTv0HjISVQ",
    authDomain: "touch-grass-77c7c.firebaseapp.com",
    projectId: "touch-grass-77c7c",
    storageBucket: "touch-grass-77c7c.firebasestorage.app",
    messagingSenderId: "274431894037",
    appId: "1:274431894037:web:51d11404b04f90fa63641c"
};
// Reuse if already initialized (prevents “Firebase App named '[DEFAULT]' already exists”)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ROUTES
const HOME = `${location.origin}/index.html`;
const LOGIN = `${location.origin}/auth/login.html`;

function mapAuthError(err) {
    const code = err?.code || "";

    switch (code) {
        case "auth/invalid-email": // Wrong input
        case "auth/missing-email":
            return "Please enter a valid email address.";

        case "auth/wrong-password": // Wrong credentials 
        case "auth/invalid-credential":
        case "auth/user-not-found":
            return "Incorrect email or password.";

        case "auth/email-already-in-use": // Sign-up conflicts
            return "This email is already registered. Try logging in instead.";

        case "auth/weak-password": // Weak passwords
        case "auth/missing-password":
            return "Password should be at least 8 characters.";

        case "auth/too-many-requests": // Too many requests
            return "Too many attempts. Try again later.";

        case "auth/unverified-email": // Email verification issues
            return "Please verify your email before signing in.";

        default: // Catch-all
            console.warn("Unhandled Firebase Auth error:", err);
            return "Something went wrong. Please try again.";
    }
}

const $ = (sel) => document.querySelector(sel);
const val = (sel) => ($(sel)?.value || "").trim();

// LOGIN
const loginForm = $("#loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!loginForm.checkValidity()) { loginForm.classList.add("was-validated"); return; }

        const email = val("#loginForm #email");
        const password = val("#loginForm #password");
        const remember = $("#loginForm #remember");

        try {
            await setPersistence(auth, (remember && remember.checked) ? browserLocalPersistence : browserSessionPersistence);
            const cred = await signInWithEmailAndPassword(auth, email, password);

            // update last login in Firestore
            try {
                await updateDoc(doc(db, "users", cred.user.uid), {
                    lastLoginAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                });
            } catch (_) { } /* ignore if doc not found */

            window.location.replace(HOME);
        } catch (err) {
            console.error("Login error:", err);
            alert(mapAuthError(err));
        }
    });
}

// SIGNUP
const signupForm = $("#signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const pwd = $("#signupForm #password");
        const confirm = $("#signupForm #confirm");

        // Match passwords
        if (pwd && confirm) {
            confirm.setCustomValidity(confirm.value !== pwd.value ? "Passwords do not match" : "");
        }
        if (!signupForm.checkValidity()) { signupForm.classList.add("was-validated"); return; }

        const email = val("#signupForm #email");
        const first = val("#signupForm #firstName");
        const last = val("#signupForm #lastName");
        const password = pwd.value;
        const display = `${first} ${last}`.trim();

        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);

            // Set Auth displayName so navbar can read it without extra queries
            if (display) {
                await updateProfile(cred.user, { displayName: display });
            }

            // Create Firestore profile document
            await setDoc(doc(db, "users", cred.user.uid), {
                uid: cred.user.uid,
                email,                // stored for profile/admin purposes (not displayed in navbar)
                firstName: first || "",
                lastName: last || "",
                displayName: display, // full name
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });

            // Send verification email
            await sendEmailVerification(cred.user, { url: LOGIN });

            alert("Account created! Please check your email to verify your account.");
            window.location.replace(HOME);
        } catch (err) {
            console.error("Signup error:", err);
            alert(mapAuthError(err));
        }
    });
}

// FORGOT PASSWORD
const forgetPasswordForm = $("#forgetPasswordForm");
if (forgetPasswordForm) {
    forgetPasswordForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!forgetPasswordForm.checkValidity()) { forgetPasswordForm.classList.add("was-validated"); return; }

        const email = val("#forgetPasswordForm #email");
        try {
            await sendPasswordResetEmail(auth, email);
            alert("A password reset link has been sent to your email.");
            window.location.replace(LOGIN);
        } catch (err) {
            console.error("Reset error:", err);
            alert(mapAuthError(err));
        }
    });
}

// LOGOUT
document.querySelector("[data-action='logout']")?.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await signOut(auth);
        alert("You have successfully logged out!");
    } finally {
        window.location.replace(HOME);
    }
});

