// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyCmTVi_nXq3d8u0ud4JZsa3ku2KnQMo0I4",
  // authDomain: "project-task-330de.firebaseapp.com",
  // databaseURL: "https://project-task-330de-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "project-task-330de",
  // storageBucket: "project-task-330de.appspot.com",
  // messagingSenderId: "519553239431",
  // appId: "1:519553239431:web:2f96d78dc8e29420d92b22",
  // measurementId: "G-TWBLM4FVZG",
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMIAN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);