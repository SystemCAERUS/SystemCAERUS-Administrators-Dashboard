// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3PmifHVjunbxTecVv6mKLsbcqLuDct_8",
  authDomain: "caerus-chat.firebaseapp.com",
  projectId: "caerus-chat",
  storageBucket: "caerus-chat.appspot.com",
  messagingSenderId: "763257867412",
  appId: "1:763257867412:web:072d1224c3bc79940f7881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)