// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7BZZbUBG3ZbGGZQ2C4MHB2q3iet7Jxu0",
  authDomain: "prepwise-eaaa2.firebaseapp.com",
  projectId: "prepwise-eaaa2",
  storageBucket: "prepwise-eaaa2.firebasestorage.app",
  messagingSenderId: "523863057166",
  appId: "1:523863057166:web:144023030620e8cb6a6d5f",
  measurementId: "G-KVLKM8WD86"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);