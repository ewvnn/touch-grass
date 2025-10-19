import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

export const currentUser = ref(null)

let inited = false
export function initSessionListener() {
  if (inited) return
  inited = true
  onAuthStateChanged(auth, (u) => { currentUser.value = u })
}
