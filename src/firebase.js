// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTv6hKrijO-Zl8O4eeoZdZMXZvkT7qA9E",
  authDomain: "app-coder-fortin.firebaseapp.com",
  projectId: "app-coder-fortin",
  storageBucket: "app-coder-fortin.appspot.com",
  messagingSenderId: "2684312522",
  appId: "1:2684312522:web:a743d9e17c3d46fb8acd33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)