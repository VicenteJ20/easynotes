import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDbziMUCwqpAhmhF6oiclqlukgysjJ8EuQ',
  authDomain: 'easynotes-vite.firebaseapp.com',
  projectId: 'easynotes-vite',
  storageBucket: 'easynotes-vite.appspot.com',
  messagingSenderId: '888086594641',
  appId: '1:888086594641:web:0cada6dbe4a9cb25e2a470',
  measurementId: 'G-X9V27NFMXR'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
