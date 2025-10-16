// --- Firebase import ---
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

// --- Firebase setup ---
const firebaseConfig = {
    apiKey: "AIzaSyDvJe-P_cND8HtHXSy-2JiE4GTv0HjISVQ",
    authDomain: "touch-grass-77c7c.firebaseapp.com",
    projectId: "touch-grass-77c7c",
    storageBucket: "touch-grass-77c7c.firebasestorage.app",
    messagingSenderId: "274431894037",
    appId: "1:274431894037:web:51d11404b04f90fa63641c"
};

// Re-use existing app if it was already initialized somewhere else
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Simple page routes
const HOME_URL = location.origin + "/index.html";
const LOGIN_URL = location.origin + "/auth/login.html";

// Small helper: turn Firebase errors into friendly messages
function friendlyAuthMessage(error) {
    const code = (error && error.code) ? error.code : "";

    if (code === "auth/invalid-email" || code === "auth/missing-email") {
        return "Please enter a valid email address.";
    }
    if (code === "auth/wrong-password" || code === "auth/invalid-credential" || code === "auth/user-not-found") {
        return "Incorrect email or password.";
    }
    if (code === "auth/email-already-in-use") {
        return "This email is already registered. Try logging in instead.";
    }
    if (code === "auth/weak-password" || code === "auth/missing-password") {
        return "Password should be at least 8 characters.";
    }
    if (code === "auth/too-many-requests") {
        return "Too many attempts. Try again later.";
    }
    if (code === "auth/unverified-email") {
        return "Please verify your email before signing in.";
    }
    return "Something went wrong. Please try again."; // default
}

