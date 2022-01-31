// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyQSiE7x7RKW7j7w8RfkbQhC2JLep5M1g",
  authDomain: "safeee-f4116.firebaseapp.com",
  databaseURL: "https://safeee-f4116-default-rtdb.firebaseio.com/",
  projectId: "safeee-f4116",
  storageBucket: "safeee-f4116.appspot.com",
  messagingSenderId: "502777683702",
  appId: "1:502777683702:web:68acd437717f88dc2496d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);