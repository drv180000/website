// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3wWAgf0O5J1Sv9koG8at7G_0TLyo-i7A",
  authDomain: "website-bfec4.firebaseapp.com",
  projectId: "website-bfec4",
  storageBucket: "website-bfec4.appspot.com",
  messagingSenderId: "438346589471",
  appId: "1:438346589471:web:b80b752580e9fb924c7c2a",
  measurementId: "G-G9R3E6JRVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const txtDB = getFirestore(app);