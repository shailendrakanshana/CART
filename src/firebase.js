// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo5DBlr_IRnEPVFmqVc4P8l3lQlTjn-g8",
  authDomain: "cart-f37bf.firebaseapp.com",
  projectId: "cart-f37bf",
  storageBucket: "cart-f37bf.appspot.com",
  messagingSenderId: "587140867159",
  appId: "1:587140867159:web:0ff8b5aca7eb269bd36f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};