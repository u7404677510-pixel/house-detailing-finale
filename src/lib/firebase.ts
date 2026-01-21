import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcPBC43FLYZvUawzqx3m-YltJBLZN9YTw",
  authDomain: "house-detailing.firebaseapp.com",
  projectId: "house-detailing",
  storageBucket: "house-detailing.firebasestorage.app",
  messagingSenderId: "425950150026",
  appId: "1:425950150026:web:7dd33851d73b5e7a069c73",
  measurementId: "G-KWTM05CKB9"
};

// Initialize Firebase (avoid reinitializing if already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
export const db = getFirestore(app);
