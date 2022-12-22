// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUb8LE42Cu24XwRZeT_XCRgts_y9vmnxk",
  authDomain: "fir-photo-app-5da53.firebaseapp.com",
  projectId: "fir-photo-app-5da53",
  storageBucket: "fir-photo-app-5da53.appspot.com",
  messagingSenderId: "564939225763",
  appId: "1:564939225763:web:212dda8d8c3373e0449d16",
  measurementId: "G-HYZ91T28M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();