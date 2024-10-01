import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = createUserWithEmailAndPassword(getAuth(), email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await updateProfile(getAuth().currentUser, { displayName: displayName })
    error.value = null
    isPending.value = false

    return res
  }
  catch (err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup

