// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_nVZSShaTD0ewNiVa_bvj32eQQiU4K04",
  authDomain: "bondsindia-75610.firebaseapp.com",
  projectId: "bondsindia-75610",
  storageBucket: "bondsindia-75610.appspot.com",
  messagingSenderId: "999661721334",
  appId: "1:999661721334:web:56097b3bfeae3190c7fed7",
  measurementId: "G-1PGSRLB0MH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
