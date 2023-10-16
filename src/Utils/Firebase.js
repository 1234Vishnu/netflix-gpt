// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtYL0vikd5vP0Br1XsF0yGjMUBDikpBgA",
  authDomain: "netflixgpt-79bb7.firebaseapp.com",
  projectId: "netflixgpt-79bb7",
  storageBucket: "netflixgpt-79bb7.appspot.com",
  messagingSenderId: "847198288905",
  appId: "1:847198288905:web:a18946a8f3ab4b2584ccd8",
  measurementId: "G-6Z4M9EZEL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();

