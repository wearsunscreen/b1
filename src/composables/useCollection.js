import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { is } from 'core-js/core/object'

export const useCollection = (collection) => {

  const error = ref(null)
  const isPending = ref(false)

  // add a new document
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true
    try {
      await projectFirestore.collection(collection).add(doc)
      isPending.value = false
    }
    catch(err) {
      console.log(err.message)
      error.value = 'could not send the message'
      isPending.value = false
    }
  }

  return { error, addDoc, isPending }

}