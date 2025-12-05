// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Ganti dari firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB080d3v6hRY0CWIDjN-b-USswsDsZDJ14",
  authDomain: "razka-portofolio.firebaseapp.com",
  projectId: "razka-portofolio",
  storageBucket: "razka-portofolio.firebasestorage.app",
  messagingSenderId: "73766171437",
  appId: "1:73766171437:web:6d0123d1aaaa2e9637d9a4",
  measurementId: "G-NMTHP6XLL7",
  databaseURL: "https://razka-portofolio-default-rtdb.firebaseio.com" // Tambahkan ini
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Realtime Database (pengganti Firestore)
export const db = getDatabase(app);