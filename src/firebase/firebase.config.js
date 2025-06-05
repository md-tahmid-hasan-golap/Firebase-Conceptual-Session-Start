// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClHQVz4-GLPmJLvbhPVVMTgPxkNUUbTng",
  authDomain: "my-auth-prestice.firebaseapp.com",
  projectId: "my-auth-prestice",
  storageBucket: "my-auth-prestice.firebasestorage.app",
  messagingSenderId: "807056766726",
  appId: "1:807056766726:web:e3171e25c5a293f7e65087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

