// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1JRAuM7I61xJwsV1ww6ZZwxp3WdzfJxs",
  authDomain: "autosmith-tech.firebaseapp.com",
  projectId: "autosmith-tech",
  storageBucket: "autosmith-tech.firebasestorage.app",
  messagingSenderId: "585899556866",
  appId: "1:585899556866:web:38ead547a7361904a7e71b",
  measurementId: "G-B9EKEG37N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);