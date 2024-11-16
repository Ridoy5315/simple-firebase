// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbv1FYFQuki3616KsIINouW0TxuYeMpyU",
  authDomain: "context-api-19a60.firebaseapp.com",
  projectId: "context-api-19a60",
  storageBucket: "context-api-19a60.firebasestorage.app",
  messagingSenderId: "764823045014",
  appId: "1:764823045014:web:a64b692ac93362298b13b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);