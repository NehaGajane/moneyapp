// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2ruxsZZyr1on1NYwN1FF9qS8rGbcvrs",
  authDomain: "money-mate-74467.firebaseapp.com",
  projectId: "money-mate-74467",
  storageBucket: "money-mate-74467.appspot.com",
  messagingSenderId: "666088603284",
  appId: "1:666088603284:web:2d35c6312afd4c2e363e81",
  measurementId: "G-ZHD64V5QVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};