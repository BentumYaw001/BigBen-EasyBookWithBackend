// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHDXKTOTVTeh2O-rgYpz4uTRmsfTH5P30",
  authDomain: "flowing-athlete-448613-r2.firebaseapp.com",
  projectId: "flowing-athlete-448613-r2",
  storageBucket: "flowing-athlete-448613-r2.firebasestorage.app",
  messagingSenderId: "727812836711",
  appId: "1:727812836711:web:48c3f6e80f8f28449673c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
