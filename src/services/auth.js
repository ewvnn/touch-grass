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
import {
  doc, setDoc, updateDoc, getDoc, serverTimestamp,
} from 'firebase/firestore'

// Share the first auth-state resolution across callers
let _authInit

export function waitForAuthInit() {
  if (_authInit) return _authInit
  _authInit = new Promise((resolve) => {
    const off = onAuthStateChanged(auth, (u) => { off(); resolve(u) })
  })
  return _authInit
}

export async function signInWithEmail(email, password, opts = {}) {
  const remember = !!opts.remember
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence)

  const cred = await signInWithEmailAndPassword(auth, email, password)

  if (!cred.user.emailVerified) {
    try { await signOut(auth) } catch { }
    const err = new Error('Please verify your email before signing in.')
    err.code = 'auth/unverified-email'
    throw err
  }

  const userRef = doc(db, 'users', cred.user.uid)
  try {
    const snap = await getDoc(userRef)
    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: cred.user.uid,
        email: email.toLowerCase(),
        displayName: cred.user.displayName || '',
        friendsList: [],
        favouritesList: [],
        availableDates: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      })
    } else {
      const data = snap.data() || {}
      const patch = {}
      if (!Array.isArray(data.friendsList)) patch.friendsList = []
      if (!Array.isArray(data.favouritesList)) patch.favouritesList = []
      if (!Array.isArray(data.availableDates)) patch.availableDates = []
      patch.lastLoginAt = serverTimestamp()
      patch.updatedAt = serverTimestamp()
      await updateDoc(userRef, patch)
    }
  } catch { }

  return cred
}

export async function signUpWithEmail(email, password, displayName = '') {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (displayName) {
    try { await updateProfile(cred.user, { displayName }) } catch { }
  }

  // create user doc in firestore
  try {
    await setDoc(doc(db, 'users', cred.user.uid), {
      uid: cred.user.uid,
      email: email.toLowerCase(),
      displayName,
      friendsList: [],
      favouritesList: [],
      availableDates: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
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