// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlNbW4RCOxbjIo2Kn-NR3rz5APtkRRJSU",
  authDomain: "ecommerce-coder-72c74.firebaseapp.com",
  projectId: "ecommerce-coder-72c74",
  storageBucket: "ecommerce-coder-72c74.appspot.com",
  messagingSenderId: "679721515379",
  appId: "1:679721515379:web:976d6aacaf3d1c770c6d06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
