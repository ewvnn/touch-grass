import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../lib/firebase'

export function waitForAuthInit() {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (u) => { unsub(); resolve(u) })
  })
}
export async function signUpWithEmail(email, password, displayName) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (displayName) await updateProfile(cred.user, { displayName })
  return cred.user
}
export async function signInWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  return cred.user
}
export function resetPassword(email) { return sendPasswordResetEmail(auth, email) }
export function signOutUser() { return signOut(auth) }
