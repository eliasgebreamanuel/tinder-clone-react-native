// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwETkYXvlmJ7-N5yo_vSzpRwt_RO2t4lE",
  authDomain: "tinder-clone-react-nativ-6e657.firebaseapp.com",
  projectId: "tinder-clone-react-nativ-6e657",
  storageBucket: "tinder-clone-react-nativ-6e657.appspot.com",
  messagingSenderId: "216208750073",
  appId: "1:216208750073:web:b64880e35f865c9e10f928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};