// Wait until the DOM is ready before reading elements
document.addEventListener("DOMContentLoaded", () => {
    // LOGIN
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (evt) => {
            evt.preventDefault();

            // HTML5 validation
            if (!loginForm.checkValidity()) {
                loginForm.classList.add("was-validated");
                return;
            }

            // Read inputs
            const emailInput = document.querySelector("#loginForm #email");
            const passwordInput = document.querySelector("#loginForm #password");
            const rememberInput = document.querySelector("#loginForm #remember");

            const email = emailInput ? emailInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value : "";
            const remember = !!(rememberInput && rememberInput.checked);

            try {
                // Keep session if "Remember me" is checked
                await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

                // Try to sign in
                const cred = await signInWithEmailAndPassword(auth, email, password);

                // Check for email verification
                if (!cred.user.emailVerified) {
                    try {
                        await sendEmailVerification(cred.user);
                    } catch (e) { }

                    await signOut(auth);
                    alert("Please verify your email first. We just sent you a verification link.");
                    return;
                }

                // Update "lastLoginAt" in Firestore
                try {
                    const userDoc = doc(db, "users", cred.user.uid);
                    await updateDoc(userDoc, {
                        lastLoginAt: serverTimestamp(),
                        updatedAt: serverTimestamp(),
                    });
                } catch (e) { }

                // Go homepage
                window.location.replace(HOME_URL);
            } catch (error) {
                alert(friendlyAuthMessage(error));
            }
        });
    }

    // SIGN UP
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", async (evt) => {
            evt.preventDefault();

            // Read inputs
            const firstNameInput = document.querySelector("#signupForm #firstName");
            const lastNameInput = document.querySelector("#signupForm #lastName");
            const emailInput = document.querySelector("#signupForm #email");
            const passInput = document.querySelector("#signupForm #password");

            const firstName = firstNameInput ? firstNameInput.value.trim() : "";
            const lastName = lastNameInput ? lastNameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const password = passInput ? passInput.value : "";

            checkMatch();

            // Run HTML5 validation after setting custom validity
            if (!signupForm.checkValidity()) {
                signupForm.classList.add("was-validated");
                return;
            }

            try {
                // Create user in Firebase Auth
                const cred = await createUserWithEmailAndPassword(auth, email, password);

                // Set display name in Auth (helps the navbar show the first name)
                const displayName = (firstName + " " + lastName).trim();
                if (displayName) {
                    await updateProfile(cred.user, { displayName: displayName });
                }

                // Create Firestore profile document
                const userDoc = doc(db, "users", cred.user.uid);
                await setDoc(userDoc, {
                    uid: cred.user.uid,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    displayName: displayName,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                });

                // Send verification email
                await sendEmailVerification(cred.user, { url: LOGIN_URL });

                // Do NOT keep them signed in until they verify
                await signOut(auth);
                alert("Account created! Please check your email to verify your account.");
                window.location.replace(LOGIN_URL);
            } catch (error) {
                alert(friendlyAuthMessage(error));
            }
        });
    }

    // FORGOT PASSWORD (RESET)
    const resetForm = document.getElementById("forgetPasswordForm");
    if (resetForm) {
        resetForm.addEventListener("submit", async (evt) => {
            evt.preventDefault();

            if (!resetForm.checkValidity()) {
                resetForm.classList.add("was-validated");
                return;
            }

            const emailInput = document.querySelector("#forgetPasswordForm #email");
            const email = emailInput ? emailInput.value.trim() : "";

            try {
                await sendPasswordResetEmail(auth, email);
                alert("A password reset link has been sent to your email.");
                window.location.replace(LOGIN_URL);
            } catch (error) {
                alert(friendlyAuthMessage(error));
            }
        });
    }

    // LOG OUT LINK
    const logoutLink = document.querySelector("[data-action='logout']");
    if (logoutLink) {
        logoutLink.addEventListener("click", async (evt) => {
            evt.preventDefault();
            try {
                await signOut(auth);
                alert("You have successfully logged out!");
            } finally {
                window.location.replace(HOME_URL);
            }
        });
    }

    // SHOW / HIDE PASSWORD
    const toggleButtons = document.querySelectorAll(".toggle-psw");
    toggleButtons.forEach((btn) => {
        const targetSelector = btn.getAttribute("data-target");
        let input = targetSelector ? document.querySelector(targetSelector) : null;

        // If data-target is missing, look for the input in the same .input-group
        if (!input) {
            const group = btn.closest(".input-group");
            if (group) input = group.querySelector("input");
        }
        if (!input) return; // nothing to toggle

        btn.addEventListener("click", () => {
            // If it's "password", switch to "text", otherwise switch back
            const shouldShow = input.type === "password";
            input.type = shouldShow ? "text" : "password";

            // Swap the icon classes if there is an <i> inside the button
            const icon = btn.querySelector("i");
            if (icon) {
                if (shouldShow) {
                    icon.classList.remove("bi-eye");
                    icon.classList.add("bi-eye-slash");
                } else {
                    icon.classList.remove("bi-eye-slash");
                    icon.classList.add("bi-eye");
                }
            }

            // Small accessibility touches
            btn.setAttribute("aria-label", shouldShow ? "Hide password" : "Show password");
            btn.title = shouldShow ? "Hide password" : "Show password";
        });
    });

    // PASSWORD STRENGTH (Sign Up page only)
    const signupPasswordInput = document.querySelector('#signupForm #password');
    const signupConfirmInput = document.querySelector('#signupForm #confirm');
    const pwBar = document.getElementById('pwBar');
    const pwHint = document.getElementById('pwHint');
    const matchHint = document.getElementById('matchHint');

    // Give the password a score from 0 to 4
    function scorePassword(pass) {
        let score = 0;

        if (pass.length >= 8) score++; // Rule 1: length at least 8
        if (/[a-z]/.test(pass) || /[A-Z]/.test(pass)) score++; // Rule 2: contains lowercase or uppercase letters
        if (/\d/.test(pass)) score++; // Rule 3: contains numbers
        if (/[^A-Za-z0-9]/.test(pass)) score++; // Rule 4: contains symbols

        if (score < 0) score = 0;
        if (score > 4) score = 4;
        return score;
    }

    // Update the meter bar + label
    function renderStrength(pass) {
        if (!pwBar || !pwHint) return;

        const score = scorePassword(pass);
        const widths = [0, 25, 50, 75, 100];
        const labels = ["Too short", "Weak", "Okay", "Good", "Strong"];
        const classes = ["pw-weak", "pw-weak", "pw-ok", "pw-good", "pw-strong"];

        // Reset bar classes, then set the new one
        pwBar.classList.remove("pw-weak", "pw-ok", "pw-good", "pw-strong");
        pwBar.classList.add(classes[score]);

        // Set width and label
        pwBar.style.width = widths[score] + "%";
        pwHint.textContent = labels[score];
    }

    // Check if the two passwords match and set HTML5 validation message
    function checkMatch() {
        if (!signupPasswordInput || !signupConfirmInput) return;

        const pass = signupPasswordInput.value;
        const conf = signupConfirmInput.value;

        // If both fields are empty → reset validation
        if (!pass && !conf) {
            signupConfirmInput.setCustomValidity("");
            return;
        }

        const same = pass === conf && pass.length > 0;
        signupConfirmInput.setCustomValidity(same ? "" : "Passwords must match.");
    }


    // Connect events
    if (signupPasswordInput) {
        signupPasswordInput.addEventListener('input', () => {
            renderStrength(signupPasswordInput.value);
            checkMatch();
        });
    }
    if (signupConfirmInput) {
        signupConfirmInput.addEventListener('input', checkMatch);
    }

});
