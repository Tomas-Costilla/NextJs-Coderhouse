// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQw0mUBdvPpFID3oOmJRjOMTHYHezwhw",
  authDomain: "coder-next-ecommerce.firebaseapp.com",
  projectId: "coder-next-ecommerce",
  storageBucket: "coder-next-ecommerce.appspot.com",
  messagingSenderId: "363725098626",
  appId: "1:363725098626:web:d9e5311b341d4a0fdd2e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
