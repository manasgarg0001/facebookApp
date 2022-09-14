// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfaYjhf6cz1-V5n7GCpD20UfLpQTavpI",
  authDomain: "socialmediaapp-5470f.firebaseapp.com",
  projectId: "socialmediaapp-5470f",
  storageBucket: "socialmediaapp-5470f.appspot.com",
  messagingSenderId: "876977237474",
  appId: "1:876977237474:web:dd349937caf1e91d8a1dbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default firebaseConfig;
