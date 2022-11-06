// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4_CA_YSRUrKyXfHIlaNl6U8kOdBDTH0A",
  authDomain: "learn-firebase-fdf10.firebaseapp.com",
  projectId: "learn-firebase-fdf10",
  storageBucket: "learn-firebase-fdf10.appspot.com",
  messagingSenderId: "639146327648",
  appId: "1:639146327648:web:c1d8e946bba7e80980cd05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// init services
export const db = getFirestore(app);
export const auth = getAuth(app);
