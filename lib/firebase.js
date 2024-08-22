// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEuDmNTOXO7hFn3nqTttcufU-MJlexOWg",
  authDomain: "portfolibles-3447e.firebaseapp.com",
  projectId: "portfolibles-3447e",
  storageBucket: "portfolibles-3447e.appspot.com",
  messagingSenderId: "756009574860",
  appId: "1:756009574860:web:4acf8b2d20f3c1f46a7d69",
  measurementId: "G-X8RLYKLVEQ"
};

// Initialize Firebase
const app = !getApps().lenght? initializeApp(firebaseConfig) :  getApp();
const db = getFirestore(app);
const storage=getStorage(app)

export { db,storage };