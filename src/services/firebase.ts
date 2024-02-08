// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCALz8JyB23-wPHQMyW7vek34Y_DWJLU0k",
  authDomain: "folkan2023.firebaseapp.com",
  databaseURL:
    "https://folkan2023-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "folkan2023",
  storageBucket: "folkan2023.appspot.com",
  messagingSenderId: "999632374510",
  appId: "1:999632374510:web:3ad4e4a37045bd451441ff",
  measurementId: "G-SM5YGKEEB8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
signInAnonymously(auth)
  .then((event) => {
    console.log(event.user.uid);
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
