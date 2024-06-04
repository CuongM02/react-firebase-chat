import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-cae3c.firebaseapp.com",
  projectId: "reactchat-cae3c",
  storageBucket: "reactchat-cae3c.appspot.com",
  messagingSenderId: "684595632829",
  appId: "1:684595632829:web:651aeae7da997441e635d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()