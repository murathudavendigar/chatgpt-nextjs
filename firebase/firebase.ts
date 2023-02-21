import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqGc70_eJr-unsFPa_oifuYWyJEa_42qA",
  authDomain: "chatgpt-nextjs.firebaseapp.com",
  projectId: "chatgpt-nextjs",
  storageBucket: "chatgpt-nextjs.appspot.com",
  messagingSenderId: "568148910235",
  appId: "1:568148910235:web:1f38bb5350b37a8ed6a63e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
