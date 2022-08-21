import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuDrRmT0gTBuzepI5dlbsDrXv5YSpG16I",
  authDomain: "gutsuni-32e09.firebaseapp.com",
  projectId: "gutsuni-32e09",
  storageBucket: "gutsuni-32e09.appspot.com",
  messagingSenderId: "334735459942",
  appId: "1:334735459942:web:7f0b3dc1ce1f3b2a7fcfa7",
  measurementId: "G-C9LWD2TLG7"
};

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);
const auth = getAuth();


export { db, auth };