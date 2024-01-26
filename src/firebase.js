// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBkVJAAoh7fHe0RvqiJe5U_pJU0Ae8ftns",
    authDomain: "makers-hackathon.firebaseapp.com",
    projectId: "makers-hackathon",
    storageBucket: "makers-hackathon.appspot.com",
    messagingSenderId: "1020189953659",
    appId: "1:1020189953659:web:efa0d16891eda273a6dcde"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;