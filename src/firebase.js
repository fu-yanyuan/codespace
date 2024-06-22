// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE-9Tnv7Lri0dqxO28B6xjTirAdqvwoVY",
  authDomain: "codespace-dev-40ea7.firebaseapp.com",
  projectId: "codespace-dev-40ea7",
  storageBucket: "codespace-dev-40ea7.appspot.com",
  messagingSenderId: "750531582882",
  appId: "1:750531582882:web:3012fd68df080ed66df0fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }