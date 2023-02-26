// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvmhDPcPsEaFq1SN4PqBuUCd9QZlS_P7E",
  authDomain: "app-camisetas-coder.firebaseapp.com",
  projectId: "app-camisetas-coder",
  storageBucket: "app-camisetas-coder.appspot.com",
  messagingSenderId: "610704901465",
  appId: "1:610704901465:web:e7d81fff631fb0f046b848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);