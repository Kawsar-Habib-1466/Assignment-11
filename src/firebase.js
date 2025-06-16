// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyC49NfgeOBfTlw97gDpzhDsp2jlwn4bAf8",
    authDomain: "volunteer-management-6c338.firebaseapp.com",
    projectId: "volunteer-management-6c338",
    storageBucket: "volunteer-management-6c338.firebasestorage.app",
    messagingSenderId: "719156492167",
    appId: "1:719156492167:web:928f7585ffe81c35314522"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider };
