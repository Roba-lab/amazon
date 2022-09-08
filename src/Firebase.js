// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANkPFRMSyZGYmLXsPBjrec2KPpGUGeBeM",
  authDomain: "app-a41d8.firebaseapp.com",
  databaseURL: "https://app-a41d8-default-rtdb.firebaseio.com",
  projectId: "app-a41d8",
  storageBucket: "app-a41d8.appspot.com",
  messagingSenderId: "97664414293",
  appId: "1:97664414293:web:6dc65e07012db216579adc",
  measurementId: "G-T8HSN19T2C",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
