import { auth, db } from '@/lib/firebase'
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'

// Share the first auth-state resolution across callers
let _authInit
export function waitForAuthInit() {
  if (_authInit) return _authInit
  _authInit = new Promise((resolve) => {
    const off = onAuthStateChanged(auth, (u) => { off(); resolve(u) }) // u can be null
  })
  return _authInit
}

export async function signInWithEmail(email, password, opts = {}) {
  const remember = !!opts.remember
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence)

  const cred = await signInWithEmailAndPassword(auth, email, password)

  if (!cred.user.emailVerified) {
    try { await sendEmailVerification(cred.user) } catch { }
    try { await signOut(auth) } catch { }
    const err = new Error('Please verify your email before signing in.')
    err.code = 'auth/unverified-email'
    throw err
  }

  try {
    await updateDoc(doc(db, 'users', cred.user.uid), {
      lastLoginAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
  } catch { }
  return cred
}

export async function signUpWithEmail(email, password, displayName = '') {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (displayName) { try { await updateProfile(cred.user, { displayName }) } catch { } }
  try {
    await setDoc(doc(db, 'users', cred.user.uid), {
      uid: cred.user.uid, email, displayName,
      createdAt: serverTimestamp(), updatedAt: serverTimestamp(),
    })
  } catch { }
  try { await sendEmailVerification(cred.user) } catch { }
  try { await signOut(auth) } catch { }
  return cred
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email)
}

export async function resendVerificationEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  try { await sendEmailVerification(cred.user) } finally {
    try { await signOut(auth) } catch { }
  }
}

export async function signOutUser() {
  await signOut(auth)
}
